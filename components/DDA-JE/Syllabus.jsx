import React from 'react'
import Link from 'next/link'

const Syllabus = ({ pageData }) => {
    return (
        <div>
            <div className='container mb-24'>
                <section id="syllabus">
                    <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                        <div>
                            {/* {JSON.stringify(pageData)} */}
                            <h1 className='sm:text-[40px] text-[32px] text-[#221638]'>{pageData?.heading}</h1>
                            {pageData?.advanceData?.data?.map((item, index) => (
                                <div key={index}>
                                    <div className='overflow-x-auto'>
                                    <span dangerouslySetInnerHTML={{ __html: item?.desci }}></span>
                                </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className='text-[#606060]'>
                        <p className='text-black text-[16pt] mt-5'>
                            <b>
                                Syllabus for Junior Engineer (Civil) Post Code: 02
                            </b></p>
                        <div id="Syllabus" className='text-[11.5pt] leading-7 text-[#323232]'>
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
                            <p className=''>a) Test of Reasoning</p>
                        </div>
                        
                    </div> */}
                        <div className='lg:w-full'>
                            <ul className='border shadow-xl'>
                                <li className='border-b p-4'><Link href="#syllabus" className='hover:text-customFC6200 text-[#221638] text-base'>Syllabus</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Syllabus
