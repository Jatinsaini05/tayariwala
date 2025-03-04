import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getInitialData,
  getPageData,
  getQuiz,
  quizSubmit,
} from "../../service/apiFetch";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoPauseCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { useStoreLogin } from "../../store/login";

// export const getStaticProps = async () => {
//   try {
//     const response = await getPageData("quiz", {
//       contentBlock: "Object",
//     });
//     if (!response) {
//       console.log("pageData not found");
//     }
//     return {
//       props: {
//         pageData: response,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         pageData: [],
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  const initialData = await getInitialData("quiz", { contentBlock: "Object" });
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

const Index = ({ pageData }) => {
  const router = useRouter();
  const { quizId } = router.query;
  const [page, setPage] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState();
  const [currentQue, setCurrentQue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [reqResponse, setReqResponse] = useState({});
  const userId = useStoreLogin((state) => state?.user?.id);
  const [submitRes, setSubmitRes] = useState();
  const [isPaused, setIsPaused] = useState(false);
  const duration = quiz?.qset?.duration;
  const [timeLeft, setTimeLeft] = useState();
  const [remTimeOnActiveQ, setRemTimeOnActiveQ] = useState();

  // Initialize global timer once quiz data is loaded.
  useEffect(() => {
    if (duration) {
      const t = duration * 60;
      setTimeLeft(t);
      // For the very first question, capture the starting remaining time.
      setRemTimeOnActiveQ(t);
    }
  }, [duration]);

  // Global countdown effect (overall quiz timer)
  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeEnd();
      return;
    }
    let timer;
    if (!isPaused && page === 2) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isPaused, page]);

  const formatTime = () => {
    if (timeLeft == null) return "00:00";
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Pause handler remains similar; global timer stops decrementing when paused.
  const handlePause = () => {
    setIsPaused(true);
    Swal.fire({
      title: "Quiz Paused",
      text: "The quiz has been paused. Click 'Resume' to continue.",
      icon: "info",
      confirmButtonText: "Resume",
      allowOutsideClick: false,
      allowEscapeKey: false,
      scrollbarPadding: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsPaused(false);
      }
    });
  };

  // Fetch quiz data
  const fetchQuiz = async () => {
    try {
      const response = await getQuiz(quizId);
      setQuiz(response);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching quiz data:", error);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, [quizId]);

  const handleOptionSelect = (key) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQue]: key,
    }));
  };

  // When "SAVE & NEXT" is clicked:
  // Calculate time taken for current question using:
  //   timeTaken = (remTimeOnActiveQ - current timeLeft)
  // Then update response for that question and update remTimeOnActiveQ for next question.
  const saveandnext = () => {
    const currentQuestion = quiz?.qset?.questions?.EN[currentQue];
    if (!currentQuestion) return;
    const questionId = currentQuestion?.question?._id;
    const qsetQsId = currentQuestion?._id;
    if (!qsetQsId || !questionId) {
      console.error("qsetQsId or questionId is undefined!", {
        qsetQsId,
        questionId,
      });
      return;
    }

    // Calculate time taken for this question.
    // (remTimeOnActiveQ was set when the question loaded)
    const timeTakenForQuestion = remTimeOnActiveQ - timeLeft;
    // Map the selected answer. (Adjust the mapping if your answer format is different.)
    const mappedAnswer = selectedOptions[currentQue]
      ? selectedOptions[currentQue].replace(/^option/, "")
      : [];

    setReqResponse((prevState) => {
      const newState = { ...prevState };
      if (newState[qsetQsId]) {
        // Agar pehle se timeTaken hai, add current timeTaken
        newState[qsetQsId].timeTaken += timeTakenForQuestion;
        newState[qsetQsId].answer = mappedAnswer;
      } else {
        newState[qsetQsId] = {
          user: "",
          qSet: quiz?.qset?._id || "",
          question: questionId,
          qsetQs: qsetQsId,
          answer: mappedAnswer,
          qType: currentQuestion?.question?.qType,
          timeTaken: timeTakenForQuestion, // set time taken for this question
          isSubmitted: false,
          isCorrect: false,
          quiz: quizId,
        };
      }
      return newState;
    });

    // Update remTimeOnActiveQ for next question (i.e. capture current global remaining time)
    setRemTimeOnActiveQ(timeLeft);

    // Move to next question if available; else submit the quiz.
    if (currentQue < quiz?.qset?.questions?.EN?.length - 1) {
      setCurrentQue(currentQue + 1);
    } else {
      console.log("Submitting the quiz...", reqResponse);
      submit();
    }
  };

  const submit = async () => {
    try {
      // Check if at least one question has an answer
      const hasAnswers = Object.values(reqResponse).some(
        (response) => response.answer && response.answer.length > 0
      );

      if (!hasAnswers) {
        Swal.fire({
          title: "No Answers Selected",
          text: "Please answer before submitting the quiz.",
          icon: "warning",
          confirmButtonText: "OK",
          scrollbarPadding: false,
        });
        return;
      }

      console.log("Submitting quiz data...", reqResponse);
      const response = await quizSubmit(userId, quizId, reqResponse);
      if (response.error) {
        setError(response.error);
      } else {
        console.log("Quiz submitted successfully!", response);
        setSubmitRes(response);
        Swal.fire({
          title: "Success!",
          text: "Your quiz has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
          scrollbarPadding: false,
        }).then(() => {
          router.push(`/quiz/report?q=${quizId}&u=${userId}`);
        });
      }
    } catch (error) {
      setError(error.message);
      console.error("Error submitting quiz:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting the quiz. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        scrollbarPadding: false,
      });
    }
  };

  const handleTimeEnd = () => {
    // When the global timer reaches 0
    const hasAnswers = Object.values(reqResponse).some(
      (response) => response.answer && response.answer.length > 0
    );
    if (!hasAnswers) {
      Swal.fire({
        title: "Time's Up!",
        text: "You didn't select any answers. Restarting the quiz.",
        icon: "warning",
        confirmButtonText: "OK",
        scrollbarPadding: false,
      }).then(() => {
        // Reset states as needed
        setPage(1);
        setAgreed(false);
        setQuiz([]);
        setSelectedOptions({});
        setReqResponse({});
        setCurrentQue(0);
        setTimeLeft(duration * 60);
        setRemTimeOnActiveQ(duration * 60);
      });
    } else {
      submit();
    }
  };

  return (
    <div className="container">
      {page === 1 && (
        <>
          <div className="flex justify-center py-10 border-b border-custom241737">
            <img
              className="w-44"
              src={pageData?.contentBlock?.AGREEMENT?.media}
              alt="Logo"
            />
          </div>
          <div className="flex items-center justify-center gap-4 my-7">
            <div className="text-custom241737">
              {agreed ? (
                <button onClick={() => setAgreed(false)}>
                  <IoMdCheckboxOutline className="text-2xl text-customFC6200" />
                </button>
              ) : (
                <button onClick={() => setAgreed(true)}>
                  <MdOutlineCheckBoxOutlineBlank className="text-2xl" />
                </button>
              )}
            </div>
            <div>
              <span
                className="font-semibold"
                dangerouslySetInnerHTML={{
                  __html: pageData?.contentBlock?.AGREEMENT?.content,
                }}
              ></span>
            </div>
          </div>
          <div className="text-center mb-4">
            <button
              disabled={!agreed}
              className={`text-white text-sm px-3 py-2 shadow rounded ${
                agreed
                  ? "hover:shadow-lg hover:bg-custom241737 bg-customFC6200"
                  : "hover:cursor-not-allowed bg-[#fc9351]"
              }`}
              onClick={() => setPage(2)}
            >
              READY TO BEGIN
            </button>
          </div>
        </>
      )}
      {page === 2 && (
        <>
          <div className="flex justify-between items-center py-2">
            <div>
              <h2 className="font-semibold text-[18px]">{quiz?.qset?.alias}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-600">
                <span className="text-custom241737">Time Left - </span>
                {formatTime()}
              </span>
              <button
                className="text-lg"
                onClick={handlePause}
                title={isPaused ? "" : "Pause Quiz"}
              >
                <IoPauseCircleOutline />
              </button>
            </div>
          </div>
          <hr className="mb-[1px]" />
          <hr className="" />
          {quiz?.qset?.questions?.EN[currentQue]?.question?.qType === "MCQ" && (
            <div>
              <div className="flex sm:flex-row flex-col justify-between my-2">
                <h3 className="font-semibold text-[#f07f5f]">
                  Question Type :{" "}
                  {quiz?.qset?.questions?.EN[currentQue]?.question?.qType}
                </h3>
                <div className="flex flex-col gap-2">
                  <span className="text-xs">
                    <span className="text-green-500">
                      Marks for correct answer{" "}
                      <span className="font-semibold">
                        {quiz?.qset?.questions?.EN[currentQue]?.mp}
                      </span>
                    </span>
                    &nbsp;|&nbsp;
                    <span className="text-red-500">
                      Negative Marks{" "}
                      <span className="font-semibold">
                        {quiz?.qset?.questions?.EN[currentQue]?.mn}
                      </span>
                    </span>
                  </span>
                  <select
                    name=""
                    id=""
                    className="p-2 my-2 outline-1 rounded focus-within:outline-orange-400 outline text-xs"
                  >
                    <option value="">English</option>
                  </select>
                </div>
              </div>
              <div className="scbar">
                <div className="border h-[65vh] overflow-y-auto">
                  <div className="p-1 border">
                    <span className="font-semibold">
                      Question No. {currentQue + 1}
                    </span>
                  </div>
                  <div className="p-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          quiz?.qset?.questions?.EN[currentQue]?.question
                            ?.qContent,
                      }}
                    ></span>
                  </div>
                  <div className="p-3">
                    {Object.entries(
                      quiz?.qset?.questions?.EN[currentQue]?.question?.qOption
                    )
                      .filter(([key, value]) => value.trim() !== "")
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="cursor-pointer"
                          onClick={() => handleOptionSelect(key)}
                        >
                          <div className="flex items-center gap-2 border rounded p-2 sm:p-3 mb-3">
                            <input
                              type="radio"
                              name="quiz-option"
                              value={key}
                              checked={selectedOptions[currentQue] === key}
                              onChange={() => handleOptionSelect(key)}
                            />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: value,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="border p-3 mt-3 mb-3 text-sm">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() =>
                        setCurrentQue((prev) => Math.max(prev - 1, 0))
                      }
                      disabled={currentQue === 0}
                      className={`px-4 py-2 border rounded ${
                        currentQue === 0
                          ? "bg-[#e0e0e0] text-[#606060] cursor-not-allowed"
                          : " shadow-md"
                      }`}
                    >
                      PREVIOUS
                    </button>
                    <button
                      className="px-4 rounded py-1 shadow-md bg-customFC6200 text-white"
                      onClick={() => saveandnext()}
                    >
                      SAVE & NEXT
                    </button>
                    <button
                      className="px-4 rounded py-1 shadow-md bg-customFC6200 text-white"
                      onClick={() => submit()}
                    >
                      FINISH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
