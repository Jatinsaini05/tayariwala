import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaFileAlt,
  FaUniversity,
  FaLaptop,
  FaBook,
  FaHome,
  FaRegCheckCircle,
  FaBars,
  FaGraduationCap,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FaPlus, FaMinus, FaLocationDot } from "react-icons/fa6";
import { LuCheckSquare } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { GrNotes } from "react-icons/gr";
import { IoMail } from "react-icons/io5";

const Header = ({ topNav }) => {
  const [openSections, setOpenSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const isOpen = prev[section];
      const newSections = {};

      Object.keys(prev).forEach((key) => {
        newSections[key] = false;
      });

      if (!isOpen) {
        newSections[section] = true;
      }

      return newSections;
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".sidebar") &&
      !event.target.closest(".toggle-bar")
    ) {
      setSidebarOpen(false);
    }
  };

  // const listItems = [
  //   {
  //     title: "About Us",
  //     link: "/about-us",
  //     subItems: [
  //       { name: "About IES Master", link: "/about-ies-master" },
  //       { name: "About Director", link: "/about-director" },
  //       { name: "Director's Message", link: "/directors-message" },
  //       { name: "Why IES Master", link: "/why-ies-master" },
  //       { name: "Our Success Story", link: "/success-story" },
  //     ],
  //   },
  //   {
  //     title: "ESE",
  //     link: "/ese",
  //     subItems: [
  //       { name: "What is ESE/IES", link: "/what-is-ese" },
  //       { name: "Eligibility", link: "/ese-eligibility" },
  //       { name: "Exam Pattern", link: "/ese-exam-pattern" },
  //       { name: "Syllabus", link: "/ese-syllabus" },
  //       { name: "Exam Schedule", link: "/ese-exam-schedule" },
  //       { name: "Cut Off Marks", link: "/ese-cut-off" },
  //       { name: "Preparation Strategy", link: "/ese-preparation-strategy" },
  //       { name: "FAQs", link: "/ese-faqs" },
  //     ],
  //   },
  //   {
  //     title: "GATE",
  //     link: "/gate",
  //     subItems: [
  //       { name: "About GATE", link: "/about-gate" },
  //       { name: "Eligibility", link: "/gate-eligibility" },
  //       { name: "Exam Pattern", link: "/gate-exam-pattern" },
  //       { name: "Syllabus", link: "/gate-syllabus" },
  //       { name: "Cut Off Marks", link: "/gate-cut-off" },
  //       { name: "Types of Questions", link: "/gate-types" },
  //       { name: "Preparation Strategy", link: "/gate-preparation" },
  //       { name: "FAQs", link: "/gate-faqs" },
  //     ],
  //   },
  //   {
  //     title: "PSUs",
  //     link: "/psus",
  //     subItems: [
  //       { name: "What are PSUs?", link: "/what-are-psus" },
  //       { name: "Exam Pattern", link: "/psu-exam-pattern" },
  //       { name: "Percentage Criteria", link: "/psu-percentage" },
  //       { name: "Salary Structure of PSUs", link: "/psu-salary" },
  //     ],
  //   },
  //   { title: "SSC-JE", link: "/ssc-je", subItems: [] },
  //   {
  //     title: "Programs",
  //     link: "/programs",
  //     subItems: [
  //       {
  //         icon: <FaUniversity />,
  //         name: "1 Year Class Room Program",
  //         link: "/1-year-program",
  //       },
  //       {
  //         icon: <FaUniversity />,
  //         name: "2 Year Class Room Program",
  //         link: "/2-year-program",
  //       },
  //       {
  //         icon: <FaGraduationCap />,
  //         name: "Genius Batch",
  //         link: "/genius-batch",
  //       },
  //       {
  //         icon: <FaBook />,
  //         name: "GS & Engg. Aptitude Program",
  //         link: "/gs-engineering",
  //       },
  //       { icon: <FaBook />, name: "Postal Program", link: "/postal-program" },
  //       {
  //         icon: <FaUniversity />,
  //         name: "Interview Guidance Program",
  //         link: "/interview-guidance",
  //       },
  //       {
  //         icon: <IoDocumentTextOutline />,
  //         name: "CQPP for ESE 2024 Main Exam",
  //         link: "/cqpp-ese-2024",
  //       },
  //       {
  //         icon: <IoDocumentTextOutline />,
  //         name: "SSC-JE Live Online Course",
  //         link: "/ssc-je-live-course",
  //       },
  //     ],
  //   },
  //   { title: "Admission", link: "/admission", subItems: [] },
  //   { title: "New Batches", link: "/new-batches", subItems: [] },
  //   { title: "Fee Structure", link: "/fee-structure", subItems: [] },
  //   {
  //     title: "Test Series",
  //     link: "/test-series",
  //     subItems: [
  //       { name: "GATE Online Test Series", link: "/gate-test-series" },
  //       { name: "ESE Prelims Online Test Series", link: "/ese-prelims-test" },
  //       {
  //         name: "SSC-JE Prelims Online Test Series",
  //         link: "/ssc-je-prelims-test",
  //       },
  //       { name: "SSC-JE Mains Online Test Series", link: "/ssc-je-mains-test" },
  //     ],
  //   },
  //   {
  //     title: "Results",
  //     link: "/results",
  //     subItems: [
  //       { name: "GATE", link: "/gate-results" },
  //       { name: "ESE/IES", link: "/ese-results" },
  //     ],
  //   },
  //   {
  //     title: "Gallery",
  //     link: "/gallery",
  //     subItems: [
  //       { name: "Photo Gallery", link: "/photo-gallery" },
  //       { name: "Video Gallery", link: "/video-gallery" },
  //     ],
  //   },
  //   { title: "Contact Us", link: "/contact-us", subItems: [] },
  // ];

  return (
    <div>
      <div className="bg-black flex items-center">
        <div className="container m-auto flex justify-between items-center">
          <div className="hidden md:flex py-1">
            <ul className="flex items-center gap-1.5 font-medium">
              {topNav?.menus?.TOP_MENU?.items
                ? topNav.menus.TOP_MENU.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))
                : "TopNav data not found"} 
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-white text-xs flex gap-1.5 items-center">
              <div className="icon md:hidden lg:block">
                <FaPhoneAlt className="font-bold text-sm" />
              </div>
              <div className="cont md:hidden md:text-white text-[light-grey] lg:block md:py-1 md:space-x-0 space-x-2 md:px-1 py-2 px-2">
                <span className="md:hidden">Call Us</span>
               <span> {topNav?.website?.contactNumber}</span>
                {/* <span>+91 8010009955,</span> */}
                {/* <span>+91 9711853908,</span>
                <span> 011-41013406</span> */}
                <span className="font-medium "> |</span>
              </div>

              <div className="btn md:block hidden">
                <button className="text-white text-xs bg-[#5cb85c] p-1 rounded hover:bg-green-700">
                  Student Zone Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row justify-between items-center h-20">
        <div className="hidden lg:flex justify-center w-full md:w-auto mb-1">
          <a href="/">
            <img
              src={topNav?.website?.logo}
              alt="logo"
              className="mx-auto mt-4 w-36 h-auto md:w-48 lg:w-64 "
            />
          </a>
        </div>
        <div className="flex items-center justify-center  sm:gap-0 mt-4 md:mt-2 md:my-2 my-4 flex-wrap sm:flex-nowrap">
          {topNav?.menus?.TOP_MENU_2?.items
            ? topNav.menus.TOP_MENU_2.items.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.url}
                    className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
                  >
                    <div className="flex items-center bg-[#5cb85c] p-1.5 hover:rounded-full">
                      <img
                        src={item.img}
                        className="text-white w-4 h-5 sm:w-6 sm:h-7"
                        alt="icon-image"
                      />
                    </div>
                    <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                      {item.title}
                    </span>
                  </Link>
                </div>
              ))
            : "topnav 2 data not found"}
        </div>
      </div>
      <div className="container lg:hidden flex justify-between items-center pt-28 sm:pt-0">
        <div className="flex items-center justify-center">
          <Link href="/">
            <img
              src={topNav?.website?.logo}
              alt="logo"
              className="mx-auto w-36 sm:w-48 h-auto  lg:w-64 "
            />
          </Link>
        </div>
        <div>
          <div className="z-20">
            <div className="block lg:hidden toggle-bar" onClick={toggleSidebar}>
              <FaBars className=" bg-white text-green-700 text-3xl cursor-pointer" />
            </div>
            <div
              className={`fixed top-0 left-0 h-full w-full bg-emerald-50 pb-20 p-4 transition-transform transform sidebar z-20 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "100%", overflowY: "auto" }}
            >
              <div className="flex justify-between items-center">
                <img src="images/logo.png" className="w-44" alt="Logo" />
                <button onClick={toggleSidebar}>
                  <ImCross />
                </button>
              </div>
              {/* <ul className="mt-3 text-base">
                {listItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="flex justify-between py-3 cursor-pointer">
                      <a href={item.link} className="flex-grow">
                        {item.title}
                      </a>
                      {item.subItems.length > 0 && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSection(item.title);
                          }}
                        >
                          {openSections[item.title] ? <FaMinus /> : <FaPlus />}
                        </span>
                      )}
                    </li>
                    {openSections[item.title] && item.subItems.length > 0 && (
                      <ul className="pl-4 bg-white transition-all duration-300 ease-in-out">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-2 flex items-center">
                            <a href={subItem.link}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </ul> */}
              <ul className="mt-3 text-base">
                {topNav?.menus?.PRIMARY_MENU?.items ? (topNav.menus.PRIMARY_MENU.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="flex justify-between py-3 cursor-pointer">
                      <a href={item.url} className="flex-grow">
                        {item.title}
                      </a>
                      {item?.subItems?.length > 0 && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSection(item?.title);
                          }}
                        >
                          {openSections[item?.title] ? <FaMinus /> : <FaPlus />}
                        </span>
                      )}
                    </li>
                    {openSections[item?.title] && item?.subItems?.length > 0 && (
                      <ul className="pl-4 bg-white transition-all duration-300 ease-in-out">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-2 flex items-center">
                            <a href={subItem.url}>{subItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))):("subitems list not found")}
              </ul>
              <div className="mt-3 flex flex-col justify-between items-center gap-3">
                <a href="#">
                  <button className="w-full rounded text-white bg-green-600 py-2 px-14">
                    Apply Online
                  </button>
                </a>
                <a href="#">
                  <button className="w-full rounded text-white bg-blue-600 py-2 px-14">
                    Student Login
                  </button>
                </a>
              </div>
            </div>

            <div
              className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={handleClickOutside}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-green-700 h-10 mt-2 hidden lg:flex">
        <div className="mx-auto">
          <div className="container m-auto flex items-center h-full">
            <ul className="flex items-center space-x-1 h-full relative">
              <li className="pr-4 hover:bg-green-900 cursor-pointer text-white h-full flex items-center pl-3">
                <Link href="/" className="h-full flex items-center">
                  <FaHome className="w-6 h-6" />
                </Link>
              </li>
              {topNav?.menus?.PRIMARY_MENU?.items
                ? topNav.menus.PRIMARY_MENU.items.map((item, index) => (
                    <li
                      className="h-full flex items-center group relative"
                      key={index}
                    >
                      <Link
                        href={item.url}
                        className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900"
                      >
                        {item.title}
                      </Link>

                      <ul className="absolute z-10 top-10 left-0 bg-green-900 w-[300px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                        {item?.subItems?.length > 0
                          ? item.subItems.map((subitm, ind) => (
                              <li
                                className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600"
                                key={ind}
                              >
                                <Link href={`${subitm.url}`}>{subitm.title}</Link>
                              </li>
                            ))
                          : null}
                      </ul>
                    </li>
                  ))
                : "Nav Itemlist not found"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
