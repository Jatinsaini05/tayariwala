import React from 'react'
import AboutGenius from '../../components/GeniusBatch/AboutGenius'
// import { Lato } from '@next/font/google';
import AdmissionSection from '../../components/GeniusBatch/AdmissionSection';
import Tables from '../../components/GeniusBatch/Tables';
import TopperTalk from '../../components/TopperTalk';



const GeniusBatch = () => {
    return (
        <div>
            <div>
                <AboutGenius />
            </div>
            <div>
                <AdmissionSection />
            </div>
            <div>
                <Tables />
            </div>
            <div>
                <TopperTalk />
            </div>

        </div>
    )
}
export default GeniusBatch