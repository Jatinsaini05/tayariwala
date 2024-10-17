import React, { useRef, useState } from "react";
import {
  FaBook,
} from "react-icons/fa";
import { GrLink } from "react-icons/gr";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "@nextui-org/link";

const Links = ({ usefulLink }) => {
  return (
    <div>
      <div id="resultbutton" className="container m-auto mt-11">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
              {/* Outer Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Section: Useful Links (spanning 3 columns in large screens) */}
                <div className="col-span-12 lg:col-span-3 border rounded w-full">
                  <h3 className="text-emerald-600 text-lg font-medium border-b-1 border-black bg-emerald-50 p-2">
                    <a href="" className="flex items-center">
                      <GrLink className="mr-1" />
                      {usefulLink?.contentBlock?.USEFUL_LINK?.heading}
                    </a>
                  </h3>
                  <ul className="text-xs pb-2">
                    {usefulLink?.contentBlock?.USEFUL_LINK?.advanceData?.data
                      ? usefulLink.contentBlock.USEFUL_LINK.advanceData.data.map(
                          (item, index) => (
                            <li key={index} className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                              <Link
                                href={item.link}
                                className="text-black flex items-center"
                              >
                                <FaBook className="pr-2 text-xl" />
                                {item.title}
                              </Link>
                            </li>
                          )
                        )
                      : "links not found"}
                    {/* <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className="text-black flex items-center">
                        <FaWifi className="pr-2 text-xl" />
                        Live Online Course for ESE | GATE
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <GiTicket className="pr-2 text-xl" /> Classroom Course
                        for ESE | GATE
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaGraduationCap className="pr-2 text-xl" />
                        Scholarship Test for ESE & GATE
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <GiTicket className="pr-2 text-xl" /> New Batches
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaWifi className="pr-2 text-xl" /> Live Online Course
                        for SSC-JE
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaEnvelopeSquare className="pr-2 text-xl" /> Postal
                        Program for ESE | GATE
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaLaptop className="pr-2 text-xl" /> Online Test Series
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <GiTicket className="pr-2 text-xl" /> CQPP for ESE 2024
                        Main Exam
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaGraduationCap className="pr-2 text-xl" /> GATE 2024
                        Rank Predictor
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <HiMiniVideoCamera className="pr-2 text-xl" /> OQPP for
                        ESE | GATE 2024
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FiCheckSquare className="pr-2 text-xl" /> ESE prelims
                        Offline Test Series
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaBook className="pr-2 text-xl" /> IES MASTER
                        Publication
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaGraduationCap className="pr-2 text-xl" /> GATE
                        Toppers
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaGraduationCap className="pr-2 text-xl" /> ESE Toppers
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaComments className="pr-2 text-xl" /> Discussion Forum
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <IoFilmOutline className="pr-2 text-xl" /> Photo Gallery
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <IoFilmOutline className="pr-2 text-xl" /> Video Gallery
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <IoIosPeople className="pr-2 text-xl" /> Testimonials
                      </a>
                    </li>
                    <li className="border-b p-2 hover:bg-emerald-50 hover:cursor-pointer">
                      <a href="#" className=" text-black flex items-center">
                        <FaQuestionCircle className="pr-2 text-xl" /> Terms &
                        Conditions
                      </a>
                    </li> */}
                  </ul>
                </div>

                {/* Right Section: Videos and Toppers (spanning 9 columns in large screens) */}
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div className=" relative border rounded">
                      <a href="#">
                        <h3 className="text-emerald-600 text-lg font-medium border-b-1 border-black bg-emerald-50 p-2 flex items-center">
                          <HiMiniVideoCamera className="mr-1" />
                          {usefulLink?.contentBlock?.HOME_VIDEO1?.heading}
                        </h3>
                      </a>
                      <div className="flex justify-center items-center p-2">
                        <Swiper
                          spaceBetween={3}
                          centeredSlides={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                          className="mySwiper"
                        >
                          {usefulLink?.contentBlock?.HOME_VIDEO1?.advanceData
                            ?.data
                            ? usefulLink.contentBlock.HOME_VIDEO1.advanceData.data.map(
                                (itm, ind) => (
                                  <SwiperSlide key={ind}>
                                    <div>
                                      <iframe
                                        className="w-full h-52 object-cover"
                                        src={`https://www.youtube.com/embed/${itm.url}`}
                                        title="ESE 2022 Topper | Vaibhav Barsaiya | AIR-9 (CE) | IES Master Student"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        alt={itm.alt}
                                      ></iframe>
                                    </div>
                                  </SwiperSlide>
                                )
                              )
                            : "video url not found"}

                          {/* <SwiperSlide>
                            <div>
                              <iframe
                                className="w-full h-52 object-cover"
                                src="https://www.youtube.com/embed/emuC-hqmcJ0"
                                title="ESE 2022 Topper | Vaibhav Barsaiya | AIR-9 (CE) | IES Master Student"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </SwiperSlide> */}
                        </Swiper>

                        <Link href="/gallery-video" className="absolute z-10 text-xs text-green-700 px-1 bg-gray-200 hover:text-gray-200 hover:bg-green-700 bottom-0 transform translate-y-1/2 right-0">
                          View More &gt;
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded p-4 flex items-center">
                      <Swiper
                        spaceBetween={3}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {usefulLink?.contentBlock?.HOME_IMAGE_SLIDER
                          ?.advanceData?.data
                          ? usefulLink.contentBlock.HOME_IMAGE_SLIDER.advanceData.data.map(
                              (itm, ind) => (
                                <SwiperSlide key={ind}>
                                  <div className="w-full h-full flex items-center justify-center">
                                    <img
                                      className="w-full h-full object-cover"
                                      src={itm.url}
                                      alt={itm.alt}
                                    />
                                  </div>
                                </SwiperSlide>
                              )
                            )
                          : "Image Slider not found"}
                      </Swiper>
                    </div>
                  </div>

                  <div className="border rounded flex flex-col">
                    <h3 className="text-emerald-600 text-lg font-medium border-b-1 border-black bg-emerald-50 p-2">
                      <Link href={usefulLink?.contentBlock?.ESE_2023_TOPPERS?.link} className="flex items-center">
                        <IoIosPeople className="mr-1" />
                        {usefulLink?.contentBlock?.ESE_2023_TOPPERS?.heading}
                      </Link>
                    </h3>
                    <div className="relative p-2">
                      <Swiper
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1280: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                          },
                          1440: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                          },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {usefulLink?.contentBlock?.ESE_2023_TOPPERS?.advanceData
                          ?.data
                          ? usefulLink.contentBlock.ESE_2023_TOPPERS.advanceData.data.map(
                              (itm, idx) => (
                                <SwiperSlide key={idx}>
                                  <img
                                    className="border"
                                    src={itm.url}
                                    alt="AIR 1 - image"
                                  />
                                </SwiperSlide>
                              )
                            )
                          : "Get Ese toppers image not found"}
                      </Swiper>
                      <Link href="/result/ese" className="absolute z-10 text-xs text-white px-1 bg-green-700 bottom-0 transform translate-y-1/2 right-0">
                        View All Results &gt;
                      </Link>
                    </div>
                  </div>

                  <div className="border rounded flex flex-col">
                    <h3 className="text-emerald-600 text-lg font-medium border-b-1 border-black bg-emerald-50 p-2">
                      <Link href={usefulLink?.contentBlock?.GATE_TOPPERS?.link} className="flex items-center">
                        <IoIosPeople className="mr-1" />
                        {usefulLink?.contentBlock?.GATE_TOPPERS?.heading}
                      </Link>
                    </h3>
                    <div className="relative p-2">
                      <Swiper
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                          },
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1280: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                          },
                          1440: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                            
                          },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {
                          usefulLink?.contentBlock?.GATE_TOPPERS?.advanceData
                          ?.data?(usefulLink.contentBlock.GATE_TOPPERS.advanceData.data.map((itm,ind)=>(
                            <SwiperSlide key={ind}>
                            <img
                              className="border"
                              src={itm.url}
                              alt="AIR 1"
                            />
                          </SwiperSlide>
                          ))):("Gate toppers not found")
                        }      
                      </Swiper>

                      <Link href="/result/gate" className="absolute z-10 text-xs text-white px-1 bg-green-700 bottom-0 transform translate-y-1/2 right-0">
                        View All Results &gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
