import React  from "react";
import Detail from "../../../../components/Blog/Detail";
import MetaTags from "../../../../components/MetaTags";
export const getStaticPaths = async () => {
  // Step 1: Fetch the category slugs
  let categoryParams = new URLSearchParams({
    select: "slug",
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
  let blogPostCategories = await categoryResponse.json();
  let paths = [];
  // Step 2: Loop through each category and fetch blog posts by category slug
  for (const category of blogPostCategories) {
    const categorySlug = category?.slug;
    if (categorySlug) {
      let blogPostParams = new URLSearchParams({
        select: "uri,postCategories",
      });

      let blogPostResponse = await fetch(
        `https://v3.edkt.net/api/s/blogpost?${blogPostParams.toString()}`,
        {
          headers: header,
        }
      );
      let blogPosts = await blogPostResponse.json();

      // Generate paths for each blog post under the category
      const categoryPaths = blogPosts.map((post) => ({
        params: {
          categorySlug: categorySlug, 
          blogPostUri: post?.uri || "", 
        },
      }));

     paths = [ ...categoryPaths];
    }
  }

  // Return all paths
  return {
    paths,
    fallback: 'blocking', // Can be 'true' or 'false' depending on your use case
  };
};



export const getStaticProps = async (context) => {
  const { blogPostUri } = context.params;
  try {
    let detailParams = new URLSearchParams({
      select: "createdAt,title,postCategories,description,featureImg,uri",
    });
    let header = {
      apiHost: "https://vijethaiasacademyvja.com",
    };
    let blogDetailResponse = await fetch(
      `https://v3.edkt.net/api/s/blogpost-by-uri/${blogPostUri}?${detailParams.toString()}`,
      {
        headers: header,
      }
    );
    let blogDetail = await blogDetailResponse .json();

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
    return {
      props: {
        blogDetail,
        blogPostCategory 
      },
    };

  } catch (err) {
    console.log("Failed to Load Blog Detail or Categories:", err);
    return {
      props: {
        blogDetail: [],
        blogPostCategory: [],
      },
    };
  }
}

const  blogDetail = (props) => {
  return <div>
     <MetaTags
        title={props?.apiData?.pageData?.metaTags?.ogTitle}
        keywords={props?.apiData?.pageData?.metaTags?.keywords}
        description={props?.apiData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
    <Detail blogPostDetail={props?.blogDetail} allCategory={props?.blogPostCategory} />
    </div>;
};

export default blogDetail;
