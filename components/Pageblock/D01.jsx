import React from "react";

export default function D01({ basicPageData }) {
  return (
    <section>
      {/* {JSON.stringify(basicPageData)} */}
      <div className="container m-auto py-[2rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              {basicPageData?.length ? (
                <div>
                  {basicPageData.map((item, index) => (
                    <div key={index}>
                      <h2 className="mt-[1rem] text-[#2cb24b] text-center sm:text-left  text-[20px] sm:text-[22px]">
                        {item?.heading}
                      </h2>
                      <h3 className="text-center sm:text-left mt-[10px]   text-[16px] sm:text-[18px] font-semibold">
                        {item?.subHeading}
                      </h3>
                      {/* <div className="max-w-[300px] sm:max-w-full  overflow-auto"> */}
                      <div className="my-[1rem]">
                        <span
                          className="text-justify sm:text-left"
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>Page has no Data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
