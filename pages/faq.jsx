import React from "react";
import Faq from "../components/Faq";
import { getPageData } from "../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("faq-new", {
      contentBlock: "Object",
    });
    const pageData = res;
    return {
      props: {
        pageData,
      },
    };
  } catch (err) {
    console.log("Error", err);
    return {
      props: {
        pageData: [],
      },
    };
  }

};
export default function faq({pageData}) {
  return (
    <section>
      <Faq faqList = {pageData?.contentBlock?.FAQ_LIST}  faqVideo = {pageData?.contentBlock?.VIDEO}  socialMedia = {pageData?.contentBlock?.SOCIAL_MEDIA} />
    </section>
  );
}
