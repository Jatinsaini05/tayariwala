import React from 'react'



const MainContent = ({ pageData }) => {
    return (
        <div className='my-10'>
            <div className='container'>
                <span>
                    Master Learners
                </span>
                <div>
                    <span className='text-[1.52em] text-[#221638] font-semibold'>
                        {pageData?.heading}
                    </span>
                </div>
                <div>
                    <span dangerouslySetInnerHTML={{__html: pageData?.content}}></span>
                </div>
            </div>
        </div>
    )
}

export default MainContent
