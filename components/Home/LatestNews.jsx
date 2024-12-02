import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { CiCalendar } from "react-icons/ci";

const LatestNews = ( {pageData} ) => {
    const news = pageData?.advanceData?.data || [];
  return (
    <div>
     
      <div className='container sm:pt-28'>
                <div className='text-center xl:px-52'>
                    <span className='text-base text-customFC6200 uppercase'>{pageData?.subHeading}</span>
                    <h2 className='mt-5 text-2xl sm:text-4xl text-[#221638] font-semibold capitalize'>{pageData?.heading}</h2>
                    <div className='mt-5 mb-16'>
                    <span className='text-[#606060]' dangerouslySetInnerHTML={{__html: pageData?.content}}></span>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    id="MainSlider"
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {news.map((item, index) => (
                    <SwiperSlide key={news.id || index}><div className='overflow-hidden group'>
                        <div className='overflow-hidden'>
                            
                            <Link href={news[index]?.targetUrl}>
                                <img src={news[index]?.featuredImage} className=' group-hover:scale-125 group-hover:rotate-6'></img>
                            </Link>
                            
                        </div>
                        <div className='p-5 flex flex-col justify-between bg-[#fffaf3] h-64'>
                            <div className='flex flex-col gap-2'>
                                <Link href={news[index]?.targetUrl} className='text-start text-sm text-[#606060] hover:text-customFC6200'>EDUCATION</Link>
                                <Link href={news[index]?.targetUrl} className='text-start md:text-2xl text-lg font-semibold hover:text-customFC6200'>{news[index]?.title}</Link>
                            </div>
                            <div className='flex justify-between items-center text-xs sm:text-[15px]'>
                                <span className='flex items-center gap-1 text-customFC6200'><img src="https://i.filecdn.in/1mlearners/user-1732266672215.png" className='rounded-full w-9'></img> Master Learners</span>
                                <span className='flex items-center gap-1'>
                                    <CiCalendar className='text-xl text-customFC6200' />
                                    <span>{news[index]?.startDate}</span>
                                </span>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    ))}
                </Swiper>
                {(pageData?.buttons[0]?.link &&(
                <p className='text-center py-[70px] text-base text-[#606060]'>Get into details now? <Link href={pageData?.buttons[0]?.link} className='text-customFC6200 hover:underline hover:text-[#221638]'>{pageData?.buttons[0]?.title}</Link></p>
            ))}
                </div>
    </div>
  )
}

export default LatestNews
