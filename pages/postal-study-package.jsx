import React,{useState, useEffect} from 'react'
import PageTitle from '../components/Study Package/PageTitle'
import Content from '../components/Study Package/Content'
import { getInitialData, getPageData } from '../service/apiFetch';
import { getCourses } from '../service/apiFetch';

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("online-test-series", {
//       contentBlock: "Object",
//     });
//     const courseResponse = await getCourses({
//       contentBlock: "Object",
//     });
//     if (!response) {
//       console.log("pageData not found");
//     }
//     if (!response) {
//       console.log("courseData not found");
//     }

//     return {
//       props: {
//         pageData: response,
//         CoursesData: courseResponse,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         pageData: [],
//         CoursesData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  const initialData = await getInitialData("postal-study-package", { contentBlock: "Object" });
  const courseResponse = await getCourses({contentBlock: "Object",});
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      CoursesData: courseResponse,
    },
  };
};

const PostalStudyPackage = ({pageData, CoursesData}) => {

  return (
    <div>
        <div>
            <PageTitle pageData={pageData}/>
        </div>
        <div>
            <Content courseData={CoursesData}/>
        </div>
      
    </div>
  )
}

export default PostalStudyPackage
