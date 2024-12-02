import React from 'react'
import PageTitle from '../../components/centre/patna/PageTitle'
import About from '../../components/centre/patna/About'
import CoursesOffered from '../../components/centre/patna/CoursesOffered'
import WhatsNew from '../../components/centre/patna/WhatsNew'
import Testimonial from '../../components/centre/patna/Testimonial'
import ContactUs from '../../components/centre/patna/ContactUs'
import { getPageData } from '../../service/apiFetch'

export const getStaticProps = async () => {
  try {
    const response = await getPageData("centre/patna", {
      contentBlock: "Object",
    });

    const additionalContactResponse = await getPageData("contact-patna", {
      contentBlock: "Object",
    });

    if (!response) {
      console.log("pageData not found");
    }

    return {
      props: {
        pageData: response,
        pageData1: additionalContactResponse, 
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        pageData: [],
        pageData1: [],
      },
    };
  }
};

const Patna = ({ pageData, pageData1 }) => {
  return (
    <div>
      {/* {JSON.stringify(pageData1)} */}
      <div>
        <PageTitle />
      </div>
      <div>
        <About pageData={pageData?.contentBlock?.ABOUT_PATNA_CENTRE} />
      </div>
      <div>
        <CoursesOffered />
      </div>
      <div>
        <WhatsNew />
      </div>
      <div>
        <Testimonial pageData={pageData?.contentBlock?.TESTIMONIAL}/>
      </div>
      <div>
        <ContactUs pageData={pageData1?.contentBlock?.CONTACT_DETAILS} />
      </div>
    </div>
  );
};

export default Patna;
