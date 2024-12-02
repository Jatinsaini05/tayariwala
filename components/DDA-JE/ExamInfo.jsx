import React from 'react'
import Link from 'next/link'

const ExamInfo = ({ pageData }) => {
    return (
        <div className='container mb-24'>
            {/* {JSON.stringify(pageData)} */}

            <section id="exam-info">
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                    <div>
                        <h1 className='sm:text-[40px] text-[32px] text-[#221638]'>{pageData?.heading}</h1>
                        {pageData?.advanceData?.data?.map((item, index) => (
                            <div key={index} id={item?.title}>
                                <span dangerouslySetInnerHTML={{ __html: item?.desci }}></span>
                            </div>
                        ))}
                    </div>
                    {/* <div className='text-[#606060]'>
                        <div className='mt-16'><p className='leading-7' id="About JDLCC JE - JSSC JE">Delhi Development authority announced the vacancy for 279 engineers wherein they will be recruiting Junior engineers for various posts like Assistant engineer landscape, Junior engineer (Civil) & Junior engineer (Electrical/Mechanical). This exam can be a doorway for executing techno-managerial roles in various departments of Delhi authority.</p>
                        </div>
                        <p className='text-[#000000] mt-14'><b>DDA JE Exam Overview & Important Dates </b></p>
                        <p className='mt-5'>
                            There are total 279 vacancies which needed to be filled, and important dates for the same are as follows:
                        </p>
                        <div id="Exam Overview" className='overflow-x-auto mt-5'>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td colspan="2" className='border border-black p-4 text-black'>
                                            <b>DDA JE Recuritment 2022 Job Summary</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Name of the Exam
                                        </td>
                                        <td className='border border-black p-4'>
                                            Delhi Development Authority
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Post Name
                                        </td>
                                        <td className='border border-black p-4'>
                                            Junior Engineer, Programmer, Junior Translator, Planning Assistant, and Assistant Director
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Advt. No
                                        </td>
                                        <td className='border border-black p-4'>
                                            03/2022/Rectt.Cell/Pers./DDA
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Exam Level
                                        </td>
                                        <td className='border border-black p-4'>
                                            National
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            <b>        Online Registration</b>
                                        </td>
                                        <td className='border border-black p-4'>
                                            <b>11th June to 10th July 2022</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Official Website
                                        </td>
                                        <td className='border border-black p-4'>
                                            <Link href="#" className='text-[#0563c1]'><b>www.dda.gov.in</b></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            DDA JE Recruitment 2022 Notification
                                        </td>
                                        <td className='border border-black p-4'>
                                            10th June 2022
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Commencement of Application Process
                                        </td>
                                        <td className='border border-black p-4'>
                                            11th June 2022 [10 am]
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            Last Date to Apply Online
                                        </td>
                                        <td className='border border-black p-4'>
                                            10th July 2022 [6 pm]
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            DDA Admit Card 2022
                                        </td>
                                        <td className='border border-black p-4'>
                                            August 2022
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4 sm:w-2/3'>
                                            DDA Exam Date 2022
                                        </td>
                                        <td className='border border-black p-4'>
                                            Between 01st to 30th September 2022 (tentative)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='my-5 text-black'>
                            <span><b>DDA JE Exam</b> &nbsp;</span>
                            <span>Eligibility Criteria</span>
                        </p>
                        <p className=''>Vacancy is for Degree as well as Diploma holders, Qualification required for various posts are mentioned below:</p>
                        <div className='overflow-x-auto mt-5' id="Eligibility Criteria">
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td colspan="3" className='p-4 border border-black text-black'>
                                            <b>DDA JE Recruitment 2022 Education Qualification & Experience</b>
                                        </td>
                                    </tr>
                                    <tr className='font-semibold'>
                                        <td className='p-4 border border-black'>Post Name</td>
                                        <td className='p-4 border min-w-72 border-black'>Qualification & Experience</td>
                                        <td className='p-4 border border-black'>Age Limit
                                            (as on 10/07/2022)</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Assitant Director (Landscape)</td>
                                        <td className='p-4 border border-black'>
                                            <p className='mb-4'>Must have a degree in Related Field</p>
                                            <p>At least one-year of experience in Landscape Planning in a responsible capacity.</p>
                                        </td>
                                        <td className='p-4 border border-black'>Max 35 years</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Junior Engineer (Civil)</td>
                                        <td className='p-4 border border-black'>
                                            Must have completed diploma in Civil Engineering
                                        </td>
                                        <td className='p-4 border border-black'>18-27 Yrs</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Junior Engineer  (Elect./ Mech.)</td>
                                        <td className='p-4 border border-black'>
                                            Must have completed a diploma in Electrical or Mechanical Engineering
                                        </td>
                                        <td className='p-4 border border-black'>18-27 Yrs</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Programmer </td>
                                        <td className='p-4 border border-black'>
                                            <p className='mb-4'>Must have a degree in Related Field</p>
                                            <p className='mb-4'>At least one-year of experience in Landscape Planning in a responsible capacity.</p>
                                            <p>OR Should have passed ‘B’ Level examination from the Deptt. Of Electronics Accreditations of Computer Course (DOEACC).</p>


                                        </td>
                                        <td className='p-4 border border-black'>Not exceeding 30 years</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Junior Translator</td>
                                        <td className='p-4 border border-black'>
                                            Must have completed a diploma in Electrical or Mechanical Engineering
                                        </td>
                                        <td className='p-4 border border-black'>18-27 Yrs</td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>Planning Assistant</td>
                                        <td className='p-4 border border-black'>
                                            <p className='mb-4'>Must have a degree in Related Field</p>
                                            <p>One year of experience in Software Development, RDBMS and Data Processing.</p>
                                        </td>
                                        <td className='p-4 border border-black'>Max 35 years</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='overflow-x-hidden mt-20'>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className='font-semibold p-4 text-black border border-black'>
                                            Age Limit for various posts
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            <b>    Post Name</b>
                                        </td>
                                        <td className='p-4 border border-black font-semibold'>
                                            <p>Age Limit</p> <span>(as on 10/07/2022)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Max 35 Yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Max 35 Yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Max 35 Yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Max 35 Yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Max 35 Yrs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='p-4 border border-black'>
                                            Assistant Director (Landscape)
                                        </td>
                                        <td className='p-4 border border-black'>
                                            Not exceeding 30 years
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='text-black text-[16pt] mt-8'>
                            <b>
                                Syllabus for Junior Engineer (Civil) Post Code: 02
                            </b></p>
                        <div className='text-[11.5pt] leading-7 text-[#323232]'>
                            <p id="DDA JE 2022 Exam Syllabus" className='my-20'><b>Civil Engineering</b> </p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Building materials:&nbsp;</span></b>Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), Asbestos products, Timber and Wood based Products, laminates, bituminous materials, paints, varnishes.

                                <span></span></p>
                            <p className='mb-5'><b><span>Steel Design:&nbsp;</span></b>teel design and construction of steel columns, beams, roof trusses, plate girders.<span></span></p>
                            <p className='mb-5'><b>To measure candidate’s reasoning ability, quantitative aptitude and proficiency in English and General Awareness</b></p>
                            <p className='mb-5'>a) Test of Reasoning</p>
                            <p className='mb-5'>a) Test of Reasoning</p>
                            <p className='mb-5'>a) Test of Reasoning</p>
                            <p className='mb-5'>a) Test of Reasoning</p>
                            <p className='mb-5 text-base'><b>DDA JE Salary 2022</b></p>
                            <p className='mb-5 text-[#606060]'>Salary will be decided as per government pay structure for various posts in government departments. There are various levels whose pay structure has been included in the notification and the details are mentioned below:</p>
                        </div>
                        <div id="Salary and job Profile" className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className='border border-black p-4 text-black'>
                                            <b>
                                                DDA Salary Structure
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            <b>Posts</b>
                                        </td>
                                        <td className='border w-[200px] border-black p-4'>
                                            <b>Salary</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Assistant Director
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Junior Engineer (Civil)
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Junior Engineer (Elect./Mech)
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Programmer
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Junior Translator (Official Language)
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border border-black p-4'>
                                            Planning Assistant
                                        </td>
                                        <td className='border border-black p-4'>
                                            Level 7
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                    <div className='lg:w-full'>
                        <ul className='border shadow-xl'>
                            <li className='border-b p-4'><Link href="#Exam Overview" className='hover:text-customFC6200 text-[#221638] text-base'>Exam Overview</Link></li>
                            <li className='border-b p-4'><Link href="#Eligibility Criteria" className='hover:text-customFC6200 text-[#221638] text-base'>Eligibility Criteria</Link></li>
                            <li className='border-b p-4'><Link href="#DDA JE 2022 Exam Syllabus" className='hover:text-customFC6200 text-[#221638] text-base'>DDA JE 2022 Exam Syllabus</Link></li>
                            <li className='border-b p-4'><Link href="#Salary and job Profile" className='hover:text-customFC6200 text-[#221638] text-base'>Salary and job Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default ExamInfo