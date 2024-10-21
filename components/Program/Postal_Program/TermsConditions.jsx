import React from "react";
import Link from "next/link";
export default function TermsConditions() {
  return (
    <section className="bg-[#EBF6F4] px-[10px] lg:px-[2rem] py-[2rem] sm:py-[3rem]">

<div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
             
      <div className="pl-[1rem]">
        <h3 className="text-xl font-medium">Terms & Conditions</h3>
        <ul className="list-disc pl-[1rem] text-sm  mt-3">
          <li>The Study Material will be dispatched in 2-3 lots.</li>
          <li>
            Current Affairs Magazine (Annual Edition) will be provided as soft
            copy in Student Portal.
          </li>
          <li>
            On receiving the Postal Study Package, students are required to
            thoroughly check the books.
          </li>
          <li>General Principles of Design, Drawing, Importance of Safety.</li>
          <li>
            Standard and Quality Practices in Production, Construction,
            Maintenance and Services.
          </li>
        </ul>
        <h3 className="font-bold text-[14px] mt-[1rem]">
          Note : Books will be dispatched at your registered address.{" "}
        </h3>
      </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
