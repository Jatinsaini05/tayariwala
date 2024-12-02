import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Review = ({ pageData }) => {
    const reviews = pageData?.advanceData?.data || []; // Extract reviews from JSON

    return (
        <div>
            <div className="hidden md:block">
                <img src="https://i.filecdn.in/1mlearners/up-1732106111853.png" alt="Up" />
            </div>
            <div className="bg-[#fffaf3] relative">
                <div className="container py-16 sm:py-28">
                    <span className="flex justify-center text-sm text-customFC6200">
                        {pageData?.subHeading}
                    </span>
                    <h2 className="text-center text-2xl sm:text-4xl font-semibold mt-4 text-[#221638]">
                        {pageData?.heading}
                    </h2>

                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper mt-10"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={review.id || index}>
                                <div className="border border-[#ffe8e3] rounded p-7 bg-[#fffaf3]">
                                    <div>
                                        <p className="text-base text-[#606060] sm:leading-8">
                                            {review.message}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <div className="flex items-center mt-4 gap-3">
                                                <img
                                                    src={review.image}
                                                    alt={`${review.studentName} profile`}
                                                    className="rounded-full h-20"
                                                />
                                                <h3 className="text-[17px] text-customFC6200 font-semibold">
                                                    {review.studentName}
                                                </h3>
                                            </div>
                                            <div className="flex justify-end">
                                                <img
                                                    src="https://i.filecdn.in/1mlearners/Screenshot91-1732103892920.png"
                                                    alt="Logo"
                                                    className="w-auto h-16 sm:h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="hidden md:block relative bg-[#dd5252]">
                <img src="https://i.filecdn.in/1mlearners/down-1732106018977.png" alt="Down" />
                <div className="absolute z-10 bottom-0 right-0">
                    <img src="https://i.filecdn.in/1mlearners/shape2-1-1732106256035.png" alt="Shape" />
                </div>
            </div>
        </div>
    );
};

export default Review;