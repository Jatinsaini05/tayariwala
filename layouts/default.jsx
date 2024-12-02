import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Menu/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import HeaderAndTopbar from "../components/Menu/HeaderAndTopbar";
import FinalPatnaHeader from "../components/Menu/FinalPatnaHeader";
import CoursesHeader from "../components/Menu/CoursesHeader";

export default function DefaultLayout({ children }) {
  const router = useRouter();

  const isPatnaPage = router.pathname === "/centre/patna";
  const isCoursePage = router.pathname.includes('/course')

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    if (isCoursePage) {
      const handleScroll = () => {
        setIsHeaderVisible(window.scrollY < 400);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isCoursePage]);

  return (
    <div>
      <CustomCursor />
      <ScrollToTopButton />
       
      {isPatnaPage ? (
        <FinalPatnaHeader />
      ) : (
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            isHeaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <HeaderAndTopbar />
        </div>
      )}
      
      <div>
      {isCoursePage && (
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            isCoursePage ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <CoursesHeader />
        </div>
      )}
      </div>

      <div>{children}</div>
      <Footer />
    </div>
  );
}