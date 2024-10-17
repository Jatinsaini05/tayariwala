import { useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "@/styles/globals.css";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "@nextui-org/link";

const MainSlider = ({ topSlider }) => {
  // console.log(topSlider);
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };
  return (
    <div id="MainSlider" className="mt-3">
      <div className="container m-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className="mt-2 lg:mt-0">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
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
                >
                  {topSlider?.contentBlock?.SLIDER?.advanceData?.data?.slides
                    ? topSlider.contentBlock.SLIDER.advanceData.data.slides.map(
                        (item, ind) => (
                          <SwiperSlide key={ind}>
                            <div>
                              <Link href="#">
                                <img src={item.imgUrl} alt="Banner-image" />
                              </Link>
                            </div>
                          </SwiperSlide>
                        )
                      )
                    : "TopSlider Image not found"}
                </Swiper>
              </div>
              <div
                className="max-w-screen-xl bg-emerald-50 h-7 mt-4 overflow-hidden flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <marquee
                  ref={marqueeRef}
                  width="100%"
                  behavior="scroll"
                  direction="left"
                  scrollamount="5"
                >
                  <ul className="flex text-sm whitespace-nowrap">
                    {topSlider?.contentBlock?.MARQUEE?.advanceData?.data
                      ? topSlider.contentBlock.MARQUEE.advanceData.data.map(
                          (item, ind) => (
                            <li className="hover:underline mr-1" key={ind}>
                              <Link
                                href={item.link}
                                className="flex items-center"
                              >
                                <FaRegCircleDot className="mr-1 text-xs" />
                                {item.title}
                              </Link>
                            </li>
                          )
                        )
                      : "Marquee content not found"}
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
