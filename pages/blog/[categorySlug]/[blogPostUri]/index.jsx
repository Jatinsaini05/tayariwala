import React, { useRef, useState } from "react";
import Detail from "../../../../components/Blog/Detail";
import Router, { useRouter } from "next/router";
export default function Blogdetail() {
  const initialCall = useRef(true);
  const [blogDetail, setBlogDetail] = useState("");
  const [blogPostCategory, setBlogPostCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // console.log("router",router?.query?.blogPostUri);
  const fetchBlogDetail = async () => {
    setIsLoading(true);
    try {
      let params = new URLSearchParams({
        select: "createdAt,title,postCategories,description,featureImg,uri",
      });
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/blogpost-by-uri/${router.query.blogPostUri}?${params.toString()}`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setBlogDetail(data);
    } catch (err) {
      console.log("Failed to Blog Detail:", err);
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
    if (router?.query?.blogPostUri) {
      fetchBlogDetail();
    }
    fetchPostCategories();
    initialCall.current = false;
  }

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* {JSON.stringify(blogPostCategory)} */}
      <Detail blogPostDetail={blogDetail} allCategory={blogPostCategory} />
    </>
  );
}
