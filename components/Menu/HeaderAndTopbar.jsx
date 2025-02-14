import React from 'react'
import Topbar from './Topbar'
import Header from './Header'
import FixedHeader from './FixedHeader'

const HeaderAndTopbar = ({ websiteData }) => {
  return (
    <div>
        <div>
        <Topbar websiteData={websiteData}/>
        <Header websiteData={websiteData} />
        <FixedHeader websiteData={websiteData}/>
        </div>
    </div>
  )
}

export default HeaderAndTopbar