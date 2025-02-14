import React from 'react'
import PageTitle from '../components/Contact-Patna/PageTitle'
import ContactArea from '../components/Contact-Patna/ContactArea'
import { getInitialData, getPageData } from "../service/apiFetch";

// export const getStaticProps = async () => {
//     try {
//         const response = await getPageData("contact-patna", {
//             contentBlock: "Object",
//         });
//         if (!response) {
//             console.log("pageData not found");
//         }

//         return {
//             props: {
//                 pageData: response,
//             },
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             props: {
//                 pageData: [],
//             },
//         };
//     }
// };

export const getStaticProps = async () => {
    const initialData = await getInitialData("contact-patna", { contentBlock: "Object" });
    return {
      props: {
        websiteData: initialData?.websiteData,
        pageData: initialData?.data,
        title: initialData?.title,
        metaTags: initialData?.metaTags,
      },
    };
  };


const ContactPatna = ({pageData}) => {
  return (
    <div>
      <div><PageTitle pageData={pageData}/></div>
      <div><ContactArea pageData={pageData?.contentBlock?.CONTACT_DETAILS}/></div>
    </div>
  )
}

export default ContactPatna
