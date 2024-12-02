import React from 'react'
import HerosectionRRB from '../../components/RRB-JE/HeroSectionRRB'
import Tab from '../../components/RRB-JE/Nav'
import ExamInfo from '../../components/RRB-JE/ExamInfo'
import Syllabus from '../../components/RRB-JE/Syllabus'
import TestSeries from '../../components/RRB-JE/TestSeries'
import { getPageData } from "../../service/apiFetch";

export const getStaticProps = async () => {
    try {
      const response = await getPageData("course/rrb-je", {
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

const Rrb = ({pageData}) => {
    return (
        <div>
            {/* {JSON.stringify(pageData)} */}
            <div>
                <div>
                    <HerosectionRRB />
                </div>
                <div>
                    <Tab />
                </div>
                <div>
                    <ExamInfo pageData={pageData?.contentBlock?.MAIN_CONTENT}/>
                </div>
                <div>
                    <Syllabus pageData={pageData?.contentBlock?.SYLLABUS}/>
                </div>
                <div>
                    <TestSeries/>
                </div>
            </div>
        </div>
    )
}

export default Rrb
