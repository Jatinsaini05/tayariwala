import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = ({pageData}) => {
    return (
        <div className='container py-[50px]'>
            {/* {JSON.stringify(pageData)} */}
            <h2 className='sm:text-[40px] mb-2 text-[35px] text-customFC6200'>{pageData?.heading}</h2>
            <div className='grid py-[40px] grid-cols-1 sm:gap-14 gap-8 xl:grid-cols-3 sm:grid-cols-2'>
                {pageData?.advanceData?.data?.map((item, index) => (
                <div key={index} className='py-[30px] px-[20px] h-[392px] bg-[#f3f3f366] rounded-md shadow-lg'>
                    <FaQuoteLeft className='text-[#504ac2]' />
                    <div className='text-[22px] mt-4 flex gap-3 font-semibold text-[#4d4949]'>
                        <div className='w-[50px] rounded-full overflow-hidden border border-[#504ac2] bg-white p-1'><img src={item?.image} className='rounded-full'></img></div>
                        <div>{item?.studentName}</div>
                    </div>
                    <div className='text-[#494545] text-lg mt-4'>
                        <p>{item?.message}</p>
                    </div>
                    <div className='flex justify-end'>

                        <FaQuoteRight className='text-[#504ac2] mt-4' />
                    </div>
                </div>
                ))}
                {/* <div className='py-[30px] px-[20px] h-[392px] bg-[#f3f3f366] rounded-md shadow-lg'>
                    <FaQuoteLeft className='text-[#504ac2]' />
                    <div className='text-[22px] mt-4 flex gap-3 font-semibold text-[#4d4949]'>
                        <div className='w-[50px] rounded-full overflow-hidden border border-[#504ac2] bg-white p-1'><img src="/images/bus.png" className='rounded-full'></img></div>
                        <div>Shivam</div>
                    </div>
                    <p className='text-[#494545] text-lg mt-4'>

                        Requirements of the exam is different, Exam conducting
                        authorities expects you to be thorough with
                        complete syllabus and it is possible only under the tutelage
                        of
                        esteemed faculty of Master learners.

                    </p>
                    <div className='flex justify-end'>

                        <FaQuoteRight className='text-[#504ac2] mt-4' />
                    </div>
                </div>
                <div className='py-[30px] px-[20px] h-[392px] bg-[#f3f3f366] rounded-md shadow-lg'>
                    <FaQuoteLeft className='text-[#504ac2]' />
                    <div className='text-[22px] mt-4 flex gap-3 font-semibold text-[#4d4949]'>
                        <div className='w-[50px] rounded-full overflow-hidden border border-[#504ac2] bg-white p-1'><img src="/images/bus.png" className='rounded-full'></img></div>
                        <div>Anup Kumar Verma</div>
                    </div>
                    <p className='text-[#494545] text-lg mt-4'>

                        When you are aspiring for a national level exam, guidance
                        mechanism you adopt plays a pivotal role in
                        your achievement. I relied completely on Master Learners
                        content
                        and succeeded in this exam and achieved
                        the department of my choice.

                    </p>
                    <div className='flex justify-end'>

                        <FaQuoteRight className='text-[#504ac2] mt-4' />
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Testimonial
