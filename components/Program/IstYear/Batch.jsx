import React from "react";
import Link from "next/link";
export default function Batch({batch}) {

 
  // console.log(newData)
  return (
    <section>
      <div className="px-[10px] lg:px-[2rem]  py-[2rem] sm:py-[3rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div dangerouslySetInnerHTML={{ __html: batch?.programData?.linkedBatchProduct?.content}} className=" mt-3 sm:mt-6"/>
                {/* <h1 className="text-center sm:text-left text-[23px] text-[#333333] font-semibold mb-[10px]">
                  New Batch for Classroom Program
                </h1>
                <div>
                  <Link
                    href="https://iesmaster.org/upcoming-batches"
                    target="_blank"
               
                    className="mx-auto sm:mx-[0] w-fit hover:bg-[#286090]  block px-2 pt-1 pb-[8px] bg-[#337ab7] text-white font-normal rounded-md  text-base transition-all duration-[0.4s] ease-[ease-in-out]"
                  >
                    Click here to view Upcoming Batches
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[10px] lg:px-[2rem] py-[2rem] sm:py-[3rem] bg-[#ebf6f4]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div dangerouslySetInnerHTML={{ __html: batch?.programData?.feeStructure?.content}} className="inner-html-box mt-3 sm:mt-6"/>
                {/* <h1 className="text-center sm:text-left  text-[23px] text-[#333333] font-semibold mb-[10px]">
                  Fee Structure of classroom Program
                </h1>
                <div>
                  <Link
                    href="https://iesmaster.org/upcoming-batches"
                    target="_blank"
                    //   rel="noopener noreferrer"
                    className="mx-auto sm:mx-[0] w-fit hover:bg-[#286090]  block px-2 pt-1 pb-[8px] bg-[#337ab7] text-white font-normal rounded-md  text-base transition-all duration-[0.4s] ease-[ease-in-out]"
                  >
                    Click here to view Fee Structure
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
