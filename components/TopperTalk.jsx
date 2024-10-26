import React, { useEffect, useState } from "react";

import { getTestimonial } from "../service/apiFetch";

const TopperTalk = () => {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const params = new URLSearchParams({
      category: "6718dbb5ca7058f51d756d3d",
    });
    try {
      const response = await getTestimonial(params);
      // console.log(response)
      const data = response;
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(videoApi)
  return (
    <div>
      {/* {JSON.stringify(apiData)} */}
      <div className="mt-10 bg-customEBF5F3 py-10">
        <div className="container">
          <h2 className="text-xl font-bold mb-3">Topper's Talk</h2>
          <div className="flex  flex-wrap justify-center md:justify-between items-center gap-4 sm:gap-2">
            {apiData?.map((item, index) => (
              <div className="w-full sm:w-[48%] lg:w-[32%] mx-auto" key={index}>
                <iframe
                  className="w-full aspect-video"
                  height="250"
                  src={`https://www.youtube.com/embed/${item.message}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopperTalk;
