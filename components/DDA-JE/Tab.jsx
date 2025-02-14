import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Tab({ activeSection}) {
  const [visible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsVisible(window.scrollY <= 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container pb-12 mb-4 mt-20 transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <ul className="overflow-auto flex text-[#221638] sm:text-base text-xs shadow-[2px_10px_15px_6px_rgba(0,0,0,0.1)]">
      <li>
          <Link
            href="#exam-info"
            className={`p-5 inline-block hover:text-customFC6200 ${activeSection === 'exam-info' ? 'border-b-2 border-customFC6200' : ''}`}
          >
            Exam Info
          </Link>
        </li>
        <li>
          <Link
            href="#syllabus"
            className={`p-5 inline-block hover:text-customFC6200 ${activeSection === 'syllabus' ? 'border-b-2 border-customFC6200' : ''}`}
          >
            Syllabus
          </Link>
        </li>
        <li>
          <Link
            href="#test-series"
            className={`p-5 inline-block hover:text-customFC6200 ${activeSection === 'test-series' ? 'border-b-2 border-customFC6200' : ''}`}
          >
            Test Series
          </Link>
        </li>
      </ul>
    </div>
  );
}