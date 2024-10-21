import React from "react";
import Link from "next/link";
export default function Results() {
  return (
    <section className="pt-[2rem] pb-[2rem] sm:pt-[3rem] sm:pb-[4rem] px-[10px] lg:px-[2rem]  mb-[2rem]">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <h1 className="text-[21px] font-semibold mb-[1rem]">
                Our Results
              </h1>
              <div className="flex justify-start md:justify-between items-baseline md:items-center flex-col md:flex-row gap-[10px] w-full md:w-[58%] ">
                <div className="mb-[10px] md:mb-[0]">
                  <Link
                    href="#"
                    target="_blank"
                    className=" border-1 border-[lightgray] bg-white text-base rounded-[4px] px-[10px] pt-[4px] pb-[8px] hover:bg-[#e6e6e6] transition-all duration-[ease-in-out] delay-[0.3s]"
                  >
                    ESE Toppers
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    target="_blank"
                    className=" w-fit  border-1 border-[lightgray] bg-white text-base rounded-[4px] px-[10px] pt-[4px] pb-[8px] hover:bg-[#e6e6e6] transition-all duration-[ease-in-out] delay-[0.3s]"
                  >
                    GATE Toppers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
