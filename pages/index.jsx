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
    const res = await getPageData("home-page-edukit", {contentBlock: "Object"});
    const apiData = res;
    return {
      props: {
        getApi: apiData,
      },
    };
  } catch (err) {
    console.log("Error", err);
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
      {/* <Head>
        <title>
          IES Master - Best Coaching For ESE, Gate and PSUs in Delhi
        </title>
      </Head> */}
      <div>
        <div>
          <MainSlider topSlider={getApi} />
        </div>

        <div>
          <WelcomeSection welcomeData={getApi} />
        </div>

        <div>
          <Faqs faqData={getApi} />
        </div>

        <div>
          <Links usefulLink={getApi} />
        </div>

        <div>
          <PromotionSection publication={getApi} />
        </div>

        <div>
          <Enquiry />
        </div>
      </div>
    </>
  );
}
