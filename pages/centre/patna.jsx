import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/centre/patna/PageTitle'
import About from '../../components/centre/patna/About'
import CoursesOffered from '../../components/centre/patna/CoursesOffered'
import WhatsNew from '../../components/centre/patna/WhatsNew'
import Testimonial from '../../components/centre/patna/Testimonial'
import ContactUs from '../../components/centre/patna/ContactUs'
import { getInitialData, getPageData, getProductData } from '../../service/apiFetch'

export const getStaticProps = async () => {
  const initialData = await getInitialData("centre/patna", { contentBlock: "Object" });
  const additionalContactResponse = await getPageData("contact-patna", { contentBlock: "Object" });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      pageData1: additionalContactResponse
    },
  };
};

const Patna = ({ pageData, pageData1 }) => {
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const response = await getProductData("category=3030707264637463636c7370");
        setAdditionalData(response);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    };

    fetchAdditionalData();
  }, [pageData]);

  return (
    <div>
      <div>
        <PageTitle pageData={pageData} />
      </div>
      <div>
        <About pageData={pageData?.contentBlock?.ABOUT_PATNA_CENTRE} />
      </div>
      <div>
        <CoursesOffered data={additionalData} />
      </div>
      <div>
        <WhatsNew blogData={pageData?.contentBlock?.WHATS_NEW_LATEST_BLOG}
          updateData={pageData?.contentBlock?.WHATS_NEW_NEW_UPDATES}
          linksData={pageData?.contentBlock?.WHATS_NEW_QUICK}
        />
      </div>
      <div>
        <Testimonial pageData={pageData?.contentBlock?.TESTIMONIAL} />
      </div>
      <div>
        <ContactUs pageData={pageData1?.contentBlock?.CONTACT_DETAILS} />
      </div>
    </div>
  );
};

export default Patna;
