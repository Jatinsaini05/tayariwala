import React from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../components/masterBlog/bloguri/pageTitle';
import BlogPage from '../../components/masterBlog/bloguri/BlogPage';
import { getblogPost, getblogPostByUri, getInitialData } from '../../service/apiFetch';


export async function getStaticPaths() {
  try {
    const response = await getblogPost();
    const blogs = await response.json();
    const paths = blogs?.map((blog) => ({ params: { bloguri: blog.uri } }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export const getStaticProps = async (context) => {
  const { bloguri } = context.params;

  try {
    // Fetch the initial data
    const initialData = await getInitialData("blog", { contentBlock: "Object" });

    // Fetch the blog post data
    const blogPostResponse = await getblogPostByUri(bloguri);

    // Ensure blogPostResponse is serializable
    const serializedBlogPost = JSON.parse(JSON.stringify(blogPostResponse));

    return {
      props: {
        websiteData: initialData?.websiteData || null,
        pageData: initialData?.data || null,
        title: initialData?.title || null,
        metaTags: initialData?.metaTags || null,
        postData: serializedBlogPost || null,
      },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);

    return {
      props: {
        websiteData: null,
        pageData: null,
        title: null,
        metaTags: null,
        postData: {
          error: {
            message: error.message || 'Unknown error occurred',
            stack: process.env.NODE_ENV === 'development' ? error.stack : null,
          },
        },
      },
    };
  }
};

const BlogUri = ({ pageData, postData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Check if there's an error in postData
  if (postData?.error) {
    return (
      <div className="bg-[#f6f4f7] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Error Loading Blog Post</h1>
        <p className="text-gray-700">{postData.error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f4f7]">
      <PageTitle router={router} pageData={pageData} />
      <BlogPage postData={postData} pageData={pageData?.contentBlock?.BLOGS} />
    </div>
  );
};

export default BlogUri;