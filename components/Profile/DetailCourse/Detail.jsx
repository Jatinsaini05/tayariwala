import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import { getLessonContent, getLessonsData } from "../../../service/apiFetch";
import { useRouter } from "next/router";
import { FaRegFile, FaRegFilePdf } from "react-icons/fa"
import { CiClock1 } from "react-icons/ci";

const Detail = ({ subjectData, data }) => {
  const router = useRouter();
  console.log(data)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonData, setLessonData] = useState(null);
  const [lessonContent, setLessonContent] = useState(null);
  const [error, setError] = useState(null);
  const [openLessonIndex, setOpenLessonIndex] = useState(0);

  useEffect(() => {
    if (subjectData?.length > 0) {
      setSelectedOption(subjectData[0]._id);
    }
  }, [subjectData]);

  useEffect(() => {
    if (lessonData?.length > 0) {
      setSelectedLesson(lessonData[0].lessons[0]._id);
    }
  }, [lessonData]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleSelectLesson = (id) => {
    setSelectedLesson(id);
  }

  const fetchLesson = async () => {
    if (!selectedOption) return;
    const ids = `${selectedOption.curriculum}/${selectedOption.subject._id}`;
    try {
      const params = { product: router.query.p };
      if (!params) return;

      const response = await getLessonsData(params, ids);
      if (response.error) {
        setError(response.error);
      } else {
        setLessonData(response);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching access data:", err);
    }
  };


  useEffect(() => {
    fetchLesson();
  }, [selectedOption]);

  const fetchLessonContent = async () => {
    if (!selectedLesson) return;
    const ids = `${selectedLesson}/${router.query.p}`;
    try {
      const params = { checkWebAccessDate: true };
      if (!params) return;

      const response = await getLessonContent(params, ids);
      if (response.error) {
        setError(response.error);
      } else {
        setLessonContent(response);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching access data:", err);
    }
  };

  useEffect(() => {
    fetchLessonContent();
  }, [selectedLesson]);

  const toggleLesson = (index) => {
    setOpenLessonIndex(openLessonIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex scbar">
        <div
          className={`h-svh ${sidebarOpen ? "sm:w-[45%] w-[200%]" : "w-0"}`}
        ></div>
        <div
          className={`h-svh scbar overflow-auto fixed bg-white shadow-[12px_-6px_9px_0px_rgba(0,_0,_0,_0.1)] ${sidebarOpen ? "sm:w-[31%] w-[66.5%]" : "w-0 hidden"
            }`}
        >
          <div className="w-full text-sm">
            <div className="pb-8 border-b bg-[#f9fafc]">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full pl-[18px] pr-[30px] h-[42px] rounded-md bg-customFC6200 text-white flex justify-between items-center"
              >
                <span>
                  {selectedOption
                    ? selectedOption.subject.name
                    : "No Subject Found..."}
                </span>
                <RiArrowDownSLine
                  className={`text-[#999] transform ${dropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {dropdownOpen && (
                <div className="bg-white shadow-lg mt-2 rounded-md w-full">
                  {subjectData?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(item?._id)}
                      className={`pl-[18px] pr-[30px] hover:bg-[#f6f6f6] flex items-center h-[42px] text-sm text-gray-700 cursor-pointer ${selectedOption &&
                        selectedOption?.subject?._id === item?._id?.subject?._id
                        ? "bg-[#f6f6f6] font-semibold"
                        : ""
                        }`}
                    >
                      {item?._id?.subject?.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {lessonData?.length > 0 ? (
              <div className="mt-4">
                {lessonData.map((item, index) => (
                  <div key={index} className="mb-3 group">
                    <div
                      onClick={() => toggleLesson(index)}
                      className="md:text-xl sm:text-base relative font-semibold items-center flex justify-between p-3 pb-9 border-b cursor-pointer"
                    >
                      {item?._id?.unit?.name}
                      <span className="mr-3 text-[#666] text-xs">
                        {openLessonIndex === index ? "▲" : "▼"}
                      </span>
                      <div className="absolute h-[6px] bottom-5 w-20 bg-[#cccccc] rounded-md overflow-hidden">
                        <div className="h-[6px] w-1/2 bg-customFC6200"></div>
                      </div>
                    </div>
                    {openLessonIndex === index && (
                      <div className="text-sm text-[#333] font-semibold">
                        {item?.lessons?.map((itm, index) => (
                          <div key={index} className={`py-3 px-3 mb-2 hover:cursor-pointer ${selectedLesson === itm?._id ? ("bg-[#eaeaea]") : ("bg-[#f9fafc]")}`} onClick={() => handleSelectLesson(itm?._id)}>
                            <div className="flex items-center gap-4">
                              <FaRegFile className="text-customFC6200 text-base" />
                              <div className="flex flex-col gap-1">
                                <div>{itm?.title}</div>
                                <div className="flex items-center text-xs gap-2"><CiClock1 />{`${itm?.duration} minutes`}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <div className="flex justify-between items-center pl-[10%] bg-[#442e66] text-white">
              <h1 className="hover:text-customFC6200 hover:cursor-pointer">{data?.alias}</h1>
              <Link href="/profile">
                <button className="flex items-center sm:p-6 p-3 bg-[#ffffff1a]">
                  <ImCross />
                </button>
              </Link>
            </div>
          </div>
          <div className="md:px-28 my-28 h-2/3 md:h-1/2 px-2 overflow-auto">
            {lessonContent ? (
              <>
                {lessonContent?.lessonContent?.blocks?.map((item, index) => {
                  if (item?.type === "video") {
                    return (
                      <div key={index} className="my-4 p-4">
                        <p className="mt-1 mb-4 leading-7"><strong>Recorded Lectures can be accessed through Mobile App and Desktop App. See the <span><Link href="/how-to-access-live-class" className="text-[#f8f9f8] hover:text-[#cbd3da] bg-customFC6200 px-3 rounded py-[6px] font-normal">Instructions</Link></span> to access the live classes.</strong></p>
                        <Link href="/master-learners-mobile-app-and-desktop-app"><img src="https://i.filecdn.in/1mlearners/download-1731910381227.png" alt="download" /></Link>
                      </div>
                    );
                  }
                  if (item?.type === "pdf") {
                    return (
                      <div key={index} className="my-4 p-4">
                        <h3 className="text-3xl text-[#333333] font-semibold">Class Notes</h3>
                        <Link target="_blank" href={item?.content}><div className="py-5 shadow-lg px-10 mt-4 flex gap-5 items-center"><FaRegFilePdf className="text-[#dc3545] text-3xl"/><p className="text-[#007bff] hover:underline">Class Notes</p></div></Link>
                      </div>
                    );
                  }
                  if (item?.type === "text") {
                    return (
                      <div key={index} className="my-4 p-4 bg-gray-100 rounded-md">
                       <span className="text-lg" dangerouslySetInnerHTML={{ __html: item?.content }}></span>
                      </div>
                    );
                  }
                  return null; // For any unhandled types
                })}
              </>
            ) : (
              <p className="text-center text-[#221638] sm:text-2xl text-xl">
                No content added yet! Please visit another lesson...
              </p>
            )}
          </div>
          <hr />
        </div>
      </div>
      <button
        onClick={() => setSidebarOpen((prevState) => !prevState)}
        className={`fixed top-[25%] z-20 bg-white shadow-[8px_8px_6px_0px_rgba(0,_0,_0,_0.1)] px-2 py-5 left-0 ${sidebarOpen ? `sm:left-[31%] left-[66.5%]` : ``}`}
      >
        <div
          className={`w-0 h-0 border-t-8 border-b-8 border-transparent border-r-8 border-solid border-r-customFC6200 ${sidebarOpen ? null : "rotate-180"
            }`}
        ></div>
      </button>
    </div>
  );
};

export default Detail;