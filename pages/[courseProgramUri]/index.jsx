import React from "react";
import Main from "../../components/Pageblock/Main";
import { getInitialData } from "../../service/apiFetch";
import LiveClassesdetail from "../../components/detail/LiveClassesdetail";
import PageTitle from "../../components/detail/PageTitle"
import NotFound from "../../components/ErrorPage/NotFound";
import TestSeriesDetails from "../../components/detail/TestSeriesDetails";
import PostalStudyDetails from "../../components/detail/PostalStudyDetails";
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};


export const getStaticProps = async (context) => {
  const { courseProgramUri } = context.params;

  const initialData = await getInitialData(courseProgramUri, { "populate": "linkedProduct" });
  console.log(" initialData 123", initialData);
  return {
    props: {
      websiteData: initialData?.websiteData || "",
      data: initialData?.data || "",
      title: initialData?.title || "",
      metaTags: initialData?.metaTags || "",
      type: initialData?.type || "",
      error: initialData?.error || "",
    },
  };
};

const index = ({ data, type, error }) => {
  return (
    <div>
      {
        type ? (<>
          {
            type == "FrontPage" && (
              <Main basicData={data?.contentBlock} />
            )
          }
          {
            type === "CourseProgram" && (
              <>
                <PageTitle details={data} />
                {data?.linkedProduct?.category === "5cf0cfc4e6636f4d815ccb0a" && (
                  <LiveClassesdetail details={data} />
                )}
                {data?.linkedProduct?.category === "5b47f7ef1e899567332d1d0c" && (
                  <PostalStudyDetails details={data} />
                )}
                {data?.linkedProduct?.category === "5b47f7ef1e899567332d1d0a" && (
                  <TestSeriesDetails details={data} />
                )}
              </>
            )
          }
        </>) : (<>
          <NotFound
            errorType={error}
          />
        </>)
      }


      {/* {JSON.stringify(data)} */}
      {/* {JSON.stringify(pageData)}
      <Main basicData={pageData?.contentBlock} /> */}
    </div>
  );
};

export default index;
