import React from 'react'
import Link from 'next/link'

const SSC = ( {pageData} ) => {
    return (
        <div className='container mb-32'>
            <section id="exam-info">
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                    <div className='lg:w-[80%]'>
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
                    <div className='lg:w-full'>
                        <ul className='border shadow-xl'>
                            <li className='border-b p-4'><Link href="#Eligibility" className='hover:text-customFC6200 text-[#221638] text-base'>Eligibility</Link></li>
                            <li className='border-b p-4'><Link href="#SSC JE 2024 Eligibility" className='hover:text-customFC6200 text-[#221638] text-base'>SSC JE 2024 Eligibility</Link></li>
                            <li className='border-b p-4'><Link href="#Notification" className='hover:text-customFC6200 text-[#221638] text-base'>Notification</Link></li>
                            <li className='border-b p-4'><Link href="#SSC JE 2024 Vacancies" className='hover:text-customFC6200 text-[#221638] text-base'>SSC JE 2024 Vacancies</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SSC