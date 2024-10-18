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

const Header = () => {
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

  const listItems = [
    {
      title: "About Us",
      link: "/about-us",
      subItems: [
        { name: "About IES Master", link: "/about-ies-master" },
        { name: "About Director", link: "/about-director" },
        { name: "Director's Message", link: "/directors-message" },
        { name: "Why IES Master", link: "/why-ies-master" },
        { name: "Our Success Story", link: "/success-story" },
      ],
    },
    {
      title: "ESE",
      link: "/ese",
      subItems: [
        { name: "What is ESE/IES", link: "/what-is-ese" },
        { name: "Eligibility", link: "/ese-eligibility" },
        { name: "Exam Pattern", link: "/ese-exam-pattern" },
        { name: "Syllabus", link: "/ese-syllabus" },
        { name: "Exam Schedule", link: "/ese-exam-schedule" },
        { name: "Cut Off Marks", link: "/ese-cut-off" },
        { name: "Preparation Strategy", link: "/ese-preparation-strategy" },
        { name: "FAQs", link: "/ese-faqs" },
      ],
    },
    {
      title: "GATE",
      link: "/gate",
      subItems: [
        { name: "About GATE", link: "/about-gate" },
        { name: "Eligibility", link: "/gate-eligibility" },
        { name: "Exam Pattern", link: "/gate-exam-pattern" },
        { name: "Syllabus", link: "/gate-syllabus" },
        { name: "Cut Off Marks", link: "/gate-cut-off" },
        { name: "Types of Questions", link: "/gate-types" },
        { name: "Preparation Strategy", link: "/gate-preparation" },
        { name: "FAQs", link: "/gate-faqs" },
      ],
    },
    {
      title: "PSUs",
      link: "/psus",
      subItems: [
        { name: "What are PSUs?", link: "/what-are-psus" },
        { name: "Exam Pattern", link: "/psu-exam-pattern" },
        { name: "Percentage Criteria", link: "/psu-percentage" },
        { name: "Salary Structure of PSUs", link: "/psu-salary" },
      ],
    },
    { title: "SSC-JE", link: "/ssc-je", subItems: [] },
    {
      title: "Programs",
      link: "/programs",
      subItems: [
        {
          icon: <FaUniversity />,
          name: "1 Year Class Room Program",
          link: "/1-year-program",
        },
        {
          icon: <FaUniversity />,
          name: "2 Year Class Room Program",
          link: "/2-year-program",
        },
        {
          icon: <FaGraduationCap />,
          name: "Genius Batch",
          link: "/genius-batch",
        },
        {
          icon: <FaBook />,
          name: "GS & Engg. Aptitude Program",
          link: "/gs-engineering",
        },
        { icon: <FaBook />, name: "Postal Program", link: "/postal-program" },
        {
          icon: <FaUniversity />,
          name: "Interview Guidance Program",
          link: "/interview-guidance",
        },
        {
          icon: <IoDocumentTextOutline />,
          name: "CQPP for ESE 2024 Main Exam",
          link: "/cqpp-ese-2024",
        },
        {
          icon: <IoDocumentTextOutline />,
          name: "SSC-JE Live Online Course",
          link: "/ssc-je-live-course",
        },
      ],
    },
    { title: "Admission", link: "/admission", subItems: [] },
    { title: "New Batches", link: "/new-batches", subItems: [] },
    { title: "Fee Structure", link: "/fee-structure", subItems: [] },
    {
      title: "Test Series",
      link: "/test-series",
      subItems: [
        { name: "GATE Online Test Series", link: "/gate-test-series" },
        { name: "ESE Prelims Online Test Series", link: "/ese-prelims-test" },
        {
          name: "SSC-JE Prelims Online Test Series",
          link: "/ssc-je-prelims-test",
        },
        { name: "SSC-JE Mains Online Test Series", link: "/ssc-je-mains-test" },
      ],
    },
    {
      title: "Results",
      link: "/results",
      subItems: [
        { name: "GATE", link: "/gate-results" },
        { name: "ESE/IES", link: "/ese-results" },
      ],
    },
    {
      title: "Gallery",
      link: "/gallery",
      subItems: [
        { name: "Photo Gallery", link: "/photo-gallery" },
        { name: "Video Gallery", link: "/video-gallery" },
      ],
    },
    { title: "Contact Us", link: "/contact-us", subItems: [] },
  ];

  return (
    <div>
      <div className="bg-black flex items-center">
        <div className="container m-auto flex justify-between items-center">
          <div className="hidden md:flex py-1">
            <ul className="flex items-center gap-1.5 font-medium">
              <li>
                <Link
                  href="#"
                  className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                >
                  ESE
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                >
                  GATE
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                >
                  PSUs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                >
                  IRMS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-xs hover:bg-[#388e3c] bg-neutral-800 px-2 py-1"
                >
                  SSC-JE
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-white text-xs flex gap-1.5 items-center">
              <div className="icon md:hidden lg:block">
                <FaPhoneAlt className="font-bold text-sm" />
              </div>
              <div className="cont md:hidden md:text-white text-[light-grey] lg:block md:py-1 md:space-x-0 space-x-2 md:px-1 py-2 px-2">
                <span className="md:hidden">Call Us</span>
                <span>+91 8010009955,</span>
                <span>+91 9711853908,</span>
                <span> 011-41013406</span>
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
              src="/images/logo.png"
              alt="logo"
              className="mx-auto mt-4 w-36 h-auto md:w-48 lg:w-64 "
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-0 mt-4 md:mt-2 flex-wrap sm:flex-nowrap">
          <div>
            <a
              href=""
              className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
            >
              <div className="flex items-center bg-green-700 p-1.5 hover:rounded-full">
                <FaFileAlt className="text-white w-4 h-5 sm:w-6 sm:h-7" />
              </div>
              <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                Apply
                <br />
                Online
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
            >
              <div className="flex items-center bg-green-700 p-1.5 hover:rounded-full">
                <FaUniversity className="text-white w-4 h-5 sm:w-6 sm:h-7" />
              </div>
              <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                Classroom
                <br />
                Course
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
            >
              <div className="flex items-center bg-green-700 p-1.5 hover:rounded-full">
                <FaLaptop className="text-white w-4 h-5 sm:w-6 sm:h-7" />
              </div>
              <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                Live Online
                <br />
                Course
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
            >
              <div className="flex items-center bg-green-700 p-1.5 hover:rounded-full">
                <LuCheckSquare className="text-white w-4 h-5 sm:w-6 sm:h-7" />
              </div>
              <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                Online
                <br />
                Test Series
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col sm:flex-row items-center mx-2 mb-1 sm:mb-0"
            >
              <div className="flex items-center bg-green-700 p-1.5 hover:rounded-full">
                <FaBook className="text-white w-4 h-5 sm:w-6 sm:h-7" />
              </div>
              <span className="text-xs sm:ml-2 mt-1 sm:mt-0 text-cyan-800 font-medium text-center sm:text-left">
                Postal Study
                <br />
                Package
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container lg:hidden flex justify-between items-center pt-28 sm:pt-0">
        <div className="flex items-center justify-center">
          <Link href="/">
            <img
              src="/images/logo.png"
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
              <ul className="mt-3 text-base">
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
        <div className="overflow-hidden mx-auto">

          <div className="container m-auto flex items-center h-full">
            <ul className="flex items-center space-x-1  h-full relative">
              <Link href="/" className="h-full flex items-center">
                <li className="pr-4 hover:bg-green-900 cursor-pointer text-white h-full flex items-center pl-3">
                  <FaHome className="w-6 h-6" />
                </li>
              </Link>

              <div className="h-full flex items-center group relative">

                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  About Us
                </li>
                <ul className="absolute z-10 top-10 left-0 bg-green-900 w-40 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/about">
                      - About IES Master
                    </Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/about">
                      - About Director
                    </Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/about">
                      - Director's Message
                    </Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/about">
                      - Why IES Master
                    </Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/about">
                      - Our Success Story
                    </Link>
                  </li>
                </ul>
              </div>

              <div href="#" className="h-full flex items-center  group relative">
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  Programs
                </li>
                <ul className="absolute z-10 top-10 left-0 bg-green-900 w-max shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <div className="grid grid-cols-2">
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/classroom"
                        className="flex items-center"
                      >
                        <FaUniversity /> 1 Year Class Room Program
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/2-year-classroom-program"
                        className="flex items-center"
                      >
                        <FaUniversity /> 2 Year Class Room Program
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/genius-batch"
                        className="flex items-center"
                      >
                        <FaGraduationCap /> Genius Batch
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/classroom-course-ese-prelims-gs-and-engineering-aptitude"
                        className="flex items-center"
                      >
                        <FaUniversity /> GS & Engg.Aptitude Program
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/postal"
                        className="flex items-center"
                      >
                        <FaBook /> Postal Program
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/interview-guidance"
                        className="flex items-center"
                      >
                        <FaUniversity /> Interview Guidance Program
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="http://localhost:3000/program/ese-mains-classroom-conventional-question-practice-program"
                        className="flex items-center"
                      >
                        <GrNotes /> CQPP for ESE 2024 Mains
                      </Link>
                    </li>
                    <li className="text-white text-sm py-2 px-4 hover:bg-green-600">
                      <Link
                        href="https://masterlearners.in/"
                        className="flex items-center"
                      >
                        <FaBook /> SSC-JE Live Online Course
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>

              <Link
                href="http://localhost:3000/admission"
                className="h-full flex items-center"
              >
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  Admission
                </li>
              </Link>
              <Link
                href="http://localhost:3000/upcoming-batches"
                className="h-full flex items-center"
              >
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  New Batches
                </li>
              </Link>
              <Link
                href="http://localhost:3000/fee-structure"
                className="h-full flex items-center"
              >
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  Fee Structure
                </li>
              </Link>
              <div className="relative group h-full flex items-center">
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  Result
                </li>
                <ul className="absolute z-10 top-10 left-0 bg-green-900 w-40 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/result/gate"> - GATE</Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/result/ese">
                      {" "}
                      - ESE/IES
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative group h-full flex items-center">
                <li className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  Gallery
                </li>
                <ul className="absolute z-10 top-10 left-0 bg-green-900 w-40 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/gallery/photos">
                      {" "}
                      - Photo Gallery
                    </Link>
                  </li>
                  <li className="text-white text-sm py-2 px-4 border-b border-green-700 hover:bg-green-600">
                    <Link href="http://localhost:3000/gallery/videos">
                      {" "}
                      - Video Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="h-full flex items-center  group relative">
                <Link
                  href="http://localhost:3000/contact-us"
                  className="border-l-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900"
                >
                  Contact Us
                </Link>
                <div className="absolute z-10 top-10 left-0 bg-green-900 w-max shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <div className="flex gap-5 p-4">
                    <ul className="text-white">
                      <li className="pb-2 border-b border-dashed border-green-700">
                        <IoMail /> info@iesmaster.org
                      </li>
                      <li className="pt-2">
                        <FaPhoneSquareAlt /> +91 - 8010009955
                      </li>
                      <li className="my-2">
                        <FaPhoneSquareAlt /> +91 - 9711853908
                      </li>
                      <li>
                        <FaPhoneSquareAlt /> 011 - 41013406
                      </li>
                    </ul>
                    <ul className="text-white">
                      <li className="pb-2 border-b border-dashed border-green-700">
                        <FaLocationDot /> <b>Address</b>
                      </li>
                      <li className="pt-2">
                        <b>IES MASTER</b>
                      </li>
                      <li>
                        F - 126, Katwaria Sarai, <br /> New Delhi- 110016
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link
                href="http://localhost:3000/career"
                className="h-full flex items-center"
              >
                <li className="border-l-1 border-r-1 border-green-800 text-white text-sm px-3 h-full flex items-center hover:bg-green-900">
                  <FaRegCheckCircle className="mr-1" /> Career
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
