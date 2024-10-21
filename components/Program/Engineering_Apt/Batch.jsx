import React from "react";
import Link from "next/link";
export default function Batch() {
  return (
    <section>
      <div className="py-[2rem] sm:py-[3rem] px-[10px] lg:px-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h1 className="font-semibold text-[20px] ">
                    Upcoming Batches
                  </h1>
                </div>
                <div className="mt-[1rem] flex gap-[5px]  flex-wrap justify-center  lg:justify-start items-center">
                  <div>
                    <h3 className=" text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] border-2 border-[#33a037] bg-[#d7f9d3]">
                      Offline Batch
                    </h3>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="border-1 border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#eee] transition-all duration-[850ms] ease-[ease-in-out]"
                    >
                      Online Batch
                    </Link>
                  </div>
                </div>
                <div className="book-table mt-[1rem] overflow-auto">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#007339] text-[white]">
                        <th> Batch</th>
                        <th> Start Date</th>
                        <th> Timing</th>
                        <th>Admission Status</th>
                        <th> Venue</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GS (Regular Batch)</td>
                        <td> 10th Jul' 23</td>
                        <td>08:00 AM - 02:30 PM</td>
                        <td>Admission Open</td>
                        <td>New Delhi</td>
                        <td>
                          <Link href="#" className="text-[#5698d0]">
                            Enroll
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-[14px] font-bold mt-[1rem]">
                  Note:- Classes may be conducted 03 to 06 hrs daily between
                  08:00 AM to 02:30 PM
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
