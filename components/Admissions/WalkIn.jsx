import React from "react";

const WalkIn = ({ topSection }) => {
  return (
    <div>
     
      <div>
        <img
          src={topSection?.bannerImg}
          alt="classroom course image"
          className="w-full"
        ></img>
      </div>
      <div className="container m-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12">
              <h1 className="text-green-500 font-semibold text-3xl mt-4 mb-8">
                {topSection?.content?.heading}
              </h1>
            </div>
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 ">
              <div
                className="inner-html-box"
                dangerouslySetInnerHTML={{
                  __html: topSection?.content?.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkIn;
