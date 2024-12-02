import React from "react";
import MetaTags from "../components/MetaTags";
import HeroSection from "../components/Home/HeroSection";
import Approach from "../components/Home/Approach";
import AchieveYourGoal from "../components/Home/AchieveYourGoal";
import Review from "../components/Home/Review";
import CourseNews from "../components/Home/CourseNews";
import Subscribe from "../components/Home/Subscribe";
import { getPageData } from "../service/apiFetch";
import PopularCourses from "../components/Home/PopularCourses";
import LatestNews from "../components/Home/LatestNews";
export const getStaticProps = async () => {
  try {
    const response = await getPageData("__home", {
      contentBlock: "Object",
    });
    if (!response) {
      console.log("pageData not found");
    }

    return {
      props: {
        pageData: response,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

export default function home({ pageData }) {
  return (
    <div>
      <div>
        <HeroSection pageData = {pageData?.contentBlock?.HERO_SECTION} />
      </div>
      <div>
        <Approach pageData = {pageData?.contentBlock?.APPROACH} />
      </div>
      <div>
        <AchieveYourGoal pageData = {pageData?.contentBlock?.ACHIEVE_GOAL}/>
      </div>
      <div>
        <PopularCourses pageData = {pageData?.contentBlock?.POPULAR_COURSES}/>
      </div>
      <div>
        <Review pageData = {pageData?.contentBlock?.REVIEW}/>
      </div>
      <div>
        <CourseNews pageData = {pageData?.contentBlock?.LATEST_NEWS}/>
      </div>
      <div>
        <LatestNews pageData = {pageData?.contentBlock?.NEWS_AND_BLOGS}/>
      </div>
      <div>
        <Subscribe pageData = {pageData?.contentBlock?.SUBSCRIBE}/>
      </div>
    </div>
  );
}