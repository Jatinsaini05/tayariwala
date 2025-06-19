import React from "react";
import Form from "../components/logincomponents/Form";
import { getCourses, getInitialData } from "../service/apiFetch";

export const getStaticProps = async () => {
  const initialData = await getInitialData("login", { contentBlock: "Object" });
  const courseResponse = await getCourses({ contentBlock: "Object" });
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

const login = ({ CoursesData }) => {
  return (
    <div>
      <div>
        <Form CoursesData={CoursesData} />
      </div>
    </div>
  );
};

export default login;
