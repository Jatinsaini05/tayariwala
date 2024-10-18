import React from "react";
// import Head from "next/head";
// import { Lato } from "@next/font/google";
import MainSlider from "../components/Home/MainSlider";
import WelcomeSection from "../components/Home/WelcomeSection";
import Links from "../components/Home/Links";
import PromotionSection from "../components/Home/PromotionSection";
import Enquiry from "../components/Home/Enquiry";
import Faqs from "../components/Home/Faqs";

// const lato = Lato({
//   subsets: ["latin"],
//   weight: "400",
// });

export const getStaticProps = async () => {
  try {
    const params = new URLSearchParams({
      contentBlock: "Object",
    });
    const res = await fetch(
      `https://v3.edkt.net/api/s/frontpage/home-page-edukit?${params.toString()}`,
      {
        headers: {
          apihost: "https://iesmaster.institute.org.in",
        },
      }
    );
    if (!res.ok) {
      throw new Error("api data fetching error ");
    }

    const apidata = await res.json();
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
      {/* <Head>
        <title>
          IES Master - Best Coaching For ESE, Gate and PSUs in Delhi
        </title>
      </Head> */}
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
