import React from 'react'
import PageTitle from '../components/About-Us/PageTitle'
import About from '../components/About-Us/About'
import { getPageData } from "../service/apiFetch";

export const getStaticProps = async () => {
  try {
    const response = await getPageData("about-us", {
      contentBlock: "Object",
    });
    if (!response) {
      console.log("pageData not found");
    }

    return {
      props: {
        pageData: response,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

const AboutUs = ({pageData}) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <PageTitle/>
      </div>
      <div>
        <About pageData={pageData?.contentBlock?.MAIN_CONTENT}/>
      </div>
    </div>
  )
}

export default AboutUs