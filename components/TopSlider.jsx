import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function TopSlider({slides}) {

  return (
    <>
            <section className="banner bg-[white] ">
  
  <div className="img w-full">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {
        slides?.length>0?slides.map((img,ind)=>(
      <SwiperSlide key={ind}>
        <img
          src={img?.imgUrl}
          className="w-full h-auto"
          alt=""
        />
      </SwiperSlide>

        )):'apidata not found'
      }
    </Swiper>
  </div>
</section>    
    </>
  )
}
