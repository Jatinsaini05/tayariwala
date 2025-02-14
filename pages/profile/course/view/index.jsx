import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Detail from '../../../../components/Profile/DetailCourse/Detail';
import { getSubjectWiseData, getUserAccess } from '../../../../service/apiFetch';

const GetUri = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [accessData, setAccessData] = useState(null);
  const [subjectData, setSubjectData] = useState(null);
  const fetchAccess = async () => {
    try {
      const params = router.query.p;
      if (!params) return;

      const response = await getUserAccess(params);
      if (response.error) {
        setError(response.error);
      } else {
        setAccessData(response);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching access data:', error);
    }
  };

  const fetchSubjectWiseData = async (curriculumIds) => {
    if (!curriculumIds) return;
    if (curriculumIds?.length) {

      const response = await getSubjectWiseData({
        curriculums: curriculumIds
      });
      if (response.error) {
        setError(response.error);
      } else {
        setSubjectData(response);
      }
    }


  };
  useEffect(() => {
    fetchAccess();
  }, [router.query.p]); 

  useEffect(() => {
    if (accessData?.sourceId) {
      const curriculumIds = accessData.sourceId.join(',');
      fetchSubjectWiseData(curriculumIds);
    }
  }, [accessData]);

  return (
    <div>
      <Detail subjectData={subjectData} data={accessData}/>
    </div>
  );
};

export default GetUri;
