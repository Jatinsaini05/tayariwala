import React, { useRef, useState } from "react";
import Allblogs from "../../components/Blog/Allblogs";
import MetaTags from "../../components/MetaTags";
export const getStaticProps = async () => {
  try {
    // Fetch blog post data
    let blogPostParams = new URLSearchParams({
      select: "title,uri,postCategories,description,featureImg,createdAt",
    });
    let header = {
      apiHost: "https://vijethaiasacademyvja.com",
    };
    let blogPostResponse = await fetch(
      `https://v3.edkt.net/api/s/blogpost?${blogPostParams.toString()}`,
      {
        headers: header,
      }
    );
    let blogPostData = await blogPostResponse.json();

    // Fetch blog post categories
    let categoryParams = new URLSearchParams({
      select: "title,slug,id",
    });
    let categoryResponse = await fetch(
      `https://v3.edkt.net/api/s/blogpostcategory?${categoryParams.toString()}`,
      {
        headers: header,
      }
    );
    let blogPostCategory = await categoryResponse.json();

    // Return both data in props
    return {
      props: {
        blogPostData,
        blogPostCategory,
      },
    };
  } catch (err) {
    console.log("Failed to Load Blog Data or Categories Data:", err);
    return {
      props: {
        blogPostData: [],
        blogPostCategory: [],
      },
    };

    
  }
};

const blog = (props) => {
  return <div>
      <MetaTags
        title="Blog Post"
      ></MetaTags>
    <Allblogs  allCategory= {props?.blogPostCategory} allBlogPost ={props?.blogPostData}/>
    </div>;
};

export default blog;
