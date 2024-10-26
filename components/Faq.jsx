import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Faq({ faqList, faqVideo, socialMedia }) {
  return (
    <section className="py-[2rem] px-[10px] sm:px-[1rem] lg:px-[2rem]">
      {/* {JSON.stringify(faqVideo)} */}
      <div className="container m-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-9 xl:col-span-9 lg:px-2.5">
              <div className="mb-[20px] lg:mb-[0]">
                <h2 className="w-fit font-semibold bg-[#303030] text-[white] pt-[0] pb-[2px] px-[1rem] rounded-[4px] text-[20px] sm:text-[25px] lg:text-[28px]">
                  {faqList?.heading}
                </h2>
                {faqList?.advanceData?.data?.length && (
                  <div className="mt-[2rem]" id="faq">
                    <Accordion variant="splitted" className="accordion-tab">
                      {faqList.advanceData.data.map((item, index) => (
                        <AccordionItem
                          key={index}
                          className="px-0 shadow-none rounded-[5px] border-1 border-solid"
                          aria-label={item?.title}
                          title={item?.title}
                        >
                          <div className="px-[10px] sm:px-[16px] my-[10px] rounded-none">
                            <span
                              className="block text-[15px] mb-[10px]"
                              dangerouslySetInnerHTML={{
                                __html: item?.desci,
                              }}
                            ></span>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-3 xl:col-span-3 lg:px-2.5">
              <div>
                <Link href="#">
                  <img src={faqList?.media} alt="Test Series" />
                </Link>
              </div>
              {socialMedia?.advanceData?.data?.length && (
                <div className="mt-[1rem] flex gap-[7px]  flex-wrap justify-start items-center">
                  {socialMedia.advanceData?.data[0]?.link && (
                    <div>
                      <Link href={socialMedia.advanceData?.data[0].link}>
                        <FaFacebookF className="bg-[#8bc34a] text-[white] text-[36px] py-[8px] px-[10px] hover:text-[30px] hover:bg-[#3b5998] transition-all duration-[ease-in-out] delay-[0.3s]" />
                      </Link>
                    </div>
                  )}

                  {socialMedia.advanceData?.data[1]?.link && (
                    <div>
                      <Link href={socialMedia.advanceData?.data[1].link}>
                        <IoLogoGoogleplus className="bg-[#8bc34a] text-[white] text-[36px] py-[8px] px-[10px] hover:text-[30px] hover:bg-[#3b5998] transition-all duration-[ease-in-out] delay-[0.3s]" />
                      </Link>
                    </div>
                  )}

                  {socialMedia.advanceData?.data[2]?.link && (
                    <div>
                      <Link href={socialMedia.advanceData?.data[2].link}>
                        <FaTwitter className="bg-[#8bc34a] text-[white] text-[36px] py-[8px] px-[10px] hover:text-[30px] hover:bg-[#3b5998] transition-all duration-[ease-in-out] delay-[0.3s]" />
                      </Link>
                    </div>
                  )}

                  {socialMedia.advanceData?.data[3]?.link && (
                    <div>
                      <Link href={socialMedia.advanceData?.data[3].link}>
                        <FaLinkedinIn className="bg-[#8bc34a] text-[white] text-[36px] py-[8px] px-[10px] hover:text-[30px] hover:bg-[#3b5998] transition-all duration-[ease-in-out] delay-[0.3s]" />
                      </Link>
                    </div>
                  )}

                  {socialMedia.advanceData?.data[4]?.link && (
                    <div>
                      <Link href={socialMedia.advanceData?.data[4].link}>
                        <TfiYoutube className="bg-[#8bc34a] text-[white] text-[36px] py-[8px] px-[10px] hover:text-[30px] hover:bg-[#3b5998] transition-all duration-[ease-in-out] delay-[0.3s]" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {faqVideo?.advanceData?.data?.length && (
                <div className="mt-[1rem]">
                  {faqVideo.advanceData.data.map((item, index) => (
                    <div className="mb-[1rem]" key={index}>
                      <iframe
                        src={`https://www.youtube.com/embed/${item?.url}`}
                        title="YouTube video player"
                        frameborder="0"
                        className="w-full h-[300px] lg:h-[200px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
