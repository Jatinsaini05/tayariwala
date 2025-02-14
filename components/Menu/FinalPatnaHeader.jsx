import React from 'react'
import PatnaHeader from './PatnaHeader'
import FixedPatnaHeader from './FixedPatnaHeader'

const FinalPatnaHeader = ({ websiteData }) => {
  return (
    <div>
        <div>
        <PatnaHeader websiteData={websiteData}/>
        <FixedPatnaHeader websiteData={websiteData}/>
        </div>
    </div>
  )
}

export default FinalPatnaHeader