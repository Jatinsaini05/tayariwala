import Detail from "../../../components/Courses/Detail"
import React, { useState, useRef } from "react";
import Router, { useRouter } from "next/router";
export default function courseUri() {
  const router = useRouter();
  const [courseDetail, setCourseDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [courseDetailError, setCourseDetailError] = useState(null);
  const initialPageCall = useRef(true);

  const fetchCourseDetail = async () => {
    setIsLoading(true);
    try {
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/courseprogram-by-uri/${router.query.courseUri}`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setCourseDetail(data);
    } catch (err) {
      console.log("Failed to Load Courses:", err);
      setCourseDetailError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialPageCall.current) {
    if (router?.query?.courseUri) {
      fetchCourseDetail();
      initialPageCall.current = false;
    }
  }

  if (courseDetailError) {
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
      <Detail programDetail={courseDetail}/>
    </div>
  );
}
