import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('SSC JE');

    // Toggle dropdown open/close
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle selection
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="container pt-[100px]">
            <div className='flex sm:flex-row flex-col gap-3 justify-between sm:items-center text-center sm:text-start mb-10'>
                <div>
                    <p className='text-[#606060]'>Showing 1-0 of 3 results</p>
                </div>
                <div>
                    <div className="sm:w-64 w-full relative">
                        <div
                            className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md text-[#212529] shadow-sm sm:text-sm cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            {selectedOption}
                        </div>

                        {/* Custom Arrow */}
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <span
                                className={`text-gray-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            >
                                <RiArrowDropDownLine />
                            </span>
                        </div>

                        {/* Dropdown options */}
                        <div className="relative">
                            <div
                                className={`absolute z-10 bg-white w-max mt-1 border border-gray-300 rounded-md text-sm text-[#212529] origin-top overflow-hidden transform transition-all duration-500 ease-out ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                            >
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelect('SSC JE')}
                                >
                                    SSC JE
                                </div>
                                <div
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelect('RRB-JE')}
                                >
                                    RRB-JE
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div>
                    <div className="bg-[#eef5f9] relative p-2 rounded-l-full rounded-r-full sm:w-max w-full">
                        <input
                            type="text"
                            placeholder="Search our Study Packages"
                            className="px-2 py-1 pl-10 border-none outline-none bg-transparent text-[#221638] text-[15px] placeholder:text-[#606060]"
                        />
                        <FiSearch className='absolute top-[15px] text-[#ababab] left-5 text-base' />
                    </div>
                </div>
            </div>
            <div className='my-6'>
                {selectedOption === 'SSC JE' && (
                    <div>
                        <div className='flex flex-wrap sm:flex-nowrap sm:justify-between justify-center gap-4 sm:gap-0 '>
                            <div className='border rounded px-3 pt-3 py-6 w-max'>
                                <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
                                    <div className="relative">
                                        <Link href="#">
                                            <img src="/images/SSCJE.jpg" alt="image" className="w-[380px]"></img>
                                        </Link>
                                        <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                            <span className='line-through text-[13px] font-semibold'>
                                                ₹ 5550
                                            </span>
                                            <span className='text-white text-xl font-semibold ml-1'>
                                                ₹ 4500
                                            </span>
                                        </span>
                                    </div>
                                    <div className='p-8'>
                                        <div>
                                            <p className='text-[#212529] mb-4'>Civil Engineering</p>
                                            <p className='text-[#221638] md:text-[24px] text-[20px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2024 Mains Practise Program</Link></p>

                                            <p className='text-[#606060] pt-5 md:text-base text-sm leading-6'>Enroll in SSC-JE Mains Paper-II&nbsp;Civil Engineering Test Series&nbsp;and seize the opportunity to enhance your chances of success in the SSC-JE (Mains) Paper-II exam.</p>

                                        </div>
                                        <div className='py-8 flex justify-between text-[#007bff]'>
                                            <p>Start Date : 14 Jun, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border rounded px-3 pt-3 py-6 w-max'>
                                <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
                                    <div className="relative">
                                        <Link href="#">
                                            <img src="/images/SSCJE.jpg" alt="image" className="w-[380px]"></img>
                                        </Link>
                                        <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                            <span className='line-through text-[13px] font-semibold'>
                                                ₹ 5550
                                            </span>
                                            <span className='text-white text-xl font-semibold ml-1'>
                                                ₹ 4500
                                            </span>
                                        </span>
                                    </div>
                                    <div className='p-8'>
                                        <div>
                                            <p className='text-[#212529] mb-4'>Civil Engineering</p>
                                            <p className='text-[#221638] md:text-[24px] text-[20px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2024 Mains Practise Program</Link></p>

                                            <p className='text-[#606060] pt-5 md:text-base text-sm leading-6'>Enroll in SSC-JE Mains Paper-II&nbsp;Civil Engineering Test Series&nbsp;and seize the opportunity to enhance your chances of success in the SSC-JE (Mains) Paper-II exam.</p>

                                        </div>
                                        <div className='py-8 flex justify-between text-[#007bff]'>
                                            <p>Start Date : 14 Jun, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border rounded px-3 pt-3 py-6 w-max'>
                                <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
                                    <div className="relative">
                                        <Link href="#">
                                            <img src="/images/SSCJE.jpg" alt="image" className="w-[380px]"></img>
                                        </Link>
                                        <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                            <span className='line-through text-[13px] font-semibold'>
                                                ₹ 5550
                                            </span>
                                            <span className='text-white text-xl font-semibold ml-1'>
                                                ₹ 4500
                                            </span>
                                        </span>
                                    </div>
                                    <div className='p-8'>
                                        <div>
                                            <p className='text-[#212529] mb-4'>Civil Engineering</p>
                                            <p className='text-[#221638] md:text-[24px] text-[20px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2024 Mains Practise Program</Link></p>

                                            <p className='text-[#606060] pt-5 md:text-base text-sm leading-6'>Enroll in SSC-JE Mains Paper-II&nbsp;Civil Engineering Test Series&nbsp;and seize the opportunity to enhance your chances of success in the SSC-JE (Mains) Paper-II exam.</p>

                                        </div>
                                        <div className='py-8 flex justify-between text-[#007bff]'>
                                            <p>Start Date : 14 Jun, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedOption === 'RRB-JE' && (
                    <div>
                        <div id="test-series" className='border text-center py-5 shadow-lg'>
                            <h5 className='text-[#221638] text-xl'>
                            There are no Online Course found..
                            </h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;