import React from "react";
import HerosectionSSC from "../../components/SSC/HerosectionSSC";
import Tab from "../../components/SSC/Tab";
import SSC from "../../components/SSC/SSC-JE";
import Syllabus from "../../components/SSC/Syllabus";
import LiveOnlineClasses from "../../components/SSC/LiveOnlineClasses";
import OfflineClasses from "../../components/SSC/OfflineClasses";
import { getPageData } from "../../service/apiFetch";
import TestSeries from "../../components/SSC/TestSeries";
import StudyPackage from "../../components/SSC/StudyPackage";


export const getStaticProps = async () => {
  try {
    const response = await getPageData("course/ssc-je", {
      contentBlock: "Object",
    });
    if (!response) {
      console.log("pageData not found");
    }

    return {
      props: {
        pageData: response,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

const Ssc = ({ pageData }) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <HerosectionSSC pageData={pageData} />
      </div>
      <div>
        <Tab pageData={pageData.contentBlock?.TAB} />
      </div>
      <div>
        <SSC pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
      <div>
        <Syllabus pageData={pageData?.contentBlock?.SYLLABUS} />
      </div>
      <div>
        <LiveOnlineClasses pageData={pageData?.contentBlock} />
      </div>
      <div>
        <OfflineClasses pageData={pageData?.contentBlock} />
      </div>
      <div>
        <TestSeries pageData={pageData?.contentBlock} />
      </div>
      <div>
        <StudyPackage pageData={pageData?.contentBlock} />
      </div>
    </div>
  );
};

export default Ssc;