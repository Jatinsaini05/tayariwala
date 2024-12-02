import Link from 'next/link';
import React, { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const PatnaHeader = () => {
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
                <div className="md:px-2 px-[15px] py-4 flex justify-normal gap-5 lg:gap-0 lg:justify-between bg-white">
                    <div className="flex flex-grow lg:flex-grow-0 justify-between  gap-3 xl:gap-14">
                        <div>
                            <Link href="/">
                                <img src="/images/logo.png" className="hover:cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-grow lg:flex-grow-0 justify-end sm:justify-between gap-1 2xl:gap-14">
                        <div className="hidden lg:flex items-center text-[#221638]">
                            <div className=" flex h-full items-center">
                                <Link
                                    href="#about"
                                    className="lg:text-[12px] xl:text-[13px] text-[13px] font-semibold h-full px-1 2xl:px-3 flex items-center hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    About Patna Centre
                                </Link>
                            </div>
                            <div className=" flex h-full items-center">
                                <Link
                                    href="#batch"
                                    className="text-[13px] lg:text-[12px] xl:text-[13px] font-semibold px-1 2xl:px-3 h-full flex items-center hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Upcoming Batches
                                </Link>
                            </div>

                            <div>
                                <Link
                                    href="/online-test-series"
                                    className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Test Series
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/postal-study-package"
                                    className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Study Package
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/live-classes"
                                    className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Online Courses
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/contact"
                                    className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold  px-1 xl:px-3 hover:text-customFC6200 hover:cursor-pointer"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center">
                            <Link
                                href="/login"
                                className="relative flex py-3 font-semibold lg:px-1 lg:text-[12px] xl:text-[16px] items-center text-white px-4 xl:px-8 bg-customFC6200 rounded-md overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center">
                                    <LuUser2 /> &nbsp; Login/Register
                                </span>
                                <span className="absolute inset-0 bg-custom241737 transition-all duration-500 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                            </Link>
                        </div>

                        <div
                            className={`text-sm sm:hidden px-2 py-1 ${activeSection === 1 ? "text-customFC6200" : "text-custom241737"}`}
                            onClick={() => setActiveSection(activeSection === 1 ? null : 1)}
                        >
                            <HiDotsHorizontal className="text-4xl" />
                        </div>

                        <div
                            className={`absolute top-[120px] z-10 bg-white shadow-lg
                origin-center transform transition-transform duration-500 ${activeSection === 1 ? "scale-x-100" : "scale-x-0"}`}
                        >
                            <div className="px-3 py-4 sm:hidden">
                                <div className="flex justify-center">
                                    <Link
                                        href="/login"
                                        className="relative flex text-sm py-3 font-semibold items-center text-white px-4 bg-customFC6200 rounded-md overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <LuUser2 /> &nbsp; Login/Register
                                        </span>
                                        <span className="absolute inset-0 bg-custom241737 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`text-sm lg:hidden px-2 py-1`}
                            onClick={() => setActiveSection(activeSection === 2 ? null : 2)}
                        >
                            {activeSection !== 2 ? (
                                <GiHamburgerMenu className="text-3xl sm:text-5xl text-custom241737" />
                            ) : (
                                <ImCross className="text-3xl sm:text-4xl text-custom241737" />
                            )}
                        </div>

                        <div
                            className={`absolute top-[120px] text-[#221638] px-2 sm:right-3 sm:left-3 right-10 left-10 z-10 bg-white shadow-lg
                origin-top transform transition-transform duration-500 ${activeSection === 2 ? "scale-y-100" : "scale-y-0"}`}
                        >
                            <div className="lg:hidden overflow-scroll h-72">
                                <ul>
                                    <li className="cursor-pointer border-t py-2 border-[#DBEEFD] flex items-center justify-between">
                                        <Link
                                            href="#about"
                                            className="text-[#221638] text-[13px]"
                                        >
                                            About Patna Centre
                                        </Link>
                                    </li>

                                    <li className="cursor-pointer border-t border-[#DBEEFD] py-2 flex items-center justify-between">
                                        <Link
                                            href="#batch"
                                            className="text-customFC6200 text-[13px]"
                                        >
                                            Upcoming Batches
                                        </Link>
                                        
                                    </li>
                                    
                                    <li className="border-t border-[#DBEEFD] py-2">
                                        <Link
                                            href="/online-test-series"
                                            className="text-[13px] text-[#221638]"
                                        >
                                            Test Series
                                        </Link>
                                    </li>
                                    <li className="border-t border-[#DBEEFD] py-2">
                                        <Link
                                            href="/postal-study-package"
                                            className="text-[13px] text-[#221638]"
                                        >
                                            Study Package
                                        </Link>
                                    </li>
                                    <li className="border-t border-[#DBEEFD] py-2">
                                        <Link
                                            href="/live-classes"
                                            className="text-[13px] text-[#221638]"
                                        >
                                            Online Courses
                                        </Link>
                                    </li>
                                    <li className="border-t border-[#DBEEFD] py-2">
                                        <Link
                                            href="/contact"
                                            className="text-[13px] text-[#221638]"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PatnaHeader;
