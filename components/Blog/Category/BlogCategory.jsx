import React from "react";
import { FaUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export default function BlogCategory({
  allCategoryBlogs,
  allBlogCategory,
  categoryUri,
}) {
  return (
    <>
      <section className="category-sec">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-4">
            <div className="sidebar-blog border rounded h-fit">
              <div className="category-blog py-6 px-4">
                <div className="title">
                  <h2 className="text-2xl  text-[#2a5981] font-semi-bold pb-2">
                    Categories
                  </h2>
                  <div className="line-break border-b border-1 w-40 border-[#2a5981] "></div>
                </div>
                <div className="category-block py-4">
                  <ul className="py-4">
                    {allBlogCategory?.length && (
                      <div>
                        {allBlogCategory.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between gap-4 pb-4 border-b"
                          >
                            <Link
                              href={`/blog/category/${item?.slug}`}
                              className={`text-sm font-medium pb-1 hover:text-[#ea580c]  ${item?.slug === categoryUri ? "text-[#ea580c]" : "text-[black]"}`}
                            >
                              <p className="pt-3">{item?.title}</p>
                            </Link>
                            <FaAnglesRight />
                          </li>
                        ))}
                      </div>
                    )}

                    {/* <li className="flex items-center justify-between gap-4 pb-4 border-b">
                      <Link
                        href=""
                        className="text-sm font-medium pb-1 mb-1 hover:text-[#406b8f]"
                      >
                        <p className="pt-3">Daily current Affairs</p>
                      </Link>
                      <FaAnglesRight />
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="line-break border-b border-1 w-64 mx-auto border-[#e0e0e0] "></div>
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
                        <Link href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center ">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </Link>
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
                        <Link href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </Link>
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
                        <Link href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </Link>
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
                        <Link href="" className="hover:text-[#406b8f]">
                          <p className="font-semi-bold pt-1  lg:text-start text-center">
                            Comparing Traditional Vs. integrated Coaching
                            Approaches in Vijayawada
                          </p>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div className="content col-span-3">
              {allCategoryBlogs?.length && (
                <div>
                  {allCategoryBlogs.map((item, index) => (
                    <div className="border-b" key={index}>
                      {item?.featureImg && (
                        <div className="img py-4">
                          <img
                            src={item.featureImg}
                            alt="Extracurricular Activities in Vijayawada Coaching institutes"
                            className="w-full lg:h-[170px] lg:object-cover lg:object-top"
                          />
                        </div>
                      )}

                      <div className="bottom-title-news px-4">
                        <Link href={`/blog/${categoryUri}/${item?.uri}`}>
                          <h2 className="text-xl font-bold hover:text-[#2a5981]">
                            {item?.title}
                          </h2>
                        </Link>

                        {item?.description && (
                          <div className="text-sm font-medium line-clamp-2">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></span>
                          </div>
                        )}
                      </div>
                      <div className="get-news flex items-center gap-3 text-sm font-semi-bold py-4 px-4 ">
                        <Link
                          href={`/blog/${categoryUri}/${item?.uri}`}
                          className="hover:text-[#2a5981]"
                        >
                          Read More
                        </Link>
                        <FaArrowRightLong />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* <div className="border-b">
                <div className="img py-4">
                  <img
                    src="https://i.filecdn.in/780vijethaiasacademy/34-1727330350433.png"
                    alt="Extracurricular Activities in Vijayawada Coaching institutes"
                    className="w-full lg:h-[170px] lg:object-cover lg:object-top"
                  />
                </div>
                <div className="bottom-title-news px-4">
                  <Link href="">
                    <h2 className="text-xl font-bold hover:text-[#2a5981]">
                      Extracurricular Activities in Vijayawada Coaching
                      institutes
                    </h2>
                  </Link>
                  <p className="text-sm font-medium">
                    Extracurricular Activities in Vijayawada Coaching Institutes
                    In Vijayawada, a city recognized as a hub for IAS
                    preparation, extracurricular activities have evolved into a
                    crucial component of coaching institutes
                  </p>
                </div>
                <div className="get-news flex items-center gap-3 text-sm font-semi-bold py-4 px-4 ">
                  <Link href="" className="hover:text-[#2a5981]">
                    Read More
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>

              <div className="border-b">
                <div className="img py-4">
                  <img
                    src="https://i.filecdn.in/780vijethaiasacademy/33-1727329633079.png"
                    alt="Extracurricular Activities in Vijayawada Coaching institutes"
                    className="w-full lg:h-[170px] lg:object-cover lg:object-top"
                  />
                </div>
                <div className="bottom-title-news px-4">
                  <Link href="">
                    <h2 className="text-xl font-bold hover:text-[#2a5981]">
                      Extracurricular Activities in Vijayawada Coaching
                      institutes
                    </h2>
                  </Link>
                  <p className="text-sm font-medium">
                    Extracurricular Activities in Vijayawada Coaching Institutes
                    In Vijayawada, a city recognized as a hub for IAS
                    preparation, extracurricular activities have evolved into a
                    crucial component of coaching institutes
                  </p>
                </div>
                <div className="get-news flex items-center gap-3 text-sm font-semi-bold py-4 px-4 ">
                  <Link href="" className="hover:text-[#2a5981]">
                    Read More
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>

              <div className="border-b">
                <div className="img py-4">
                  <img
                    src="https://i.filecdn.in/780vijethaiasacademy/32-1727328904349.png"
                    alt="Extracurricular Activities in Vijayawada Coaching institutes"
                    className="w-full lg:h-[170px] lg:object-cover lg:object-top"
                  />
                </div>
                <div className="bottom-title-news px-4">
                  <Link href="">
                    <h2 className="text-xl font-bold hover:text-[#2a5981]">
                      Extracurricular Activities in Vijayawada Coaching
                      institutes
                    </h2>
                  </Link>
                  <p className="text-sm font-medium">
                    Extracurricular Activities in Vijayawada Coaching Institutes
                    In Vijayawada, a city recognized as a hub for IAS
                    preparation, extracurricular activities have evolved into a
                    crucial component of coaching institutes
                  </p>
                </div>
                <div className="get-news flex items-center gap-3 text-sm font-semi-bold py-4 px-4 ">
                  <Link href="" className="hover:text-[#2a5981]">
                    Read More
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>

              <div className="border-b">
                <div className="img py-4">
                  <img
                    src="https://i.filecdn.in/780vijethaiasacademy/35-1727335790635.png"
                    alt="Extracurricular Activities in Vijayawada Coaching institutes"
                    className="w-full lg:h-[170px] lg:object-cover lg:object-top"
                  />
                </div>
                <div className="bottom-title-news px-4">
                  <Link href="">
                    <h2 className="text-xl font-bold hover:text-[#2a5981]">
                      Extracurricular Activities in Vijayawada Coaching
                      institutes
                    </h2>
                  </Link>
                  <p className="text-sm font-medium">
                    Extracurricular Activities in Vijayawada Coaching Institutes
                    In Vijayawada, a city recognized as a hub for IAS
                    preparation, extracurricular activities have evolved into a
                    crucial component of coaching institutes
                  </p>
                </div>
                <div className="get-news flex items-center gap-3 text-sm font-semi-bold py-4 px-4 ">
                  <Link href="" className="hover:text-[#2a5981]">
                    Read More
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
