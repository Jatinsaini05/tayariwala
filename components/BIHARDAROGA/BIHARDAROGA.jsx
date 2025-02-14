import React from 'react'
import Link from 'next/link'

const BIHARDAROGA = ( {pageData} ) => {
    return (
        <div className='container mb-32'>
            <section id="exam-info">
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                    <div className=''>
                        <h1 className='sm:text-[40px] text-[35px] text-[#221638]'>{pageData?.heading}</h1>
                        <div dangerouslySetInnerHTML={{__html: pageData?.content}}></div>
                            {pageData?.advanceData?.data?.map((item, index) => (
                              <div key={index} className='my-7'> 
                              <div id={item?.title}>
                                <div dangerouslySetInnerHTML={{__html: item?.desci}} className='overflow-y-auto'>
                                </div>
                              </div>
                              </div>  
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BIHARDAROGA