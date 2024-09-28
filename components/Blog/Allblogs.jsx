import { FaRocket } from "react-icons/fa6";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function Allblogs({ allCategory, allBlogPost }) {
  let allBlogCategorySlug = [];
  const [isLoading, setIsLoading] = useState(true);
  if (allBlogPost?.length) {
    for (let i = 0; i < allBlogPost?.length; i++) {
      // allBlogCategorySlug
      if (allBlogPost[i]?.postCategories[0]) {
        for (let j = 0; j < allCategory?.length; j++) {
          if (allBlogPost[i].postCategories[0] === allCategory[j]?.id) {
            allBlogCategorySlug.push(allCategory[j]?.slug);
            break;
          }
        }
      }
    }
  }
  useEffect(() => {
    // postCategoriesName
    if (allBlogPost?.length) {
      try {
        setIsLoading(true);
        for (let i = 0; i < allBlogPost?.length; i++) {
          allBlogPost[i].postCategoriesName = [];
          if (allBlogPost[i]?.postCategories) {
            for (let j = 0; j < allBlogPost[i]?.postCategories?.length; j++) {
              let categName = allCategory.find(
                (el, index) => el?.id === allBlogPost[i]?.postCategories[j]
              );
              allBlogPost[i].postCategoriesName.push({
                title: categName?.title,
                slug: categName?.slug,
              });
            }
          }
        }
      } catch (error) {
        console.log("Error in calculating postCategoryName");
      } finally {
        setIsLoading(false);
      }
    }
  }, [allBlogPost, allCategory]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }
  return (
    <>
      <div id="allBlogs">
        {/* {JSON.stringify(isLoading)} */}
        <section className="bloging-sec1">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 lg:mt-0 mt-2 py-6 md:mx-start mx-auto">
              <div className="slider text-start col-span-3">
                {allBlogPost?.length && (
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
                      {allBlogPost.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="img relative w-full h-[23rem]">
                            <img
                              src={item?.featureImg}
                              alt="slider-image"
                              className="w-full "
                            />
                            <h2 className="left-[0] bg-[#305e85] text-white text-[14px]  sm:text-[16px] absolute rounded-[8px] bottom-[10px] px-2 py-2 inline-block font-medium ">
                              {item?.title}
                            </h2>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>

              <div className="sideContent text-center lg:mt-0 mt-4">
                {allCategory?.length && (
                  <div>
                    {allCategory.map((item, index) => (
                      <div
                        key={index}
                        className="border-2 py-[18px] border-[#0c4270] rounded mb-[1rem]"
                      >
                        <Link href={`/blog/category/${item?.slug}`}>
                          <FaRocket className="inline-block text-lg" />
                          <h6 className="text-sm font-medium">{item?.title}</h6>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {/* <div className="border-2 py-[18px] mt-4 rounded border-[#0c4270] ">
                <Link href="" className="">
                  <FaRocket className="inline-block text-lg" />
                  <h6 className="text-sm font-medium">Article of the day</h6>
                </Link>
              </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="sec2 py-4">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="cart grid  lg:grid-cols-3  md:grid-cols-2 gap-4">
            <div className="block-news bg-[#f5f5f5]">
              <div className="img">
                <img
                  src="https://i.filecdn.in/780vijethaiasacademy/Slide-1714369810211.jpg"
                  alt="card-image"
                  className="w-full h-[233px]"
                />
              </div>
              <div className="news px-3 py-4">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Is mains harder than prelims?
                  </h2>
                </Link>
                <span className="block">
                  Is Mains Harder Than Prelims? A Comprehensive Guide...
                </span>
              </div>
              <div className="get-news px-3 pb-4 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>

            <div className="block-news bg-[#f5f5f5]">
              <div className="img">
                <img
                  src="https://i.filecdn.in/780vijethaiasacademy/16-1727182501956.png"
                  alt="card-image"
                  className="w-full h-[233px]"
                />
              </div>
              <div className="news px-3 py-4">
                <Link href="/blog/details">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Is mains harder than prelims?
                  </h2>
                </Link>
                <span className="block">
                  Is Mains Harder Than Prelims? A Comprehensive Guide...
                </span>
              </div>
              <div className="get-news px-3 pb-4 text-sm ">
                <Link href="/blog/details" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>

            <div className="block-news bg-[#f5f5f5]">
              <div className="img">
                <img
                  src="https://i.filecdn.in/780vijethaiasacademy/6-1727162364723.png"
                  alt="card-image"
                  className="w-full h-[233px]"
                />
              </div>
              <div className="news px-3 py-4">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Is mains harder than prelims?
                  </h2>
                </Link>
                <span className="block">
                  Is Mains Harder Than Prelims? A Comprehensive Guide...
                </span>
              </div>
              <div className="get-news px-3 pb-4 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>
        </div>
      </section>  */}

        <section className="sec-3 py-4">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            {allBlogPost?.length && (
              <div>
                {allBlogPost.map((item, index) => (
                  <div
                    key={index}
                    className="cart grid   lg:grid-cols-4 gap-8 mt-2"
                  >
                    {item?.featureImg && (
                      <div className="img">
                        <img
                          src={item.featureImg}
                          alt="card-image"
                          className="w-full h-[185px]"
                        />
                      </div>
                    )}

                    <div className="news px-3 py-4 lg:col-span-3 shadow	">
                      <div className="text-sm">
                        {item?.title && (
                          <Link
                            href={`/blog/${allBlogCategorySlug[index]}/${item.uri}`}
                          >
                            <h2 className="text-lg font-bold hover:text-[#12426b]">
                              {item.title}
                            </h2>
                          </Link>
                        )}

                        <p className="flex gap-[5px] flex-wrap sm:flex-nowrap">
                          <span>On:</span> {formatDate(item?.createdAt)}
                          <span> | Category:</span>
                          {item?.postCategoriesName?.length && (
                            <div>
                              {item.postCategoriesName.map(
                                (items, nameIndex) => (
                                  <span
                                    key={nameIndex}
                                    className="hover:text-[#0c4270] mr-[5px]"
                                  >
                                    <Link
                                      href={`/blog/category/${items?.slug}`}
                                    >
                                      {items?.title}
                                    </Link>
                                  </span>
                                )
                              )}
                            </div>
                          )}
                        </p>
                      </div>
                      {item?.description && (
                        <div className=" overflow-auto">
                          <span
                            className="text-sm line-clamp-4 max-w-[300px]  sm:max-w-full"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></span>
                        </div>
                      )}
                      {item?.uri && (
                        <div className="get-news mt-10 text-sm ">
                          <Link
                            href={`/blog/${allBlogCategorySlug[index]}/${item.uri}`}
                            className="hover:text-[#0c4270]"
                          >
                            Read More{" "}
                          </Link>
                          <FaLongArrowAltRight className="inline" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 
          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>

              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>

          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/26-1727260076956.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>

              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>

          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/25-1727259380765.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>

              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>

          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/24-1727258190345.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>

              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>

          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/23-1727257529452.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>
              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More{" "}
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div>

          <div className="cart grid   lg:grid-cols-4 gap-8 mt-2">
            <div className="img">
              <img
                src="https://i.filecdn.in/780vijethaiasacademy/22-1727256115490.png"
                alt="card-image"
                className="w-full h-[185px]"
              />
            </div>
            <div className="news px-3 py-4 lg:col-span-3 shadow	">
              <div className="text-sm">
                <Link href="">
                  <h2 className="text-lg font-bold hover:text-[#12426b]">
                    Student Life in Vijayawada: Balancing inter, Degree And
                    Civils Coaching
                  </h2>
                </Link>
                <p>
                  <span>On:</span> 09/25/2024
                  <span>| Category:</span>
                  <Link href="">Article of the day</Link>
                  <Link href="">Daily current Affairs</Link>
                </p>
              </div>
              <p className="text-sm">
                Student Life in Vijayawada: Balancing Inter, Degree and Civils
                Coaching Introduction: The Vibrant Academic Scene in Vijayawada
                Student life in Vijayawada is a unique tapestry woven with
                academic rigor and cultural richness. The city is renowned for
                its educational institutions, particularly t...
              </p>

              <div className="get-news mt-10 text-sm ">
                <Link href="" className="hover:text-[#0c4270]">
                  Read More
                </Link>
                <FaLongArrowAltRight className="inline" />
              </div>
            </div>
          </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
