import React from "react";
import Link from "next/link";
export default function Structure() {
  return (
    <section>
      <div className="py-[2rem] sm:py-[3rem] px-[10px] lg:px-[2rem] bg-[#ebf6f4]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h1 className="font-semibold text-[20px] ">Fee Structure</h1>
                </div>

                <div className="book-table mt-[1rem] overflow-auto">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#007339] text-[white]">
                        <th>Package</th>
                        <th>Category</th>
                        <th>Program Fee</th>
                        <th> GST (18%) </th>
                        <th>Study Material</th>
                        <th>Total Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Complete Package</td>
                        <td>Non-IES Master Students3</td>
                        <td>16525</td>
                        <td>2975</td>
                        <td>3000i</td>
                        <td>22500</td>
                      </tr>
                      <tr>
                        <td>Complete Package</td>
                        <td>Non-IES Master Students3</td>
                        <td>16525</td>
                        <td>2975</td>
                        <td>3000i</td>
                        <td>22500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-[14px] font-bold mt-[1rem]">Note:-</h3>
                <ul className="list-disc pl-[1rem] text-sm  mt-3">
                  <li>
                    Study Material will not be provided to Ex- IES Master
                    Students, however they can purchase it by paying the study
                    material fee.
                  </li>
                  <li>
                    Students enrolled in this course (In Complete Package Only)
                    will be provided ESE-2024 Prelims Test Series for FREE. See
                    the{" "}
                    <Link href="#" className="text-[#5698d0]">
                      Test Schedule
                    </Link>
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
