import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const WhatsNew = ({ blogData, updateData, linksData }) => {
    const [links, setLinks] = useState([])

    useEffect(() => {
        if (linksData?.advanceData?.data?.length) {

            const data = linksData?.advanceData?.data;
            const links = []
            data.forEach(el => {
                if (el.link?.trim()) {
                    links.push(el)
                } else {
                    let index = links.findIndex(item => item.title == el.title)
                    if (index != -1) {
                        links[index].items.push(el)
                    } else {
                        links.push({ title: el.title, items: [] })
                    }
                }
            });
            setLinks(links)
        }

    }, [linksData])

    return (
        <div>
            {/* {JSON.stringify(links)} */}
            <div className='container pb-[50px]'>
                <h2 className='sm:text-[40px] text-[35px] text-customFC6200 mb-3'>Whats' New</h2>
                <div id="whatsNew">
                    <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2'>
                        <div className='border border-dashed border-[#ffa500] rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                {linksData?.heading}
                            </h2>
                            <div>
                                <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                    {links?.map((item, index) => (
                                        <li key={index} className='border-b border-dashed border-black py-[10px]'>
                                            {item.link ? (
                                                <Link href={item.link}>{item.title}</Link>
                                            ) : (
                                                <>
                                                    <span>{item.title}</span>
                                                    <div>
                                                        <div id="Accordion">
                                                            <Accordion className='bg-customFC6200 p-0'>
                                                                {item.items.map((faq, faqIndex) => (
                                                                    <AccordionItem
                                                                        key={faqIndex}
                                                                        aria-label={`Accordion ${faqIndex + 1}`}
                                                                        title={<div className="px-[10px] py-[-10px]">{faq.more}</div>}
                                                                    >
                                                                        <div className='bg-[#f6f5f5] text-[#606060] p-[10px] leading-7 -my-2'>
                                                                            <span dangerouslySetInnerHTML={{ __html: faq.desci }} />
                                                                        </div>
                                                                    </AccordionItem>
                                                                ))}
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>



                            {/* <div>
                                <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/course/ssc-je#live-classes">Live Online Courses</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/postal-study-package">Postal Study Package</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="/online-test-series">Test Series</Link></li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="#sscjefaq">SSC JE FAQs</Link>
                                    <div id="sscjefaq">
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
                                        </div>
                                    </li>
                                    <li className='border-b border-dashed border-black py-[10px]'><Link href="#">State-AE/JE FAQs</Link></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className='border border-dashed border-[#ffa500] rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                {blogData?.heading}
                            </h2>

                            <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                {blogData?.advanceData?.data?.map((item, index) => (
                                    <li key={index} className='border-b border-dashed border-black py-[10px]'><Link href={`/blog/${item?.link}`}>
                                        {item?.title}
                                    </Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className='border border-dashed border-customFC6200 rounded-xl p-3'>
                            <h2 className='text-customFC6200 text-[32px]'>
                                {updateData?.heading}
                            </h2>
                            <ul className='text-base h-[225px] overflow-y-auto pr-[10px]'>
                                {updateData?.advanceData?.data?.map((item, index) => (
                                    <li key={index} className='border-b border-dashed border-black py-[10px]'>
                                        <Link href={item?.link}>
                                            {item?.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsNew