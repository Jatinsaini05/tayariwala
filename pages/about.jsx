import React from "react";
import MetaTags from "../components/MetaTags";
import Content from "../components/About/Content";
import TopperTalk from "../components/TopperTalk";

export const getStaticProps = async () => {
  try {
    let params = new URLSearchParams({
      contentBlock: "Object",
    });
    let response = await fetch(
      `https://v3.edkt.net/api/s/frontpage/about-new?${params.toString()}`,
      {
        headers: {
          apihost: "https://iesmaster.institute.org.in",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP Error Status code ${url.status}`);
    }
    let pageData = await response.json();
    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error in  fetching data ", error);
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
      <TopperTalk />
    </div>
  );
};
export default about;

// export default function about1() {
//   return (
//     <div>
//       <MetaTags
//         title="About"
//       ></MetaTags>
//       <Content />
//       <TopperTalk />
//     </div>
//   );
// }
