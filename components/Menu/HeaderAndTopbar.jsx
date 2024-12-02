import React from 'react'
import Topbar from './Topbar'
import Header from './Header'
import FixedHeader from './FixedHeader'

const HeaderAndTopbar = () => {
  return (
    <div>
        <div>
        <Topbar />
        <Header />
        <FixedHeader/>
        </div>
    </div>
  )
}

export default HeaderAndTopbar