import React, { useState, useEffect } from 'react';
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 group hover:bg-customFC6200 p-1 bg-white text-white rounded-full z-50 shadow-lg transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{
        marginBottom: '15px',
      }}
    >
      <RiArrowUpSLine className="text-4xl text-[#221638] group-hover:text-white transition-colors duration-0" />
    </button>
  );
};

export default ScrollToTopButton;