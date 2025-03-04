import React, { useState, useEffect } from "react";
import HerosectionJDLCCE from "../../components/JDLCCE/HeroSectionJDLCCE";
import Tab from "../../components/JDLCCE/Tab";
import ExamInfo from "../../components/JDLCCE/ExamInfo";
import Syllabus from "../../components/JDLCCE/Syllabus";
import LiveClasses from "../../components/JDLCCE/LiveClasses";
import {
  getInitialData,
  getPageData,
  getProductData,
} from "../../service/apiFetch";
import CoursesHeader from "../../components/JDLCCE/TopTab";
// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("course/jdlcce-je", {
//       contentBlock: "Object",
//     });
//     if (!response) {
//       console.log("pageData not found");
//     }

//     return {
//       props: {
//         pageData: response,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         pageData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  const initialData = await getInitialData("course/jdlcce-je", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      url: initialData?.url || "",
    },
  };
};

const jdlcce = ({ pageData }) => {
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
          populate: "stream",
          course: srcId,
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
    return additionalData?.filter((item) => item.category === categoryId);
  };

  return (
    <div>
      <div>
        <CoursesHeader />
      </div>
      <div>
        <HerosectionJDLCCE pageData={pageData} />
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
        <LiveClasses
          liveClassData={filterDataByCategory(categoryIds.LIVE_CLASS)}
        />
      </div>
    </div>
  );
};

export default jdlcce;
