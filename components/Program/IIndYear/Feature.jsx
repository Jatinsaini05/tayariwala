import React from "react";

export default function Feature() {
  return (
    <section className="px-[10px] lg:px-[2rem] py-[1rem] bg-[#ebf6f4]">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div>
                <h3 className="text-xl font-bold"> Features</h3>

                <ul className="list-disc pl-[1rem] text-sm  mt-3">
                  <li className="pb-[7px]">
                    {" "}
                    Carefully designed program that also complements semester
                    grades
                  </li>
                  <li className="pb-[7px]">
                    Saves you from final year blues of campus placement
                  </li>
                  <li className="pb-[7px]">
                    Gives you a head-start to a fulfilling and satisfying career
                  </li>
                  <li className="pb-[7px]">
                    Ideal for those in college, in job, or short on time
                  </li>
                  <li className="pb-[7px]">
                    {" "}
                    Crafted and customised material for complete guidance
                  </li>
                  <li className="pb-[7px]">
                    Classrooms by highly experienced faculty, IITians, and
                    ESE/GATE rankers
                  </li>
                  <li className="pb-[7px]">
                    Regular tests followed by comprehensive doubt clearing
                    mechanism
                  </li>
                  <li className="pb-[7px]">Timely completion of syllabus</li>
                  <li className="pb-[7px]">
                    A learning ecosystem that keeps you motivated in a competing
                    environment
                  </li>
                  <li className="pb-[7px]">
                    Let opportunities chase you rather than you looking for
                    opportunities
                  </li>
                  <li className="pb-[7px]">
                    Pursue your passion while others are after placements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
