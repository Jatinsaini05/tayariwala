import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MetaTags from "../components/MetaTags";
export default function Downloads() {
  const [apiData, setApiData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [displayCount, setDisplayCount] = useState(0);
  const [isloading , setIsloading] = useState(false)


  // Fetch main API data (categories)
  let downloadApi = async () => {
    setIsloading(true)
    try {
      let params = new URLSearchParams({
        contentBlock: "Object",
      });

      let response = await fetch(
        `https://v3.edkt.net/api/s/frontpage/downloads? ${params.toString()}`,
        {
          headers: {
            apihost: "https://vijethaiasacademyvja.com/",
          },
        }
      );
      let data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch data for a specific category or all data if no categoryId is provided
  const downloadCategory = async (categoryId) => {
    try {
      let url = categoryId
        ? `https://v3.edkt.net/api/s/download?category=${categoryId}`
        : `https://v3.edkt.net/api/s/download`; 
      let response = await fetch(url, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });
      let newRes = await response.json();
      setCategoryData(newRes || []); 
      setDisplayCount(newRes.length || 0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false)
    }
  };

  useEffect(() => {
    downloadApi(); 
  }, []);

  useEffect(() => {
    downloadCategory(categoryId); 
  }, [categoryId]);

  if (isloading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }

  return (
    <div>
       <MetaTags
        title={props?.apiData?.pageData?.metaTags?.ogTitle}
        keywords={props?.apiData?.pageData?.metaTags?.keywords}
        description={props?.apiData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
      <section className="sec2">
        <div className="container mx-auto px-16">
          <div className="flex flex-wrap justify-between py-2">
            <div className="select flex gap-2 col-span-2">
              <label className="py-1 md:text-lg text-sm font-bold">Filter:</label>

              <select
                name=""
                id=""
                className="md:text-lg text-sm py-1 md:px-8 px-2 bg-transparent border border-[black]  rounded"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">All Categories</option>
                {apiData?.contentBlock?.DOWNLOAD_HEADING?.advanceData?.categoriesData.map(
                  (item, index) => (
                    <option
                      value={item.id}
                      key={index}
                      className="hover:bg-[#0c4270]"
                    >
                      {item.title}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <div className="title-result text-end flex flex-wrap">
                <p className="text-sm ">TOTAL {displayCount} RESULTS FOUND</p>
              </div>
            </div>
          </div>

          <div className="heading py-2">
            <h3 className="text-center md:text-3xl text-lg font-bold text-[#0c4270]">
              {apiData?.contentBlock?.DOWNLOAD_HEADING?.heading}
            </h3>
            <div className="border-b-2 w-[10%] mx-auto border-[#104270] py-1"></div>
          </div>

          {/* Display all data or filtered category data */}
          <div className="grid md:grid-cols-2 text-center gap-8 py-4">
            {categoryData.map((item, index) => (
              <div
                className="choice-block py-4 bg-[#f5f5f5] rounded"
                key={index}
              >
                <h3 className="md:text-xl text-lg font-bold py-4 px-2 mb-4">
                  {item.title}
                </h3>
                <Link
                  href={item.fileUrl}
                  target="_blank"
                  className="px-4 rounded-lg mb-2 py-2 bg-[#0c4270] text-white"
                >
                  Download Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
