import React from "react";
// import MetaTags from "../components/MetaTags";
// import MetaTags from "../../components/Head/MetaTags";
import MetaTags from "../components/Head/MetaTags";
import Content from "../components/About/Content";
import { getPageData } from "../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("about-new", {
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

const about = (props) => {
  return (
    <div>
      {/* {JSON.stringify(props?.pageData)} */}
      <MetaTags
        title={props?.pageData?.pageData?.metaTags?.ogTitle || "About"}
        keywords={props?.pageData?.pageData?.metaTags?.keywords}
        description={props?.pageData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImage}
      ></MetaTags>
      <Content
        title={props?.pageData?.pageData?.title}
        contentData={props?.pageData?.contentBlock}
      />
      {/* <TopperTalk /> */}
    </div>
  );
};
export default about;

