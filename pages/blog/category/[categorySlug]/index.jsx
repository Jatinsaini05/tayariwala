import BlogCategory from "../../../../components/Blog/Category/BlogCategory";
import React from "react";
import MetaTags from "../../../../components/MetaTags";
export const getStaticPaths = async () => {
  let categoryParams = new URLSearchParams({
    select: "title,slug,id",
  });
  let header = {
    apiHost: "https://vijethaiasacademyvja.com",
  };
  let categoryResponse = await fetch(
    `https://v3.edkt.net/api/s/blogpostcategory?${categoryParams.toString()}`,
    {
      headers: header,
    }
  );
  let blogPostCategory = await categoryResponse.json();
  const categoryPath = blogPostCategory.map((path, index) => ({
    params: {
      categorySlug: path?.slug,
    },
  }));
  let paths = [...categoryPath];
  // Return all paths
  return {
    paths,
    fallback: "blocking", // Can be 'true' or 'false' depending on your use case
  };
};

export const getStaticProps = async (context) => {
  const { categorySlug } = context.params;
  try {
    let categoryParams = new URLSearchParams({
      select: "title,slug,id",
    });
    let header = {
      apiHost: "https://vijethaiasacademyvja.com",
    };
    let categoryResponse = await fetch(
      `https://v3.edkt.net/api/s/blogpostcategory?${categoryParams.toString()}`,
      {
        headers: header,
      }
    );
    let blogPostCategory = await categoryResponse.json();

    let params = new URLSearchParams({
      select: "title,uri,description,featureImg",
    });

    let response = await fetch(
      `https://v3.edkt.net/api/s/blogpost/blogpostcategory-slug/${categorySlug}?${params.toString()}`,
      {
        headers: header,
      }
    );
    let categoryBlog = await response.json();

    return {
      props: {
        categoryBlog,
        blogPostCategory,
        categorySlug,
      },
    };
  } catch (err) {
    console.log("Failed to Load Post Categories:", err);
    return {
      props: {
        categoryBlog: [],
        courseDetail: [],
        categorySlug: null,
      },
    };
  }
};

const category = (props) => {
  return (
    <div>
        <MetaTags
        title={props?.apiData?.pageData?.metaTags?.ogTitle}
        keywords={props?.apiData?.pageData?.metaTags?.keywords}
        description={props?.apiData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
      <BlogCategory
        allCategoryBlogs={props?.categoryBlog}
        allBlogCategory={props?.blogPostCategory}
        categoryUri={props?.categorySlug}
      />
    </div>
  );
};

export default category;
