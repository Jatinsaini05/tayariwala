import React from "react";
import Form from "../components/logincomponents/Form";
import { getCourses, getInitialData } from "../service/apiFetch";

// export const getStaticProps = async () => {
//   try {
//     const response = await getCourses({
//       contentBlock: "Object",
//     });

//     if (!response) {
//       console.log("courseData not found");
//     }

//     return {
//       props: {
//         CoursesData: response,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         CoursesData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  const initialData = await getInitialData("login", { contentBlock: "Object" });
  const courseResponse = await getCourses({ contentBlock: "Object" });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      CoursesData: courseResponse,
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
