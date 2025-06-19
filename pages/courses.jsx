import React, { useEffect, useState } from "react";
import PageTitle from "../components/Courses/PageTitle";
import Content from "../components/Courses/Content";
import { getInitialData, getPageData } from "../service/apiFetch";
import { getCourses } from "../service/apiFetch";

export const getStaticProps = async () => {
  const initialData = await getInitialData("courses", {
    contentBlock: "Object",
  });
  const courseResponse = await getCourses({
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData || null,
      pageData: initialData?.data || null,
      title: initialData?.title || null,
      metaTags: initialData?.metaTags || null,
      CoursesData: courseResponse || null,
      url: initialData?.url || "",
    },
  };
};

const courses = ({ pageData, CoursesData }) => {
  return (
    <div>
      <div>
        <PageTitle pageData={pageData} />
      </div>
      <div>
        <Content courseData={CoursesData} />
      </div>
    </div>
  );
};

export default courses;
