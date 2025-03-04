import React, { useState, useEffect } from "react";
import {
  getInitialData,
  getParticipants,
  getQuizReoprt,
} from "../../../service/apiFetch";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";

export const getStaticProps = async () => {
  const initialData = await getInitialData("quiz/report", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData,
      pageData: initialData?.data,
      title: initialData?.title,
      metaTags: initialData?.metaTags,
      url: initialData?.url || "",
    },
  };
};

const index = () => {
  const router = useRouter();
  const { q } = router.query;
  const { u } = router.query;
  const [participants, setParticipants] = useState();
  const [quizReport, setQuizReport] = useState();
  const [openSection, setOpenSection] = useState("Q&S");

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    if (minutes > 0) {
      return `${minutes} min ${seconds} sec`;
    }
    return `${seconds} sec`;
  };

  // Fetch participants
  const fetchParticipants = async () => {
    const params = {
      quiz: q,
      limit: 10,
    };
    try {
      const response = await getParticipants(params);
      setParticipants(response);
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  };

  const fetchReport = async () => {
    const params = {
      user: u,
      quiz: q,
    };
    try {
      const response = await getQuizReoprt(params);
      setQuizReport(response);
    } catch (error) {
      console.error("Error fetching quiz report:", error);
    }
  };

  useEffect(() => {
    if (q && u) {
      fetchReport();
    }
  }, [q, u]);

  useEffect(() => {
    if (q) {
      fetchParticipants();
    }
  }, [q]);

  return (
    <div>
      <div className="container">
        {/* Congratulations Banner */}
        <div className="bg-customFC6200 rounded-lg my-4">
          <div className="p-12 flex sm:gap-14 gap-2 items-center text-white">
            <div>
              <img
                className="w-[140px]"
                src="https://i.filecdn.in/755esias/medal-gold-winner-2-icon-1970x2048-ov2qzofe-1712813916945.png"
                alt="medal"
              />
            </div>
            <div>
              <p className="font-semibold">
                Congratulations <span>{quizReport?.user?.firstName}</span>!
              </p>
              <p>
                Your score is: <span>{quizReport?.stdScore}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Share Links */}
        <div className="flex text-2xl mb-4">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            className="py-2 px-3 rounded bg-[#1877F2]"
          >
            <FaFacebook className="text-white" />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=Check out my quiz result!`}
            target="_blank"
            className="py-2 px-3 rounded mx-3 bg-[#1DA1F2]"
          >
            <FaTwitter className="text-white" />
          </Link>
          <Link
            href={`https://t.me/share/url?url=${encodeURIComponent(
              currentUrl
            )}&text=Check out my quiz result!`}
            target="_blank"
            className="py-2 px-3 rounded bg-[#0088cc]"
          >
            <FaTelegram className="text-white" />
          </Link>
        </div>

        {/* Quiz Report Stats */}
        <div className="xl:grid grid-cols-7 hidden">
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Correct</span>
            <span>{quizReport?.correctQs}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Incorrect</span>
            <span>{quizReport?.inCorrectQs}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Attempted</span>
            <span>{quizReport?.correctQs + quizReport?.inCorrectQs}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Unattempted</span>
            <span>{quizReport?.unAttemptedQs}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Score</span>
            <span>{quizReport?.stdScore}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Time Taken</span>
            <span>{formatTime(quizReport?.totalTimeTaken)}</span>
          </div>
          <div className="flex flex-col items-center border-2 text-[22px] py-2">
            <span>Percentage</span>
            <span>{quizReport?.percentage}</span>
          </div>
        </div>

        <div className="bg-customFC6200 p-4 rounded-md xl:hidden">
          <div className="flex gap-4 justify-evenly flex-wrap">
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Correct</span>
              <span>{quizReport?.correctQs}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Incorrect</span>
              <span>{quizReport?.inCorrectQs}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Attempted</span>
              <span>{quizReport?.correctQs + quizReport?.inCorrectQs}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Unattempted</span>
              <span>{quizReport?.unAttemptedQs}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Score</span>
              <span>{quizReport?.stdScore}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Time Taken</span>
              <span>{formatTime(quizReport?.totalTimeTaken)}</span>
            </div>
            <div className="flex flex-col md:w-1/4 w-1/3 bg-white items-center border-2 py-2">
              <span>Percentage</span>
              <span>{quizReport?.percentage}</span>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <button
            onClick={() => setOpenSection("Q&S")}
            className={`w-1/2 rounded-md font-semibold text-xs py-3 sm:text-lg sm:p-3 hover:brightness-90 ${openSection === "Q&S" ? "bg-[#BAD1eb]" : "bg-white"}`}
          >
            QUESTIONS & SOLUTIONS
          </button>
          <button
            onClick={() => setOpenSection("LB")}
            className={`w-1/2 rounded-md font-semibold text-xs py-3 sm:text-lg sm:p-3 hover:brightness-90 ${openSection === "LB" ? "bg-[#BAD1eb]" : "bg-white"}`}
          >
            LEADERBOARD
          </button>
        </div>
        {openSection === "Q&S" && (
          <>
            <div className="mt-5 p-4">
              <h3 className="font-semibold sm:text-2xl pb-4 text-xl border-b">
                QUESTION & SOLUTIONS
              </h3>
              <div className="border-2 mt-2 rounded">
                <div className="bg-[#eeeeee] font-semibold text-xl hidden sm:flex justify-between py-[10px]">
                  <div className="w-3/4 text-center">
                    <span>Question</span>
                  </div>
                  <div className="w-1/3 text-center">
                    <span>Remark</span>
                  </div>
                </div>
                <div className="p-3">
                  {quizReport?.questions?.EN?.map((item, index) => (
                    <div
                      key={index}
                      className="flex sm:flex-row flex-col text-sm gap-2"
                    >
                      <div className="p-3 sm:w-3/4 mb-4">
                        <div className="font-semibold mb-2">
                          <span>Q- {index + 1}. </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item?.question?.qContent,
                            }}
                          ></span>
                        </div>
                        {/* Options */}
                        <div className="quez-ans">
                          <div>
                            <b>(A)</b>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item?.variantQuestion
                                  ? item?.variantQuestion?.qOption?.optionA
                                  : item?.question?.qOption?.optionA,
                              }}
                            ></span>
                          </div>
                          <div>
                            <b>(B)</b>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item?.variantQuestion
                                  ? item?.variantQuestion?.qOption?.optionB
                                  : item?.question?.qOption?.optionB,
                              }}
                            ></span>
                          </div>
                          <div>
                            <b>(C)</b>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item?.variantQuestion
                                  ? item?.variantQuestion?.qOption?.optionC
                                  : item?.question?.qOption?.optionC,
                              }}
                            ></span>
                          </div>
                          <div>
                            <b>(D)</b>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item?.variantQuestion
                                  ? item?.variantQuestion?.qOption?.optionD
                                  : item?.question?.qOption?.optionD,
                              }}
                            ></span>
                          </div>
                          {item?.question?.qOption?.optionE && (
                            <div>
                              <b>(E)</b>{" "}
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item?.variantQuestion
                                    ? item?.variantQuestion?.qOption?.optionE
                                    : item?.question?.qOption?.optionE,
                                }}
                              ></span>
                            </div>
                          )}
                        </div>
                        <span className="bg-blue-600 text-white font-semibold inline-block text-xs rounded">
                          Solution :
                        </span>
                        <div className="mt-2">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item?.question?.qSolution,
                            }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={`p-3 sm:w-1/3 mb-4 ${item?.isCorrect ? "bg-green-200" : "bg-[#eeeeee]"}`}
                      >
                        {item?.isSubmitted && item?.isCorrect && (
                          <p>
                            <span className="font-semibold">Status: </span>

                            <span className="bg-green-600 p-[2px] rounded text-[10.5px] font-semibold">
                              Correct
                            </span>
                          </p>
                        )}
                        {item?.isSubmitted && !item?.isCorrect && (
                          <p>
                            <span className="font-semibold">Status: </span>

                            <span className="bg-red-600 rounded p-[2px] text-[10.5px] font-semibold">
                              In Correct
                            </span>
                          </p>
                        )}
                        {!item?.isSubmitted && !item?.isCorrect && (
                          <p>
                            <span className="font-semibold">Status: </span>

                            <span className="bg-gray-500 rounded p-[2px] text-[10.5px] font-semibold">
                              Un Attempted
                            </span>
                          </p>
                        )}
                        <p>
                          <span className="font-semibold">
                            Positive Marks:{" "}
                          </span>
                          <span className="bg-green-600 rounded p-[2px] text-[10.5px] font-semibold">
                            {item?.mp}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Negative Marks:{" "}
                          </span>
                          <span className="bg-red-600 rounded p-[2px] text-[10.5px] font-semibold">
                            {item?.mn}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold">
                            Correct Answer:{" "}
                          </span>
                          <span>{item?.question?.ans}</span>
                        </p>
                        <p>
                          {item?.answer && (
                            <>
                              <span className="font-semibold">
                                Your Answer:{" "}
                              </span>
                              <span>{item?.answer}</span>
                            </>
                          )}
                        </p>
                        <p>
                          {item?.timeTaken >= 0 && (
                            <>
                              <span className="font-semibold">
                                Time Taken:{" "}
                              </span>
                              <span>{item?.timeTaken} sec</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {openSection === "LB" && (
          <>
            <div className="mt-5 p-4">
              <h3 className="font-semibold sm:text-2xl pb-4 text-xl border-b">
                LEADERBOARD
              </h3>
              {participants?.some(
                (item) => quizReport?.user?.firstName === item?.user?.firstName
              ) && (
                <div
                  className={`text-center text-white py-2 rounded-xl font-semibold w-full ${
                    participants?.find(
                      (item) =>
                        quizReport?.user?.firstName === item?.user?.firstName
                    )
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  <span>
                    {participants?.find(
                      (item) =>
                        quizReport?.user?.firstName === item?.user?.firstName
                    )
                      ? "Congratulations!! You made it to the leaderboard!"
                      : "Sorry!! You didn't make it to the leaderboard!"}
                  </span>
                </div>
              )}
              <div className="border-t-2 w-full mt-2">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="p-2 text-lg font-semibold border-b">
                        Rank
                      </td>
                      <td className="p-2 text-lg font-semibold border-b">
                        Student
                      </td>
                      <td className="p-2 text-lg font-semibold border-b">
                        Score
                      </td>
                      <td className="p-2 text-lg font-semibold border-b">
                        Time
                      </td>
                    </tr>
                    {participants?.map((item, index) => {
                      // Assign colors based on rank
                      const getRankColor = (rank) => {
                        switch (rank) {
                          case 1:
                            return "bg-[#FFD700]"; // Gold for 1st place
                          case 2:
                            return "bg-[#C0C0C0]"; // Silver for 2nd place
                          case 3:
                            return "bg-[#CD7F32]"; // Bronze for 3rd place
                          default:
                            return "bg-blue-500"; // Default color for other ranks
                        }
                      };

                      const rankColor = getRankColor(index + 1);

                      return (
                        <tr className="border-b" key={index}>
                          <td className="p-4">
                            {/* Apply rank-based color */}
                            <span
                              className={`font-semibold text-white rounded-[100%] p-2 ${rankColor}`}
                            >
                              {index + 1}
                            </span>
                          </td>
                          <td className="flex p-4 sm:flex-row flex-col text-center items-center gap-2">
                            <img
                              className="w-[36px]"
                              src="https://i.filecdn.in/832sgoiupsc/avatar-student-1711690124119.png"
                              alt="pfp"
                            />
                            <span>
                              {item?.user?.firstName}
                              <span>{item?.user?.lastName}</span>
                            </span>
                          </td>
                          <td className="p-4">{item?.stdScore}</td>
                          <td className="p-4">
                            {item?.totalTimeTaken}
                            <small>s</small>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default index;
