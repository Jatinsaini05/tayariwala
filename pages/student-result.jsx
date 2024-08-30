import React, { useState, useEffect } from "react";
import Piechart from "../components/Piechart";
import { TiPrinter } from "react-icons/ti";
export default function studentresult() {
  const [studentResult, setStudentresult] = useState(null);
  const [studentResultError, setStudentresultError] = useState(null);
  const [finalData, setFinalData] = useState([]);
  const [totalQuestionLevelEasy, setTotalQuestionLevelEasy] = useState(null);
  const [totalQuestionLevelModerate, setTotalQuestionLevelModerate] =
    useState(null);
  const [totalQuestionLevelDifficult, setTotalQuestionLevelDifficult] =
    useState(null);
  useEffect(() => {
    const fetchStudentresult = async () => {
      try {
        let headers = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZDlkNDI0OWE3ZTc2NTljMmRmOGM4IiwiZmlyc3ROYW1lIjoiUFJJWUFOU0hVIiwibGFzdE5hbWUiOiIiLCJlbWFpbCI6ImNsY3RlY25vQGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijk4Mjg0OTEyODgiLCJ1c2VybmFtZSI6Ijk4Mjg0OTEyODgiLCJzcm4iOiIyNDI3OTExMTM4IiwidHlwZSI6IlNUVURFTlQiLCJjbGllbnQiOiI2NGQ4NTg4ZDQwYzY2YzIwMzM4NWUxYTEifSwiaWF0IjoxNzI0NzQxMTgzLCJhdWQiOiJlenVraXQuY29tIiwiaXNzIjoiRXp1a2l0In0.vwRyZ5wtrKHyGC3X81H37TlEeJ_OkTDSibN4GQPL4hI",
        };
        let response = await fetch(
          "https://clc-tecno-api.vercel.app/api/test/report/full",
          { headers: headers }
        );
        let data = await response.json();
        setStudentresult(data);
      } catch (err) {
        console.error("Failed to fetch Student result details:", err);
        setStudentresultError(err);
      }
    };
    fetchStudentresult();
  }, []);

  useEffect(() => {
    let data = [];
    if (studentResult?.test?.sections?.length) {
      data = [...studentResult?.test?.sections];

      let qsCount = 0;

      for (let i = 0; i < data?.length; i++) {
        if (studentResult?.testQs?.length) {
          data[i].questions = studentResult?.testQs.slice(
            qsCount,
            qsCount + data[i].totalQs
          );
          data[i].stdRes = studentResult?.studentResponse.slice(
            qsCount,
            qsCount + data[i].totalQs
          );
          qsCount = qsCount + data[i].totalQs;
        }
      }
    }

    if (data?.length) {
      for (let i = 0; i < data?.length; i++) {
        //stdResponse
        if (data[i]?.questions?.length) {
          for (let r = 0; r < data[i].questions.length; r++) {
            data[i].questions[r].stdResponse = { res: "", status: "" };
            if (data[i]?.stdRes) {
              if (data[i]?.stdRes[r] == data[i]?.questions[r]?.ans) {
                data[i].questions[r].stdResponse = {
                  res: data[i].stdRes[r],
                  status: "CORRECT",
                };
              } else if (data[i]?.stdRes[r] != data[i]?.questions[r]?.ans) {
                data[i].questions[r].stdResponse = {
                  res: data[i].stdRes[r],
                  status: "INCORRECT",
                };
              } else if (data[i]?.stdRes[r] == "") {
                data[i].questions[r].stdResponse = {
                  res: "",
                  status: "NOT_ATTEMPTED",
                };
              }
            }
          }
        }

        //Analysis
        data[i].analysis = {
          correct: 0,
          incorrect: 0,
          notAttempted: 0,
          level: { easy: 0, moderate: 0, difficult: 0 },
        };
        if (data[i]?.questions?.length) {
          for (let a = 0; a < data[i].questions.length; a++) {
            if (data[i]?.questions[a]?.stdResponse) {
              if (data[i]?.questions[a]?.stdResponse.status == "CORRECT") {
                if (data[i]?.questions[a]?.level == 1) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct + 1,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy + 1,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }

                if (data[i]?.questions[a]?.level == 3) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct + 1,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate + 1,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }

                if (data[i]?.questions[a]?.level == 4) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct + 1,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult + 1,
                    },
                  };
                }
              }

              if (data[i]?.questions[a]?.stdResponse.status == "INCORRECT") {
                if (data[i]?.questions[a]?.level == 1) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect + 1,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }
                if (data[i]?.questions[a]?.level == 3) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect + 1,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }

                if (data[i]?.questions[a]?.level == 4) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect + 1,
                    notAttempted: data[i].analysis.notAttempted,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }
              }
              if (
                data[i]?.questions[a]?.stdResponse.status == "NOT_ATTEMPTED"
              ) {
                if (data[i]?.questions[a]?.level == 1) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted + 1,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }
                if (data[i]?.questions[a]?.level == 3) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted + 1,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }

                if (data[i]?.questions[a]?.level == 4) {
                  data[i].analysis = {
                    correct: data[i].analysis.correct,
                    incorrect: data[i].analysis.incorrect,
                    notAttempted: data[i].analysis.notAttempted + 1,
                    level: {
                      easy: data[i].analysis?.level?.easy,
                      moderate: data[i].analysis?.level?.moderate,
                      difficult: data[i].analysis?.level?.difficult,
                    },
                  };
                }
              }
            }
          }
        }

        //Score
        data[i].totalScore = 0;
        if (data[i]?.questions?.length) {
          for (let s = 0; s < data[i].questions.length; s++) {
            if (data[i]?.questions[s]?.stdResponse.status == "CORRECT") {
              data[i].totalScore =
                data[i].totalScore + data[i]?.questions[s]?.mp;
            }

            if (data[i]?.questions[s]?.stdResponse.status == "INCORRECT") {
              data[i].totalScore =
                data[i].totalScore - data[i]?.questions[s]?.mn;
            }

            if (data[i]?.questions[s]?.stdResponse.status == "NOT_ATTEMPTED") {
              data[i].totalScore = data[i].totalScore;
            }
          }
        }

        //Percentile
        data[i].percentile = 0;
        if (data[i]?.questions[0]?.subject?._id) {
          data[i].percentile =
            studentResult?.resultSummary[data[i]?.questions[0]?.subject?._id];
        }
        //Topic
        data[i].topics = [];
        for (let q = 0; q < data[i]?.questions?.length; q++) {
          let topicName = data[i].questions[q].topic.name.trim();

          let topic = data[i].topics.find((t) => t.name === topicName);

          if (!topic) {
            data[i].topics.push({
              name: topicName,
              total: 1,
              correct:
                data[i].questions[q].stdResponse.status === "CORRECT" ? 1 : 0,
            });
          } else {
            topic.total += 1;
            if (data[i].questions[q].stdResponse.status === "CORRECT") {
              topic.correct += 1;
            }
          }
        }
      }
    }
    console.log("data", data);
    setFinalData(data);
  }, [studentResult]);

  useEffect(() => {
    let questLevelEasy = 0;
    let questLevelModerate = 0;
    let questLevelDifficult = 0;

    if (finalData?.length) {
      for (let i = 0; i < finalData?.length; i++) {
        // TotalQuestionLevelDifficult
        if (finalData[i]?.questionLevel?.["4"]) {
          questLevelDifficult += finalData[i]?.questionLevel?.["4"];
        }
        // TotalQuestionLevelModerate
        if (finalData[i]?.questionLevel?.["3"]) {
          questLevelModerate += finalData[i]?.questionLevel?.["3"];
        }
        // TotalQuestionLevelEasy
        if (finalData[i]?.questionLevel?.["1"]) {
          questLevelEasy += finalData[i]?.questionLevel?.["1"];
        }
      }
    }

    setTotalQuestionLevelEasy(questLevelEasy);
    setTotalQuestionLevelModerate(questLevelModerate);
    setTotalQuestionLevelDifficult(questLevelDifficult);
  }, [finalData]);

  let totalCorrectAnswer = 0;
  let totalIncorrectAnswer = 0;
  let totalReceiveScore = 0;
  let maximumMarks = 0;

  let bgPercentileColor = [
    "rgb(255,179,0)",
    "rgb(25,116,23)",
    "rgb(42,190,108)",
    "rgb(149,74,215)",
    "rgb(255,0,11)",
    "orange",
    "red",
    "black",
  ];
  let correctQuestionLevelEasy = 0;
  let correctQuestionLevelModerate = 0;
  let correctQuestionLevelDifficult = 0;

  if (finalData?.length) {
    for (let i = 0; i < finalData?.length; i++) {
      //MaximumMarks
      maximumMarks = finalData[i]?.totalMarks + maximumMarks;
      //ToatalReceivedScore
      if (finalData[i]?.totalScore) {
        totalReceiveScore = finalData[i]?.totalScore + totalReceiveScore;
      } else {
        totalReceiveScore = totalReceiveScore;
      }
      //TotalIncoorectAnswer
      if (finalData[i]?.analysis?.incorrect) {
        totalIncorrectAnswer =
          finalData[i]?.analysis?.incorrect + totalIncorrectAnswer;
      } else {
        totalIncorrectAnswer = totalIncorrectAnswer;
      }
      // TotalCorrectAnswer
      if (finalData[i]?.analysis?.correct) {
        totalCorrectAnswer =
          finalData[i]?.analysis?.correct + totalCorrectAnswer;
      } else {
        totalCorrectAnswer = totalCorrectAnswer;
      }

      //CorrectQuestionLevelDifficult
      if (finalData[i]?.analysis?.level?.difficult) {
        correctQuestionLevelDifficult =
          finalData[i]?.analysis?.level?.difficult +
          correctQuestionLevelDifficult;
      }
      //CorrectQuestionLevelModerate
      if (finalData[i]?.analysis?.level?.moderate) {
        correctQuestionLevelModerate =
          finalData[i]?.analysis?.level?.moderate +
          correctQuestionLevelModerate;
      }
      //CorrectQuestionLevelEasy
      if (finalData[i]?.analysis?.level?.easy) {
        correctQuestionLevelEasy =
          finalData[i]?.analysis?.level?.easy + correctQuestionLevelEasy;
      }
    }
  }
  if (studentResultError) {
    return <div>Error loading Student result details.</div>;
  }

  if (!studentResult) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[80px] h-[80px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }

  return (
    <>
      {/* {JSON.stringify(finalData)} */}
      <section
        id="result-table"
        className="mx-[5px] my-[1rem] sm:mx-[1rem]  lg:mx-[3rem] lg:px-[2rem]  py-[3rem]   bg-[#d3ccc6b8] rounded-[3px] border-2 border-solid border-[#c5c5c5] samePage"
      >
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-4 xl:col-span-4  p-2.5">
                <div className="w-[201px] h-[77px] lg:w-[250px] lg:h-[97px]  block m-auto">
                  <img
                    src="https://i.filecdn.in/855abctutor/Clc_tecno-1724473830872.png"
                    alt="Logo"
                    className="w-full h-full"
                  ></img>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-4 xl:col-span-4  p-2.5">
                <div>
                  <table className="w-full border-2 border-solid border-[#585757] border-collapse">
                    <tbody>
                      <tr>
                        <th className="border-2 border-solid border-[#585757] py-[5px] px-[3px] text-[16px] sm:text-[18px] text-[#585757] bg-[white]">
                          Student Name
                        </th>
                        <th className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px] text-[#585757] bg-[white]">
                          {studentResult?.resultSummary?.studentName}
                        </th>
                      </tr>
                      <tr>
                        <th className="border-2 border-solid border-[#585757]   py-[5px] px-[3px]  text-[16px] sm:text-[18px] text-[#585757]">
                          CLC Tecno Roll No
                        </th>
                        <th className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px]  text-[#585757]">
                          {studentResult?.resultSummary?.srn}
                        </th>
                      </tr>
                      <tr>
                        <th className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px]   text-[#585757] bg-[white]">
                          Appearing for Class
                        </th>
                        <th className="border-2 border-solid border-[#585757]   py-[5px] px-[3px] text-[16px] sm:text-[18px]  text-[#585757] bg-[white]">
                          {studentResult?.resultSummary?.className}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-4 xl:col-span-4  p-2.5">
                <div>
                  <table className="w-full border-2 border-solid border-[#585757] border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-2 border-solid border-[#585757] py-[5px] px-[3px] text-[16px] sm:text-[18px] text-[#585757] bg-[white] text-center">
                          All India Rank
                        </td>
                        <th className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px] text-[#585757] bg-[white]">
                          {studentResult?.resultSummary?.overallRank}
                        </th>
                      </tr>
                      <tr>
                        <td className="border-2 border-solid border-[#585757]   py-[5px] px-[3px]  text-[16px] sm:text-[18px] text-[#585757] text-center">
                          Zonal Rank
                        </td>
                        <th className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px]  text-[#585757] ">
                          {studentResult?.resultSummary?.zonalRank}
                        </th>
                      </tr>
                      <tr>
                        <td className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px]   text-[#585757] bg-[white] text-center">
                          Percentile
                        </td>
                        <th className="border-2 border-solid border-[#585757]   py-[5px] px-[3px] text-[16px] sm:text-[18px]  text-[#585757] bg-[white]">
                          {studentResult?.resultSummary?.percentile}
                        </th>
                      </tr>
                      <tr>
                        <td className="border-2 border-solid border-[#585757]  py-[5px] px-[3px] text-[16px] sm:text-[18px]   text-[#585757] text-center">
                          Coaching Fee Scholarship
                        </td>
                        <th className="border-2 border-solid border-[#585757]   py-[5px] px-[3px] text-[16px] sm:text-[18px]  text-[#585757]  ">
                          {studentResult?.resultSummary?.scholarship}%
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="award-card"
        className="mx-[5px] my-[1rem] px-[10px] sm:mx-[1rem] pb-[1rem] lg:mx-[3rem] lg:px-[2rem]  bg-[rgba(252,211,41,0.71)] samePage"
      >
        <div className="container m-auto">
          <h2 className="text-[rgb(255,60,0)] font-bold text-center text-[25px]  sm:text-[2rem]">
            Congratulations!
          </h2>

          <div className="flex justify-center items-center  gap-[1rem]   lg:gap-[2rem] flex-wrap md:flex-nowrap mt-[1rem]">
            <div className="border bg-[#f9f9f9] h-auto md:h-[170px] w-[90%] sm:w-[70%] lg:w-[42%] p-2 md:p-4 rounded-xl border-solid border-[gray]">
              <h2 className="font-bold text-center  text-[20px]  lg:text-[23px]">
                Mega Cash Award{" "}
              </h2>
              <h3 className="text-[#dc3545] font-bold text-center text-[20px] lg:text-[23px]">
                ₹ {studentResult?.resultSummary?.cashReward}
              </h3>
              <div>
                <p className="line-clamp-unset lg:line-clamp-3 text-[14px] lg:text-[15px]">
                  For Mega Cash Award it is mandatory to take admission before
                  15 May 2024 in CLC's offline classroom Courses for Session
                  2024-25.
                </p>
              </div>
            </div>

            <div className="border bg-[#f9f9f9]  h-auto md:h-[170px]  w-[90%] sm:w-[70%] lg:w-[42%] p-2 md:p-4 rounded-xl border-solid border-[gray]">
              <h2 className="font-bold text-center  text-[20px]  lg:text-[23px]">
                Zonal Cash Award
              </h2>
              <h3 className="text-[#dc3545] font-bold text-center text-[20px] lg:text-[23px]">
                ₹ {studentResult?.resultSummary?.ZonalCashPrize}
              </h3>
              <div>
                <p className="line-clamp-unset lg:line-clamp-3 text-[14px] lg:text-[15px]">
                  For Zonal Cash Award it is not mandatory to take admission in
                  CLC.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-[1rem] text-center">
              * You will be informed about date and venue of Zonal cash prize
              distribution by WhatsApp and text message.
            </p>
          </div>
        </div>
      </section>

      <section
        id="award-ceremony"
        className=" my-[1rem]  mx-[5px]  sm:mx-[1rem] lg:mx-[2.3rem] samePage"
      >
        <div>
          <h3 className=" px-[8px] bg-[orangered] text-[white] text-center text-[16px] sm:text-[25px] lg:text-[30px] font-medium md:font-semibold pb-[8px] pt-[4px]">
            Award Ceremony & Career Counselling Seminar
          </h3>
        </div>
        <div className="mt-[1rem]">
          <table className="w-full border-1 border-solid border-[black] border-collapse">
            <tbody>
              <tr>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  Zone
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.zone}
                </th>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  MOMENTO
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.memento}
                </th>
              </tr>
              <tr>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  Certificate
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.certificate}
                </th>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  Student Kit
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.studentKit}
                </th>
              </tr>

              <tr>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  Medal
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.medal}
                </th>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]   text-center  uppercase">
                  Venue
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-[black]  uppercase">
                  {studentResult?.resultSummary?.venue}
                </th>
              </tr>

              <tr>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  PRIZE DISTR.ADD.
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-[black]  uppercase">
                  {studentResult?.resultSummary?.prizeDistAdd}
                </th>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]   text-center  uppercase">
                  Date
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-[black]  uppercase">
                  {studentResult?.resultSummary?.date}
                </th>
              </tr>

              <tr>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[16px]  text-center  uppercase">
                  Time
                </td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.time}
                </th>
                <td className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-center  uppercase"></td>
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[16px]  text-[black]  uppercase"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        id="score-card"
        className=" mt-[2rem] mb-[1rem]  mx-[5px]  sm:mx-[1rem] lg:mx-[2.3rem] samePage "
      >
        <div>
          <h3 className=" px-[8px] bg-[orangered] text-[white] text-center text-[16px] sm:text-[25px] lg:text-[30px] font-medium md:font-semibold pb-[8px] pt-[4px]">
            CLC Tecno'24 Score Card
          </h3>
        </div>
        <div className="mt-[1rem] w-full overflow-x-auto">
          <table className="w-full border-1 border-solid border-[black] border-collapse">
            <tbody>
              <tr className="bg-[#f0f8ff]">
                <th className="border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center  uppercase"></th>

                {finalData.map((name, index) => (
                  <th
                    key={index}
                    className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {name?.title}
                  </th>
                ))}

                <th className="border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  Total
                </th>
              </tr>

              <tr className="bg-[rgb(242,242,242)]">
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Maximum Marks
                </th>

                {finalData.map((item, index) => (
                  <th
                    key={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.totalMarks}
                  </th>
                ))}

                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {maximumMarks}
                </th>
              </tr>

              <tr>
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Questions
                </th>
                {finalData.map((item, index) => (
                  <th
                    key={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.totalQs}
                  </th>
                ))}

                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {studentResult?.testQs?.length}
                </th>
              </tr>
              <tr>
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Correct
                </th>
                {finalData.map((item, index) => (
                  <th
                    kay={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.analysis?.correct}
                  </th>
                ))}

                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {totalCorrectAnswer}
                </th>
              </tr>

              <tr>
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Incorrect
                </th>
                {finalData.map((item, index) => (
                  <th
                    key={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.analysis?.incorrect}
                  </th>
                ))}

                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {totalIncorrectAnswer}
                </th>
              </tr>

              <tr>
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Score
                </th>
                {finalData.map((item, index) => (
                  <th
                    key={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.totalScore}
                  </th>
                ))}

                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {totalReceiveScore}
                </th>
              </tr>

              <tr>
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px]  text-[12px]  sm:text-[15px]  lg:text-[17px]  text-center">
                  Percentile
                </th>

                {finalData.map((item, index) => (
                  <th
                    key={index}
                    className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase"
                  >
                    {item?.percentile}
                  </th>
                ))}
                <th className=" border-1 border-solid border-[black] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[black]  uppercase">
                  {studentResult?.resultSummary?.percentile}
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[2rem] bg-[rgb(222_222_222)] border border-solid border-[gray] p-2  lg:p-4">
          <h3 className="font-bold text-[16px]  sm:text-[18px] text-[#333] lg:text-[20px] ">
            Percentile is the Number (value) that represents a percentage
            position in a list of data. For example, if the percentile of any
            student is at 92 percentile, then this student performs better than
            92 percent of all students appeared in CLC Tecno.
          </h3>
        </div>
      </section>

      <section
        id="score-card"
        className=" mt-[2rem] mb-[1rem]  mx-[5px]  sm:mx-[1rem] lg:mx-[2.3rem] samePage"
      >
        <div>
          <h3 className=" px-[8px] bg-[orangered] text-[white] text-center text-[16px] sm:text-[25px] lg:text-[30px] font-medium md:font-semibold pb-[8px] pt-[4px]">
            Subject wise Percentile Analysis
          </h3>
        </div>

        <div className="mt-[6px] px-[10px]  py-[2rem] bg-[linear-gradient(25deg,#e1e1e1,transparent)]">
          <div className="flex gap-[2rem] sm:gap-[3rem] lg:gap-[6rem]  flex-wrap   lg:flex-nowrap  justify-center items-center">
            {finalData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-[11px] mb-[4px]">{item?.percentile}%</p>
                <div className="bg-[white]  relative w-[3rem]  sm:w-[4rem] h-[13rem] border-1 border-[black] border-solid">
                  <div
                    className="bg-[rgb(255,179,0)] absolute inset-x-0 bottom-0  w-full"
                    style={{
                      height: `${item?.percentile}%`,
                      backgroundColor: `${bgPercentileColor[index]}`,
                    }}
                  ></div>
                </div>
                <h3 className="uppercase text-center text-[16px] font-bold mt-[5px]">
                  {item?.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="score-card"
        className=" mt-[1rem] mx-[5px]  sm:mx-[1rem] lg:mx-[2.3rem] samePage"
      >
        <div>
          <h3 className=" px-[8px] mb-[20px] bg-[orangered] text-[white] text-center text-[16px] sm:text-[25px] lg:text-[30px] font-medium md:font-semibold pb-[8px] pt-[4px]">
            Competitive Success Index (CSI)
          </h3>
        </div>
        <div className="container m-auto">
          <div className="flex justify-center gap-[1rem]   lg:gap-[2rem] flex-wrap lg:flex-nowrap mt-[1rem]">
            <div className="w-[100%]  lg:w-[58%]">
              <div className="mt-[1rem] w-full overflow-x-auto">
                <table className="w-full border-1 border-solid border-[black] border-collapse">
                  <tbody>
                    <tr className="bg-[#0f3276]">
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[white]  uppercase">
                        Questions
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[17px]  text-[white]  uppercase">
                        Correct
                      </th>
                      <th className="border-1 border-solidborder-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px]  text-[white]  uppercase">
                        Out of
                      </th>
                    </tr>
                    <tr className="bg-[#f9f9f9]">
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[333]">
                        Easy
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {correctQuestionLevelEasy}
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {totalQuestionLevelEasy}
                      </th>
                    </tr>

                    <tr className="bg-[#f9f9f9]">
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[333]">
                        Moderate
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {correctQuestionLevelModerate}
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {totalQuestionLevelModerate}
                      </th>
                    </tr>

                    <tr className="bg-[#f9f9f9]">
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[333]">
                        Difficult
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {correctQuestionLevelDifficult}
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {totalQuestionLevelDifficult}
                      </th>
                    </tr>

                    <tr className="bg-[rgb(255,193,7)] border-2 border-[black] border-solid">
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px] text-[333]">
                        Total
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]   sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {totalCorrectAnswer}
                      </th>
                      <th className="border-1 border-solid border-[gray] py-[5px] px-[3px] text-[12px]  sm:text-[15px]  lg:text-[17px]  text-[333]">
                        {studentResult?.testQs?.length}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[100%]  lg:w-[38%]" >
              <div className="block mx-auto w-full">
                {totalQuestionLevelEasy > 0 ||
                totalQuestionLevelModerate > 0 ||
                totalQuestionLevelDifficult > 0 ? (
                  <Piechart 
                    totalEasy={totalQuestionLevelEasy}
                    totalModerate={totalQuestionLevelModerate}
                    totalDifficult={totalQuestionLevelDifficult}
                  />
                ) : (
                  <p className="text-center text-[13px]  sm:text-[16px] font-bold">
                    Loading Piechart...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="score-card"
        className="samePage mb-[1rem] mt-[20px] sm:mt-[2rem] lg:mt-[3rem] mx-[5px]  sm:mx-[1rem] lg:mx-[2.3rem] "
      >
        <div>
          <h3 className=" px-[8px] mb-[1rem] bg-[orangered] text-[white] text-center text-[16px] sm:text-[25px] lg:text-[30px] font-medium md:font-semibold pb-[8px] pt-[4px]">
            Topicwise Analysis
          </h3>
        </div>
        <div className="container m-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              {finalData.map((item, index) => (
                <div className="samePage col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 p-2.5">
                  <div
                    key={index}
                    className="border-1 border-[black] border-solid"
                  >
                    <div className="bg-[#f0f0f0] flex items-center gap-[5px] sm:gap-[8px] border-b-[black] border-b border-solid px-[10px] mb-[10px]">
                      <h3 className="uppercase font-semibold text-[#3C3C3C] text-[15px] sm:text-[20px]  md:text-[28px] ">
                        {item?.title}
                      </h3>
                      <div className="bg-[rgb(73,180,73)] w-[10px] h-[10px]"></div>
                      <p className="uppercase text-[#3C3C3C] text-[10px] sm:text-[12px] font-semibold">
                        Strong
                      </p>
                      <div className="bg-[rgb(255,191,83)] w-[10px] h-[10px]"></div>

                      <p className="uppercase text-[#3C3C3C] text-[10px] sm:text-[12px] font-semibold">
                        Average
                      </p>
                      <div className="bg-[rgb(154,14,14)] w-[10px] h-[10px]"></div>
                      <p className="uppercase text-[#3C3C3C] text-[10px] sm:text-[12px] font-semibold">
                        Weak
                      </p>
                    </div>
                    <div className=" px-[10px]">
                      {item?.topics.map((subItem, subIndex) => {
                        const percentage =
                          (subItem?.correct / subItem?.total) * 100;

                        let backgroundColor, borderColor;
                        if (percentage <= 45) {
                          backgroundColor = "rgb(154,14,14)";
                          borderColor = "rgb(154,14,14)";
                        } else if (percentage < 60) {
                          backgroundColor = "rgb(255,191,83)";
                          borderColor = "rgb(255,191,83)";
                        } else {
                          backgroundColor = "rgb(73,180,73)";
                          borderColor = "rgb(73,180,73)";
                        }

                        return (
                          <div
                            key={subIndex}
                            className="flex items-center gap-[8px] sm:gap-[1rem] mb-[1rem]"
                          >
                            <div
                              className="bg-[white] w-[50%] sm:w-[60%] h-[30px] border-1 border-solid"
                              style={{ borderColor: borderColor }}
                            >
                              <div
                                className="h-[30px]"
                                style={{
                                  width: `${percentage}%`,
                                  backgroundColor: backgroundColor,
                                }}
                              ></div>
                            </div>
                            <div className="w-[45%] sm:w-[35%]">
                              <p className="text-[#585757] text-[13px] font-bold">
                                {subItem?.name} ({subItem.total})
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => window.print()}
            className="print-hidden  text-[14px] font-bold sm:text-[16px]  flex items-center justify-center gap-2 bg-[#a32932] text-[white] block mt-[1.5rem] mx-auto   w-[150px] text-center px-0 py-[3px] rounded-md pt-[5px] pb-[8px] hover:bg-[#2e4280] transition-all duration-[0.900ms] ease-[ease-in-out]"
          >
            Print <TiPrinter className="mt-[3px]" />
          </button>
        </div>
      </section>
    </>
  );
}
