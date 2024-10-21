import React from "react";

export default function General() {
  return (
    <section className="px-[10px] lg:px-[2rem] py-[1rem] bg-[#ebf6f4]">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div>
                <h3 className="text-[18px] sm:text-xl font-semibold">
                  {" "}
                  General Terms for 2 Years Classroom Program
                </h3>
                <p className="pt-2">
                  <strong>General Terms & Conditions:-</strong>
                </p>
                <ul className="list-disc  text-sm mt-3 pl-[1rem]">
                  <li>
                    Under the two-year classroom program, subjects that have
                    been covered once would not be repeated.
                  </li>
                  <li>
                    Students are required to attend all the classes regularly
                    and punctually. Students are expected to cover all the
                    subjects during the duration of two-year classroom program
                    only.
                  </li>
                  <li>
                    The program would not be extended to cover subjects that the
                    students were unable to cover in two years.
                  </li>
                  <li>
                    If a student fails to attend any class due to some genuine
                    reasons such as semester exam, family emergency, etc. then
                    wherever possible the IES Master Management can arrange for
                    the missed classes at a later date.
                  </li>
                  <li>
                    IES Master Management reserves the right to set or amend the
                    schedule of the two-year classroom program.
                  </li>
                  <li>
                    Students’ intervention in planning the time schedule for
                    classroom program would not be entertained under any
                    circumstances.
                  </li>
                  <li>
                    IES Master reserves the right to cancel classes, amalgamate
                    classes, change class times or schedule, or change the
                    number of classes in a week if the need arises.
                  </li>
                  <li>Study Material/Books will be provided only once.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}
