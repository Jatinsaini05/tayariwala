import React from "react";
import MainContent from "../components/how-to-access-live-class/MainContent";
import { getPageData, getInitialData } from "../service/apiFetch";

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("how-to-access-live-class", {
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
  const initialData = await getInitialData("how-to-access-live-class", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      url: initialData?.url || "",
    },
  };
};

const howtoaccessliveclass = ({ pageData }) => {
  return (
    <div>
      <div>
        <MainContent pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
    </div>
  );
};

export default howtoaccessliveclass;
