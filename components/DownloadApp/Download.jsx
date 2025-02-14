import Link from 'next/link'
import React from 'react'

const Download = ({pageData}) => {
  return (
    <div className='pt-[70px] pb-[100px]'>
      {/* {JSON.stringify(pageData)} */}
      <div className='container'>
        <div>
            <span className='text-[#212529] capitalize'>{pageData?.subHeading}</span>
            <h1 className='text-[#221638] mb-[8px] font-semibold text-[1.52em]'>{pageData?.heading}</h1>
            <div>
              <span id='liststyle' dangerouslySetInnerHTML={{__html: pageData?.content}}>
              </span>
            </div>
            <p>&nbsp;</p>
        </div>
      </div>
    </div>
  )
}

export default Download
