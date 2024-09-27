import BlogCategory from "../../../../components/Blog/Category/BlogCategory";
import React, { useRef, useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
export default function category() {
  const initialCall = useRef(true);
  const [categoryBlog, setCategoryBlog] = useState("");
  const [blogPostCategory, setBlogPostCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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

  const fetchCategoryBlog = async () => {
    setIsLoading(true);
    try {
      let params = new URLSearchParams({
        select: "title,uri,description,featureImg",
      });
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/blogpost/blogpostcategory-slug/${router.query.categoryUri}?${params.toString()}`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setCategoryBlog(data);
    } catch (err) {
      console.log("Failed to Blog Detail:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (initialCall.current) {
    fetchPostCategories();
    initialCall.current = false;
  }
  useEffect(() => {
    if (router?.query?.categoryUri) {
      fetchCategoryBlog();
    }
  }, [router?.query?.categoryUri]);
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
      <BlogCategory
        allCategoryBlogs={categoryBlog}
        allBlogCategory={blogPostCategory}
        categoryUri={router?.query?.categoryUri}
      />
    </>
  );
}
