import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CoursesHeader() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = ["exam-info", "syllabus", "live-classes"];
    let currentSection = "";

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollTop > 450);

    
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible && ( 
        <div className="fixed top-0 bg-white w-full z-30 transition-opacity duration-300 shadow-[2px_10px_15px_6px_rgba(0,0,0,0.1)]">
          <ul className="flex justify-center w-full overflow-auto text-[#221638] sm:text-base text-xs">
            <li>
              <Link
                href="#exam-info"
                className={`p-4 inline-block hover:text-customFC6200 ${
                  activeSection === "exam-info"
                    ? "border-b-2 border-customFC6200 rounded-md text-customFC6200"
                    : ""
                }`}
              >
                Exam Info
              </Link>
            </li>
            <li>
              <Link
                href="#syllabus"
                className={`p-4 inline-block hover:text-customFC6200 ${
                  activeSection === "syllabus"
                    ? "border-b-2 border-customFC6200 rounded-md text-customFC6200"
                    : ""
                }`}
              >
                Syllabus
              </Link>
            </li>
            <li>
              <Link
                href="#live-classes"
                className={`p-4 inline-block hover:text-customFC6200 ${
                  activeSection === "live-classes"
                    ? "border-b-2 border-customFC6200 rounded-md text-customFC6200"
                    : ""
                }`}
              >
                live-classes
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
