import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
export default function downloadAdmitcard() {
  const [dashboardDetail, setDashboardDetail] = useState(null);
  const [DashboardError, setDashboardError] = useState(null);
  useEffect(() => {
    const fetchDashboardDetail = async () => {
      try {
        let headers = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYzk1OTk3OTAyM2I3MzY1NjZiYzI0IiwiZmlyc3ROYW1lIjoiRURVS0lUIiwibGFzdE5hbWUiOiIgIiwiZW1haWwiOiJjbGN0ZWNub0BnbWFpbC5jb20iLCJtb2JpbGUiOiI5NjM2ODA3NjAwIiwidXNlcm5hbWUiOiI5NjM2ODA3NjAwIiwic3JuIjoiOTA3OTkwODQ4NyIsInR5cGUiOiJTVFVERU5UIiwiY2xpZW50IjoiNjRkODU4OGQ0MGM2NmMyMDMzODVlMWExIn0sImlhdCI6MTcyMzQzNTc0OSwiYXVkIjoiZXp1a2l0LmNvbSIsImlzcyI6IkV6dWtpdCJ9.K4Vb35Xnbfgtoh6jTs8sDQpH8cblHracrVMqtUikCP4",
        };
        let response = await fetch(
          "https://clctecno.com/api/student-manager/student/me?populateCourse=true",
          { headers: headers }
        );
        let data = await response.json();
        setDashboardDetail(data);
      } catch (err) {
        console.error("Failed to fetch dashboard details:", err);
        setDashboardError(err);
      }
    };
    fetchDashboardDetail();
  }, []);
  if (DashboardError) {
    return <div>Error loading dashboard details.</div>;
  }

  if (!dashboardDetail) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[80px] h-[80px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  const dateStr =
    dashboardDetail?.customParams?.centerDetails?.center1?.examDate;
  let formattedDate = "";
  if (dateStr) {
    formattedDate = new Date(dateStr.replace(/-/g, " ")).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  const dobStr = dashboardDetail?.dob;
  let formattedDob = "";
  if (dobStr) {
    formattedDob = new Date(dobStr)
      .toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .toUpperCase()
      .replace(",", ", ");
  }

  return (
    <div>
        {/* {JSON.stringify(dashboardDetail)} */}
      <section className=" py-8  px-[5px] lg:px-10">
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h3 className="text-center font-semibold  text-base mt-[1rem] md:mt-[0]">
                  श्री नाथ हरि भैरू ट्रस्ट के सौजन्य से
                </h3>
                <h1 className="text-center font-semibold  text-[20px] md:text-2xl mb-[10px] ">
                  ज्ञानोदय प्रारम्भिक मूल्यांकन परीक्षा...
                </h1>
                <p className="text-center font-semibold text-[18px] mb-[16px]">
                  Admit Card
                </p>
                <div className="grid grid-rows">
                  <div className="grid grid-cols-12  items-center">
                    <div className="col-span-8  sm:col-span-8  md:col-span-9  lg:col-span-10 xl:col-span-10 pr-[4px] sm:pr-2.5">
                      <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]  md:w-[52.9%] lg:w-[30%]   pl-[5px] text-left text-[11px] md:text-[14px]">
                              Roll No.
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {dashboardDetail?.srn}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]   md:w-[52.9%]  lg:w-[30%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Centre Code
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {
                                dashboardDetail?.customParams?.centerDetails
                                  ?.center1?.centerCode
                              }
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]   md:w-[52.9%]  lg:w-[30%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Candidate's Name
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {dashboardDetail?.firstName}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]  md:w-[52.9%]    lg:w-[30%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Father's Name
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px] text-[11px] md:text-[14px] ">
                              {dashboardDetail?.father?.name}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]   w-[60%]  md:w-[52.9%]   lg:w-[30%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Registered Mobile No
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {dashboardDetail?.mobile}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]   w-[60%]  md:w-[52.9%]   lg:w-[30%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Date Of Birth
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {formattedDob}
                            </td>
                          </tr>

                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]  md:w-[52.9%]  lg:w-[30%]   pl-[5px] text-left  text-[11px] md:text-[14px] ">
                              Gender
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {dashboardDetail?.gender}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  w-[60%]  md:w-[52.9%]  lg:w-[30%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                              Aadhar Number
                            </th>
                            <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                              {dashboardDetail?.aadhaarNo}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>

                    <div className="col-span-4  sm:col-span-4  md:col-span-3  lg:col-span-2 xl:col-span-2 pl-[4px] sm:pl-2.5">
                      <div className="w-full h-[140px] md:w-[140px] lg:w-full xl:w-[150px]  md:h-[155px]   border border-solid  border-[black]">
                        <p  className="w-full h-full text-[11px] px-[8px] text-center text-[gray]  flex justify-center items-center">Affix candidate recent colored photograph</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[1rem]">
                  <table className="border border-solid border-[black] border-collapse  w-full ">
                    <tr>
                      <th className="border border-solid border-[black]   w-[39%]   lg:w-[24.7%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                        Class
                      </th>
                      <th className="border border-solid border-[black]  text-left pl-[5px]  text-[11px] md:text-[14px] ">
                        {dashboardDetail?.majorCourse?.value}
                      </th>
                    </tr>
                    <tr>
                      <th className="border border-solid border-[black]    w-[39%]   lg:w-[24.7%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                        Exam Centre Name
                      </th>
                      <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                        {
                          dashboardDetail?.customParams?.centerDetails?.center1
                            ?.examCenterName
                        }
                      </th>
                    </tr>
                    <tr>
                      <th className="border border-solid border-[black]   w-[39%]   lg:w-[24.7%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                        Exam Centre Address
                      </th>
                      <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                        {
                          dashboardDetail?.customParams?.centerDetails?.center1
                            ?.examCenterAddress
                        }{" "}
                        <br />
                        {
                          dashboardDetail?.customParams?.centerDetails?.center1
                            ?.centerHelpline
                        }
                      </th>
                    </tr>
                    <tr>
                      <th className="border border-solid border-[black]   w-[39%]   lg:w-[24.7%]   pl-[5px] text-left   text-[11px] md:text-[14px] ">
                        Exam Date
                      </th>
                      <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                        {formattedDate}
                      </th>
                    </tr>
                    <tr>
                      <th className="border border-solid border-[black]   w-[39%]   lg:w-[24.7%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                        Timing
                      </th>
                      <th className="border border-solid border-[black]   text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                       { dashboardDetail?.customParams?.centerDetails?.center1?.examTime ?  dashboardDetail.customParams.centerDetails.center1.examTime : '10:00AM to 1:15PM' }  
                      </th>
                    </tr>
                  </table>
                </div>

                <div className="mt-4 mb-6">
                  <p className="text-[13px]  lg:text-base">
                    I <strong> EDUKIT </strong> do hereby, declare the
                    following:
                  </p>
                  <p className="my-2 text-[13px]  lg:text-base">
                    That, I have read information bulletin, Instructions, Terms
                    and Conditions related to this examination available on the
                    website <u>https://shrawanchoudhary.com</u>
                  </p>

                  <h3 className="my-2 font-semibold">
                    Mandatory at Exam Centre:
                  </h3>
                  <ol className=" pl-[30px] orderedListstyle text-[13px]  lg:text-base">
                    <li>Admit Card</li>
                    <li>Aadhar Card</li>
                  </ol>

                  <h3 className="my-2 font-semibold">Result Declaration:</h3>
                  <ol className="pl-[30px] orderedListstyle text-[13px]  lg:text-base">
                    <li>
                      17 January 2024 at 5:00 pm on{" "}
                      <u>https://shrawanchoudhary.com</u>
                    </li>
                  </ol>

                  <h3 className="my-2 font-semibold">Note:</h3>
                  <ol className=" pl-[30px] orderedListstyle text-[13px]  lg:text-base">
                    <li>
                      The Candidate has to paste latest colored Photo of his/her
                      own at the designed space.
                    </li>
                    <li>
                      No candidate shall be permitted to leave the Examination
                      Room/Hall before the end of the Examination.
                    </li>
                    <li>
                      On completion of the examination, please wait for
                      instructions from invigilator and do not get up from your
                      seat untill advised.
                    </li>
                    <li>
                      No candidate would be allowed to enter the Examination
                      Centre, Without Admit Card.
                    </li>
                    <li>
                      On Completion of the Exam, Candidates must hand over the
                      answer Sheet to the Invigilator.
                    </li>
                    <li>
                      If a Student is Found using unfair Means during the exam,
                      he/she will be disqualified for exam.
                    </li>
                    <li>
                      Any electronic device, log-table, calculator are not
                      allowed in exam hall.
                    </li>
                  </ol>
                </div>

                <div className="grid grid-rows">
                  <div className="grid grid-cols-12  items-center">
                    <div className="col-span-4  sm:col-span-4  md:col-span-4  lg:col-span-4 xl:col-span-4  border border-solid border-[rgb(137,137,137)]">
                      <h3 className="text-center font-semibold  pt-[8px] pb-[4rem]">
                        Invigilator's Signature
                      </h3>
                    </div>
                    <div className="col-span-4  sm:col-span-4  md:col-span-4  lg:col-span-4 xl:col-span-4  border border-solid border-[rgb(137,137,137)]">
                      <h3 className="text-center font-semibold pt-[8px] pb-[4rem]">
                        Candidate's Signature
                      </h3>
                    </div>
                    <div className="col-span-4  sm:col-span-4  md:col-span-4  lg:col-span-4 xl:col-span-4  border border-solid border-[rgb(137,137,137)]">
                      <h3 className="text-center font-semibold  pt-[8px] pb-[4rem]">
                        Guardian's Signature
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mt-3">Date:</h3>
                  <h3 className="font-semibold  mt-2">Time:</h3>
                </div>
                <div>
                  <button
                    onClick={() => window.print()}
                    className="print-hidden bg-[#0d6efd] text-[white] block mt-[1.5rem] mx-auto   w-[185px] text-center px-0 py-[3px] rounded-md pt-[5px] pb-[8px] hover:bg-[#0b5ed7] transition-all duration-[0.900ms] ease-[ease-in-out]"
                  >
                    Download Admit Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
