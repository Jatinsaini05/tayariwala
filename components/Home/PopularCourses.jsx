import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { RiBookletFill } from "react-icons/ri";
import { Autoplay, Pagination } from 'swiper/modules';

const PopularCourses = ({ pageData }) => {
    const course = pageData?.advanceData?.data || [];
    return (
        <div>
            {/* {JSON.stringify(pageData)} */}
            <div className='container text-center lg:w-[50%]'>
                <span className='text-sm text-customFC6200'>{pageData?.subHeading}</span>
                <h2 className='text-[#221638] sm:text-4xl text-2xl font-semibold my-4 capitalize'>
                    {pageData?.heading}
                </h2>
                <span className='text-[#606060]' dangerouslySetInnerHTML={{ __html: pageData?.content }}>
                </span>
            </div>
            <div id="MainSlider" className='container pt-8'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {course.map((item, index) => (
                    <SwiperSlide key={course.id || index}>
                        <div className='bg-white max-w-[380px] shadow-xl'>
                            <div className="relative">
                                <Link href={course[index]?.uri}>
                                    <img src={course[index]?.thumb} alt="image" className="w-[380px]"></img>
                                </Link>
                                <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                    <span className='line-through text-[13px] font-semibold'>
                                        ₹ {course[index]?.linkedProduct?.mrp}
                                    </span>
                                    &nbsp;
                                    <span className='text-white text-xl font-semibold ml-1'>
                                        ₹ {course[index]?.linkedProduct?.cost}
                                    </span>
                                </span>
                            </div>
                            <div className='mt-6'>
                                <div className='text-center'>
                                    <p className='text-[#606060] text-xl font-semibold'><Link href={course[index]?.uri}>{course[index]?.name}</Link></p>
                                    <div className='pt-5'>
                                        <span className='text-[#606060] text-base line-clamp-5 leading-6' dangerouslySetInnerHTML={{ __html: course[index]?.desci }}></span>
                                    </div>

                                </div>
                                <div className='py-8 flex justify-between mx-3 border-t-2 border-t-[#F1F1F1]'>
                                    <div className='text-customFC6200 text-base flex flex-col'>
                                        <span>{course[index]?.eduStandard?.name}</span>
                                        <span>{course[index]?.course?.name}</span>
                                    </div>

                                    <ul>
                                        {course[index]?.linkedProduct?.customParam?.testNo && (
                                            <li className='flex items-center gap-1 text-[#050404] text-[15px]'>
                                                <RiBookletFill className='text-customFC6200' />
                                                {course[index]?.linkedProduct?.customParam?.testNo} Tests
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PopularCourses