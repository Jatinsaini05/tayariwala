import React from 'react'
import Link from 'next/link'

const TestSeries = () => {
    return (
        <div className='container'>
            <div className='px-2 mt-32'>

                <h3 className='text-[#221638] text-[28px]' id="test-series">Online Test Series</h3>
                <div className='mt-2 mb-32'>
                    <div className='flex flex-wrap sm:flex-nowrap sm:justify-between justify-center gap-4 sm:gap-0 '>
                        <div className='border rounded px-3 pt-3 py-6 w-max'>
                            <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
                                <div className="relative">
                                    <Link href="#">
                                        <img src="/images/SSCJE.jpg" alt="image" className="w-[380px]"></img>
                                    </Link>
                                    <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                        <span className='line-through text-[13px] font-semibold'>
                                            ₹ 1500
                                        </span>
                                        <span className='text-white text-xl font-semibold ml-1'>
                                            ₹ 1000
                                        </span>
                                    </span>
                                </div>
                                <div className='p-8'>
                                    <div>
                                        <p className='text-[#212529] mb-4'>Civil Engineering</p>
                                        <p className='text-[#221638] md:text-[24px] text-[20px] font-semibold hover:text-customFC6200'><Link href="#">RRB-JE 2024 CBT-01 Online Test Series</Link></p>

                                        <p className='text-[#606060] pt-5 md:text-base text-sm leading-6'>Prepare for the Railway Recruitment Board Junior Engineer (RRB-JE) exam with our expertly designed Online Test Series. Our test series offers a thorough and strategic approach to master the exam</p>

                                    </div>
                                    <div className='py-8 flex justify-between text-[#007bff]'>
                                        <p>Start Date : 11 Aug, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TestSeries
