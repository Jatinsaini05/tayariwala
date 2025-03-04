import React, { useState, useEffect } from "react";
import HerosectionRRBGRPD from "../../components/RRBGRPD/HerosectionRRBGRPD";
import Tab from "../../components/RRBGRPD/Tab";
import RRBGRPD from "../../components/RRBGRPD/RRBGRPD";
import Syllabus from "../../components/RRBGRPD/Syllabus";
import LiveOnlineClasses from "../../components/RRBGRPD/LiveOnlineClasses";
import OfflineClasses from "../../components/RRBGRPD/OfflineClasses";
import {
  getInitialData,
  getPageData,
  getProductData,
} from "../../service/apiFetch";
import TestSeries from "../../components/RRBGRPD/TestSeries";
import StudyPackage from "../../components/RRBGRPD/StudyPackage";
import Toptab from "../../components/RRBGRPD/TopTab";

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("course/rrbgrpd", {
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
  const initialData = await getInitialData("course/rrbgrpd", {
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

const Rrbgrpd = ({ pageData }) => {
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
      {/* {JSON.stringify(pageData)} */}
      <div>
        <Toptab />
      </div>
      <div>
        <HerosectionRRBGRPD pageData={pageData} />
      </div>
      <div>
        <Tab />
      </div>
      <div>
        <RRBGRPD pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
      <div>
        <Syllabus pageData={pageData?.contentBlock?.SYLLABUS} />
      </div>

      <div>
        <LiveOnlineClasses
          liveClassData={filterDataByCategory(categoryIds.LIVE_CLASS)}
        />
      </div>
      <div>
        <OfflineClasses
          offlineClassData={filterDataByCategory(categoryIds.OFFLINE_CLASS)}
        />
      </div>
      {/* <div>
        <TestSeries
          testSeriesData={filterDataByCategory(categoryIds.TEST)}
        />
      </div> */}
      {/* <div>
        <StudyPackage
          studyPackageData={filterDataByCategory(categoryIds.BOOKS)}
        />
      </div> */}
    </div>
  );
};

export default Rrbgrpd;
