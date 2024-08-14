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

  console.log("videoSolutionDetail" ,videoSolutionDetail);
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
    return <div>Loading...</div>;
  }
  if (!examAnswerdetail) {
    return <div>Loading...</div>;
  }
  if (!videoSolutionDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* {JSON.stringify(videoSolutionDetail)} */}

      <div className="container m-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-3  lg:col-span-3 xl:col-span-3  px-2.5">
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
                </div>
              </div>
            </div>
            {tab == 0 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
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
                          9079908487
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          Studying Class
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          10th
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          Exam Mode
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          Offline
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                          Exam Date
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          05 Nov 2023
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          Exam Center Name
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          <strong>MOTHER'S SR SEC SCHOOL</strong> <br />
                          GADDI MALIYAN JONS GANJ, AJMER, RAJ
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                          Exam Center
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          CENTER CODE :
                          <strong>
                            602 <br />
                          </strong>
                          ALIGARH, ALIGARH
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {tab == 1 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
                <div className="mt-4">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border text-left p-2 border-solid border-[#dddddd]">
                        <td>
                          <div className="w-[160px] h-[160px] border m-[5px] border-solid border-[#dddddd] rounded-[10px]">
                            <img
                              src=""
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
                          EDUKIT
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          Father Name
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          EDUKIT
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          Mobile
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          8177098525
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                          Gender
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          Male
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px] p-2 border-solid border-[#dddddd]">
                          DOB
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          2023-10-07
                        </td>
                      </tr>
                      <tr>
                        <th className="border text-left text-[17px]  p-2 border-solid border-[#dddddd]">
                          Address
                        </th>
                        <td className="border text-left p-2 border-solid border-[#dddddd]">
                          Test ,Udaipurwarti, Rajasthan
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab == 2 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
                <div>
                  <p className="text-center">
                    {" "}
                    Click the link below to see your result!
                  </p>
                  <div>
                    <Link
                      href="#"
                      className="bg-[#0d6efd] rounded-[5px] text-[white] w-fit mt-[2rem] mx-auto block pt-[5px] pb-2 px-5  hover:bg-[#8e272c] transition-[0.5s] duration-[all] ease-[ease-in-out]"
                    >
                      View Result
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {tab == 3 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
                <div>
                  <p className="text-center pb-[8px] border-b-[black] border-b-[2px] border-solid">
                    {" "}
                    Student's OMR Sheet
                  </p>
                </div>
              </div>
            )}

            {tab == 4 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
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
                        Part-A : Mathematics
                      </h3>
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
                      </div>
                    </div>
                  )}
                  {subject == 1 && (
                    <div>
                      <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px] text-center mb-[1rem] text-[#3c3c3c]">
                        Part-A : Mat
                      </h3>
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
                      </div>
                    </div>
                  )}
                  {subject == 2 && (
                    <div>
                      <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                        Part-A : Physics
                      </h3>
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
                      </div>
                    </div>
                  )}
                  {subject == 3 && (
                    <div>
                      <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                        Part-A : Chemistry
                      </h3>
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
                          <tr>
                            <th className="border border-solid border-[black]  bg-[#c5d9f1] text-[13px]">
                              5
                            </th>
                            <td className="border border-solid border-[black] text-center text-[13px]">
                              5
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  )}

                  {subject == 4 && (
                    <div>
                      <h3 className="uppercase font-semibold text-[20px]  sm:text-[25px]  text-center mb-[1rem] text-[#3c3c3c]">
                        Part-A : Biology
                      </h3>
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
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {tab == 5 && (
              <div className="col-span-12  sm:col-span-12  md:col-span-9  lg:col-span-9 xl:col-span-9 px-2.5">
                <p className="text-center text-[17px] mb-[20px] mt-[20px] md:mt-[0] ">
                  Video solutions of the exam conducted on 05-Nov-2023
                </p>
                <div>
                  <button
                    className="w-[145px] text-[17px] block mx-auto mb-[2rem] pb-[4px] px-[16px] text-[white] rounded-[4px] bg-[linear-gradient(0deg,#333_-17%,#a20515_37%,#e52626_111%)] 
                   "
                  >
                    Video Solution
                  </button>
                </div>
                <div>
                  <iframe
                    className=" block m-auto w-[95%] h-[315px] lg:w-[60%]"
                    src="https://www.youtube.com/embed/h7We1HqMyNs?si=bq8gENRth2uwKgor"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
