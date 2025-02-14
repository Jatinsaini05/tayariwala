import React from 'react'
import PageTitle from '../components/Contact/PageTitle'
import ContactArea from '../components/Contact/ContactArea'
import { getInitialData, getPageData } from '../service/apiFetch';
// import { getWebsiteData } from '../service/apiFetch';
// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("contact", {
//       contentBlock: "Object",
//     });

//     const websiteResponse = await getWebsiteData("62384c4fa71aa5f073af559d");
//     if (!websiteResponse ) {
//       console.log("websiteData not found");
//     }
//     if (!response) {
//       console.log("pageData not found");
//     }

//     return {
//       props: {
//        websiteData :websiteResponse,
//         pageData: response,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         websiteData:[],
//         pageData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
    const initialData = await getInitialData("contact", { contentBlock: "Object" });
    return {
      props: {
        websiteData: initialData?.websiteData,
        pageData: initialData?.data,
        title: initialData?.title,
        metaTags: initialData?.metaTags,
      },
    };
  };
const contact = ({pageData, websiteData}) => {
  return (
    <div>
        <div>
            <PageTitle pageData={pageData}/>
        </div>
        <div>
            <ContactArea pageData={pageData?.contentBlock?.CONTACT_DETAILS}
                         websiteData={websiteData?.website}/>
        </div>
      
    </div>
  )
}

export default contact