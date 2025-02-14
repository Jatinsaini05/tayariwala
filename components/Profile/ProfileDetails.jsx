import React, { useState, useEffect } from 'react';
import { useStoreLogin } from '../../store/login';
import { getUserData } from '../../service/apiFetch';
import UserDetails from './UserDetails';

const ProfileDetails = () => {
  const authToken = useStoreLogin.getState().authToken;

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCourseData = async () => {
    const params = "populate=user,majorCourse,majorStream,mainBatch,insty,session,center,mainBatchProduct,educationStandard&populateMentor=true&select_majorCourse=valueAlias&select_mainStream=valuelAlias&select=majorCourse,majorStream,mainBatch,insty,session,user,productCategories,personalImg&select_user=username,email,firstName,mobile,srn,lastName"; 
    try {
      const response = await getUserData(params);
      if (response.error) {
        setError(response.error);
        console.error('Error fetching course data:', response.error);
        return;
      }
      setUserData(response); 
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    } 
  };

  useEffect(() => {
    if (authToken) {
      fetchCourseData(authToken);
    } else {
      setError('you are not logged in');
    }
  }, [authToken]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-16">
      <div className="container">
        <div className="bg-[#442e66] pt-12 pb-14 relative">
          <div className="md:absolute md:mx-0 md:mb-0 mb-10 lg:left-4 bottom-0 flex justify-center">
            <div className="p-5 bg-white">
              <img src={userData?.personalImg} className="w-52" alt="Profile" />
            </div>
          </div>
          <div className="text-white md:ml-80 md:mr-14">
            <div className="mb-5">
              <h1 className="text-3xl text-center capitalize md:text-start">
                {/* <pre>
                {JSON.stringify(userData, null, 2)}
                </pre> */}
                {userData?.user?.firstName} {userData?.user?.lastName}
              </h1>
            </div>
            <div className="grid text-center md:grid-cols-2 md:text-start md:gap-5">
              <div>
                <p className="my-2">
                  Email: <span>{userData?.user?.email}</span>
                </p>
                <p className="my-2">
                  UserName: <span>{userData?.user?.username}</span>
                </p>
                {/* <pre>

                {JSON.stringify(userData, null, 2)}
                </pre> */}
                <p className="my-2">
                  Mobile: <span>{userData?.user?.mobile}</span>
                </p>
                <p className="my-2">
                  Enrollment No.: <span>{userData?.user?.srn}</span>
                </p>
              </div>
              <div>
                <p className="my-2">
                  Course: <span>{userData?.majorCourse?.valueAlias}</span>
                </p>
                <p className="my-2">
                  Stream: <span>{userData?.majorStream?.valueAlias}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserDetails user={userData}/>
    </div>
  );
};

export default ProfileDetails;