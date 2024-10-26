import React, { useState } from "react";
import { SiWindows11 } from "react-icons/si";
import Link from "next/link";
import { getPageData } from "../../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("video-gallery");
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

export default function VideoGallery({ pageData }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      {/* {JSON.stringify(pageData)} */}
      <section className="mb-[2rem]">
        <div className="container">
          <div className="mt-20">
            <h2 className="text-2xl text-white font-bold w-max px-3 py-2 rounded-md bg-black">
            {pageData?.pageData?.title}
            </h2>
            <Link href="#" className="text-xs text-green-300">
              Home
            </Link>
            <span className="text-gray-300 pl-1 pr-1"> / </span>
            <a href="#" className="text-xs text-green-300">
              Gallery
            </a>
            <span className="text-gray-300 pl-1 pr-1"> / </span>
            <span className="text-xs text-gray-300">Video Gallery</span>
          </div>
        </div>

        <div className="w-full h-auto pb-[15px] bg-black">
          <div className="container">
            <div className="flex items-center  flex-wrap gap-[10px] pt-3">
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
               {pageData?.pageData?.title}
              </button>
              <Link href="#" className="text-sm text-white pl-4">
                ESE Testimonials
              </Link>
              <Link href="#" className="text-sm text-white pl-4">
                GATE Testimonials
              </Link>
            </div>
          </div>
        </div>
        {pageData?.contentBlock?.length && (
          <div>
            {pageData.contentBlock.map((item, index) => (
              <div key={index} className="container">
                <div className="border-1 border-r-2 border-green-600 mt-10">
                  <div className="px-3">
                    <div className="border-b-2 border-green-400">
                      <h1 className="text-black text-2xl pl-5 pt-5">
                        {item?.heading}
                      </h1>
                      <br></br>
                    </div>
                  </div>
                  {item?.advanceData?.data?.length > 0 && (
                    <div className="flex justify-center flex-wrap space-x-2 gap-4 pt-3 px-3 pb-3">
                      {item.advanceData.data.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <iframe
                            src={`https://www.youtube.com/embed/${subItem?.url}`}
                            title="YouTube video player"
                            className="aspect-video w-[90%] sm:w-[250px] h-[200px] sm:h-[140px]"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* <div className="flex justify-center flex-wrap space-x-2 gap-4 pt-3 px-3 pb-3">
                    <div>
                      <iframe
                        src="https://www.youtube.com/embed/inZDma5yCcQ?si=3r40PXTHPLvFr4S6"
                        title="YouTube video player"
                        className="aspect-video w-[90%] sm:w-[250px] h-[200px] sm:h-[140px]"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
