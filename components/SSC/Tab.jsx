import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Tab({ activeSection, pageData }) {
  const [visible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsVisible(window.scrollY <= 400);
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
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
        {pageData?.advanceData?.data?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link || "#"}
              className={`p-5 capitalize inline-block hover:text-customFC6200 ${
                activeSection === item?.title ? 'border-b-2 border-customFC6200' : ''
              }`}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
