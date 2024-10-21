import React from "react";
import Main from "../../components/Pageblock/Main";
import MetaTags from "../../components/Head/MetaTags";
export const getStaticPaths = async () => {
  return {
    paths: [], 
    fallback: "blocking", // Generate pages dynamically on the first request
  };
};

export const getStaticProps = async (context) => {
  const { uri1 } = context.params; // Access the dynamic path parameter

  try {
    let response = await fetch(`https://v3.edkt.net/api/s/frontpage/${uri1}`, {
      headers: {
        apihost: "https://iesmaster.institute.org.in",
      },
    });
    let pageData = await response.json();

    return {
      props: {
        pageData,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (err) {
    console.log("Failed to Load Page Data", err);

    return {
      props: {
        pageData: [], 
      },
    };
  }
};

const index = ({ pageData }) => {
  return (
    <div>
      <MetaTags
        title={pageData?.pageData?.metaTags?.ogTitle}
        keywords={pageData?.pageData?.metaTags?.keywords}
        description={pageData?.pageData?.metaTags?.ogDescription}
        image={pageData?.pageData?.metaTags?.ogImage}
      ></MetaTags>
      <Main basicData={pageData?.contentBlock} />
    </div>
  );
};

export default index;
