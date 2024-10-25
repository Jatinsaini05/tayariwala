import React from "react";
// import Head from "next/head";
// import { Lato } from "@next/font/google";
import MainSlider from "../components/Home/MainSlider";
import WelcomeSection from "../components/Home/WelcomeSection";
import Links from "../components/Home/Links";
import PromotionSection from "../components/Home/PromotionSection";
import Enquiry from "../components/Home/Enquiry";
import Faqs from "../components/Home/Faqs";
import { getPageData } from "../service/apiFetch";

// const lato = Lato({
//   subsets: ["latin"],
//   weight: "400",
// });

export const getStaticProps = async () => {
  try {
    const apidata = await getPageData('home-page-edukit', {contentBlock: "Object"});
    if(!apidata){
      console.log('no data found')
    }
    
    return {
      props: {
        getApi: apidata,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        getApi: [],
      },
    };
  }
};

export default function Home({ getApi }) {


  return (
    <>
      <div>
        <div>
          <MainSlider topSlider = {getApi} />
        </div>

        <div>
          <WelcomeSection welcomeData= {getApi} />
        </div>

        <div>
          <Faqs faqData= {getApi} />
        </div>

        <div>
          <Links usefulLink={getApi} />
        </div>

        <div>
          <PromotionSection publication={getApi}/>
        </div>

        <div>
          <Enquiry />
        </div>
      </div>
    </>
  );
}
