import React from "react";
import PageTitle from "../components/Contact/PageTitle";
import ContactArea from "../components/Contact/ContactArea";
import { getInitialData, getPageData } from "../service/apiFetch";

export const getStaticProps = async () => {
  const initialData = await getInitialData("contact", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData || null,
      pageData: initialData?.data || null,
      title: initialData?.title || null,
      metaTags: initialData?.metaTags || null,
      url: initialData?.url || null,
    },
  };
};
const contact = ({ pageData, websiteData }) => {
  return (
    <div>
      <div>
        <PageTitle pageData={pageData} />
      </div>
      <div>
        <ContactArea
          pageData={pageData?.contentBlock?.CONTACT_DETAILS}
          websiteData={websiteData?.website}
        />
      </div>
    </div>
  );
};

export default contact;
