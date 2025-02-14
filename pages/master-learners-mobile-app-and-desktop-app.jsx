import React, { useState } from 'react'
import Download from '../components/DownloadApp/Download'
import { getInitialData, getPageData } from '../service/apiFetch'

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("master-learners-mobile-app-and-desktop-app", {
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
  const initialData = await getInitialData("master-learners-mobile-app-and-desktop-app", { contentBlock: "Object" });

  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
    },
  };
};

const AppDownload = ({pageData}) => {
  return (
    <div>
      <div><Download pageData={pageData?.contentBlock?.MAIN_CONTENT}/></div>
    </div>
  )
}

export default AppDownload
