import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
export default function Structure() {
  return (
    <section id="fee-structure">
      <div className="container m-auto py-[2rem] px-[10px] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <h1 className="text-[#1db24b] text-center sm:text-left text-[25px] sm:text-[28px] font-semibold">
                Fee Structure
              </h1>
              <div className="mt-[3rem]">
                <h2 className="text-[20px] mb-[1rem] text-center sm:text-left sm:text-[22px] font-semibold">
                  Classroom Courses
                </h2>
                <div>
                  <Accordion variant="splitted" className="accordion-tab">
                    <AccordionItem
                      key="1"
                      className="px-0 shadow-none rounded-0"
                      aria-label="ESE + GATE : 1yr Classroom Course"
                      title="ESE + GATE : 1yr Classroom Course"
                    >
                      <div className="px-[10px] sm:px-[16px] my-[10px]">
                        <table className="w-full border-collapse">
                          <thead className="bg-[#007339]">
                            <tr>
                              <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Program
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Branch
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Session
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Fee
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Regular Classroom Course
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Civil
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                2024-2025
                              </td>
                              <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Rs.99,500/-
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      className="px-0 shadow-none rounded-0"
                      aria-label="ESE + GATE : 1yr Extensive Course"
                      title="ESE + GATE : 1yr Extensive Course"
                    >
                      <div className="px-[10px] sm:px-[16px] my-[10px]">
                        <table className="w-full border-collapse">
                          <thead className="bg-[#007339]">
                            <tr>
                              <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Program
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Branch
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Session
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Fee
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Regular Classroom Course
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Civil
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                2024-2025
                              </td>
                              <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Rs.99,500/-
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      className="px-0 shadow-none rounded-0"
                      aria-label="ESE + GATE + SES(GS) : 1yr Classroom Course"
                      title="ESE + GATE + SES(GS) : 1yr Classroom Course"
                    >
                      <div className="px-[10px] sm:px-[16px] my-[10px]">
                        <table className="w-full border-collapse">
                          <thead className="bg-[#007339]">
                            <tr>
                              <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Program
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Branch
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Session
                              </th>
                              <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Fee
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Regular Classroom Course
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Civil
                              </td>
                              <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                2024-2025
                              </td>
                              <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                Rs.99,500/-
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ebf6f4] py-[1rem]">
        <div className="container m-auto py-[2rem] px-[10px] sm:px-[2rem] lg:px-[3rem]">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h2 className="text-[20px] mb-[1rem] text-center sm:text-left sm:text-[22px] font-semibold">
                    Online Courses
                  </h2>
                  <div>
                    <Accordion variant="splitted" className="accordion-tab">
                      <AccordionItem
                        key="1"
                        className="px-0 shadow-none rounded-0 "
                        aria-label="ESE + GATE : 1yr Classroom Course"
                        title="ESE + GATE : 1yr Classroom Course"
                      >
                        <div className="px-[10px] sm:px-[16px] my-[10px]">
                          <table className="w-full border-collapse">
                            <thead className="bg-[#007339]">
                              <tr>
                                <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Program
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Branch
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Session
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Fee
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Regular Classroom Course
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Civil
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  2024-2025
                                </td>
                                <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Rs.99,500/-
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        className="px-0 shadow-none rounded-0"
                        aria-label="ESE + GATE : 1yr Extensive Course"
                        title="ESE + GATE : 1yr Extensive Course"
                      >
                        <div className="px-[10px] sm:px-[16px] my-[10px]">
                          <table className="w-full border-collapse">
                            <thead className="bg-[#007339]">
                              <tr>
                                <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Program
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Branch
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Session
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Fee
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Regular Classroom Course
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Civil
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  2024-2025
                                </td>
                                <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Rs.99,500/-
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </AccordionItem>
                      <AccordionItem
                        key="3"
                        className="px-0 shadow-none rounded-0"
                        aria-label="ESE + GATE + SES(GS) : 1yr Classroom Course"
                        title="ESE + GATE + SES(GS) : 1yr Classroom Course"
                      >
                        <div className="px-[10px] sm:px-[16px] my-[10px]">
                          <table className="w-full border-collapse">
                            <thead className="bg-[#007339]">
                              <tr>
                                <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Program
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Branch
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Session
                                </th>
                                <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Fee
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Regular Classroom Course
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Civil
                                </td>
                                <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  2024-2025
                                </td>
                                <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                                  Rs.99,500/-
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container m-auto py-[2rem] px-[10px] sm:px-[2rem] lg:px-[3rem]">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h2 className="text-[20px] mb-[1rem] text-center sm:text-left sm:text-[22px] font-semibold">
                    Postal Study Packages
                  </h2>
                  <div className="study-table my-[10px]  overflow-auto  w-full">
                    <table className="w-full border-collapse min-w-[500px]">
                      <thead className="bg-[#007339]">
                        <tr>
                          <th className="border text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Branch
                          </th>
                          <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Session
                          </th>
                          <th className="border  text-[white] text-[12px] sm:text-[14px]  font-[500] text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Package Name
                          </th>
                          <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Checklist
                          </th>
                          <th className="border  text-[white] text-[12px] sm:text-[14px] font-[500] text-left pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Civil Engineering
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            2024-2025
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            GATE Study Material
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            <Link href="#" className="text-[#5fadde]">Download Checklist</Link>
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">Rs.16000/-</td>
                        </tr>
                        <tr>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Civil Engineering
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            2024-2025
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            GATE Study Material
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            <Link href="#" className="text-[#5fadde]">Download Checklist</Link>
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">Rs.16000/-</td>
                        </tr>
                        <tr>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            Civil Engineering
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            2024-2025
                          </td>
                          <td className="border  text-[12px] sm:text-[14px]  text-left  pt-[4px]pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            GATE Study Material
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">
                            <Link href="#" className="text-[#5fadde]">Download Checklist</Link>
                          </td>
                          <td className="border text-[12px] sm:text-[14px]  text-left  pt-[4px] pb-[8px] px-[6px] border-solid border-[#dddddd]">Rs.16000/-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
