import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
export default function index() {
  const [tab, setTab] = useState(0);
  const [subject, setsubject] = useState(0);
  const [dashboardDetail, setDashboardDetail] = useState(null);
  const [examAnswerdetail, setexamAnswerdetail] = useState(null);
  const [videoSolutionDetail, setVideoSolutionDetail] = useState(null);
  const [DashboardError, setDashboardError] = useState(null);
  const [examAnswerError, setExamAnswerError] = useState(null);
  const [videoSolutionError, setVideoSolutionError] = useState(null);
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

    const fetchExamAnswerdetail = async () => {
      try {
        let param = new URLSearchParams({
          list: "6547373dd4e48179f10c17ba",
          limit: "all",
          status: "true",
          sortField: "order",
          sortOrder: "ASC",
        });
        let response = await fetch(
          `https://v3.edkt.net/api/s/webberlistitem?${param}`,
          {
            headers: {
              apihost: "https://clctecno.com",
            },
          }
        );
        let data = await response.json();
        setexamAnswerdetail(data);
      } catch (err) {
        console.error("Failed to fetch examAnswerdetail:", err);
        setExamAnswerError(err);
      }
    };

    const fetchVideoSulution = async () => {
      try {
        let param = new URLSearchParams({
          list: "654bada7d286650dc00692ac",
          limit: "all",
          status: "true",
          sortField: "order",
          sortOrder: "ASC",
        });
        let response = await fetch(
          `https://v3.edkt.net/api/s/webberlistitem?${param}`,
          {
            headers: {
              apihost: "https://clctecno.com",
            },
          }
        );
        let data = await response.json();
        setVideoSolutionDetail(data);
      } catch (err) {
        console.log("Failed to fetch examAnswerdetail:", err);
        setVideoSolutionError(err);
      }
    };

    fetchDashboardDetail();
    fetchExamAnswerdetail();
    fetchVideoSulution();
  }, []);

  if (DashboardError) {
    return <div>Error loading dashboard details.</div>;
  }
  if (examAnswerError) {
    return <div>Error loading examAnswer details.</div>;
  }
  if (videoSolutionError) {
    return <div>Error loadingvideoSolution details.</div>;
  }
  if (!dashboardDetail) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[80px] h-[80px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  if (!examAnswerdetail) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  if (!videoSolutionDetail) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid "></div>
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
    <>
      {/* {JSON.stringify(dashboardDetail)} */}
      <section id="dashboard" className=" py-4 md:px-10">
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-4  lg:col-span-4 xl:col-span-4  px-2.5">
                <div className="bg-[#e6edf4] py-8 pl-[16px] pr-[16px]  h-full">
                  <div className="flex flex-col">
                    <button
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 0 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                      onClick={() => setTab(0)}
                    >
                      Dashboard <FaAngleRight />
                    </button>
                    <button
                      onClick={() => setTab(1)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 1 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Profile <FaAngleRight />
                    </button>
                    <button
                      onClick={() => setTab(2)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 2 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Exam Result <FaAngleRight />
                    </button>
                    <button
                      onClick={() => setTab(3)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 3 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Student's Answer Key <FaAngleRight />
                    </button>

                    <button
                      onClick={() => setTab(4)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 4 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Exam Paper Answer Key <FaAngleRight />
                    </button>

                    <button
                      onClick={() => setTab(5)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 5 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Exam Paper Video Solution <FaAngleRight />
                    </button>

                    <button
                      onClick={() => setTab(6)}
                      className={`mb-1 text-left text-[17px] pb-1.5  border-b border-solid flex items-center justify-between gap-8 ${tab === 6 ? "text-[#2196f3] border-b-[#2196f3]" : "border-b-[lightgray]"}`}
                    >
                      Admit Card <FaAngleRight />
                    </button>
                  </div>
                </div>
              </div>
              {tab == 0 && (
                <div className="col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <h1 className="text-[25px]  sm:text-[28px] mt-[20px]  md:mt-0     font-semibold border-b [#cfcfcf] border-b  border-solid pb-[10px]">
                    CLC TECHNO 2024
                  </h1>
                  <div className="bg-[#d1e7dd] mt-3 border-1  border-[#badbcc] border-solid py-[16px] px-2.5  rounded-md">
                    <p className="text-[#0f5132]  text-[17px]">
                      Your have registered for CLC Tecno 2024.
                    </p>
                  </div>

                  <div className="mt-4">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Roll Number
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.srn}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            Studying Class
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.majorCourse?.value}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            Exam Mode
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.customParams?.examDetail?.mode}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Exam Date
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {formattedDate}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            Exam Center Name
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            <strong>
                              {" "}
                              {
                                dashboardDetail?.customParams?.centerDetails
                                  ?.center1?.examCenterName
                              }
                            </strong>{" "}
                            <br />
                            {
                              dashboardDetail?.customParams?.centerDetails
                                ?.center1?.examCenterAddress
                            }
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Exam Center
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            CENTER CODE :{" "}
                            <strong>
                              {
                                dashboardDetail?.customParams?.centerDetails
                                  ?.center1?.centerCode
                              }{" "}
                              <br />
                            </strong>
                            {
                              dashboardDetail?.customParams?.centerDetails
                                ?.center1?.dist
                            }
                            ,{" "}
                            {
                              dashboardDetail?.customParams?.centerDetails
                                ?.center1?.tehsil
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {tab == 1 && (
                <div className="col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <div className="mt-4">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border text-left p-2 border-solid border-[#dddddd]">
                          <td>
                            <div className="w-[160px] h-[160px] border m-[5px] border-solid border-[#dddddd] rounded-[10px]">
                              <img
                                src={dashboardDetail?.personalImg}
                                alt="Photo"
                                className="w-full h-full rounded-[10px]"
                              ></img>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Your Name
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.firstName}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            Father Name
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.father?.name}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            Mobile
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.mobile}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Gender
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.gender}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                            DOB
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.dob}
                          </td>
                        </tr>
                        <tr>
                          <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                            Address
                          </th>
                          <td className="border text-left p-2 border-solid border-[#dddddd]">
                            {dashboardDetail?.address?.landmark} ,{" "}
                            {dashboardDetail?.address?.city},{" "}
                            {dashboardDetail?.address?.state}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {tab == 2 && (
                <div className=" mt-[16px]  sm:mt-[0]   col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <div>
                    <p className="text-center">
                      {" "}
                      Click the link below to see your result!
                    </p>
                    <div>
                      <Link
                        href="/student-result"
                        className="bg-[#0d6efd] rounded-[5px] text-[white] w-fit mt-[2rem] mx-auto block pt-[5px] pb-2 px-5  hover:bg-[#8e272c] transition-[0.5s] duration-[all] ease-[ease-in-out]"
                      >
                        View Result
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {tab == 3 && (
                <div className="col-span-12  mt-[16px]  sm:mt-[0]  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <div>
                    <p className="text-center pb-[8px] border-b-[black] border-b-[2px] border-solid">
                      {" "}
                      Student's OMR Sheet
                    </p>

                    <div className="w-full h-full mt-4">
                      <img
                        src="images/rollno.jpg"
                        alt="OMR Sheet"
                        className="w-full h-full"
                      ></img>
                    </div>
                  </div>
                </div>
              )}

              {tab == 4 && (
                <div className="col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <div>
                    <p className="text-center text-[17px] mb-[20px] mt-[20px] md:mt-[0] ">
                      Answer Key for Exam conducted on 05-Nov-2023
                    </p>
                    <div className="flex aligned-center gap-[2px] flex-wrap justify-center md:justify-start mb-[1rem]">
                      <div>
                        <button
                          onClick={() => setsubject(0)}
                          className={`uppercase w-[145px] text-[17px] mb-[10px]  pt-[2px] pb-[4px] px-[16px] text-[white] rounded-[4px] ${subject == 0 ? " bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)]" : "bg-[#2f4281]"}`}
                        >
                          Mathematics
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setsubject(1)}
                          className={`uppercase w-[145px] text-[17px] mb-[10px]  pt-[2px] pb-[4px] px-[16px] text-[white] rounded-[4px] ${subject == 1 ? "bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)]" : "bg-[#2f4281]"}`}
                        >
                          Mat
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setsubject(2)}
                          className={`uppercase w-[145px] text-[17px] mb-[10px]  pt-[2px] pb-[4px] px-[16px] text-[white] rounded-[4px] ${subject == 2 ? "bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)]" : "bg-[#2f4281]"}`}
                        >
                          Physics
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setsubject(3)}
                          className={`uppercase w-[145px] text-[17px] mb-[10px]  pt-[2px]  pb-[4px] px-[16px] text-[white] rounded-[4px] ${subject == 3 ? "bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)]" : "bg-[#2f4281]"}`}
                        >
                          Chemistry
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setsubject(4)}
                          className={`uppercase w-[145px] text-[17px] mb-[10px]  pt-[2px]  pb-[4px] px-[16px] text-[white] rounded-[4px] ${subject == 4 ? "bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)]" : "bg-[#2f4281]"}`}
                        >
                          Biology
                        </button>
                      </div>
                    </div>

                    {subject == 0 && (
                      <div>
                        <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                          {examAnswerdetail[0]?.title}
                        </h3>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: examAnswerdetail[0]?.desci,
                          }}
                        />

                        {/* <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              Q.No.
                            </th>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              Ans
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[[13px]">
                              1
                            </th>
                            <td className="border border-solid border-[black] text-center text-[[13px]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              2
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              2
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              3
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              3
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              4
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              4
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              5
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              5
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              6
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              6
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              7
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              7
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              8
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              8
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              9
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              9
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              10
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              10
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              11
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              11
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              12
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              12
                            </td>
                          </tr>
                        </table>
                      </div> */}
                      </div>
                    )}
                    {subject == 1 && (
                      <div>
                        <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px] text-center mb-[1rem] text-[#3c3c3c]">
                          {examAnswerdetail[1]?.title}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: examAnswerdetail[1]?.desci,
                          }}
                        />
                        {/* <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              Q.No.
                            </th>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              Ans
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[[13px]">
                              1
                            </th>
                            <td className="border border-solid border-[black] text-center text-[[13px]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              2
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              2
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              3
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              3
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              4
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              4
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              5
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              5
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              6
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              6
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              7
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              7
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              8
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              8
                            </td>
                          </tr>
                        </table>
                      </div> */}
                      </div>
                    )}
                    {subject == 2 && (
                      <div>
                        <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                          {examAnswerdetail[2]?.title}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: examAnswerdetail[2]?.desci,
                          }}
                        />
                        {/* <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              Q.No.
                            </th>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              Ans
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[[13px]">
                              1
                            </th>
                            <td className="border border-solid border-[black] text-center text-[[13px]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              2
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              2
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              3
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              3
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              4
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              4
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              5
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              5
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              6
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              6
                            </td>
                          </tr>
                        </table>
                      </div> */}
                      </div>
                    )}
                    {subject == 3 && (
                      <div>
                        <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                          {examAnswerdetail[3]?.title}
                        </h3>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: examAnswerdetail[3]?.desci,
                          }}
                        />

                        {/* <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              Q.No.
                            </th>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              Ans
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[[13px]">
                              1
                            </th>
                            <td className="border border-solid border-[black] text-center text-[[13px]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              2
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              2
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              3
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              3
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              4
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              4
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              5
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              5
                            </td>
                          </tr>
                        </table>
                      </div> */}
                      </div>
                    )}

                    {subject == 4 && (
                      <div>
                        <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                          {examAnswerdetail[4]?.title}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: examAnswerdetail[4]?.desci,
                          }}
                        />

                        {/* 
                      <div>
                        <table className="border border-solid border-[black] border-collapse  w-full ">
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              Q.No.
                            </th>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              Ans
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[[13px]">
                              1
                            </th>
                            <td className="border border-solid border-[black] text-center text-[[13px]">
                              1
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              2
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              2
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black] bg-[#c5d9f1] text-[13px]">
                              3
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              3
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              4
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              4
                            </td>
                          </tr>
                        </table>
                      </div> */}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {tab == 5 && (
                <div className="col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
                  <p className="text-center text-[17px] mb-[20px] mt-[20px] md:mt-[0] ">
                    Video solutions of the exam conducted on 05-Nov-2023
                  </p>
                  <div>
                    <button
                      className="w-[145px] text-[17px] block mx-auto mb-[2rem] pb-[4px] px-[16px] text-[white] rounded-[4px] bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)] 
                   "
                    >
                      {videoSolutionDetail[0]?.title}
                    </button>
                  </div>
                  <div>
                    <iframe
                      className=" block m-auto w-full h-[315px] lg:w-[80%] xl:w-[70%]"
                      src={`https://www.youtube.com/embed/${videoSolutionDetail[0]?.link}?si=bq8gENRth2uwKgor`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              )}

              {tab == 6 && (
                <div className="col-span-12  sm:col-span-12  md:col-span-8  lg:col-span-8 xl:col-span-8 px-2.5">
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
                      <div className="col-span-8  sm:col-span-8  md:col-span-10  lg:col-span-9 xl:col-span-9 mr-[3px] md:pr-2.5">
                        <div>
                          <table className="border border-solid border-[black] border-collapse  w-full ">
                            <tr>
                              <th className="border border-solid border-[black]  w-[60%]  md:w-[30%]   pl-[5px] text-left text-[11px] md:text-[14px]">
                                Roll No.
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {dashboardDetail?.srn}
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-solid border-[black]  w-[60%]  md:w-[30%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
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
                              <th className="border border-solid border-[black]  w-[60%]  md:w-[30%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                                Candidate's Name
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {dashboardDetail?.firstName}
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-solid border-[black]  w-[60%] md:w-[33.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                                Father's Name
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px] text-[11px] md:text-[14px] ">
                                {dashboardDetail?.father?.name}
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-solid border-[black]  w-[60%]  md:w-[33.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                                Registered Mobile No
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {dashboardDetail?.mobile}
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-solid border-[black] w-[60%]  md:w-[33.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                                Date Of Birth
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {formattedDob}
                              </td>
                            </tr>

                            <tr>
                              <th className="border border-solid border-[black] w-[60%]  md:w-[33.7%] pl-[5px] text-left  text-[11px] md:text-[14px] ">
                                Gender
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {dashboardDetail?.gender}
                              </td>
                            </tr>
                            <tr>
                              <th className="border border-solid border-[black] w-[60%]   md:w-[33.7%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                                Aadhar Number
                              </th>
                              <td className="border border-solid border-[black]  pl-[5px]  text-[11px] md:text-[14px] ">
                                {dashboardDetail?.aadhaarNo}
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div className="col-span-4  sm:col-span-4  md:col-span-2  lg:col-span-3 xl:col-span-3 ml-[5px]  md:pl-2.5">
                        <div className="w-full h-[140px] md:w-[140px] lg:w-full xl:w-[150px]  md:h-[155px]   border border-solid  border-[black]">
                          <p className="w-full h-full text-[11px] px-[8px] text-center text-[gray]  flex justify-center items-center">
                            Affix candidate recent colored photograph
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[1rem]">
                    <table className="border border-solid border-[black] border-collapse  w-full ">
                      <tr>
                        <th className="border border-solid border-[black]     w-[39.7%]  md:w-[24.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                          Class
                        </th>
                        <th className="border border-solid border-[black]  text-left pl-[5px]  text-[11px] md:text-[14px] ">
                          {dashboardDetail?.majorCourse?.value}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-solid border-[black]  w-[39.7%] md:w-[24.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                          Exam Centre Name
                        </th>
                        <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                          {
                            dashboardDetail?.customParams?.centerDetails
                              ?.center1?.examCenterName
                          }
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-solid border-[black]  w-[39.7%]  md:w-[24.7%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                          Exam Centre Address
                        </th>
                        <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                          {
                            dashboardDetail?.customParams?.centerDetails
                              ?.center1?.examCenterAddress
                          }{" "}
                          <br />
                          {
                            dashboardDetail?.customParams?.centerDetails
                              ?.center1?.centerHelpline
                          }
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-solid border-[black]  w-[39.7%] md:w-[24.7%]  pl-[5px] text-left   text-[11px] md:text-[14px] ">
                          Exam Date
                        </th>
                        <th className="border border-solid border-[black]  text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                          {formattedDate}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-solid border-[black]   w-[39.7%]  md:w-[24.7%] pl-[5px] text-left   text-[11px] md:text-[14px] ">
                          Timing
                        </th>
                        <th className="border border-solid border-[black]   text-left  pl-[5px]  text-[11px] md:text-[14px] ">
                          10:00AM to 1:15PM
                        </th>
                      </tr>
                    </table>
                  </div>

                  <div className="mt-4 mb-6">
                    <p>
                      I <strong> EDUKIT </strong> do hereby, declare the
                      following:
                    </p>
                    <p className="my-2">
                      That, I have read information bulletin, Instructions,
                      Terms and Conditions related to this examination available
                      on the website <u>https://shrawanchoudhary.com</u>
                    </p>

                    <h3 className="my-2 font-semibold">
                      Mandatory at Exam Centre:
                    </h3>
                    <ol className=" pl-[30px] orderedListstyle">
                      <li>Admit Card</li>
                      <li>Aadhar Card</li>
                    </ol>

                    <h3 className="my-2 font-semibold">Result Declaration:</h3>
                    <ol className=" pl-[30px] orderedListstyle">
                      <li>
                        17 January 2024 at 5:00 pm on{" "}
                        <u>https://shrawanchoudhary.com</u>
                      </li>
                    </ol>

                    <h3 className="my-2 font-semibold">Note:</h3>
                    <ol className=" pl-[30px] orderedListstyle">
                      <li>
                        The Candidate has to paste latest colored Photo of
                        his/her own at the designed space.
                      </li>
                      <li>
                        No candidate shall be permitted to leave the Examination
                        Room/Hall before the end of the Examination.
                      </li>
                      <li>
                        On completion of the examination, please wait for
                        instructions from invigilator and do not get up from
                        your seat untill advised.
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
                        If a Student is Found using unfair Means during the
                        exam, he/she will be disqualified for exam.
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
                    <Link
                      href="/downloadAdmitcard"
                      className="bg-[#0d6efd] text-[white] block mt-[1.5rem] mx-auto   w-[150px] text-center px-0 py-[3px] rounded-md pt-[5px] pb-[8px] hover:bg-[#0b5ed7] transition-all duration-[0.900ms] ease-[ease-in-out]"
                    >
                      Print
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
