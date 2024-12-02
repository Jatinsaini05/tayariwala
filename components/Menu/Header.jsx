import { Link } from '@nextui-org/link';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { RiArrowDownSLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { FiMinus, FiPlus } from "react-icons/fi";


const Header = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

    return (
        <div>
            <div>
                <div className='md:px-2 relative z-50 px-[15px] py-4 flex justify-normal gap-5 lg:gap-0 lg:justify-between bg-white'>
                    <div className='flex flex-grow lg:flex-grow-0 justify-between  gap-3 xl:gap-14'>
                        <div>
                            <Link href="/">
                                <img src='/images/logo.png' className='hover:cursor-pointer' />
                            </Link>
                        </div>
                        <div className="hidden relative sm:flex items-center">
                            <input
                                type="search"
                                placeholder="Search"
                                className="bg-neutral-100 py-3 lg:px-1 2xl:px-4 w-48 2xl:w-auto px-4 rounded-md focus:outline-none"
                            />
                            <div className="absolute right-0 flex items-center pr-4">
                                <button><FaSearch className="text-customFC6200" /></button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-grow lg:flex-grow-0 justify-end sm:justify-between gap-1 2xl:gap-14'>
                        <div className='hidden lg:flex items-center'>
                            <div className=" flex h-full items-center group relative">
                                <Link href="/courses" className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold h-full px-1 2xl:px-3 flex items-center hover:text-customFC6200 hover:cursor-pointer">Select Exam &nbsp;<RiArrowDownSLine /></Link>
                                <div className="absolute top-full left-0 w-full h-6 z-10"></div>
                                <ul className="absolute bg-white border-t-3 border-t-customFC6200 z-10 top-full left-0 w-max mt-6 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                    <li className="text-base py-3 px-4 border-b border-dashed">
                                        <Link href="/course/ssc-je" className="text-black font-semibold hover:text-customFC6200">SSC-JE</Link>
                                    </li>
                                    <li className="text-base py-3 px-4 border-b border-dashed">
                                        <Link href="/course/rrb-je" className="text-black font-semibold hover:text-customFC6200">RRB-JE</Link>
                                    </li>
                                    <li className="text-base py-3 px-4 border-b border-dashed">
                                        <Link href="/course/jdlcce-je" className="text-black font-semibold hover:text-customFC6200">JDLCCE (JSSC-JE)</Link>
                                    </li>
                                    <li className="text-base py-3 px-4 border-b border-dashed">
                                        <Link href="dda-je" className="text-black font-semibold hover:text-customFC6200">DDA-JE</Link>
                                    </li>
                                    <li className="text-sm py-3 text-gray-500 px-4 border-b border-dashed">
                                        More Courses are coming soon
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex h-full items-center group relative">


                                <Link
                                    href="/centre/patna"
                                    className="text-[13px] lg:text-[12px] xl:text-[13px] text-customFC6200 font-semibold px-1 2xl:px-3 h-full flex items-center hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Offline Courses &nbsp; <RiArrowDownSLine />
                                </Link>

                                <div className="absolute top-full left-0 w-full h-6 z-10"></div>

                                <ul
                                    className="absolute bg-white border-t-3 border-t-customFC6200 z-10 top-full mt-6 left-0 w-max shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                                >
                                    <li className="text-base py-3 px-4 border-b border-dashed">
                                        <Link href="/centre/patna" className="text-black font-semibold hover:text-customFC6200">Patna Centre</Link>
                                    </li>
                                    <li className="text-sm text-gray-500 py-3 px-4 border-b border-dashed">
                                        More Centres are coming soon
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link href="/live-classes" className='text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer'>Online Courses</Link>
                            </div>
                            <div>
                                <Link href="/online-test-series" className='text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer'>Test Series</Link>
                            </div>
                            <div>
                                <Link href="/postal-study-package" className='text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer'>Study Package</Link>
                            </div>
                            <div>
                                <Link href="/contact" className='text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer'>Contact Us</Link>
                            </div>
                        </div>
                        <div className='hidden sm:flex items-center'>
                            <Link href="/login" className='relative flex py-3 font-semibold lg:px-1 lg:text-[12px] xl:text-[16px] items-center text-white px-4 xl:px-8 bg-customFC6200 rounded-md overflow-hidden group'>
                                <span className="relative z-10 flex items-center">
                                    <LuUser2 /> &nbsp; Login/Register
                                </span>
                                <span className="absolute inset-0 bg-custom241737 transition-all duration-500 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                            </Link>
                        </div>

                        <div className={`text-sm sm:hidden px-2 py-1 ${activeSection === 1 ? 'text-customFC6200' : 'text-custom241737'}`}
                            onClick={() => setActiveSection(activeSection === 1 ? null : 1)}>
                            <HiDotsHorizontal className='text-4xl' />
                        </div>

                        <div className={`absolute top-[120px] z-10 bg-white shadow-lg
                origin-center transform transition-transform duration-500 ${activeSection === 1 ? 'scale-x-100' : 'scale-x-0'}`}>
                            <div className='px-3 py-4 sm:hidden flex flex-col gap-5'>
                                <div className="relative flex items-center">
                                    <input
                                        type="search"
                                        placeholder="Search"
                                        className="bg-neutral-100 py-3 px-4 rounded-md focus:outline-none"
                                    />
                                    <div className="absolute right-0 flex items-center pr-4">
                                        <button><FaSearch className="text-customFC6200" /></button>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Link href="/login" className='relative flex text-sm py-3 font-semibold items-center text-white px-4 bg-customFC6200 rounded-md overflow-hidden group'>
                                        <span className="relative z-10 flex items-center">
                                            <LuUser2 /> &nbsp; Login/Register
                                        </span>
                                        <span className="absolute inset-0 bg-custom241737 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className={`text-sm lg:hidden px-2 py-1`}
                            onClick={() => setActiveSection(activeSection === 2 ? null : 2)}>
                            {activeSection !== 2 ? (
                                <GiHamburgerMenu className='text-3xl sm:text-5xl text-custom241737' />
                            ) : (
                                <ImCross className='text-3xl sm:text-4xl text-custom241737' />
                            )}
                        </div>

                        <div className={`absolute top-[120px] text-[#221638] px-2 sm:right-3 sm:left-3 right-10 left-10 z-10 bg-white shadow-lg
                origin-top transform transition-transform duration-500 ${activeSection === 2 ? 'scale-y-100' : 'scale-y-0'}`}>
                            <div className='lg:hidden overflow-scroll h-72'>
                                <ul>

                                    <li className="cursor-pointer border-t py-2 border-[#DBEEFD] flex items-center justify-between">
                                        <Link href="/courses" className='text-[#221638] text-[13px]'>Select Exam</Link>
                                        {openDropdown === 'exam' ? (
                                            <FiMinus className='text-[#221638]' onClick={() => toggleDropdown('exam')} />
                                        ) : (
                                            <FiPlus className='text-[#221638]' onClick={() => toggleDropdown('exam')} />
                                        )}
                                    </li>



                                    <ul className={`overflow-hidden  pl-2 text-[14.5px] transition-transform transform duration-300 origin-top ${openDropdown === 'exam' ? 'scale-h-100 max-h-max' : 'scale-y-0 max-h-0'
                                        }`}>
                                        <li className='border-t border-[#DBEEFD] py-2'><Link href="/course/ssc-je" className='text-[#221638] text-[14.5px]'>SSC-JE</Link></li>
                                        <li className='border-t border-[#DBEEFD] py-2'><Link href="/course/rrb-je" className='text-[#221638] text-[14.5px]'>RRB-JE</Link></li>
                                        <li className='border-t border-[#DBEEFD] py-2'><Link href="/course/jdlcce-je" className='text-[#221638] text-[14.5px]'>JDLCCE (JSSC-JE)</Link></li>
                                        <li className='border-t border-[#DBEEFD] py-2'><Link href="/course/dda-je" className='text-[#221638] text-[14.5px]'>DDA-JE</Link></li>
                                        <li className='text-[11.7px] border-t border-[#DBEEFD] py-2'>More Courses are coming soon</li>
                                    </ul>

                                    <li className="cursor-pointer border-t border-[#DBEEFD] py-2 flex items-center justify-between">
                                        <Link href="/centre/patna" className='text-customFC6200 text-[13px]'>Offline Courses</Link>
                                        {openDropdown === 'courses' ? (
                                            <FiMinus className='text-[#221638]' onClick={() => toggleDropdown('courses')} />
                                        ) : (
                                            <FiPlus className='text-[#221638]' onClick={() => toggleDropdown('courses')} />
                                        )}
                                    </li>

                                    <ul className={`overflow-hidden pl-2 text-[14.5px] transition-transform transform duration-300 origin-top ${openDropdown === 'courses' ? 'scale-y-100 max-h-max' : 'scale-y-0 max-h-0'
                                        }`}>
                                        <li className='border-t border-[#DBEEFD] py-2'><Link href="/centre/patna" className='text-[#221638] text-[14.5px]'>Patna Centre</Link></li>
                                        <li className='text-[11.6px] border-t border-[#DBEEFD] py-2'>More Centres are coming soon</li>
                                    </ul>
                                    <li className='border-t border-[#DBEEFD] py-2'><Link href="/live-classes" className='text-[13px] text-[#221638]'>Online Courses</Link></li>
                                    <li className='border-t border-[#DBEEFD] py-2'><Link href="/online-test-series" className='text-[13px] text-[#221638]'>Test Series</Link></li>
                                    <li className='border-t border-[#DBEEFD] py-2'><Link href="/postal-study-package" className='text-[13px] text-[#221638]'>Study Package</Link></li>
                                    <li className='border-t border-[#DBEEFD] py-2'><Link href="/contact" className='text-[13px] text-[#221638]'>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header