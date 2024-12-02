import React from 'react'
import Link from 'next/link'

const CoursesOffered = () => {
    return (
        <div className='container'>
            <div className='mb-[100px]' id="batch">
                <h2 className='sm:text-[40px] text-[35px] text-customFC6200'>Courses we offer</h2>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-3 xl:gap-2.5'>
                    <div className='p-[10px] border rounded-2xl border-black shadow-lg shadow-black'>
                        <div>
                            <img src="/images/Classroom-bro.svg" />
                        </div>
                        <div>
                            <h4 className='text-customFC6200'>
                                SSC JE 2025 Regular Program
                            </h4>
                            <p className='leading-7 mt-3 text-[#606060]'>Join our SSC-JE Offline Course today and take a significant step
                                towards achieving your engineering career goals.</p>
                            <div className='mt-3'>
                                <span className='text-[#606060] line-through text-base'>₹ 35400</span>
                                <span className='text-customFC6200 text-[26px] font-semibold'>₹ 30000</span>
                            </div>
                            <div className='flex gap-10 mt-3'>
                                <button className='bg-custom241737 border rounded border-[#007bff] hover:border-customFC6200 text-white py-[6px] px-3'>
                                    More Info
                                </button >
                                <Link href="#" className='bg-customFC6200 text-white border rounded border-[#007bff] hover:border-opacity-0 py-[9px] px-3'>Buy Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoursesOffered