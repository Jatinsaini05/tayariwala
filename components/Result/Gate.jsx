import React, { useState } from "react";
import { FaWindows } from "react-icons/fa";
export default function Gate() {
  const [tab, setTab] = useState(0);
  const images = new Array(10).fill("/images/GateStd_1.jpg");
  return (
    <section className="py-[2rem]">
      <div className='bg-[url("/images/Result_background.jpg")] bg-cover bg-no-repeat w-full pt-[3rem] pb-[0]'>
        <div className="container m-auto py-[2rem] px-[10px] sm:px-[2rem] lg:px-[3rem]">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h1 className="bg-[#2d2c2c] font-[500] text-[20px] sm:text-[23px] pt-[2px] pb-[3px] px-[25px] text-[white] rounded-[2px] w-fit">
                  GATE Result
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2d2c2c]">
          <div className="container m-auto pt-[7px] pb-[9px] px-[10px] sm:px-[2rem] lg:px-[3rem]">
            <div className="grid grid-rows">
              <div className="grid grid-cols-12">
                <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                  <div className="flex  gap-[10px] justify-center  sm:justify-start sm:gap-[2rem] items-center flex-wrap">
                    <div className="flex gap-[5px] text-[#9a9c9d]  hover:text-[white] items-center">
                      <FaWindows className="text-[20px]" />
                      <span className="text-[20px]">Gate Result</span>
                    </div>
                    <div className="flex gap-[10px] items-center  flex-wrap">
                      <div>
                        <span className="text-[white]">2024</span>
                      </div>
                      <div>
                        <span className="text-[white]">2023</span>
                      </div>
                      <div>
                        <span className="text-[white]">2022</span>
                      </div>
                      <div>
                        <span className="text-[white]">2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto py-[2rem] px-[10px] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className="shadow-[1px_1px_5px_4px_#EEEEEE] py-[1rem] px-[10px]">
                <h2 className="border-b border-[lightgray] border-solid text-[21px] mb-[1rem] text-center sm:text-left font-semibold pb-[10px]">
                  GATE 2024 Toppers
                </h2>
                <div className="flex items-center flex-wrap w-full gap-[10px] justify-center mt-[2rem]">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className="w-[46%] sm:w-[18%] lg:w-[14%] xl:w-[11%]"
                    >
                      <img
                        className="w-full h-full shadow-[1px_1px_1px_1px_rgb(228,228,228)]"
                        src={src}
                        alt={`Student ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="shadow-[1px_1px_5px_4px_#EEEEEE] py-[1rem] px-[10px] mt-[2rem]">
                <h2 className="border-b border-[lightgray] border-solid text-[21px] mb-[1rem] text-center sm:text-left font-semibold pb-[10px]">
                  GATE 2023 Toppers
                </h2>
                <div className="flex relative gap-[10px] flex-wrap sm:flex-nowrap items-center justify-start parent-div">
                  <div>
                    <button
                      className={`${tab === 0 ? "text-[black] border-t-[lightgray] border-x-[lightgray] border-t border-solid border-l border-r py-[3px] px-[12px] rounded-t-[6px]  rounded-t-md relative z-10 active-button" : "text-[#4585bd] z-0"}`}
                      onClick={() => setTab(0)}
                    >
                      CE
                    </button>
                  </div>
                  <div>
                    <button
                      className={`${tab === 1 ? "text-[black] border-t-[lightgray] border-x-[lightgray] border-t border-solid border-l border-r py-[3px] px-[12px] rounded-t-[6px]  rounded-t-md relative z-10 active-button" : "text-[#4585bd] z-0"}`}
                      onClick={() => setTab(1)}
                    >
                      ME
                    </button>
                  </div>
                  <div>
                    <button
                      className={`${tab === 2 ? "text-[black] border-t-[lightgray] border-x-[lightgray] border-t border-solid border-l border-r py-[3px] px-[12px] rounded-t-[6px]  rounded-t-md relative z-10 active-button" : "text-[#4585bd] z-0"}`}
                      onClick={() => setTab(2)}
                    >
                      EE
                    </button>
                  </div>
                </div>
                {tab === 0 && (
                  <div className="mt-[2rem]">
                    <div className="flex items-center flex-wrap w-full gap-[10px] justify-center">
                      {images.map((src, index) => (
                        <div
                          key={index}
                          className="w-[46%] sm:w-[18%] lg:w-[14%] xl:w-[11%]"
                        >
                          <img
                            className="w-full h-full shadow-[1px_1px_1px_1px_rgb(228,228,228)]"
                            src={src}
                            alt={`Student ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {tab === 1 && (
                  <div className="mt-[2rem]">
                    <div className="flex items-center flex-wrap w-full gap-[10px] justify-center">
                      {images.map((src, index) => (
                        <div
                          key={index}
                          className="w-[46%] sm:w-[18%] lg:w-[14%] xl:w-[11%]"
                        >
                          <img
                            className="w-full h-full shadow-[1px_1px_1px_1px_rgb(228,228,228)]"
                            src={src}
                            alt={`Student ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {tab === 2 && (
                  <div className="mt-[2rem]">
                    <div className="flex items-center flex-wrap w-full gap-[10px] justify-center">
                      {images.map((src, index) => (
                        <div
                          key={index}
                          className="w-[46%] sm:w-[18%] lg:w-[14%] xl:w-[11%]"
                        >
                          <img
                            className="w-full h-full shadow-[1px_1px_1px_1px_rgb(228,228,228)]"
                            src={src}
                            alt={`Student ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
