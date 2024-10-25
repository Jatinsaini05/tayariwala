import React from "react";

export default function Timing() {
  return (
    <section>
      <div className="px-[10px] lg:px-[2rem] py-[3rem] bg-[#ecfdf5]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h3 className="font-medium text-[20px]">Class Timing</h3>
                <div>
                  <span className="text-[14px] mt-[1rem] ">
                    <strong>Weekend Classroom Program:</strong> 08:30 AM to
                    07:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10px] lg:px-[2rem] py-[3rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h3 className="font-medium text-[20px]">Course Duration</h3>
                <div>
                  <span className="text-[25px] mt-[20px] "> 2 Years.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


