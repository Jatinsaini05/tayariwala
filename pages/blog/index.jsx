import React, { useRef, useState } from "react";
import Allblogs from "../../components/Blog/Allblogs";
export default function blog() {
  const initialCall = useRef(true);
  const [blogPostData, setBlogPostData] = useState("");
  const [blogPostCategory, setBlogPostCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogPost = async () => {
    setIsLoading(true);
    try {
      let params = new URLSearchParams({
        select: "title,uri,postCategories,description,featureImg,createdAt",
      });
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/blogpost?${params.toString()}`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setBlogPostData(data);
    } catch (err) {
      console.log("Failed to Load Website Data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPostCategories = async () => {
    setIsLoading(true);
    try {
      let params = new URLSearchParams({
        select: "title,slug,id",
      });
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/blogpostcategory?${params.toString()}`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setBlogPostCategory(data);
    } catch (err) {
      console.log("Failed to Load Post Categories:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialCall.current) {
    fetchBlogPost();
    fetchPostCategories();
    initialCall.current = false;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }
  return (
    <>
      {/* {JSON.stringify(blogPostCategory)} */}
      <Allblogs  allCategory= {blogPostCategory} allBlogPost ={blogPostData}/>
    </>
  );
}
