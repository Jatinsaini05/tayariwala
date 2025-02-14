import React, { useState, useEffect } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLock, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import InnerContentBlock from '../innerContent/InnerContentBlock.jsx';
import { LuFiles } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { GiBorderedShield } from "react-icons/gi";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa'
import { getTestProductData, getWebberListItem } from '../../service/apiFetch.js';


const TestSeriesDetails = ({ details }) => {
    const [section, setSection] = useState("About Program");
    const [apiData, setApiData] = useState([]);
    const [testSection, setTestSection] = useState(0);
    const [accordOpen, setAccordOpen] = useState(0);
    const [currentUrl, setCurrentUrl] = useState("")
    const features = [];
    const faqs = [];
    const [listData, setListData] = useState()

    listData?.forEach((item) => {
        if (item.title.toLowerCase().includes("?")) {
            faqs.push(item);
        } else {
            features.push(item);
        }
    });

    useEffect(() => {
        // Access window only on the client side
        setCurrentUrl(window.location.href);
    }, []);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
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

    function getTotalQuestion(tests) {
        let totalQs = 0;
        tests?.map((test) => {
            totalQs += test?.test?.totalQs;
        });
        return totalQs;
    }



    return (
        <div>
            <div className='container mt-[60px]'>
                <div className='flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-8'>
                    <div className='lg:w-2/3'>
                        <div className='flex text-[#212529] flex-wrap sm:flex-nowrap'>
                            {["About Program", "Test Schedule", "Exam Info", "FAQs"].map((sec, idx) => (
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
                            {section === "Test Schedule" && (
                                <div className=''>
                                    <div className=''>
                                        <div >
                                            <div>
                                                <div className='overflow-x-auto' >
                                                    <div className='flex gap-2 w-max'>
                                                        {apiData?.sourceId?.map((btn, idx) => (
                                                            <div key={idx} onClick={
                                                                () => setTestSection(idx)
                                                            } className={`border hover:cursor-pointer rounded-md px-4 py-2 ${testSection === idx ? `text-white bg-[#212529]` : `text-[#606060] bg-[#ffff]`}`}>
                                                                <p>{btn?.testSeries?.title}</p>
                                                                <p className='flex gap-2 items-center text-[0.85em]'><span className='flex items-center gap-1'><LuFiles className='text-customFC6200' /><span>{btn?.testSeries?.totalTests} Tests</span>
                                                                </span><span className='flex items-center gap-1'><FaQuestionCircle className='text-customFC6200' /><span>{getTotalQuestion(btn?.tests)} Qs.</span></span></p>
                                                            </div>
                                                        ))}
                                                        <div className='block'><Link className="bg-[#FC6200] block hover:bg
                                                        ] py-3 px-3 rounded-md text-center text-white" href="/rrb-je-2024-cbt-01-online-test-series#">Download Schedule</Link></div>

                                                    </div>
                                                </div>
                                                {apiData?.sourceId?.map((btn, idx) => (
                                                    <div key={idx}>
                                                        {testSection === idx && <div className='mt-[20px] text-[#606060]'>
                                                            {btn?.tests?.map((test, idx) => (
                                                                <div key={idx} className='border p-6 rounded-md mt-4'>
                                                                    <div className='flex justify-between flex-wrap items-center'>
                                                                        <div>
                                                                            <h2>{test?.title}</h2>
                                                                            <p className='flex items-center text-[0.9em] gap-3'>
                                                                                <span className='flex items-center gap-1'><SlCalender className='text-customFC6200' /><span>{formatDate(test?.test?.startDate)}</span></span>
                                                                                <span className='flex items-center gap-1'><FaQuestionCircle className='text-customFC6200' /><span>{test?.test?.totalQs} Questions</span></span>
                                                                                <span className='flex items-center gap-1'><LuFiles className='text-customFC6200' /><span>{test?.test?.maxScore} Marks</span></span>
                                                                                <span className='flex items-center gap-1'><CiClock1 className='text-customFC6200' /><span>{test?.test?.duration} Mins</span></span>
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <Link href="#" title='Unlock Now'><div className='p-4 border border-[#221638] rounded-full shadow-[0px_0px_5px_1px_#221638]'> <FaLock className='text-xs text-black' /> </div></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}

                                                        </div>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {section === "Exam Info" && <div className='desci'><InnerContentBlock innerData={details?.courseStructure?.content}></InnerContentBlock></div>}
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
                                <div className='flex gap-5'>
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
                                <div className='my-3 text-[13px] font-semibold text-center text-[#dc3545] border border-[#dc3545]'><span>Special Offer for Ex Students @ ₹ {apiData?.customParam?.exStudentCost}
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
                            {apiData?.customParam?.tests && (
                                <div className='py-[10px] border-b sm:text-[17px] text-sm'>
                                    <span className='flex items-center justify-between'>
                                        <span className='flex items-center gap-1'>
                                            <CgWebsite className='text-customFC6200' />
                                            <span className='text-[#9b9b9b]'><strong>total Test</strong></span></span>
                                        <span className='text-[#606060]'>{apiData?.customParam?.tests} Tests</span>
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

export default TestSeriesDetails;
