import React, { useState, useEffect } from 'react';
import PatnaHeader from './PatnaHeader';

const FixedPatnaHeader = ({websiteData}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the page has been scrolled more than 150px
    setIsVisible(window.scrollY > 115);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0  w-full z-50 shadow-lg transition-all duration-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <PatnaHeader websiteData={websiteData}/>
      </div>
    </div>
  );
};

export default FixedPatnaHeader;