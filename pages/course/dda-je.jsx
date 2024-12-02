import React from 'react'
import TestSeries from '../../components/DDA-JE/TestSeries'
import Tab from '../../components/DDA-JE/Tab'
import HerosectionDDA from '../../components/DDA-JE/HeroSectionDDA'
import ExamInfo from '../../components/DDA-JE/ExamInfo'
import Syllabus from '../../components/DDA-JE/Syllabus'
import { getPageData } from "../../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const response = await getPageData("course/dda-je", {
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

const dda = ({pageData}) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
        <div>
            <HerosectionDDA/>
        </div>
        <div>
            <Tab/>
        </div>
        <div>
            <ExamInfo pageData = {pageData?.contentBlock?.MAIN_CONTENT}/>
        </div>
        <div>
            <Syllabus pageData = {pageData?.contentBlock?.SYLLABUS}/>
        </div>
      <div>
        <TestSeries/>
      </div>
    </div>
  )
}

export default dda
