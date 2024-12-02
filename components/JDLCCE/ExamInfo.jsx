import React from 'react'
import Link from 'next/link'

const ExamInfo = ({ pageData }) => {
    return (
        <div className='container mb-24'>
            {/* {JSON.stringify(pageData)} */}
            <section id="exam-info">
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: pageData?.content }}></div>
                        {pageData?.advanceData?.data?.map((item, index) => (
                            <div className='my-6'>
                                {/* <div>{item?.title}</div> */}
                                <div id={item?.title}>
                                <div className='overflow-y-auto' dangerouslySetInnerHTML={{ __html: item?.desci }} /></div>
                                </div>
                        ))}
                    </div>
                
                {/* <div className='text-[#606060]'>
                    <h1 className='text-xl text-[#221638]'><b>JDLCCE- JSSC JE 2023 (Jharkhand Staff Selection Commission - Juniour Engineer)</b></h1>
                    <div className='mt-16'><p className='leading-7' id="About JDLCC JE - JSSC JE">Jharkhand Staff Selection commission has announced a vacancy called JSSC JE Notification 2023. The vacancy is huge as number of posts proposed to be filled from the same is 1268. It will open doors for various departments in Jharkhand State Government. This notification invites application from the diploma applicants although it is also mentioned that Students possessing higher technical qualifications are also allowed entails B. Tech students are also eligible.</p>
                    </div>
                    <p className='my-16'><strong>Eligibility Criteria</strong></p>
                    <div className='overflow-x-auto' id="Eligibility Criteria">
                        <table className='w-full sm:text-[18.6px]'>
                            <tbody>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Exam Name
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Jharkhand Staff Selection Commission Junior Engineer (JSSC- JE).
                                    </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Exam Conducting Body
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Jharkhand Staff Selection Commission Board (JSSB)                                        </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Examination level
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        State level
                                    </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Application mode
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Online                                        </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Age Limit for SSC JE
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        <p className='mb-4'>Upper age limit: 35 years</p>
                                        <p>(Upper age limit varies as per the post and department)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Educational Qualification
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Minimum Qualification is Diploma in Civil Engineering although higher education is also eligible.                                    </td>
                                </tr>
                                <tr>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        Official Website
                                    </td>
                                    <td className='sm:w-1/2 px-4 py-4 border border-black'>
                                        <Link href="#" className='text-[#0563c1] font-semibold'>https://wwww.jssc.nic.in/</Link>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <p className='text-[20px] mt-8'><strong>JDLCCE-JE 2023 Exam Pattern </strong></p>
                    <p className='text-[18.6px] mt-4'>There are two papers which will be conducted in this exam and the pattern is as follows</p>
                    <div className='mt-12' id="JDLCCE-JE Exam Pattern">
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <td className='p-4 border border-black sm:w-1/2 font-semibold'>
                                        Category of Paper
                                    </td>
                                    <td className='p-4 border border-black sm:w-1/2 font-semibold'>
                                        Details
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-4 border border-black sm:w-1/2 font-semibold'>
                                        Paper-1
                                    </td>
                                    <td className='p-4 border border-black sm:w-1/2'>
                                        <p className='font-semibold mb-4'>120 Questions (3 Mark each)</p>
                                        <p className='mb-4'>General Engineering - 80</p>
                                        <p>General Knowledge - 40</p>
                                        <p className='font-semibold mt-4'>Duration: 2 Hours</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-4 border border-black sm:w-1/2 font-semibold'>
                                        Paper-2
                                    </td>
                                    <td className='p-4 border border-black sm:w-1/2 font-semibold'>
                                        <p>&nbsp;</p>
                                        <p className='my-4'>120 Questions - 3 Marks each</p>
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <p className='mt-20'>Computer based Test (CBT) will be conducted in one step with 2 question papers (Objective Type). There will be negative marking of 1 Mark each for every question.</p>
                    <p className='mt-14 text-[22px]'><strong>Important Dates for JSSC JE</strong></p>
                    <div id="Important Dates for JSSC JE">
                        <table className='mt-14 w-full text-[18.6px]'>
                            <thead>
                                <tr>
                                    <td className='font-semibold p-4 border border-black'>
                                        S. No
                                    </td>
                                    <td className='font-semibold p-4 border border-black'>
                                        Particulars
                                    </td>
                                    <td className='font-semibold p-4 border border-black'>
                                        Date
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-4 border border-black'>1</td>
                                    <td className='p-4 border border-black'>Online Registration Date (Mentioned in the Notification)</td>
                                    <td className='p-4 border border-black'>25th May, 2023 To 24th June, 2023</td>
                                </tr>
                                <tr>
                                    <td className='p-4 border border-black'>2</td>
                                    <td className='p-4 border border-black'>Online Registration Date
                                        (A separate notification issued as corrigendum)</td>
                                    <td className='p-4 border border-black'>7th June, 2023 To 06th July, 2023</td>
                                </tr>
                                <tr>
                                    <td className='p-4 border border-black'>3</td>
                                    <td className='p-4 border border-black'>Last Date of Fees Submission</td>
                                    <td className='p-4 border border-black'>8th July, 2023</td>
                                </tr>
                                <tr>
                                    <td className='p-4 border border-black'>4</td>
                                    <td className='p-4 border border-black'>
                                        Admit Card Date</td>
                                    <td className='p-4 border border-black'>
                                        To be Notified later</td>
                                </tr>
                                <tr>
                                    <td className='p-4 border border-black'>5</td>
                                    <td className='p-4 border border-black'>Computer based Test Date</td>
                                    <td className='p-4 border border-black'>
                                        To be Notified later</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div> */}
                <div className='lg:w-full'>
                    <ul className='border shadow-xl'>
                        <li className='border-b p-4'><Link href="#About JDLCC JE - JSSC JE" className='hover:text-customFC6200 text-[#221638] text-base'>About JDLCC JE - JSSC JE</Link></li>
                        <li className='border-b p-4'><Link href="#Eligibility Criteria" className='hover:text-customFC6200 text-[#221638] text-base'>Eligibility Criteria</Link></li>
                        <li className='border-b p-4'><Link href="#JDLCCE-JE Exam Pattern" className='hover:text-customFC6200 text-[#221638] text-base'>JDLCCE-JE Exam Pattern</Link></li>
                        <li className='border-b p-4'><Link href="#Important Dates for JSSC JE" className='hover:text-customFC6200 text-[#221638] text-base'>Important Dates for JSSC JE</Link></li>
                    </ul>
                </div>
                </div>
            </section >
        </div >
    )
}

export default ExamInfo