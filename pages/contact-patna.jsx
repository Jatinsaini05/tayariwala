import React from 'react'
import PageTitle from '../components/Contact-Patna/PageTitle'
import ContactArea from '../components/Contact-Patna/ContactArea'
import { getPageData } from "../service/apiFetch";

export const getStaticProps = async () => {
    try {
        const response = await getPageData("contact-patna", {
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


const ContactPatna = ({pageData}) => {
  return (
    <div>
      <div><PageTitle/></div>
      <div><ContactArea pageData={pageData?.contentBlock?.CONTACT_DETAILS}/></div>
    </div>
  )
}

export default ContactPatna
