import React from 'react'
// import { Lato } from '@next/font/google';
import WalkIn from '../components/Admissions/WalkIn';
import DemandDraft from '../components/Admissions/DemandDraft';
import OnlineAdmission from '../components/Admissions/OnlineAdmission';
import TopperTalk from '../components/TopperTalk';
import {getPageData} from "../service/apiFetch"
// const lato = Lato({
//     subsets: ['latin'],
//     weight: '400'
//   })

export const getStaticProps = async () => {
    try {
      const res = await getPageData("admission", {
        contentBlock: "Object",
      });
      const pageData = res;
      return {
        props: {
          pageData,
        },
      };
    } catch (err) {
      console.log("Error", err);
      return {
        props: {
          pageData: [],
        },
      };
    }
  
    
  };
  
const Admission = (pageData) => {

    return (
        <div>
            {JSON.stringify(pageData)}
            <div><WalkIn/></div>
            <div><DemandDraft/></div>
            <div><OnlineAdmission/></div>
            <div><TopperTalk/></div>
        </div >
    )
}

export default Admission