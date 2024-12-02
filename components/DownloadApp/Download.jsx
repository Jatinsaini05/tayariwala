import Link from 'next/link'
import React from 'react'

const Download = () => {
  return (
    <div className='pt-[70px] pb-[100px]'>
      <div className='container'>
        <div>
            <span className='text-[#212529]'>Master Learners</span>
            <h1 className='text-[#221638] mb-[8px] font-semibold text-[1.52em]'>Mobile and Desktop Apps</h1>
            <p className='text-[#606060] mb-[15px]'><strong><br></br>Click on the below links to download the app</strong></p>
            <ul className='list-[circle] pl-[40px] font-semibold'>
                <li><Link className='text-[#ffa500]' href="#">Android Mobile App</Link><br/>&nbsp;</li>
                <li><Link className='text-[#ffa500]' href="#">Windows Desktop App (64-bit)</Link></li>
                <li><Link className='text-[#ffa500]' href="#">Windows Desktop App (32-bit)</Link><br/>&nbsp;</li>
                <li><Link className='text-[#ffa500]' href="#">macOS Desktop App</Link></li>
            </ul>
            <p className='mb-[15px]'>&nbsp;</p>
            <p className='mb-[15px]'>&nbsp;</p>
            <p className='mb-[15px]'>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
      </div>
    </div>
  )
}

export default Download
