import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageTitle from "../../../components/masterBlog/bloguri/category/pageTitle";
import BlogPage from "../../../components/masterBlog/bloguri/category/BlogPage";
import {
  getPageData,
  getblogPost,
  getInitialData,
} from "../../../service/apiFetch";

export async function getStaticPaths() {
  try {
    const response = await getblogPost();
    const blogs = await response.json();
    const paths = blogs?.map((blog) => ({ params: { bloguri: blog.uri } }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export const getStaticProps = async () => {
  const initialData = await getInitialData("blog", { contentBlock: "Object" });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      url: initialData?.url || "",
      metaTags: initialData?.metaTags,
    },
  };
};

const BlogUri = ({ pageData }) => {
  const router = useRouter();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query.category) {
      const url = `https://r1.edkt.net/api/s/blogpost/blogpostcategory-slug/${router.query.category}`;
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          apiHost: "https://masterlearners.in",
        },
      })
        .then((res) => res.json())
        .then((data) => setPostData(data))
        .catch((err) => console.error("Error fetching blog post:", err));
    }
  }, [router.isReady, router.query.category]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f6f4f7]">
      <PageTitle router={router} pageData={pageData} />
      <BlogPage postData={postData} pageData={pageData?.contentBlock?.BLOGS} />
    </div>
  );
};

export default BlogUri;
