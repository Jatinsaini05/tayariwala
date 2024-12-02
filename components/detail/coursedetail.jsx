import React, { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { TbShare } from "react-icons/tb";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn } from "react-icons/fa";

const CustomAccordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="border-b">
                    <div
                        className="cursor-pointer py-3 px-4 flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-semibold">{item.title}</span>
                        <span>{openIndex === index ? (<MdOutlineArrowDropUp />) : (<MdOutlineArrowDropDown />)}</span>
                    </div>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-300 ${openIndex === index ? 'max-h-[300px] py-2' : 'max-h-0'
                            }`}
                    >
                        <div className="px-4 text-gray-700">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const CourseDetail = () => {
    const [section, setSection] = useState("about");

    const faqItems = [
        { title: "Accordion 1", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam porro, consequuntur voluptas sequi laudantium rerum?" },
        { title: "Accordion 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis." },
        { title: "Accordion 3", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat similique dolore, officiis ullam fugiat nisi adipisci porro id a sunt illo atque ipsa nemo libero cum cupiditate labore quibusdam quasi!" },
    ];

    return (
        <div>
            <div className='container mt-[60px]'>
                <div className='flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-8'>
                    <div className=''>
                        <div className='flex text-[#212529] flex-wrap sm:flex-nowrap'>
                            {["about", "test", "exam", "faq"].map((sec, idx) => (
                                <div className="relative w-1/2 sm:w-auto" key={idx}>
                                    <button
                                        className={`border xl:w-40 w-full sm:w-32 py-[18px] ${section === sec
                                                ? 'bg-white text-customFC6200 border-b-0'
                                                : 'bg-[#f0f1f7]'
                                            }`}
                                        onClick={() => setSection(sec)}
                                    >
                                        {sec.charAt(0).toUpperCase() + sec.slice(1).replace('_', ' ')}
                                    </button>
                                    <div className={`w-full bg-customFC6200 absolute top-0 ${section === sec ? 'h-1' : ''}`}></div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-[56px]'>
                            {section === "about" && <div>About Program Content</div>}
                            {section === "test" && <div>Test Schedule Content</div>}
                            {section === "exam" && <div>Exam Info Content</div>}
                            {section === "faq" && <CustomAccordion items={faqItems} />}
                        </div>
                    </div>
                    <div className='relative lg:mt-[-312px] pb-[50px] bg-[#f8f9f8] rounded-md pt-[12px] px-[12px]'>
                        <div>
                            <img src="/images/detailcrd.jpg" className='lg:w-[360px] w-full' />
                        </div>
                        <div className='px-[25px] pt-[35px]'>
                            <div className='pb-[10px] border-b flex gap-5'>
                                <div className=' flex items-center '>
                                    <FaRupeeSign className='text-customFC6200 text-lg' />
                                    <span className='text-[#343a40] text-[30px] pl-1 font-bold'>30000</span>
                                </div>
                                <div className='text-sm flex items-center font-bold gap-1'>
                                    <FaRupeeSign className='text-xs text-customFC6200' />
                                    <span className='line-through text-[#9b9b9b]'>2000</span>
                                    <span>50.00 % Off</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-[25px] pt-[35px] mt-[10px]">
                            <Link
                                href="#"
                                className="w-full bg-customFC6200 hover:bg-[#221638] text-white text-center py-3 rounded-md block">
                                Buy Now
                            </Link>
                        </div>
                        <div className='relative'>
                            <div className="group">
                                <div className='flex gap-2 hover:cursor-pointer justify-center items-center py-[10px] px-[25px] font-semibold mt-[10px]'>
                                    <span className='text-customFC6200'>
                                        Share This Course
                                    </span>
                                    <TbShare />
                                </div>
                                <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-1/2 -translate-x-1/2 -bottom-10'>
                                    <div className='flex gap-2 px-[25px] justify-center z-50'>
                                        {[FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn].map((Icon, idx) => (
                                            <Link href="#" key={idx}>
                                                <div className='hover:bg-customFC6200 text-[#221638] hover:text-white transition-colors delay-0 duration-0 bg-[#e1e1e1] p-2 rounded-[2px]'>
                                                    <Icon />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;