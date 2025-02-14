import React, { useState, useEffect } from 'react';
import { FaRegFile, FaRupeeSign } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLock, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import InnerContentBlock from '../innerContent/InnerContentBlock.jsx';
import { GoStopwatch } from "react-icons/go";
import { GiBookPile, GiBorderedShield } from "react-icons/gi";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa'
import { getTestProductData, getWebberListItem } from '../../service/apiFetch.js';


const LiveClassesdetail = ({ details }) => {
    const [section, setSection] = useState("About Program");
    const [apiData, setApiData] = useState([]);
    const [testSection, setTestSection] = useState(0);
    const [accordOpen, setAccordOpen] = useState(0);
    const [subId, setSubID] = useState("");
    const [currId, setCurrId] = useState("");
    const [lessonData, setLessonData] = useState([]);
    const [listData, setListData] = useState()
    const features = [];
    const faqs = [];
    const [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        // Access window only on the client side
        setCurrentUrl(window.location.href);
    }, []);

    listData?.forEach((item) => {
        if (item.list.shortCode.toLowerCase().includes("faqs")) {
            faqs.push(item);
        } else if (item.list.shortCode.toLowerCase().includes("feature") ||
            item.list.shortCode.toLowerCase().includes("ftr")) {
            features.push(item);
        }
    });


    useEffect(() => {
        const fetchData = async () => {
            const params = {
                "sortAsTheyAdded": true
            }
            const path = details?.uri
            const data = await getTestProductData(path, params)
            setApiData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const params = {
                "list": [details?.more?.list, details?.courseStructure?.list].toString(),
                "populate": "list",
                "limit": "all"
            }
            const data = await getWebberListItem(params)
            setListData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (apiData?.sourceId && apiData.sourceId.length > 0) {
            setCurrId(apiData.sourceId[0]?.id);
            if (apiData.sourceId[0]?.subjects?.length > 0) {
                setSubID(apiData.sourceId[0].subjects[0]?.id);
            }
        }
    }, [apiData]);



    useEffect(() => {
        if (currId && subId) {
            const fetchLessons = async () => {
                const response = await fetch(`https://masterlearners.in/api/public/data/get-lessons-group-by-unit?curriculum=${currId}&subject=${subId}`);
                const data = await response.json();
                setLessonData(data);
            };
            fetchLessons();
        }
    }, [currId, subId]);



    return (
        <div>
            <div className='container mt-[60px]'>
                <div className='flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-8'>
                    <div className='lg:w-2/3'>
                        <div className='flex text-[#212529] flex-wrap sm:flex-nowrap'>
                            {["About Program", "Course Curriculum", "Fee Structure", "FAQs"].map((sec, idx) => (
                                <div className="relative w-1/2 sm:w-auto" key={idx}>
                                    <button
                                        className={`border xl:w-40 w-full sm:w-32 py-[18px] ${section === sec
                                            ? 'bg-white text-customFC6200 border-b-0'
                                            : 'bg-[#f0f1f7]'
                                            }`}
                                        onClick={() => setSection(sec)}
                                    >
                                        {sec.charAt(0).toUpperCase() + sec.slice(1).replace('_', ' ')}
                                    </button>
                                    <div className={`w-full bg-customFC6200 absolute top-0 ${section === sec ? 'h-1' : ''}`}></div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-[56px] mb-[40px]'>
                            {section === "About Program" && <div>
                                <span dangerouslySetInnerHTML={{ __html: details?.desci }}></span>
                                <div className='my-5'>
                                    <h3 className='text-customFC6200 mb-3 text-lg'>Program Features</h3>
                                    <div className='grid md:grid-cols-2 grid-cols-1 place-content-center gap-4'>
                                        {features?.map((item, index) => (
                                            <div key={index} className=''>
                                                <div className='flex items-center gap-3 border shadow-lg p-5 w-full h-full'>
                                                    <FaCheckCircle className='text-customFC6200 min-w-7 min-h-7' />
                                                    <span className='text-[#9b9b9b]'>{item.title}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <span dangerouslySetInnerHTML={{ __html: details?.more?.content }}></span>
                            </div>}
                            {section === "Course Curriculum" && (
                                <div className=''>
                                    <div className=''>
                                        <div >
                                            <div>
                                                <div className='overflow-x-auto'>
                                                    <div className='flex gap-2 w-max'>
                                                        {apiData?.sourceId?.map((btn, idx) => (
                                                            <div
                                                                key={idx}
                                                                onClick={() => {
                                                                    setCurrId(btn?.id);
                                                                    if (btn?.subjects?.length > 0) {
                                                                        setSubID(btn?.subjects[0]?.id);
                                                                    }
                                                                    setTestSection(idx);
                                                                }}
                                                                className={`border hover:cursor-pointer text-sm sm:text-base text-center rounded-md w-44 sm:px-8 px-3 py-2 sm:py-2 ${testSection === idx ? `text-white bg-[#221638]` : `text-[#606060] bg-[#ffff]`}`}
                                                            >
                                                                <p>{btn?.title}</p>
                                                                <p>
                                                                    <span className="flex items-center justify-center gap-1 text-customFC6200">
                                                                        <GiBookPile />
                                                                        <span>{Array.isArray(btn?.subjects) ? btn?.subjects.length : 0} Subjects</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>
                                                        {apiData?.sourceId?.map((btn, idx) => (
                                                            <div key={idx}>
                                                                {testSection === idx && (
                                                                    <div className="mt-[20px] text-[#606060] flex items-center gap-3">
                                                                        <label htmlFor={`subjects-${idx}`} className="font-bold block mb-2">
                                                                            Subjects
                                                                        </label>
                                                                        <select
                                                                            id={`subjects-${idx}`}
                                                                            className="border px-4 py-2 rounded-md w-44 overflow-x-auto"
                                                                            value={subId}
                                                                            onChange={(e) => {
                                                                                const selectedSubject = btn?.subjects?.find(sub => sub.id === e.target.value);
                                                                                if (selectedSubject) {
                                                                                    setSubID(selectedSubject.id);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {btn?.subjects?.map((sub, subIdx) => (
                                                                                <option key={subIdx} value={sub?.id}>
                                                                                    {sub?.name}
                                                                                </option>
                                                                            ))}
                                                                        </select>

                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='md:px-3 mt-4 sm:mt-6'>
                                                <div className='w-full border rounded-sm'>
                                                    {lessonData.length ? (
                                                        lessonData.map((item, index) => (
                                                            <div key={index} className='mb-3'>
                                                                <h3 className='sm:text-[20px] text-[18px] text-[#221638] border-b font-semibold p-4 sm:p-6'>
                                                                    {item?._id?.unit?.name}
                                                                </h3>
                                                                {item?.lessons?.map((itm, lessonIndex) => (
                                                                    <div key={lessonIndex} className='bg-[#f1f2f866] mb-1 sm:px-7 px-5'>
                                                                        <p className='py-5 flex justify-between items-center'>
                                                                            <span className='flex items-center gap-2 md:gap-4'>
                                                                                <span className='text-customFC6200'><FaRegFile /></span>
                                                                                <span>{itm?.title || "Untitled Lesson"}</span>
                                                                            </span>
                                                                            <span className='flex items-center gap-2 md:gap-4'>
                                                                                <span className='text-[#909090] text-[14px] bg-[#c0c0c0] px-2 py-1 rounded'>
                                                                                    {itm?.duration ? `${itm?.duration} minutes` : "Unknown Duration"}
                                                                                </span>

                                                                                {itm?.type === "free" ? (
                                                                                    <span className='text-sm text-white bg-[#00ADFF] rounded px-2 py-1'>
                                                                                        Preview
                                                                                    </span>
                                                                                ) : (
                                                                                    <span className='bg-[#e4f1f2] p-1 rounded-full'>
                                                                                        <FaLock className='text-[#442e66]' />
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))

                                                    ) : (
                                                        <div className='text-[#856404] bg-[#fff3cd] tex-[15px] sm:text-xl px-[20px] py-[12px]'>
                                                            <h2>Coming soon...</h2>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {section === "Fee Structure" && <div className='desci'><InnerContentBlock innerData={details?.courseStructure?.content}></InnerContentBlock></div>}
                            {section === "FAQs" && (
                                <div className=''>
                                    {faqs?.map((faq, idx) => (
                                        <div key={idx} className={`mb-2  border rounded overflow-hidden ${accordOpen === idx ? 'border-customFC6200' : ''}`}>
                                            <div onClick={() => setAccordOpen(
                                                accordOpen === idx ? null : idx)} className='px-3 cursor-pointer bg-[#f7f7f7]  border-b-2 py-4 gap-2 flex justify-between items-center'>
                                                <h2 className='text-[#212529]'>{faq?.title}</h2><span>{accordOpen == idx ? <MdArrowDropUp className='text-xl' /> : <MdArrowDropDown className='text-xl' />}</span>
                                            </div>
                                            {accordOpen === idx && (
                                                <div className='py-4  text-[#606060] px-3'>
                                                    <p> <span dangerouslySetInnerHTML={{ __html: faq?.desci }}></span></p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className='relative mb-4 lg:mt-[-312px] h-max pb-[50px] bg-[#f8f9f8] rounded-md pt-[12px] px-[12px]'>
                        <div>
                            <img src={apiData?.featureImg} className='lg:w-[360px] w-full' />
                        </div>
                        <div className='px-[25px] pt-[35px] sm:text-[17px] text-sm'>
                            <div className='pb-[10px] sticky top-0 border-b'>
                                <div className='flex items-center gap-5'>
                                    <div className=' flex items-center '>
                                        <FaRupeeSign className='text-customFC6200 text-lg' />
                                        <span className='text-[#343a40] text-[30px] pl-1 font-bold'>{apiData?.cost}</span>
                                    </div>
                                    <div className='text-sm flex items-center font-bold gap-1'>
                                        <FaRupeeSign className='text-xs text-customFC6200' />
                                        <span className='line-through text-[#9b9b9b]'>{apiData?.mrp}</span>
                                        <span>{`${Math.floor(100 - (apiData?.cost * 100 / apiData?.mrp))}% Off`}</span>
                                    </div>
                                </div>
                                <div className='my-3 text-[13px] font-semibold text-center text-[#dc3545] border border-[#dc3545]'><span>Offer ends on {apiData?.customParam?.offerEndDate}
                                </span></div>
                            </div>
                            {apiData?.customParam?.startDate && (
                                <div className='py-[10px] border-b sm:text-[17px] text-sm'>
                                    <span className='flex items-center justify-between'>
                                        <span className='flex items-center gap-1'>
                                            <GoStopwatch className='text-customFC6200' />
                                            <span className='text-[#9b9b9b]'><strong>Start Date</strong></span></span>
                                        <span className='text-[#606060]'>{apiData?.customParam?.startDate}</span>
                                    </span>
                                </div>
                            )}
                            {apiData?.customParam?.duration && (
                                <div className='py-[10px] border-b sm:text-[17px] text-sm'>
                                    <span className='flex items-center justify-between'>
                                        <span className='flex items-center gap-1'>
                                            <GoStopwatch className='text-customFC6200' />
                                            <span className='text-[#9b9b9b]'><strong>Class Duration</strong></span></span>
                                        <span className='text-[#606060]'>{apiData?.customParam?.duration}</span>
                                    </span>
                                </div>
                            )}
                            {apiData?.customParam?.validity && (
                                <div className='py-[10px] border-b sm:text-[17px] text-sm'>
                                    <span className='flex items-center justify-between'>
                                        <span className='flex items-center gap-1'>
                                            <GiBorderedShield className='text-customFC6200' />
                                            <span className='text-[#9b9b9b]'><strong>Access</strong></span></span>
                                        <span className='text-[#606060]'>{apiData?.customParam?.validity}</span>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="px-[25px] pt-[35px] mt-[10px]">
                            <Link
                                href={`checkout?product=${apiData?.id}`}
                                className="w-full bg-customFC6200 hover:bg-[#221638] text-white text-center py-3 rounded-md block">
                                Buy Now
                            </Link>
                        </div>
                        <div className='relative'>
                            <div className="group">
                                <div className='flex gap-2 hover:cursor-pointer justify-center items-center py-[10px] px-[25px] font-semibold mt-[10px]'>
                                    <span className='text-customFC6200'>
                                        Share This Course
                                    </span>
                                    <TbShare />
                                </div>
                                <div className='absolute sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 left-1/2 -translate-x-1/2 -bottom-10'>
                                    <div className='flex gap-2 px-[25px] justify-center z-50'>
                                        <ul className='flex gap-2 justify-center'>
                                            <li>
                                                <Link href={`https://www.facebook.com/sharer.php?u=${currentUrl}`} target="_blank">
                                                    <div className='hover:bg-customFC6200 text-[#221638] hover:text-white transition-colors delay-0 duration-0 bg-[#e1e1e1] p-2 rounded-[2px]'>
                                                        <FaFacebookF />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={`https://x.com/share?url=${currentUrl}`} target='__blank'>
                                                    <div className='hover:bg-customFC6200 text-[#221638] hover:text-white transition-colors delay-0 duration-0 bg-[#e1e1e1] p-2 rounded-[2px]'>
                                                        <FaTwitter />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={`https://www.pinterest.com/pin/create/button/?url=${currentUrl}`} target='__blank'>
                                                    <div className='hover:bg-customFC6200 text-[#221638] hover:text-white transition-colors delay-0 duration-0 bg-[#e1e1e1] p-2 rounded-[2px]'>
                                                        <FaPinterest />
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`} target='__blank'>
                                                    <div className='hover:bg-customFC6200 text-[#221638] hover:text-white transition-colors delay-0 duration-0 bg-[#e1e1e1] p-2 rounded-[2px]'>
                                                        <FaLinkedinIn />
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveClassesdetail;