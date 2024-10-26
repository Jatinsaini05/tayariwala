import React, { useState } from "react";
import { SiWindows11 } from "react-icons/si";
import { getPageData } from "../../service/apiFetch";

export const getStaticProps = async () => {
  try {
    const res = await getPageData("photo-gallery");
    const pageData = res;
    return {
      props: {
        pageData,
      },
    };
  } catch (err) {
    console.log("Error", err);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

export default function PhotoGallery({ pageData }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <section className="mb-[2rem]">
        <div className="container">
          <div className="mt-20">
            <h2 className="text-2xl text-white font-bold w-max px-3 py-2 rounded-md bg-black">
            {pageData?.pageData?.title}
            </h2>
            <a href="#" className="text-xs text-green-300">
              Home
            </a>
            <span className="text-gray-300 pl-1 pr-1"> / </span>
            <a href="#" className="text-xs text-green-300">
              Gallery
            </a>
            <span className="text-gray-300 pl-1 pr-1"> / </span>
            <span className="text-xs text-gray-300"> {pageData?.pageData?.title}</span>
          </div>
        </div>

        <div className="w-full h-10 bg-black">
          <div className="container">
            <div className="flex items-center space-x-2 pt-3">
              <SiWindows11
                className={`transition-colors duration-300 ${
                  isClicked ? "text-white" : "text-gray-500 hover:text-white"
                }`}
                size={16}
              />
              <button
                onClick={handleClick}
                className={`text-base transition-colors duration-300 ${
                  isClicked ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Photo Gallery
              </button>

              <button className="text-xs text-white pl-4">Videos</button>
            </div>
          </div>
        </div>

        {pageData?.contentBlock?.length > 0 && (
          <div>
            {pageData.contentBlock.map((item, index) => (
              <div className="container" key={index}>
                <div className="border-1 border-r-2 border-green-600 mt-10">
                  <div className="px-3">
                    <div className="border-b-2 border-green-400">
                      <h1 className="text-black text-2xl pl-5 pt-5">
                        {item?.heading}
                      </h1>
                      <br />
                    </div>
                  </div>
                  {item?.advanceData?.data?.length > 0 && (
                    <div className="flex justify-center flex-wrap space-x-2 gap-2 pt-3 sm:pl-4 pb-3">
                      {item.advanceData.data.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <img
                            src={subItem?.url}
                            alt="Image"
                            className="w-28 h-28 border-1 p-1 border-black"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
