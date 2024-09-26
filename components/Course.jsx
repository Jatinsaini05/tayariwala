
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';

export default function Course({courses}) {

  return (
    <>
    {/* {JSON.stringify( courses)} */}
      <section className="sec4 bg-[#aa1514] py-2">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="offer">
            <h3 className="text-lg font-medium text-white text-center p-[20px_0px_10px] uppercase">
              {courses?.heading}
            </h3>
            <div className="border-b-2 mx-auto w-[300px] py-[3px] border-[white]"></div>
            <Swiper
              
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween:10
                },
                768: {
                  spaceBetween:20,
                  slidesPerView: 2,
                },
                1024: {
                  spaceBetween:30,
                  slidesPerView: 4,
                },
              }}
            >
              {
                courses?.advanceData?.data?.map((items,index)=>(
                  <SwiperSlide key={index}>
                    <div className="cart1 py-6  h-[415px] rounded-lg">
                      <div className="img">
                        <img
                          className='w-full max-h-[200px]  min-h-[200px]'
                          src={items.thumb}
                          alt=""
                        />
                      </div>
                     
                      <div className="cost bg-[#104270] text-white py-1">
                        <span className="text-xs font-medium ">
                          Cost : ₹ {items.cost}
                        </span>
                      </div>
                      <div className="heading  bg-[white] p-[10px_15px] py-4">
                        <div className='line-clamp-1'>
                        <h3 className="text-2xl text-[#104270] font-bold  ">
                          <Link href="#">{items.name}</Link>
                        </h3>
                        </div>

                        <div className="btn grid grid-cols-2 gap-8 p-[20px_5px]">
                          <div className="btn1 border-2 border-[#0c4270] rounded text-center ">
                            <Link href={`courses/detail/${items.uri}`} className="text-center hover:bg-[#104270] hover:text-white w-full inline-block ">See Details</Link>
                          </div>
                          <div className="btn1 text-center bg-[#0c4270] hover:bg-white hover:text-[#104270] border-2 border-[#104270] text-white rounded">
                            <Link  href={`/buy/${items?.linkedProduct?.id}`}>
                             Apply Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
            
                  </SwiperSlide>

                ))
              }
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
