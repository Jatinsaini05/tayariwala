import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Menu/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import HeaderAndTopbar from "../components/Menu/HeaderAndTopbar";
import FinalPatnaHeader from "../components/Menu/FinalPatnaHeader";
import CallUS from "../components/SideContact/CallUS";

export default function DefaultLayout({ children, websiteData }) {
  const router = useRouter();
  const courseViewPattern = /\/profile\/course\/view\?up=\w+&p=\w+/;
  const isCourseView = courseViewPattern.test(router.asPath);
  const isPatnaPage = router.pathname.includes("/centre/patna") || router.pathname.includes("contact-patna");
  const isCoursePage = router.pathname.includes("/course/");
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
      {!isCourseView && <CallUS websiteData={websiteData} />}
      {!isCourseView &&
        (isPatnaPage ? (
          <FinalPatnaHeader websiteData={websiteData} />
        ) : (
          <div
            className={`transition-opacity duration-300 ease-in-out ${isHeaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <HeaderAndTopbar websiteData={websiteData} />
          </div>
        ))}

      <div>{children}</div>
      {!isCourseView && <Footer websiteData={websiteData} />}
    </div>
  );
}
