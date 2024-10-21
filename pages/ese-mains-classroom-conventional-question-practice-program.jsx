import React from 'react'
import Cqpp from '../components/CQPP/Cqpp'
import Program from '../components/CQPP/ProgramPackages'
import TopperTalk from '../components/TopperTalk'
import TestSeriesSchedule from '../components/CQPP/TestSeriesSchedule'
import AdmissionProcess from '../components/CQPP/AdmissionProcess'

const CQPP = () => {
  return (
    <div>
      <div>
        <Cqpp/>
      </div>
      <div>
        <Program/>
      </div>
      <div>
        <TestSeriesSchedule/>
      </div>
      <div>
        <AdmissionProcess/>
      </div>
      <div className='bg-emerald-50'>
        <TopperTalk/>
      </div>
    </div>
  )
}
export default CQPP