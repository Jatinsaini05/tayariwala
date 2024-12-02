import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const WhatsNew = () => {
    return (
        <div>
            <div className='container pb-[50px]'>
                <h2 className='sm:text-[40px] text-[35px] text-[#ffa500]'>Whats' New</h2>
                <div id="whatsNew">
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2'>
                        <div className='border border-dashed border-[#ffa500] rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                Quick Links
                            </h2>
                            <div>
                                <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/course/ssc-je#live-classes">Live Online Courses</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/postal-study-package">Postal Study Package</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/online-test-series">Test Series</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="#sscjefaq">SSC JE FAQs</Link>
                                        <div id="Accordion">
                                            <Accordion className='bg-customFC6200 p-0'>
                                                <AccordionItem key="1" aria-label="Accordion 1" title={<div className="px-[10px] py-[-10px]">Who is eligible for the SSC-JE
                                                    exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>All Applicants with Diploma in engineering & engineering graduates are qualified to apply for SSC JE exams.All Applicants with Diploma in engineering & engineering graduates are qualified to apply for SSC JE exams.</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="2" aria-label="Accordion 2" title={<div className="px-[10px]">SSC JE Exam is central level or State
                                                    Level?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="3" aria-label="Accordion 3" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="4" aria-label="Accordion 4" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="5" aria-label="Accordion 5" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="6" aria-label="Accordion 6" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="7" aria-label="Accordion 7" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="8" aria-label="Accordion 8" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                                <AccordionItem key="9" aria-label="Accordion 9" title={<div className="px-[10px]">How many branches of Engineering or
                                                    Diploma are considered for SSC JE exam?</div>}>
                                                    <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'><span>hiiii</span></div>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>

                                    </li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="#">State-AE/JE FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='border border-dashed border-[#ffa500] rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                Latest Blogs
                            </h2>
                            <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                <li className='border-b border-dashed border-black py-[10px]'><Link href="#">
                                    Tips
                                    to Exercise Option-Cum Preference for SSC-JE Aspirants
                                </Link></li>
                                <li className='border-b border-dashed border-black py-[10px]'><Link href="#">
                                    WB-PSC-JE
                                    –Public service commission, West Bengal announces vacancy
                                </Link></li>
                                <li className='border-b border-dashed border-black py-[10px]'><Link href="#">
                                    JK-SSB
                                    – New Opportunity for Engineering graduates &amp; Diploma hol</Link>ders

                                </li>
                                <li className='border-b border-dashed border-black py-[10px]'><Link href="#">
                                    Ideal
                                    Study Schedule for SSC-JE
                                </Link></li>
                                <li className='border-b border-dashed border-black py-[10px]'><Link href="#">
                                    Staff
                                    Selection Commission – Junior Engineer SSC-JE Exam
                                </Link></li>
                            </ul>
                        </div>
                        <div className='border border-dashed border-customFC6200 rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                Quick Links
                            </h2>
                            <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                <li className='border-b border-dashed border-black py-[10px]'>
                                    <Link href="#batch">
                                        Latest courses on SSC JE
                                    </Link>
                                </li>
                                <li className='border-b border-dashed border-black py-[10px]'>
                                    <Link href="#batch">
                                        Latest courses on State-AE/JE
                                    </Link>
                                </li>
                                <li className='border-b border-dashed border-black py-[10px]'>
                                    <Link href="#">
                                        Scholarship Tests
                                    </Link>
                                </li>
                                <li className='border-b border-dashed border-black py-[10px]'>
                                    <Link href="#">
                                        SSC JE Notifications
                                    </Link>
                                </li>
                                <li className='border-b border-dashed border-black py-[10px]'>
                                    <Link href="#">
                                        State-AE/JE Notifications
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsNew
