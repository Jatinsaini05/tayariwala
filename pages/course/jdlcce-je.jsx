import React from 'react'
import HerosectionJDLCCE from '../../components/JDLCCE/HeroSectionJDLCCE'
import Tab from '../../components/JDLCCE/Tab'
import ExamInfo from '../../components/JDLCCE/ExamInfo'
import Syllabus from '../../components/JDLCCE/Syllabus'
import LiveClasses from '../../components/JDLCCE/LiveClasses'
import { getPageData } from "../../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const response = await getPageData("course/jdlcce-je", {
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

const jdlcce = ({pageData}) => {
  return (
    <div>
        <div>
            <HerosectionJDLCCE/>
        </div>
        <div>
            <Tab/>
        </div>
        <div>
            <ExamInfo pageData={pageData?.contentBlock?.MAIN_CONTENT}/>
        </div>
        <div>
          <Syllabus pageData={pageData?.contentBlock?.SYLLABUS}/>
        </div>
        <div>
          <LiveClasses/>
        </div>
      
    </div>
  )
}

export default jdlcce
