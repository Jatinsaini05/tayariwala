import React  from "react";
import Enquiry from "../components/ContactUs/Enquiry";

export const getStaticProps = async () => {
  try {
    let header = {
      apiHost: "https://vijethaiasacademyvja.com",
    };
    let websiteResponse = await fetch(
      "https://v3.edkt.net/api/s/website/62a196794ed50566c7603b72/data",
      {
        headers: header,
      }
    );
    let websiteData = await websiteResponse.json();



    let pageResponse = await fetch(
      `https://v3.edkt.net/api/s/frontpage/contact`,
      {
        headers: header,
      }
    );
    let pageData = await pageResponse.json();

    return {
      props: {
        websiteData,
        pageData,
      },
    };
  }
   catch (err) {
    console.log("Failed to Load Website Data or Contact page Data:", err);
    return {
      props: {
        websiteData: [],
        pageData: [],
      },
    };
  }
};

const ContactUs = (props) => {
  return (
    <div>
      <Enquiry
        enquiryDetail={props?.websiteData?.website}
        pageText={props?.pageData}
      ></Enquiry>
    </div>
  );
};

export default ContactUs;
