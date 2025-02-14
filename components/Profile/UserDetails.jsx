import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaVideo, FaBook, FaClipboardList, FaPuzzlePiece } from 'react-icons/fa';
import { MdOutlineSchedule, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import { GiNotebook } from "react-icons/gi";
import { useStoreLogin } from '../../store/login';
import { getUserBookData, getUserLiveClassData, getUserOfflineScheduleData, getUserOrderData, getUserProductData, getUserQuizData, getUserQuizGroup, getUserTestSeriesData } from '../../service/apiFetch';
import Courses from '../Profile/TabData/Courses';
import Orders from './TabData/Orders';
import LiveClasses from './TabData/LiveClasses';
import OfflineSch from './TabData/OfflineSch';
import Tests from './TabData/Tests';
import Quiz from './TabData/Quiz';
import Books from './TabData/Books';
import { CiPen } from "react-icons/ci";


const UserDetails = ({ user }) => {
    const [active, setActive] = useState('courses');
    const [courseData, setcourseData] = useState(null);
    const [orderData, setorderData] = useState(null)
    const [offlineSchData, setofflineSchData] = useState(null);
    const [testData, settestData] = useState(null);
    const [quizData, setquizData] = useState(null);
    const [quizGroup, setQuizGroup] = useState(null);
    const [bookData, setbookData] = useState(null);
    const [liveClassData, setliveClassData] = useState(null);
    const [error, setError] = useState(null);
    const authToken = useStoreLogin.getState().authToken;
    const userId = useStoreLogin.getState().user?.id;
    const batch = user?.mainBatch?.id;

    // console.log(user)
    const getDateRange = () => {
        const now = new Date();

        // Set 'from' to today's date at 12:00 AM (midnight)
        const from = new Date(now.setHours(0, 0, 0, 0)).toISOString(); // Converts to ISO string

        // Set 'to' to today's date at 11:59:59.999 PM
        const to = new Date(now.setHours(23, 59, 59, 999)).toISOString();

        // Format the query string
        const queryParams = `page=1&from=${from}&to=${to}&status=CONFIRMED,RUNNING,FINISHED,APPROVED`;

        return queryParams;
    };

    const data = () => {
        return useStoreLogin.getState().logout();
    }
    const fetchProductData = async () => {
        try {
            if (!authToken) {
                setError('Auth token is missing.');
                return;
            }

            const params = "productCategory=5cf0cfc4e6636f4d815ccb0a";
            const response = await getUserProductData(params);

            response.error ? setError(response.error) : setcourseData(response);
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchOrderData = async () => {
        if (!authToken) {
            setError('Auth token is missing.');
            return;
        }

        try {
            const params = {
                page: 1,
                limit: 100
            };
            const response = await getUserOrderData(params);

            if (response.error) {
                setError(response.error);
            } else {
                setorderData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }


    };

    const fetchLiveClassData = async () => {
        if (!authToken) {
            setError('Auth token is missing.');
            return;
        }

        try {
            const response = await getUserLiveClassData(userId);

            if (response.error) {
                setError(response.error);
            } else {
                setliveClassData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    const fetchOfflineScheduleData = async () => {
        if (!authToken) {
            setError('Auth token is missing.');
            return;
        }

        try {
            const params = getDateRange();
            const response = await getUserOfflineScheduleData(params, batch);
            if (response.error) {
                setError(response.error);
            } else {
                setofflineSchData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    const fetchTestSeriesData = async () => {
        if (!authToken) {
            setError('Auth token is missing.');
            return;
        }

        try {
            const response = await getUserTestSeriesData();
            if (response.error) {
                setError(response.error);
            } else {
                settestData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    const fetchQuizGroup = async () => {
        const params = {
            course: user?.mainBatch?.course,
            stream: user?.mainBatch?.stream,
        }
        try {
            const response = await getUserQuizGroup(params);
            if (response.error) {
                setError(response.error);
            } else {
                setQuizGroup(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    const fetchQuizData = async () => {
        const params = {
            populate: "qset",
        }
        const qid = quizGroup[0]?.id
        try {
            const response = await getUserQuizData(params, qid);
            if (response.error) {
                setError(response.error);
            } else {
                setquizData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    useEffect(() => {
        if (quizGroup) {
            fetchQuizData();
        }
    }, [quizGroup])

    const fetchBookData = async () => {
        if (!authToken) {
            setError('Auth token is missing.');
            return;
        }

        try {
            const response = await getUserBookData(userId);

            if (response.error) {
                setError(response.error);
            } else {
                setbookData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching order data:', error);
        }
    };

    return (
        <div className="container mt-8 lg:mt-0 mb-16">
            <div className="lg:grid lg:grid-cols-12 px-3 lg:px-0">
                <div className="lg:ml-4 mb-8 col-span-3 md:col-span-4 xl:col-span-3 rounded-sm lg:w-[248px] w-full overflow-auto">
                    <div className='flex border lg:flex-col'>
                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'courses' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('courses'); fetchProductData() }}
                        >
                            <span className="flex items-center gap-4">
                                <FaVideo className={`${active === 'courses' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span>Courses</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'courses' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'orders' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('orders'); fetchOrderData() }}
                        >
                            <span className="flex items-center gap-4">
                                <FaClipboardList className={`${active === 'orders' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span>Orders</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'orders' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'liveclasses' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('liveclasses'); fetchLiveClassData() }}
                        >
                            <span className="flex items-center gap-4">
                                <FaVideo className={`${active === 'liveclasses' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span className='w-32 lg:w-auto'>Live Classes</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'liveclasses' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'offlineschedule' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('offlineschedule'); fetchOfflineScheduleData() }}
                        >
                            <span className="flex items-center gap-4">
                                <MdOutlineSchedule className={`${active === 'offlineschedule' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span className='w-32 lg:w-auto'>Offline Schedule</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'offlineschedule' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'tests' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('tests'), fetchTestSeriesData() }}
                        >
                            <span className="flex items-center gap-4">
                                <GiNotebook className={`${active === 'tests' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span>Tests</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'tests' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        {user?.productCategories?.includes('5b267b05851670048a6820a9') && (
                            <Link href="https://masterlearners.in/student/conventional-exam">
                                <button className='flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm hover:bg-customFC6200 hover:text-white'>
                                    <span className="flex items-center gap-4">
                                        <CiPen className={`${active === 'conventional' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                        <span>Conventional Tests</span>
                                    </span>
                                    <span>
                                        <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'tests' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                                    </span>
                                </button>
                            </Link>
                        )}

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'quiz' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('quiz'); fetchQuizGroup() }}
                        >
                            <span className="flex items-center gap-4">
                                <FaPuzzlePiece className={`${active === 'quiz' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span>Quiz</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'quiz' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button
                            className={`flex border-r group border-b w-full items-center justify-between md:p-5 p-2 text-sm ${active === 'books' ? 'bg-customFC6200 text-white' : 'bg-white text-black hover:bg-customFC6200 hover:text-white'}`}
                            onClick={() => { setActive('books'); fetchBookData() }}
                        >
                            <span className="flex items-center gap-4">
                                <FaBook className={`${active === 'books' ? 'text-white' : 'text-customFC6200 group-hover:text-white'}`} />
                                <span>Books</span>
                            </span>
                            <span>
                                <MdOutlineKeyboardArrowRight className={`hidden lg:block ${active === 'books' ? 'rotate-180 text-white' : 'text-[#999] group-hover:text-white'}`} />
                            </span>
                        </button>

                        <button onClick={data} className="flex group border-b border-r w-full items-center justify-between md:p-5 p-2 text-sm hover:bg-customFC6200 hover:text-white">
                            <span className="flex items-center gap-4">
                                <BiExit className="text-customFC6200 group-hover:text-white" />
                                <span>Logout</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="pt-6 md:pr-6 md:col-span-8 xl:col-span-9 w-full">
                    <div className=''>
                        {active === 'courses' && <div><Courses userData={courseData} /></div>}
                        {active === 'orders' && <div><Orders userData={orderData} /></div>}
                        {active === 'liveclasses' && <div><LiveClasses userData={liveClassData} /></div>}
                        {active === 'offlineschedule' && <div><OfflineSch userData={offlineSchData} /></div>}
                        {active === 'tests' && <div><Tests userData={testData} /></div>}
                        {active === 'quiz' && <div><Quiz userData={quizData} user={user}/></div>}
                        {active === 'books' && <div><Books userData={bookData} /></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;