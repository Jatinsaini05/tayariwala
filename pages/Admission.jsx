import React from 'react'
// import { Lato } from '@next/font/google';
import WalkIn from '../components/Admissions/WalkIn';
import DemandDraft from '../components/Admissions/DemandDraft';
import OnlineAdmission from '../components/Admissions/OnlineAdmission';
import TopperTalk from '../components/TopperTalk';
import {getAdmissionPage} from "../service/apiFetch"
// const lato = Lato({
//     subsets: ['latin'],
//     weight: '400'
//   })
export const getStaticProps = async() =>{
    const response = await getAdmissionPage()
    console.log(getAdmissionPage)

}

const Admission = () => {
    return (
        <div>
            <div><WalkIn/></div>
            <div><DemandDraft/></div>
            <div><OnlineAdmission/></div>
            <div><TopperTalk/></div>
        </div >
    )
}

export default Admission