import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Approach from "../components/Home/Approach";
import AchieveYourGoal from "../components/Home/AchieveYourGoal";
import Review from "../components/Home/Review";
import CourseNews from "../components/Home/CourseNews";
import Subscribe from "../components/Home/Subscribe";
import { getPageData, getProductData } from "../service/apiFetch";
import PopularCourses from "../components/Home/PopularCourses";
import LatestNews from "../components/Home/LatestNews";
// import MetaTags from "../components/Head/MetaTags";
// export const getStaticProps = async () => {
//   try {
//     const params = "populate=course%2Cstream&select_course=value%2CvalueAlias&select_stream=value%2CvalueAlias"
//     const productresponse = await getProductData(params)

//     if (!productresponse) {
//       console.log("product data is not found")
//     }
//     return {
//       props: {
//         productData: productresponse,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         productData: [],
//       },
//     };
//   }
// };

import { getInitialData } from "../service/apiFetch";

export const getStaticProps = async () => {
  const params =
    "populate=course%2Cstream&select_course=value%2CvalueAlias&select_stream=value%2CvalueAlias";
  const productresponse = await getProductData(params);
  const initialData = await getInitialData("__home", {
    contentBlock: "Object",
  });
  console.log(initialData);
  return {
    props: {
      websiteData: initialData?.websiteData || "",
      pageData: initialData?.data || "",
      title: initialData?.title || "",
      metaTags: initialData?.metaTags || "",
      productData: productresponse || "",
      url: initialData?.url || "",
    },
  };
};

export default function home({ pageData, productData }) {
  return (
    <div>
      <div>
        <HeroSection pageData={pageData?.contentBlock?.HERO_SECTION} />
      </div>
      <div>
        <Approach
          pageData={pageData?.contentBlock?.APPROACH}
          productData={productData}
        />
      </div>
      <div>
        <AchieveYourGoal pageData={pageData?.contentBlock?.ACHIEVE_GOAL} />
      </div>
      <div>
        <PopularCourses pageData={pageData?.contentBlock?.POPULAR_COURSES} />
      </div>
      <div>
        <Review pageData={pageData?.contentBlock?.REVIEW} />
      </div>
      <div>
        <CourseNews pageData={pageData?.contentBlock?.LATEST_NEWS} />
      </div>
      <div>
        <LatestNews pageData={pageData?.contentBlock?.NEWS_AND_BLOGS} />
      </div>
      <div>
        <Subscribe pageData={pageData?.contentBlock?.SUBSCRIBE} />
      </div>
    </div>
  );
}
