import React from "react";
import PageTitle from "../components/About-Us/PageTitle";
import About from "../components/About-Us/About";
import { getInitialData } from "../service/apiFetch";
export const getStaticProps = async () => {
  const initialData = await getInitialData("about-us", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData || null,
      pageData: initialData?.data || null,
      title: initialData?.title || null,
      metaTags: initialData?.metaTags || null,
      url: initialData?.url || "",
    },
  };
};

const AboutUs = ({ pageData }) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <PageTitle pageData={pageData} />
      </div>
      <div>
        <About pageData={pageData?.contentBlock?.MAIN_CONTENT} />
      </div>
    </div>
  );
};

export default AboutUs;
