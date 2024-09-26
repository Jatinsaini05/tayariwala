
import AllCourses from "../../components/Courses/Allcourses";
// import TopBorder from "@/components/TopBorder";
import React, { useState, useRef } from "react";

export default function CourseOffered() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageDataError, setPageDataError] = useState(null);
  const initialPageCall = useRef(true);
  const fetchCourseProgram = async () => {
    setIsLoading(true);
    try {
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(`https://v3.edkt.net/api/s/courseprogram`, {
        headers: header,
      });
      let data = await response.json();
      setPageData(data);
    } catch (err) {
      console.log("Failed to Load Courses:", err);
      setPageDataError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialPageCall.current) {
    fetchCourseProgram();
    initialPageCall.current = false;
  }

  if (pageDataError) {
    return <div>Error in Loading Page Data</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }

  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <AllCourses courseProgram={pageData}/>
    </div>
  );
}
