import React from 'react';
import Link from 'next/link';

const Courses = ({ userData }) => {
    let Enrolled = userData?.length || 0;
    let Active = 0;
    let Completed = 0;

    userData?.forEach((data) => {
        if (data?.isExpired === false) {
            Active++;
        }
        if (data?.product?.completed === 1) {
            Completed++;
        }
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-around md:text-lg text-[#666666] xl:gap-10 gap-3'>
                <div className='bg-[#f9fafc] border-1 border-[#ccc] rounded-md text-center pt-[27px] pb-[15px] px-4 w-full hover:bg-[#eaeaea]'>
                    <p>Enrolled Courses</p>
                    <span className='text-[#333333]'>{Enrolled}</span>
                </div>
                <div className='bg-[#f9fafc] border-1 border-[#ccc] rounded-md text-center pt-[27px] pb-[15px] px-4 w-full hover:bg-[#eaeaea]'>
                    <p>Active Courses</p>
                    <span className='text-[#333333]'>{Active}</span>
                </div>
                <div className='bg-[#f9fafc] border-1 border-[#ccc] rounded-md text-center pt-[27px] pb-[15px] px-4 w-full hover:bg-[#eaeaea]'>
                    <p>Completed Courses</p>
                    <span className='text-[#333333]'>{Completed}</span>
                </div>
            </div>

            <hr className='my-14 border-[#ddd]' />

            {/* Tabs Section */}
            <div className='w-full px-6 h-[70px] bg-[#eeeeee]'>
                <ul className='flex'>
                    <li className='hover:cursor-pointer text-customFC6200 border-t-5 bg-white w-fit px-[30px] py-[15px] border-customFC6200'>
                        Enrolled
                    </li>
                </ul>
            </div>

            {/* Table Header */}
            {userData?.length === 0 ? <div className='mt-4 text-[#666666]'>Ohh! It seems you have not enrolled in any program!</div> : <>
                <div className='w-full overflow-auto'>
                    <div className='w-fit'>
                        <div className='w-full bg-[#eeeeee] mt-5'>
                            <div className='grid gap-[20px] items-center p-[15px] grid-cols-[90px,1fr,80px,140px,140px]'>
                                <div></div>
                                <div className='text-base text-[#212529]'>Name</div>
                                <div className='text-base text-[#212529]'>Completed Lessons</div>
                                <div className='text-base text-[#212529]'>Expiration Date</div>
                            </div>
                        </div>

                        <div>
                            {userData?.length > 0 && userData?.map((data, idx) => (
                                <div
                                    className='grid border border-t-0 gap-[20px] items-center p-[15px] grid-cols-[90px,1fr,80px,140px,140px]'
                                    key={idx}
                                >
                                    <Link href={`profile/course/view?up=${data?.id}&p=${data?.product?.id}`}>
                                        <img src={data?.product?.thumb} alt="thumb img" />
                                    </Link>
                                    <Link href={`profile/course/view?up=${data?.id}&p=${data?.product?.id}`}>
                                        <p className='hover:text-customFC6200'>{data?.product?.alias}</p>
                                    </Link>
                                    <span>{data?.product?.completed === 1 ? 'Completed' : '0'}</span>
                                    <p>{formatDate(data?.validTill)}</p>
                                </div>
                            ))}
                            {userData?.length === 0 && <div className='text-center text-[#666666]'>Ohh! It seems you have not enrolled in any program!</div>}
                        </div>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default Courses;