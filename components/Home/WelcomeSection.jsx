import { Link } from "@nextui-org/link";
import React from "react";

const Welcome = ({ welcomeData }) => {
  return (
    <div>
      <div className="container mt-5 ">
        <h1 className="text-green-500 text-lg font-lato font-semibold">
          {welcomeData?.contentBlock?.ABOUT_US?.heading}
        </h1>
        <hr className="mt-1" />

        <div
          dangerouslySetInnerHTML={{
            __html: welcomeData?.contentBlock?.ABOUT_US?.content,
          }}
        />
        <div className="btn">
          {welcomeData?.contentBlock?.ABOUT_US?.buttons
            ? welcomeData.contentBlock.ABOUT_US.buttons.map((item, ind) => (
                <Link
                  key={ind}
                  href={item.link}
                  className="ml-3 border inline border-green-700 rounded-sm text-white bg-green-600 px-1 hover:bg-green-700 text-xs"
                >
                  Read More
                </Link>
              ))
            : "data not found"}
        </div>
      </div>
      <div className="mt-11 bg-emerald-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {welcomeData?.contentBlock?.SECOND_IMAGES?.advanceData?.data
            ? welcomeData.contentBlock.SECOND_IMAGES.advanceData.data.map(
                (itm, ind) => (
                  <a href="#" className="mb-4 md:mb-0" key={ind}>
                    <img
                      src={itm.thumb}
                      className="w-full md:w-[360px] h-auto md:h-44 shadow-md rounded"
                      alt="Image"
                    />
                  </a>
                )
              )
            : "images not found"}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
