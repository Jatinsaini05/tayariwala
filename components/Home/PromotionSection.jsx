import React, { useMemo } from "react";
import { FaCamera, FaRegBookmark, FaUser } from "react-icons/fa";

import { CiClock2 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "@nextui-org/link";

const PromotionSection = ({ publication }) => {
  const imageGroupSLider = useMemo(() => {
    const data = [];
    if (publication?.contentBlock?.ARTICLES_GALLRY?.advanceData?.data?.length) {
      publication?.contentBlock?.ARTICLES_GALLRY?.advanceData?.data.forEach(
        (el, index) => {
          if (index % 4 == 0) {
            data.push([el]);
          } else {
            data[data.length - 1].push(el);
          }
        }
      );
    }
    return data;
  }, [publication?.contentBlock?.ARTICLES_GALLRY?.advanceData?.data]);
  return (
    <div>
      <div className="bg-emerald-50 mt-10 pt-4 pb-4">
        <div className="container mx-auto">
          {/* Center the container */}
          <h1 className="text-3xl mb-4">
            {publication?.contentBlock?.TESTMONIALS?.heading}
          </h1>
          <hr />
          <div
            id="swiperTestimonial"
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <div className="">
              <span className="bg-red-500 px-1 text-xs text-white mt-5">
                {publication?.contentBlock?.TESTMONIALS?.subHeading}
              </span>
              <div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {publication?.contentBlock?.TESTMONIALS?.advanceData?.data
                    ? publication.contentBlock.TESTMONIALS.advanceData.data.map(
                        (elm, index) => (
                          <SwiperSlide key={index}>
                            <div className="flex gap-3 p-4 pt-0">
                              <img
                                src={elm.image}
                                className="w-20 h-20 rounded-full max-w-full"
                                alt={elm.studentName}
                              />
                              <div className="text-center text-sm">
                                <p>
                                  “Taming the unpredictability of ESE and
                                  building on the entire syllabus with
                                  presentation skills is what makes IES Master
                                  stand apart.”
                                </p>
                                <p className="mt-1">
                                  <strong>{elm.studentName}</strong>
                                  <br />
                                  <span>
                                    {elm.srn}, {elm.session}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )
                    : "data not found"}
                </Swiper>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/testimonials"
                  className="border border-green-800 text-blue-900 text-sm px-2 py-1 rounded-sm hover:underline hover:border-0"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="">
              {/* Allow flex items to grow */}
              <span className="bg-red-500 px-1 text-xs text-white mt-5">
                {publication?.contentBlock?.TESTIMONIAL_ESE?.heading}
              </span>
              <div>
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
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {publication?.contentBlock?.TESTIMONIAL_ESE?.advanceData?.data
                    ? publication.contentBlock.TESTIMONIAL_ESE.advanceData.data.map(
                        (elm, index) => (
                          <SwiperSlide key={index}>
                            <div className="flex gap-3 p-4 pt-0">
                              <img
                                src={elm.image}
                                className="w-20 h-20 rounded-full max-w-full"
                                alt={elm.studentName}
                              />
                              <div className="text-center text-sm">
                                <p>
                                  “Taming the unpredictability of ESE and
                                  building on the entire syllabus with
                                  presentation skills is what makes IES Master
                                  stand apart.”
                                </p>
                                <p className="mt-1">
                                  <strong>{elm.studentName}</strong>
                                  <br />
                                  <span>
                                    {elm.srn}, {elm.session}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )
                    : "data not found"}
                </Swiper>
              </div>
              <div className="flex justify-end">
                <button className="border border-green-800 text-blue-900 text-sm px-2 py-1 rounded-sm hover:underline hover:border-0">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 pt-12 border-b-3 border-b-gray-400">
        <div id="swiperpublication" className="container m-auto">
          <h2 className="text-3xl">
            {publication?.contentBlock?.PUBLICATION_BOOK_SLIDER?.heading}
          </h2>
          <hr className="mt-5 mb-5" />

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            slidesPerView={7}
            breakpoints={{
              1200: {
                slidesPerView: 7.5,
              },
              992: {
                slidesPerView: 5.5,
              },
              768: {
                slidesPerView: 3.5,
              },
              640: {
                slidesPerView: 2.5,
              },
              320: {
                slidesPerView: 2.5,
              },
            }}
          >
            {publication?.contentBlock?.PUBLICATION_BOOK_SLIDER?.advanceData
              ?.data?.slides
              ? publication.contentBlock.PUBLICATION_BOOK_SLIDER.advanceData.data.slides.map(
                  (itm, ind) => (
                    <SwiperSlide key={ind}>
                      <Link href={itm.href}>
                        <img
                          src={itm.imgUrl}
                          className="w-40 border-l border-t border-r-3 border-r-gray-400 border-b-3 border-b-gray-300 hover:border-r-green-700 hover:border-b-green-700"
                          alt="Publication books"
                        />
                      </Link>
                    </SwiperSlide>
                  )
                )
              : "slider books not found"}
          </Swiper>

          <div className="text-[17px] text-blue-800 pt-3 pb-6 text-center font-lato font-bold">
            <a>New Launches!</a>
            {/* {JSON.stringify(imageGroupSLider)} */}
          </div>
        </div>
      </div>
      <section>
        <div className="mt-8 container m-auto flex flex-col lg:flex-row justify-between gap-8">
          <div className="relative border flex flex-col w-full lg:w-1/2 rounded-sm">
            <div className="bg-emerald-50 p-3 font-lato font-bold text-lg text-green-700 border-b-1 border-b-black">
              <a
                href={publication?.contentBlock?.ARTICLES?.link}
                className="inline-flex items-center"
              >
                <FaRegBookmark className="mr-1" />
                {publication?.contentBlock?.ARTICLES?.heading}
              </a>
            </div>
            {publication?.contentBlock?.ARTICLES?.advanceData?.data
              ? publication.contentBlock.ARTICLES.advanceData.data.map(
                  (itm, ind) => (
                    <div className="p-5" key={ind}>
                      <div className="flex flex-col sm:flex-row gap-8">
                        <Link href="#">
                          <img
                            src={itm.featureImg}
                            alt="ESE Mains 2023 Exam Solution – IES Master"
                            className="max-w-full h-40 sm:max-w-40"
                          ></img>
                        </Link>

                        <div>
                          <h4>
                            <Link
                              href={itm.uri}
                              className="text-base font-lato text-blue-500 hover:underline hover:text-blue-700"
                            >
                              {/* ESE Mains 2023 Exam Solution – IES Master */}
                              {itm.title}
                            </Link>
                          </h4>
                          <p className="text-xs flex justify-between py-3">
                            <span className="inline-flex items-center">
                              <CiClock2 />
                              {itm.publishedAt}
                            </span>
                            <span className="inline-flex items-center">
                              <FaUser />
                              IES Master
                            </span>
                          </p>
                          <div
                            className="text-xs line-clamp-4"
                            dangerouslySetInnerHTML={{
                              __html: itm.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )
              : "data not found"}
          </div>

          <div className="relative border flex flex-col w-full lg:w-1/2 rounded-sm">
            <div className="bg-emerald-50 p-3 font-lato font-bold text-lg text-green-700 border-b-1 border-b-black">
              <a href="#" className="inline-flex items-center">
                <FaCamera className="mr-1" />{" "}
                {publication?.contentBlock?.ARTICLES_GALLRY?.heading}
              </a>
            </div>
            <div className="p-4">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation]}
                className="mySwiper"
                slidesPerView={1}
              >
                {imageGroupSLider.map((itm, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      {itm.map((el, ind) => (
                        <img src={el.url} className="w-full h-44" key={ind} />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <div className="p-4">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation]}
                className="mySwiper"
                slidesPerView={1}
              >
                {imageGroupSLider.map((itm, index) => (
                  <SwiperSlide key={index}>
              
             
                    <div className="grid grid-cols-2 gap-4">
                
                
                      {itm.map((el, idx) => (
                        <img
                          key={idx}
                          src={el.url}
                          className="w-full h-44"
                          alt="slider-image"
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}

            {publication?.contentBlock?.ARTICLES_GALLRY?.link && (
              <div className="mb-1 text-right text-xs text-emerald-600 hover:text-white">
                <Link
                  href="/gallery/photos"
                  className="absolute bottom-4 z-10 right-0 border bg-gray-300 px-1 mt-2 hover:bg-green-800"
                >
                  View More &gt;
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionSection;
