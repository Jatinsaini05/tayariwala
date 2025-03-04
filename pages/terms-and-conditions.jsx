import React from "react";
import TermsConditions from "../components/Terms And Conditions/T&C";
import { getInitialData, getPageData } from "../service/apiFetch";

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("terms-and-conditions", {
//       contentBlock: "Object",
//     });
//     if (!response) {
//       console.log("pageData not found");
//     }

//     return {
//       props: {
//         pageData: response,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {

//       props: {
//         pageData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  const initialData = await getInitialData("terms-and-conditions", {
    contentBlock: "Object",
  });
  // const courseResponse = await getCourses({contentBlock: "Object",});
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      url: initialData?.url || "",
      // CoursesData: courseResponse,
    },
  };
};

const TermsAndConditions = ({ pageData }) => {
  return (
    <div>
      <div>
        <TermsConditions pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
    </div>
  );
};

export default TermsAndConditions;
