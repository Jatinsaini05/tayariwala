import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { CiCalendar } from "react-icons/ci";

const LatestNews = ( {pageData} ) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
      };
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
                    {pageData?.advanceData?.data.map((item, index) => (
                    <SwiperSlide key={index}><div className='overflow-hidden group'>
                        <div className='overflow-hidden'>
                            
                            <Link href={`blog/${item?.uri}`}>
                                <img src={item?.featureImg} className=' group-hover:scale-125 group-hover:rotate-6'></img>
                            </Link>
                            
                        </div>
                        <div className='p-5 flex flex-col justify-between bg-[#fffaf3] h-64'>
                            <div className='flex flex-col gap-2'>
                                <Link href={`blog`} className='text-start text-sm text-[#606060] hover:text-customFC6200'>EDUCATION</Link>
                                <Link href={`blog/${item?.uri}`} className='text-start md:text-2xl text-lg line-clamp-4 font-semibold hover:text-customFC6200'>{item.title}</Link>
                            </div>
                            <div className='flex justify-between items-center text-xs sm:text-[15px]'>
                                <span className='flex items-center gap-1 text-customFC6200'><img src="https://i.filecdn.in/1mlearners/user-1732266672215.png" className='rounded-full w-9'></img> {item?.createdBy?.firstName} {item?.createdBy?.lastName} </span>
                                <span className='flex items-center gap-1'>
                                    <CiCalendar className='text-xl text-customFC6200' />
                                    <span>{formatDate(item?.publishedAt)}</span>
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
