import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "@nextui-org/react";
export default function Detail({ programDetail }) {
  return (
    <div>
      {/* {JSON.stringify(programDetail?.desci)}  */}
      <section className="sec-2 py-4">
        <div className="container mx-auto px-4 sm:px-4  md:px-8 lg:px-16 py-4">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 mt-[20px]">
              {programDetail?.desci && (
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 mb-[2rem]">
                  <div>
                  <span dangerouslySetInnerHTML={{ __html: programDetail.desci }}></span>
                  </div>
                </div>
              )} 
             
             

               <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 mb-[2rem]">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0c4270]">
                    {programDetail?.name}
                  </h3>
                </div>

                <div className="border-b-2 border-[#0c4270] w-[30%] md:w-[20%] mx-auto md:mx-0 mt-[8px]"></div>
                <div className="flex flex-col py-4">
                  {programDetail?.thumb && (
                    <div>
                      <img
                        src={programDetail.thumb}
                        className="w-full md:w-96 h-auto shadow-[0px_0px_3px_-1px_#0c4270] rounded-[8px] "
                        alt="Degree Coaching"
                      />
                    </div>
                  )}

                  <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
                    <div className="costAMt w-full md:w-96 text-center py-2">
                      <h3 className="flex items-center justify-center  text-lg text-white bg-[#ff9605] rounded-[6px] py-3 px-8">
                        Cost: <FaRupeeSign className="text-white ml-2" />
                        {programDetail?.cost}/-
                      </h3>
                    </div>
                    <div className="btn mt-4 md:mt-0 md:ml-[150px]">
                      <div className="bg-black hover:bg-[#2f4285] text-white px-4 rounded pt-1 pb-2 text-sm">
                        <Link className="text-white"  href={`/buy/${programDetail?.linkedProduct}`}>
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
