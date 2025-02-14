import React, { useState, useEffect } from 'react'
import HerosectionRRB from '../../components/RRB-JE/HeroSectionRRB'
import Tab from '../../components/RRB-JE/Nav'
import ExamInfo from '../../components/RRB-JE/ExamInfo'
import Syllabus from '../../components/RRB-JE/Syllabus'
import TestSeries from '../../components/RRB-JE/TestSeries'
import { getPageData, getProductData, getInitialData } from "../../service/apiFetch";
import CoursesHeader from '../../components/RRB-JE/TopTab'

// export const getStaticProps = async () => {
//     try {
//       const response = await getPageData("course/rrb-je", {
//         contentBlock: "Object",
//       });
//       if (!response) {
//         console.log("pageData not found");
//       }

//       return {
//         props: {
//           pageData: response,
//         },
//       };
//     } catch (error) {
//       console.error(error);
//       return {
//         props: {
//           pageData: [],
//         },
//       };
//     }
//   };

export const getStaticProps = async () => {
  const initialData = await getInitialData("course/rrb-je", { contentBlock: "Object" });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
    },
  };
};


const Rrb = ({ pageData }) => {
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      const srcId = pageData?.pageData?.customParams?.srcId; // Extract srcId safely
      if (!srcId) {
        console.warn("srcId not available in pageData");
        return;
      }

      try {
        const params = {
          "populate": "stream",
          "course": srcId
        };
        const response = await getProductData(params);
        setAdditionalData(response);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    };

    fetchAdditionalData(); // Trigger the fetch function
  }, [pageData]);

  // Category IDs for filtering
  const categoryIds = {
    LIVE_CLASS: "5cf0cfc4e6636f4d815ccb0a",
    TEST: "5b47f7ef1e899567332d1d0a",
    BOOKS: "5b47f7ef1e899567332d1d0c",
    OFFLINE_CLASS: "3030707264637463636c7370",
  };

  // Function to filter data by category
  const filterDataByCategory = (categoryId) => {
    return additionalData?.filter((item) =>
      item.category === categoryId
    );
  };
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <div>
          <CoursesHeader />
        </div>
        <div>
          <HerosectionRRB pageData={pageData} />
        </div>
        <div>
          <Tab />
        </div>
        <div>
          <ExamInfo pageData={pageData?.contentBlock?.MAIN_CONTENT} />
        </div>
        <div>
          <Syllabus pageData={pageData?.contentBlock?.SYLLABUS} />
        </div>
        <div>
          <TestSeries testSeriesData={filterDataByCategory(categoryIds.TEST)} />
        </div>
      </div>
    </div>
  )
}

export default Rrb
