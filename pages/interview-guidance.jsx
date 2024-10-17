import React from 'react'
import InterviewGuidance from '../components/InterviewGuidance/InterviewGuidance'
import TopperTalk from '../components/TopperTalk'
import Features from '../components/InterviewGuidance/Features'
import ProgramPackages from '../components/InterviewGuidance/ProgramPackages'
import FeeStructureIg from '../components/InterviewGuidance/FeeStructureIg'
import OnlineinterviewGuid from '../components/InterviewGuidance/OnlineinterviewGuid'
import HowtoEnroll from '../components/InterviewGuidance/HowtoEnroll'

const Interviewguidance = () => {
  return (
    <div>
      <div>
        <InterviewGuidance />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <ProgramPackages />
      </div>
      <div>
        <FeeStructureIg />
      </div>
      <div>
        <OnlineinterviewGuid />
      </div>
      <div>
        <HowtoEnroll/>
      </div>
      <div>
        <TopperTalk />
      </div>
    </div>
  )
}

export default Interviewguidance
