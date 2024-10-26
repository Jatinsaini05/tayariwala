import React from "react";
import HeadOffice from "../components/contactUs/HeadOffice";
import TopperTalk from "../components/TopperTalk";
import NoidaOffice from "../components/contactUs/NoidaOffice";
import { getPageData } from "../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("contact-us", {
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

export default function contactus({ pageData }) {
  return (
    <section>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <HeadOffice
          pageTitle={pageData?.pageData?.title}
          headOfficeAddress={pageData?.contentBlock?.HEAD_OFFICE}
        />
      </div>
      <div>
        <NoidaOffice
          noidaOfficeAddress={pageData?.contentBlock?.NOIDA_OFFICE}
        />
      </div>
      <div>
        <TopperTalk />
      </div>
    </section>
  );
}
