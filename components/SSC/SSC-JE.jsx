import React from 'react'
import Link from 'next/link'

const SSC = ( {pageData} ) => {
    return (
        <div className='container mb-32'>
            {/* {JSON.stringify(pageData.heading)} */}
            <section id="exam-info">
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                    <div>
                        <h1 className='sm:text-[40px] text-[35px] text-[#221638]'>{pageData?.heading}</h1>
                        <div dangerouslySetInnerHTML={{__html: pageData?.content}}></div>
                        {/* <div className='border'>
                            <p className='text-[22px] mb-3'>
                                <span className='text-[22px]'>
                                    <b>About ssc je 2024</b>
                                </span>
                            </p>
                            <p className='mb-3'>
                                <span className='text-[18px] leading-8'>The SSC-JE (Staff Selection Commission Junior Engineer) stands out as a prestigious national-level examination managed by the esteemed Staff Selection Commission board. This meticulously designed assessment test aims to identify and select Junior Engineers (JEs) specializing in Civil, Electrical, Mechanical, and Quantity Surveying & Contracts. Serving as a crucial gateway, this robust examination opens doors for engineers to secure coveted positions within various ministries and departments. Successful candidates are thereby empowered to actively contribute to the techno-managerial functions that form the bedrock of efficient governmental operations.</span>
                            </p>
                            <p className='mb-3'>
                                <span className='text-[18px] leading-8'>
                                    The examination process is structured across two discernible levels, aptly denoted as Tier-1 and Tier-2 exams. These tiers act as indispensable filters, meticulously evaluating candidates' knowledge, skills, and expertise in their respective engineering domains. The successful completion of these levels propels candidates into roles requiring intricate techno-managerial responsibilities, ensuring a seamless integration of engineering acumen within the governmental framework.
                                </span>
                            </p>
                            <p className='mb-3'>
                                <span className='text-[18px] leading-8'>
                                    To stay well-informed about the latest developments and opportunities, aspiring candidates are strongly advised to conscientiously monitor the official notification releases. These notifications, tailored for each examination phase, provide detailed information about the examination schedule, eligibility criteria, and application procedures. The official dissemination of these notifications occurs through the dedicated portal: https://ssc.nic.in/. Prospective examinees are encouraged to navigate this portal regularly, accessing pertinent information and maximizing their preparedness for this esteemed examination.
                                </span>
                            </p>
                        </div> */}

                            {pageData?.advanceData?.data?.map((item, index) => (
                              <div key={index} className='my-7'> 

                              <div id={item?.title}>
                                <div dangerouslySetInnerHTML={{__html: item?.desci}} className='overflow-y-auto'>

                                </div>
                              </div>
                              </div>  
                            ))}
                        {/* <div className='px-4'>
                            <p className='text-[28px] text-[#606060] mb-3'><u><b>SSC JE 2024 Eligibility Criteria</b></u></p>
                            <div id="Eligibility">
                                <table className='w-full border-collapse border-2 border-black text-[#606060] text-base'>
                                    <thead>
                                        <tr>
                                            <th className='border-2 p-4 border-black font-semibold'>
                                                <p>SSC JE Exam Eligibility Criteria</p>
                                            </th>
                                            <th className='border-2 p-4 border-black font-semibold'>
                                                <p>Details</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p className='mb-2'>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                                <p>(Upper age limit varies as per the post and department)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Exam Name</p>
                                            </td>
                                            <td className='border-2 p-4 border-black'>
                                                <p>SSC Junior Engineer Examination 2022 (SSC JE)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border-2 p-4 border-black'>
                                                <p>Official Website</p>
                                            </td>
                                            <td className='border-2 p-4 border-black font-semibold text-[#0563c1]'>
                                                <p><Link href="#">www.ssc.nic.in/</Link></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className='overflow-x-auto' id="Notification">
                                <table className='w-full border-collapse mt-6 text-[#606060]'>
                                    <thead>
                                        <tr className='text-lg'>
                                            <th className='p-2 border font-semibold border-black'>S. No.</th>
                                            <th className='p-2 border font-semibold border-black'>Organization</th>
                                            <th className='p-2 border font-semibold border-black'>Post</th>
                                            <th className='p-2 border font-semibold border-black'>Essential Educational Qualifications</th>
                                            <th className='p-2 border font-semibold border-black'>Age Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className='sm:text-[21.3px]'>
                                        <tr>
                                            <td rowSpan={2}  className='p-2 border border-black'>1</td>
                                            <td rowSpan={2} className='p-2 border border-black' >Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Degree in Civil Engineering from a recognized University/Institute; <b>or</b>
                                                <ol className='list-inside mt-2 list-[lower-alpha] text-[#212529]'>
                                                    <li>Three Years Diploma in Civil Engineering from a recognized University/Institute/Board; <b className='text-[#212529]'>and</b></li>
                                                    <li>Two years working experience in Planning/Execution/Maintenance of Civil Engineering works.</li>
                                                </ol>
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>Diploma in Civil Engineering from a recognized University or Institute.</td>
                                            <td className='p-2 border border-black'>Age Limit</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>2</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree <b>or</b> Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>3</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree  Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>4</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>5</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Degree in Civil Engineering from a recognized University/Institute; <b>or</b>
                                                <ol className='list-inside text-[#212529] mt-2 list-[lower-alpha]'>
                                                    <li>Three Years Diploma in Civil Engineering from a recognized University/Institute/Board; <b>and</b></li>
                                                    <li>Two years working experience in Planning/Execution/Maintenance of Civil Engineering works.</li>
                                                </ol>
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>6</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>7</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>
                                        <tr>
                                            <td className='p-2 border border-black'>8</td>
                                            <td className='p-2 border border-black'>Border Roads Organization (BRO)</td>
                                            <td className='p-2 border border-black'>JE (C)</td>
                                            <td className='p-2 border border-black'>
                                                Bachelor’s Degree Diploma in Civil Engineering from a recognized University or Institution.
                                            </td>
                                            <td className='p-2 border border-black'>Upto 30 Years</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div>
                            <div className='mt-4'>
                                <p className='text-base text-[#606060]'><strong>Updated exam calendar is updated on &nbsp;</strong><Link href="#" className='text-customFC6200'><strong>https://ssc.nic.in/</strong></Link><strong>&nbsp; where in following important dates are mentioned and also certain details will be updated soon.</strong></p>
                            </div>
                            <div className='p-4 overflow-x-auto'>
                                <table className='w-full sm:text-[18.6px] text-[16px] text-[#606060]'>
                                    <thead>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Exam Conducting Body
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                Staff Selection Commission
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Post
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                Junior Engineer (Civil/Electrical/Mechanical)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Dates for submission of online applications
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                29-Feb-2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Date    of    ‘Window for    Application Form Correction’ and online payment of Correction charges.
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                To be announced
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Dates for submission of online applications
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                29-Feb-2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border border-black p-3 px-5'>
                                                Dates for submission of online applications
                                            </td>
                                            <td className='border border-black p-3 px-5'>
                                                29-Feb-2024
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>
                        <div id="SSC JE 2024 Vacancies">
                            <div>
                                <p className='text-[26.6px] text-[#606060]'><b>SSC JE 2024 Vacancies</b></p>
                                <p className='text=[18.6px] text-[#606060] leading-8'><b>(Presumed on the same numbers as issued in 2023, however this will be updated once the actual notification comes)</b></p>
                            </div>
                            <div className='overflow-x-auto'>
                                <table className='w-full border border-black'>
                                    <thead className='text-[14.6px] text-[#606060]'>
                                        <tr>
                                            <td className='border w-[20%] border-black p-2'>
                                                Name of Dept.
                                            </td>
                                            <td className='border border-black p-2'>
                                                Post
                                            </td>
                                            <td className='border border-black p-2'>
                                                SC
                                            </td>
                                            <td className='border border-black p-2'>
                                                ST
                                            </td>
                                            <td className='border border-black p-2'>
                                                OBC
                                            </td>
                                            <td className='border border-black p-2'>
                                                EWS
                                            </td>
                                            <td className='border border-black p-2'>
                                                UR
                                            </td>
                                            <td className='border border-black p-2'>
                                                Total
                                            </td>
                                            <td className='border border-black p-2'>
                                                OH
                                            </td>
                                            <td className='border border-black p-2'>
                                                HH
                                            </td>
                                            <td className='border border-black p-2'>
                                                Others
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (E & M)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (E)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                       
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            Department of Water Resources, River Development &            Ganga Rejuvenation (Brahmaputra
Board)
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (M)
                                            </td>
                                            <td colSpan={9} className='border-black p-2'>
                                            Vacancies to be intimated in due course.
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-base text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            <span>Border Roads Organization</span><span><b>(For Male Candidates only)</b></span>
                                            </td>
                                            <td className='border-black border p-2'>
                                                JE (C)
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                15
                                            </td>
                                            <td className='border-black border p-2'>
                                                6
                                            </td>
                                            <td className='border-black border p-2'>
                                                22
                                            </td>
                                            <td className='border-black border p-2'>
                                                55
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                            <td className='border-black border p-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr className='text-[13.3px] font-semibold text-[#606060]'>
                                            <td className='border-black border p-2'>
                                            Total                                            </td>
                                            <td className='border-black border p-2'>
                                                206
                                            </td>
                                            <td className='border-black border p-2'>
                                                96
                                            </td>
                                            <td className='border-black border p-2'>
                                                288
                                            </td>
                                            <td className='border-black border p-2'>
                                                121
                                            </td>
                                            <td className='border-black border p-2'>
                                                613
                                            </td>
                                            <td className='border-black border p-2'>
                                                1324
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                8
                                            </td>
                                            <td className='border-black border p-2'>
                                                11
                                            </td>
                                            <td className='border-black border p-2'>
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
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