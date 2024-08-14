import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { MdArrowRightAlt } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaCaretDown,
  FaCaretUp,
  FaBars,
} from "react-icons/fa";
export default function whatsapp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <>
      <section
        id="header"
        className="px-5 py-4 md:px-10 fixed w-full z-[5] shadow-[0px_0px_30px_0px_#dbdbdb] left-0 top-0 bg-[white]"
      >
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center ">
              <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 px-4">
                <div className="w-[86px] h-[29px] sm:w-[125px] sm:h-[42px]">
                  <Link href="/">
                    <img
                      src="https://i.filecdn.in/855abctutor/whatsapp_logo-1723546975756.png"
                      alt="Logo"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
              </div>

              {/* Toggle Button for md screens */}
              <div className="col-span-8 sm:col-span-8 md:col-span-8 lg:hidden xl:hidden px-2">
                <div className="flex gap-[5px]  items-center justify-end flex-wrap">
                  <div className="hidden sm:block">
                    <Link
                      href="tel:9873617805"
                      className="text-center  text-[white] bg-[#12bf7c] border py-[4px] px-[5px] text-[12px] rounded-[15px] border-solid border-[#12bf7c]"
                    >
                      +91 98736 17805
                    </Link>
                  </div>

                  <div className="hidden sm:block">
                    <Link
                      href="#"
                      className="font-bold text-[#12bf7c] text-center text-[12px]  bg-[white] py-[4px] px-[3px] border-2 border-solid border-[#12bf7c] rounded-[4px] transition-[0.300s] duration-[ease-in-out] ease-[all] hover:bg-[#12bf7c] hover:text-[white]"
                    >
                      BOOK DEMO
                    </Link>
                  </div>

                  <div>
                    <button
                      onClick={toggleMenu}
                      className="text-[black] text-2xl"
                    >
                      <FaBars className="mt-[5px]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:hidden xl:hidden px-2">
                <div className="flex gap-[5px] mt-[5px] sm:mt-[0] items-center justify-center flex-wrap">
                  <div className="block sm:hidden">
                    <Link
                      href="tel:9873617805"
                      className="text-center text-[white] bg-[#12bf7c] border py-[4px] px-[5px] text-[12px] rounded-[15px] border-solid border-[#12bf7c]"
                    >
                      +919873617805
                    </Link>
                  </div>

                  <div className="block sm:hidden">
                    <Link
                      href="#"
                      className="font-bold text-[#12bf7c] text-center text-[12px]  bg-[white] py-[4px] px-[3px] border-2 border-solid border-[#12bf7c] rounded-[4px] transition-[0.300s] duration-[ease-in-out] ease-[all] hover:bg-[#12bf7c] hover:text-[white]"
                    >
                      BOOK DEMO
                    </Link>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } col-span-12  bg-[#12bf7c] lg:bg-[white]  lg:col-span-8 xl:col-span-8 lg:flex xl:flex justify-center items-center px-4 mt-4 lg:mt-0   
                 max-h-80 overflow-auto lg:max-h-fit  lg:overflow-visible py-4 lg:py-0 `}
              >
                <ul className="flex flex-col  px-4 md:px-0 lg:bg-[white] text-[white] lg:flex-row xl:flex-row  justify-end  lg:items-center gap-[10px] xl:gap-[15px]">
                  <li>
                    <Link
                      href="tel:98736 17805"
                      className="hidden lg:block font-bold animate-[pulse_2s_infinite] text-center text-[#12bf7c] border pt-1 pb-[3px] text-[14px] xl:text-[16px]  px-1 xl:px-4 rounded-[30px] border-solid border-[#12bf7c] transition-all duration-[0.3s] ease-[ease-out]"
                    >
                      +919873617805
                    </Link>
                  </li>

                  <li className="relative group  border-b-[lightgray] border-b-1 border-solid pb-[8px] lg:border-b-[none] lg:border-none lg:pb-[0]">
                    <button
                      onClick={toggleSolutions}
                      className=" block lg:hidden text-[white]  lg:text-[black] font-bold text-[13px] xl:text-[15px]   flex  items-center"
                    >
                      SOLUTIONS{" "}
                      {isSolutionsOpen ? <FaCaretUp /> : <FaCaretDown />}
                    </button>
                    <Link
                      href="#"
                      className="hidden lg:block text-[white] lg:flex  lg:text-[black]  font-bold  text-[13px] xl:text-[15px]  lg:group-hover:text-[#12bf7c]"
                    >
                      {" "}
                      SOLUTIONS <FaCaretDown />
                    </Link>
                    <div className="absolute top-full w-full h-[17px]"></div>

                    {/* Submenu  for mobile-view*/}
                    <ul
                      className={`${
                        isSolutionsOpen ? "block" : "hidden"
                      } lg:hidden xl:hidden px-[10px] z-[5]  transition-all duration-300 ease-[ease-in-out]`}
                    >
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]  lg:text-[black]  font-semibold text-[15px]"
                        >
                          WhatsApp Marketing
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]  lg:text-[black]  md:text-[white]  font-semibold text-[15px]"
                        >
                          WhatsApp for Customer Services
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]   lg:text-[black]    md:text-[white]  font-semibold text-[15px]"
                        >
                          WhatsApp Automation
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]   lg:text-[black]    md:text-[white]  font-semibold text-[15px]"
                        >
                          WhatsApp Integration
                        </Link>
                      </li>
                      <li className="py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]   lg:text-[black]    md:text-[white]  font-semibold text-[15px]"
                        >
                          WhatsApp Chatbot
                        </Link>
                      </li>
                    </ul>

                    {/* Submenu for lg+ screens */}
                    <ul className="hidden lg:group-hover:block xl:group-hover:block lg:absolute lg:translate-y-[17px] py-[15px] px-[10px] z-[5] w-[250px] bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] transition-all duration-300 ease-[ease-in-out] rounded-[20px]">
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          WhatsApp Marketing
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          WhatsApp for Customer Services
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          WhatsApp Automation
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          WhatsApp Integration
                        </Link>
                      </li>
                      <li className="py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          WhatsApp Chatbot
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="border-b border-solid  lg:border-b-[none] lg:border-none">
                    <Link
                      href="#"
                      className="text-[white] lg:text-[black]  font-bold  pb-[5px] xl:pb-[0] text-[13px] xl:text-[15px] lg:hover:text-[#12bf7c]"
                    >
                      PRICING
                    </Link>
                  </li>

                  <li className="relative group  pb-[8px] border-b border-solid  lg:border-b-[none] lg:border-none lg:pb-[0]">
                    <button
                      onClick={toggleResources}
                      className="block lg:hidden   text-[white]  lg:text-[black]  font-bold  text-[13px] xl:text-[15px]  flex items-center"
                    >
                      RESOURCES{" "}
                      {isResourcesOpen ? <FaCaretUp /> : <FaCaretDown />}
                    </button>
                    <Link
                      href="#"
                      className="hidden lg:block text-[white] lg:flex  lg:text-[black]  font-bold  text-[13px] xl:text-[15px]  lg:group-hover:text-[#12bf7c]"
                    >
                      {" "}
                      RESOURCES <FaCaretDown />
                    </Link>
                    <div className="absolute top-full w-full h-[17px]"></div>

                    {/* Submenu for mobile-view */}
                    <ul
                      className={`${
                        isResourcesOpen ? "block" : "hidden"
                      } lg:hidden xl:hidden  px-[10px] z-[5]  transition-all duration-300 ease-[ease-in-out]`}
                    >
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]  lg:text-[black]   font-semibold text-[15px]"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white] lg:text-[black]  font-semibold text-[15px]"
                        >
                          Resource Center
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]  lg:text-[black]   font-semibold text-[15px]"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="py-[6px]">
                        <Link
                          href="#"
                          className="text-[white]  lg:text-[black]   font-semibold text-[15px]"
                        >
                          Developer APIs
                        </Link>
                      </li>
                    </ul>

                    {/* Submenu for lg+ screens */}
                    <ul className="hidden lg:group-hover:block xl:group-hover:block lg:absolute lg:translate-y-[17px] py-[15px] px-[10px] z-[5] w-[250px] bg-white shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] transition-all duration-300 ease-[ease-in-out] rounded-[20px]">
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          Resource Center
                        </Link>
                      </li>
                      <li className="border-b-[lightgray] border-b border-solid py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="py-[6px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] font-semibold text-[15px] hover:text-[#12bf7c]"
                        >
                          Developer APIs
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="font-bold text-[#12bf7c] hidden lg:block text-center text-[13px] xl:text-[14px] bg-[white] py-[4px] px-[7px] xl:px[10px] border-2 border-solid border-[#12bf7c] rounded-[4px] transition-[0.300s] duration-[ease-in-out] ease-[all] hover:bg-[#12bf7c] hover:text-[white]"
                    >
                      BOOK DEMO
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="font-bold text-[white] hidden lg:block text-center text-[12px] xl:text-[14px] bg-[#12bf7c] py-[6px] px-[12px] xl:px-[18px] border-2 border-solid border-[#12bf7c] rounded-[4px] transition-[0.300s] duration-[ease-in-out] ease-[all] hover:bg-[white] hover:text-[#12bf7c]"
                    >
                      Start Free Trial
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="banner" className="px-5 pb-8 pt-[6.5rem] md:px-10">
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-6 xl:col-span-6  px-4">
                <h1 className=" text-[25px] sm:text-[30px] md:text-[35px] text-center md:text-left font-bold">
                  Supercharge Your Business with
                  <span className="text-[#0aac6d]"> WhatsApp Business API</span>
                </h1>
                <div className="w-[87px] h-[50px] my-[1rem] block  mx-auto md:mx-[0]">
                  <Link
                    href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging"
                    target="_blank"
                  >
                    <img
                      src="https://i.filecdn.in/855abctutor/Whatsapp_banner_1-1723455023369.jpg"
                      alt="Whatsapp_Img"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
                <p className="text-[#5f5e5e]  font-semibold text-[15px] mb-[15px] sm:text-[17px]">
                  Manage your Sales, Support, & Marketing conversations on
                  WhatsApp with Cunnekt
                </p>
                <ul className="list-disc pl-[2rem]">
                  <li className="text-[#5f5e5e] font-bold text-[16px] sm:text-[17px] pb-[7px]">
                    Launch Promotional Campaigns
                  </li>
                  <li className="text-[#5f5e5e] font-bold text-[16px] sm:text-[17px]  pb-[7px]">
                    Manage Conversations with Multiple Agents
                  </li>
                  <li className="text-[#5f5e5e] font-bold text-[16px] sm:text-[17px]  pb-[7px]">
                    Automate Workflow with Chatbots
                  </li>
                </ul>
                <div className="flex flex-wrap my-[1rem] aligned-center gap-[10px] justify-center sm:justify-start">
                  <div>
                    <Link
                      href="#"
                      className="font-semibold text-[white] text-[14px] bg-[#12bf7c] py-[8px] px-[25px] sm:px-[37px]  sm:py-[13px]   border-2 border-solid border-[#12bf7c]  rounded-[13px]  transition-[0.300s] duration-[ease-in-out] ease-[all]   hover:bg-[white] hover:text-[#12bf7c]"
                    >
                      FREE 7-DAYS TRIAL
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="font-semibold text-[black] text-[14px] bg-[white]     py-[8px] px-[25px] sm:py-[13px]   sm:px-[37px]   border-2 border-solid border-[#12bf7c] rounded-[13px]  transition-[0.300s] duration-[ease-in-out] ease-[all] hover:bg-[#12bf7c] hover:text-[white]"
                    >
                      BOOK DEMO
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-6 xl:col-span-6 px-4">
                <div className="w-[full] h-[full] md:h-[392px]">
                  <img
                    src="https://i.filecdn.in/855abctutor/Whatsapp_banner_2-1723455034204.jpg"
                    alt="Banner_Photo"
                    className="w-full h-full"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="brands" className="px-5 py-8 md:px-10 bg-[#f2f7f2]">
        <h3 className="text-[17px] sm:text-[18px]  font-semibold text-center">
          Join 1500+ delighted brands that are using Cunnekt for their business
          growth
        </h3>

        <div className="flex flex-wrap mt-[1rem] aligned-center gap-[2rem] sm:gap-[4rem] justify-center">
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_1-1723459731374.jpg"
              alt="Brand_Logo_1"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_2-1723459740076.jpg"
              alt="Brand_Logo_2"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_3-1723459748399.jpg"
              alt="Brand_Logo_3"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_4-1723459756806.jpg"
              alt="Brand_Logo_4"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_5-1723459765962.jpg"
              alt="Brand_Logo_5"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_6-1723459773885.jpg"
              alt="Brand_Logo_6"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
          <div className="w-[83px] h-[32px]">
            <img
              src="https://i.filecdn.in/855abctutor/whatsapp_brand_7-1723459781423.jpg"
              alt="Brand_Logo_7"
              className="w-full h-full  rounded-[5px]"
            ></img>
          </div>
        </div>
      </section>

      <section id="grow" className="px-5 py-8 md:px-10">
        <h1 className="text-[23px]  md:text-[27px]  font-bold text-center">
          Grow your Business with Our Solutions
        </h1>
        <p className="text-[#5f5e5e] text-center font-semibold text-[15px] mb-[15px]  md:mb-[4rem] sm:text-[17px]">
          A swift overview of our standout features, where innovation meets
          simplicity
        </p>

        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-7  lg:col-span-7 xl:col-span-7  px-4">
                <h1 className="text-[18px]  md:text-[25px]  font-bold  text-center md:text-left mb-[10px]">
                  Whatsapp <span className="text-[#12bf7c]"> Marketing</span>
                </h1>
                <p className="text-[#5f5e5e]  font-semibold text-[15px] mb-[15px] sm:text-[17px]">
                  Outreach your target customers in one go with{" "}
                  <span className="text-[#12bf7c] font-bold mb-[16px] sm:text-[18px]">
                    WhatsApp broadcasts
                  </span>
                  . Make offer announcements, send product recommendations, and
                  purchase reminders to{" "}
                  <span className="text-[#12bf7c] font-bold mb-[16px] sm:text-[18px]">
                    engage customers at scale
                  </span>
                  . Cunnekt provides businesses with an excellent opportunity to
                  reach a large and diverse audience.
                </p>

                <ul className="mb-[20px] md:mb-[0]">
                  <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px] pb-[7px]">
                    <FaArrowRight className="text-[#ababab] mt-[5px]" />
                    <span className="font-semibold">
                      Personalized Templates with Buttons
                    </span>
                  </li>
                  <li className="text-[#5f5e5e] flex items-center gap-2.5   text-[15px] sm:text-[17px]  pb-[7px]">
                    <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                    <span className="font-semibold">
                      Custom Audience and Segmentation
                    </span>
                  </li>
                  <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px]  pb-[7px]">
                    <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                    <span className="font-semibold">Advanced Analytics</span>
                  </li>
                </ul>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-5  lg:col-span-5 xl:col-span-5 px-4">
                <div className="w-[full] h-[full] md:h-[350px]">
                  <img
                    src="https://i.filecdn.in/855abctutor/Whatsapp_grow-1723463352311.png"
                    alt="Grow_1"
                    className="w-full h-full"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="container m-auto">
            <div className="grid grid-rows">
              <div className="grid grid-cols-12  items-center">
                <div className="col-span-12  sm:col-span-12  md:col-span-5  lg:col-span-5 xl:col-span-5 px-4 order-2 md:order-1">
                  <div className="w-[full] h-[full] md:h-[350px]">
                    <img
                      src="https://i.filecdn.in/855abctutor/Whatsapp_grow_2-1723463360878.png"
                      alt="Grow_2"
                      className="w-full h-full"
                    ></img>
                  </div>
                </div>
                <div className="col-span-12  sm:col-span-12  md:col-span-7  lg:col-span-1 xl:col-span-1  px-4  hidden xl:block xl:order-2 "></div>

                <div className="col-span-12  sm:col-span-12  md:col-span-7  lg:col-span-7 xl:col-span-6  px-4 order-1 md:order-3 ">
                  <h1 className="text-[18px]  md:text-[25px]  font-bold  text-center md:text-left mb-[10px]">
                    Multi-agent{" "}
                    <span className="text-[#12bf7c]">Customer Support </span>
                  </h1>
                  <p className="text-[#5f5e5e]  font-semibold text-[15px] mb-[15px] sm:text-[17px]">
                    Offer your customers unmatched support right from Cunnekt.
                    Assign multiple agents to handle customer inquiries
                    simultaneously, ensuring faster response times and more
                    efficient issue resolution
                  </p>

                  <ul className="mb-[20px] md:mb-[0]">
                    <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px] pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">
                        Advanced Roles and Permissions
                      </span>
                    </li>
                    <li className="text-[#5f5e5e] flex items-center gap-2.5   text-[15px] sm:text-[17px]  pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">Smart Agent Routing</span>
                    </li>
                    <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px]  pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">
                        Conversation and Agent reports
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="container m-auto">
            <div className="grid grid-rows">
              <div className="grid grid-cols-12  items-center">
                <div className="col-span-12  sm:col-span-12  md:col-span-7  lg:col-span-7 xl:col-span-7  px-4">
                  <h1 className="text-[18px]  md:text-[25px]  font-bold  text-center md:text-left mb-[10px]">
                    Chatbot{" "}
                    <span className="text-[#12bf7c]">and Automations</span>
                  </h1>
                  <p className="text-[#5f5e5e]  font-semibold text-[15px] mb-[15px] sm:text-[17px]">
                    Engage your customers instantly with Chatbots. Cunnekt
                    offers drag and drop chatbot builder you can use to qualify
                    leads, solve customer queries, book appointments, and much
                    more. Other automation features create a seamless customer
                    journey, enhance your brand reputation, and drive growth.
                  </p>

                  <ul className="mb-[20px] md:mb-[0]">
                    <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px] pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">
                        Drag-n-Drop Chatbot Builder
                      </span>
                    </li>
                    <li className="text-[#5f5e5e] flex items-center gap-2.5   text-[15px] sm:text-[17px]  pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">Smart Agent Routing</span>
                    </li>
                    <li className="text-[#5f5e5e] flex items-center gap-2.5  text-[15px] sm:text-[17px]  pb-[7px]">
                      <FaArrowRight className="text-[#ababab]  mt-[5px]" />
                      <span className="font-semibold">
                        Developer APIs for Automation
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-span-12  sm:col-span-12  md:col-span-5  lg:col-span-5 xl:col-span-5 px-4">
                  <div className="w-[full] h-[full] md:h-[350px]">
                    <img
                      src="https://i.filecdn.in/855abctutor/Whatsapp_grow_3-1723463369292.png"
                      alt="Grow_3"
                      className="w-full h-full"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo_session" className="px-5 py-8 md:px-10">
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12  px-4">
                <div className="bg-[url(https://i.filecdn.in/855abctutor/whatsapp\_session\_back-1723521335149.jpg)] bg-cover bg-center rounded-tl-[18px] rounded-tr-[18px] pb-[3rem] pt-[3.2rem]">
                  <h2 className="text-[16px] sm:text-[20px] text-[white] font-bold text-center px-[7px]">
                    Book a Live Demo Session with our WhatsApp Experts
                  </h2>
                </div>
                <div>
                  <button className="mt-[-2.4rem] mx-auto flex items-center gap-[7px] font-bold text-[16px] bg-[#f2f7f2] inline-block text-[#111] uppercase shadow-[2px_5px_0px_0px_#cac5b8] px-[1rem] py-[5px]  sm:px-[2rem] sm:py-[7px]   rounded-[7px]">
                    Book Demo <MdArrowRightAlt className="w-[50px] h-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantage-card" className="px-5 py-8 md:px-10 bg-[#f2f7f2]">
        <h1 className="text-[23px]  md:text-[27px]  font-bold text-center mb-[1rem]">
          The Cunnekt Advantage
        </h1>
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="bg-white shadow-[0px_0px_3px_0px_rgb(0_0_0_/_16%)] flex justify-center gap-[10px] items-center px-[5px] py-[30px] rounded-[3px]">
                  <div className="w-[72px] h-[99px]">
                    <img
                      src="https://i.filecdn.in/855abctutor/Advantage_card_Img_1-1723525176447.jpg"
                      alt="Advantage_card_Img_1"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className=" text-[#12bf7c] text-[18px]  md:text-[20px]  font-bold">
                      Instant
                    </h3>
                    <p className="text-[#5f5e5e]  font-semibold text-[18px] sm:text-[20px] line-clamp-2">
                      Whatsapp Activation
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="bg-white shadow-[0px_0px_3px_0px_rgb(0_0_0_/_16%)] flex justify-center gap-[10px] items-center px-[5px] py-[30px] rounded-[3px]">
                  <div className="w-[72px] h-[99px]">
                    <img
                      src="https://i.filecdn.in/855abctutor/Advantage_card_Img_2-1723525193164.jpg"
                      alt="Advantage_card_Img_2"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className=" text-[#12bf7c] text-[18px]  md:text-[20px]  font-bold">
                      Zero
                    </h3>
                    <p className="text-[#5f5e5e]  font-semibold text-[18px] sm:text-[20px] line-clamp-2">
                      Conversation Markup
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="bg-white shadow-[0px_0px_3px_0px_rgb(0_0_0_/_16%)] flex justify-center gap-[10px] items-center px-[5px] py-[30px] rounded-[3px]">
                  <div className="w-[72px] h-[99px]">
                    <img
                      src="https://i.filecdn.in/855abctutor/Advantage_card_Img_3-1723525203098.jpg"
                      alt="Advantage_card_Img_3"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className=" text-[#12bf7c] text-[18px]  md:text-[20px]  font-bold">
                      24*7
                    </h3>
                    <p className="text-[#5f5e5e]  font-semibold text-[18px] sm:text-[20px] line-clamp-2">
                      Client Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industry" className="px-5 pb-8 pt-10 md:px-10  md:pt-[4rem]">
        <h1 className="text-[23px]  md:text-[27px]  font-bold text-center">
          One Solution, Multiple Industries
        </h1>
        <p className="text-[#5f5e5e] text-center font-semibold text-[18px] sm:text-[20px]  mb-[1rem] md:mb-[2rem]">
          Tailored to meet the specific needs of any industry vertical.
        </p>
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px] h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_1-1723526497625.png"
                      alt="Industry_card_1"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Retail
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Showcase products directly on WhatsApp and drive sales.
                      Use Cunnekt APIs to send product offers, order updates,
                      and much more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px]  h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_2-1723526506385.png"
                      alt="Industry_card_2"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Fintech
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Educate and Onboard customers directly from WhatsApp. Send
                      transactional notifications over WhatsApp and resolve
                      generic queries via Chatbots.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px]  h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_3-1723526516934.png"
                      alt="Industry_card_3"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Food and Restaurants
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Turn WhatsApp into your Dining Menu and collect order and
                      payment all from WhatsApp. Send your customers promotional
                      offers and collect reviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px]  h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_4-1723526525122.png"
                      alt="Industry_card_4"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Education
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Automate student onboarding with easy to build chatbots.
                      Provide support and send notifications to teachers,
                      parents and students at once.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px]  h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_5-1723526532711.png"
                      alt="Industry_card_5"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Healthcare
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Improve process efficiency by schedule appointments, send
                      medication reminders, and provide aftercare instructions
                      all from WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="shadow-[0_0_4px_0px_rgb(0_0_0_/_14%)] text-center px-[5px] py-5 rounded-[11px]  h-auto lg:h-[15rem] xl:h-auto">
                  <div className="w-[40px] h-[40px] block m-auto">
                    <img
                      src="https://i.filecdn.in/855abctutor/Industry_card_6-1723526540650.png"
                      alt="Industry_card_6"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <h3 className="text-[18px]  text-center md:text-[20px]  font-bold">
                      Travel and Hospitality
                    </h3>
                    <p className="text-[#5f5e5e]  text-center  font-semibold text-[16px] sm:text-[17px] ">
                      Resolve customer queries and make sales with multi-agent
                      CRM login. Automate notifications to customers via API for
                      their booking and also collect reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="business" className="px-5 py-8 md:px-10 bg-[#f2f7f2]">
        <h1 className="text-[23px]  md:text-[27px]  font-bold text-center mb-[1rem]">
          Get started with WhatsApp Business API and improve business ROI
        </h1>
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="bg-white px-[5px] pt-[30px] pb-[35px]">
                  <h3 className=" text-[#12bf7c] text-[3rem] text-center font-bold leading-none mb-[10px]">
                    3x
                  </h3>
                  <p className="text-[#5f5e5e]  text-center font-semibold text-[16px] sm:text-[17px]">
                    Increase in
                    <span className="text-[black] font-bold"> Sales</span>
                  </p>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="bg-white px-[5px] pt-[30px] pb-[35px]">
                  <h3 className=" text-[#12bf7c] text-[3rem] text-center font-bold leading-none mb-[10px]">
                    50%
                  </h3>
                  <p className="text-[#5f5e5e]  text-center font-semibold text-[16px] sm:text-[17px]">
                    Increase in{" "}
                    <span className="text-[black] font-bold">
                      {" "}
                      cart recoveries
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="bg-white px-[5px] pt-[30px] pb-[35px]">
                  <h3 className=" text-[#12bf7c] text-[3rem] text-center font-bold leading-none mb-[10px]">
                    80%
                  </h3>
                  <p className="text-[#5f5e5e]  text-center font-semibold text-[16px] sm:text-[17px]">
                    Higher{" "}
                    <span className="text-[black] font-bold">
                      engagement rate
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="bg-white px-[5px] pt-[30px] pb-[35px]">
                  <h3 className=" text-[#12bf7c] text-[3rem] text-center font-bold leading-none mb-[10px]">
                    50%
                  </h3>
                  <p className="text-[#5f5e5e]  text-center font-semibold text-[16px] sm:text-[17px]">
                    Boost in{" "}
                    <span className="text-[black] font-bold">new sales</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="started_link" className="bg-[#12bf7d] py-[18px] relative">
        <div className="bg-[url(https://i.filecdn.in/855abctutor/whatsapp_started_link_img-1723530728937.jpg)] bg-contain bg-center h-[15rem] w-full bg-no-repeat">
          <div className="container m-auto">
            <div className="grid grid-rows">
              <div className="grid grid-cols-12">
                <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-6 xl:col-span-6  px-4 py-4  hidden md:block"></div>
                <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                  <div>
                    <Link
                      href="#"
                      className="bg-[#dcf5dc]  text-[#575757] font-bold uppercase italic rounded border pt-2.5 pb-2 px-4 border-solid border-[#dfd] block w-fit mt-24 mb-0 mx-auto absolute md:relative bottom-5 left-[25%]"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
                <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-2 xl:col-span-2 hidden lg:block  px-4 py-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full h-[15rem] block m-auto">
          <img
            src="https://i.filecdn.in/855abctutor/whatsapp_started_link_img-1723530728937.jpg"
            alt="whatsapp_started_link_img"
            className="w-full h-full object-contain"
          ></img>
        </div> */}
      </section>

      <section id="footer" className="px-5 pt-8 pb-4 md:px-10 bg-[#f2f7f2]">
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-4 xl:col-span-4  px-4 py-4">
                <div className="w-[full] h-[50px] mb-[2rem] relative">
                  <input
                    type="number"
                    className="w-full h-full rounded-[25px] px-[16px] focus-visible:outline-none"
                  />
                  <div>
                    <button className="bg-[#12bf7c] text-white font-bold h-full px-[25px] py-3.5 rounded-[30px] absolute right-[0] top-[0]">
                      Call Back
                    </button>
                  </div>
                </div>
                {/* <div>
                  <button className="bg-[#12bf7c] text-white font-bold h-[50px] px-[25px] py-3.5 rounded-[30px]">
                    Call Back
                  </button>
                </div> */}
                <div className="flex gap-[15px] justify-center  items-center">
                  <div className="w-[131px] h-[44px]">
                    <Link href="/">
                      <img
                        src="https://i.filecdn.in/855abctutor/whatsapp_logo-1723546975756.png"
                        alt="Logo"
                        className="w-full h-full"
                      ></img>
                    </Link>
                  </div>
                  <div className="w-[70px] h-[40px]">
                    <Link
                      href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging"
                      target="_blank"
                    >
                      <img
                        src="https://i.filecdn.in/855abctutor/Whatsapp_banner_1-1723455023369.jpg"
                        alt="Whatsapp_Img"
                        className="w-full h-full"
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="text-center  lg:text-left">
                  <h3 className="text-[15px] md:text-[17px] mb-[12px] font-bold">
                    Quick Links
                  </h3>
                  <div>
                    <ul>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] hover:text-[black] pb-[6px]"
                        >
                          WhatsApp Marketing
                        </Link>
                      </li>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                        >
                          WhatsApp Multichannel CRM
                        </Link>
                      </li>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                        >
                          WhatsApp Automation
                        </Link>
                      </li>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="#"
                          className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                        >
                          WhatsApp Developer APIs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-2 xl:col-span-2  px-4 py-4">
                <div className="mt-0 lg:mt-[34px] text-center  lg:text-left">
                  <ul>
                    <li className="font-semibold text-[14px]">
                      <Link
                        href="#"
                        className="text-[#5f5e5e] hover:text-[black] pb-[6px]"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="font-semibold text-[14px]">
                      <Link
                        href="#"
                        className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="font-semibold text-[14px]">
                      <Link
                        href="#"
                        className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li className="font-semibold text-[14px]">
                      <Link
                        href="#"
                        className="text-[#5f5e5e] hover:text-[black]  pb-[6px]"
                      >
                        Privacy & Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12  md:col-span-6  lg:col-span-3 xl:col-span-3  px-4 py-4">
                <div className="text-center  lg:text-left">
                  <h3 className="text-[15px] md:text-[17px] mb-[12px] font-bold">
                    Contact
                  </h3>
                  <div>
                    <ul>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="tel:9873617805"
                          className="text-[#5f5e5e] hover:text-[black] pb-[6px] flex gap-[5px] items-center justify-center lg:justify-start"
                        >
                          {" "}
                          <FaPhoneAlt className="mt-[5px]" />{" "}
                          <span> +91-9873617805</span>
                        </Link>
                      </li>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="mailto:info@cunnekt.com"
                          className="text-[#5f5e5e] hover:text-[black]  pb-[6px]  flex gap-[5px] items-center justify-center lg:justify-start"
                        >
                          <IoMailOutline className="mt-[5px]" />{" "}
                          <span> info@cunnekt.com</span>
                        </Link>
                      </li>
                      <li className="font-semibold text-[14px]">
                        <Link
                          href="https://web.whatsapp.com"
                          className="text-[#5f5e5e] hover:text-[black]  pb-[6px]  flex gap-[5px] items-center justify-center lg:justify-start"
                        >
                          {" "}
                          <FaWhatsapp className="mt-[5px]" />{" "}
                          <span>+919873617805</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[lightgray] border-t border-solid pb-[18px]"></div>
        <p className="text-[#5f5e5e] text-[15px] text-center font-semibold">
          Copyright © 1998 - 2024{" "}
          <Link href="https://edukitapp.com" className="text-[#12bf7c]">
            {" "}
            Edukit
          </Link>
          . All Rights Reserved
        </p>
      </section>
    </>
  );
}
