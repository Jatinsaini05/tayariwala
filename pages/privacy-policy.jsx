import React from "react";
import Policy from "../components/privacy-policy/privacy-policy";
import { getInitialData, getPageData } from "../service/apiFetch";
// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("privacy-policy", {
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
  const initialData = await getInitialData("privacy-policy", {
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

const PrivacyPolicy = ({ pageData }) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <Policy pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
