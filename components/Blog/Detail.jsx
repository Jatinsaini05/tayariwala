import React from "react";
import { FaUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
export default function Detail({ blogPostDetail, allCategory }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <div>
      {/* {JSON.stringify(blogPostDetail)} */}
      <section className="article-Section">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4">
            <div className="content col-span-3">
              <div className="top-title">
                <div className="heading">
                  <h2 className="md:text-[34px] text-[28px] font-medium text-[#2a5981]">
                    {blogPostDetail?.title}
                  </h2>
                </div>
                <div className="bottom-title">
                  <ul className="lg:flex lg:gap-6 gap-2 ">
                    <li className="flex  gap-2 items-center md:py-4 py-2">
                      <FaUser className="block text-xs" />
                      <p className="text-[13px]">
                        Author :
                        <Link href="" className="text-[#406b8f] font-medium ">
                          vijethaiasacademy vja
                        </Link>
                      </p>
                    </li>

                    <li className="flex gap-2 items-center md:py-4 py-2">
                      <FaRegClock className="block text-xs" />
                      <p className="text-[13px]">
                        Date : {formatDate(blogPostDetail?.createdAt)}
                      </p>
                    </li>

                    <li className="flex gap-2 items-center md:py-4 py-2">
                      <FaFolderOpen className="block text-xs" />
                      <p className="text-[13px]">
                        Category :
                        <Link href="" className="text-[#406b8f] font-medium ">
                          Article of the day,
                        </Link>
                        <Link href="" className="text-[#406b8f] font-medium ">
                          Daily current Affairs,
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="singal-blog-content">
                {blogPostDetail?.featureImg && (
                  <div className="img py-4">
                    <img
                      src={blogPostDetail.featureImg}
                      alt="UPSC Anthropology Optional : A Comprehensive Guide"
                      className="w-full"
                    />
                  </div>
                )}

                {blogPostDetail?.description && (
                  <div className="overflow-auto">
                    <span className="max-w-[300px] sm:max-w-full"
                      dangerouslySetInnerHTML={{
                        __html: blogPostDetail.description,
                      }}
                    ></span>
                  </div>
                )}
                <div></div>
              </div>
            </div>

            <div className="sidebar-blog border rounded h-fit">

              {/* <div className="category-blog py-6 px-4">
                <div className="title">
                  <h2 className="text-2xl  text-[#2a5981] font-semi-bold pb-2">
                    Recent Post
                  </h2>
                  <div className="line-break border-b border-1 w-40 border-[#2a5981] "></div>
                </div>
                <div className="category-block py-4">
                  <ul className="py-4">
                    <li className="lg:flex items-center justify-between gap-4 pb-4 border-b">
                      <div className="img flex-shrink-0 lg:w-20">
                        <img
                          src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <div className="content text-[14px]  flex-grow">
                        <a href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center ">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </a>
                      </div>
                    </li>

                    <li className="lg:flex items-center justify-between gap-4 pb-4 border-b">
                      <div className="img flex-shrink-0 lg:w-20">
                        <img
                          src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <div className="content text-[14px]  flex-grow">
                        <a href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </a>
                      </div>
                    </li>

                    <li className="lg:flex items-center justify-between gap-4 pb-4 border-b">
                      <div className="img flex-shrink-0 lg:w-20">
                        <img
                          src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <div className="content text-[14px]  flex-grow">
                        <a href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </a>
                      </div>
                    </li>

                    <li className="lg:flex items-center justify-between gap-4 pb-4 border-b">
                      <div className="img flex-shrink-0 lg:w-20">
                        <img
                          src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <div className="content text-[14px]  flex-grow">
                        <a href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </a>
                      </div>
                    </li>

                    <li className="lg:flex items-center justify-between gap-4 pb-4 border-b">
                      <div className="img flex-shrink-0 lg:w-20">
                        <img
                          src="https://i.filecdn.in/780vijethaiasacademy/27-1727260779701.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <div className="content text-[14px]  flex-grow">
                        <a href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="line-break border-b border-1 w-64 mx-auto border-[#e0e0e0] "></div>
              <div className="category-blog py-6 px-4">
                <div className="title">
                  <h2 className="text-2xl  text-[#2a5981] font-semi-bold pb-2">
                    Categories
                  </h2>
                  <div className="line-break border-b border-1 w-40 border-[#2a5981] "></div>
                </div>
                <div className="category-block py-4">
                  <ul className="py-4">
                    {allCategory?.length && (
                      <div>
                        {allCategory.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between gap-4 pb-4 border-b"
                          >
                            <Link
                              href={`/blog/category/${item?.slug}`}
                              className="text-sm font-medium pb-1 hover:text-[#406b8f]"
                            >
                              <p className="pt-3">{item?.title}</p>
                            </Link>
                            <FaAnglesRight />
                          </li>
                        ))}
                      </div>
                    )}

                    {/* <li className="flex items-center justify-between gap-4 pb-4 border-b">
                      <a
                        href=""
                        className="text-sm font-medium pb-1 mb-1 hover:text-[#406b8f]"
                      >
                        <p className="pt-3">Daily current Affairs</p>
                      </a>
                      <FaAnglesRight />
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
