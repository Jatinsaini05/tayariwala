
import React, { useRef ,useState} from "react";
import Enquiry from "../components/ContactUs/Enquiry"
export default function ContactUs() {
  const initialCall = useRef(true);
  const [websiteData, setWebsiteData] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchWebsiteData = async () => {
    setIsLoading(true);
    try {
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        "https://v3.edkt.net/api/s/website/62a196794ed50566c7603b72/data",
        {
          headers: header,
        }
      );
      let data = await response.json();
      setWebsiteData(data);
    } catch (err) {
      console.log("Failed to Load Website Data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPageData = async () => {
    setIsLoading(true);
    try {
      let header = {
        apiHost: "https://vijethaiasacademyvja.com",
      };
      let response = await fetch(
        `https://v3.edkt.net/api/s/frontpage/contact`,
        {
          headers: header,
        }
      );
      let data = await response.json();
      setPageData(data);
    } catch (err) {
      console.log("Failed to Load Website Data:", err);
    } finally {
      setIsLoading(false);
    }
  };


  if (initialCall.current) {
    fetchWebsiteData();
    fetchPageData();
    initialCall.current = false;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }

  return (
    <div>

      {/* {/ {JSON.stringify(pageData)} /} */}
      <Enquiry enquiryDetail={websiteData?.website}  pageText={pageData}></Enquiry>
      {/* <section className="pageTitle bg-[#353535]">
        <div className="container mx-auto px-16">
          <div className="titleList md:flex justify-between flex-wrap">
            <div className="titleMsg1 text-[#fff] text-lg font-medium">
              Contact Us
            </div>
            <div className="titleMsg2 text-[#9da58c]">
              <p>
                <a href="">Home</a> / Contact Us
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}