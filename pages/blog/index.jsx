import React from 'react'
import BlogPage from '../../components/masterBlog/BlogPage'
import PageTitle from '../../components/masterBlog/PageTitle'
import { getInitialData } from '../../service/apiFetch';

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("blog", {
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
  const initialData = await getInitialData("blog", { contentBlock: "Object" });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
    },
  };
};

const index = ({pageData}) => {
  return (
    <div>
      <div>
        <PageTitle pageData={pageData}/>
      </div>
      <div>
        <BlogPage pageData={pageData?.contentBlock?.BLOGS}/>
      </div>
    </div>
  )
}

export default index
