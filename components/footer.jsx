import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebook, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiLocationOn, CiMail } from "react-icons/ci";
import Link from "next/link";
export default function Footer({ footerData }) {
  return (
    <div>
      {/* {/ {JSON.stringify( footerData)} /} */}
      <footer className="">
        <section className="topfooter bg-[#2f4285]">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <div className="footer-list grid lg:grid-cols-4 md:grid-cols-2   gap-4 p-20px_10px]">
              <div className="list-1 flex flex-col flex-1 sm:basis-full py-5">
                {footerData?.website?.logo && (
                  <div className="logo">
                    <img
                      src={footerData.website.logo}
                      width="250px"
                      height="36px"
                      alt="Logo"
                    />
                  </div>
                )}

                {footerData?.website?.description && (
                  <div className="cont text-sm text-white p-[15px_0px_10px]">
                    <p>
                      <span>{footerData.website.description}</span>
                      <Link
                        href="/about"
                        className=" ml-[5px] inline-block w-fit pt-[3px]  pb-[5px] px-[16px] text-sm rounded-[16px] font-bold bg-[white] text-[#0c4270]"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              <div className="list-2 flex flex-col flex-1 py-5 sm:basis-full">
                <div className="heading">
                  <h3 className="text-[16px] text-white font-medium">
                    Useful Links
                  </h3>
                </div>
                <div className="border-b-2 w-[50%]"></div>
                {footerData?.menus?.FOOTER_MENU1?.items?.length && (
                  <div className="list-itm">
                    <ul className="py-4">
                      {footerData.menus.FOOTER_MENU1.items.map(
                        (item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 my-[5px]"
                          >
                            <IoMdArrowDropright className="text-[#999999] text-2xl" />
                            <Link
                              href={item?.url}
                              className="footer-link text-white"
                            >
                              {item?.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="list-3 flex flex-col flex-1 py-5 sm:basis-full">
                <div className="heading">
                  <h3 className="text-[16px] text-white font-medium">
                    Go Social
                  </h3>
                </div>
                <div className="border-b-2 w-[50%]"></div>
                {footerData?.website?.socialLinks && (
                  <div className="list-itm">
                    <ul className="py-4">
                      {footerData.website.socialLinks?.facebook && (
                        <li className="flex items-center gap-2 my-[5px]">
                          <FaFacebook className="text-[#1877F2] text-xl" />
                          <Link
                            href={footerData.website.socialLinks.facebook}
                            className="text-white footer-link"
                          >
                            Facebook
                          </Link>
                        </li>
                      )}
                      {footerData.website.socialLinks?.youTube && (
                        <li className="flex items-center gap-2 my-[5px]">
                          <FaYoutube className="text-[#FF0000] text-xl" />
                          <Link
                            href={footerData.website.socialLinks.youTube}
                            className="text-white footer-link"
                          >
                            YouTube
                          </Link>
                        </li>
                      )}

                      {footerData.website.socialLinks?.whatsapp && (
                        <li className="flex items-center gap-2 my-[5px]">
                          <FaWhatsapp className="text-[#25D366] text-xl" />
                          <Link
                            href={footerData.website.socialLinks.whatsapp}
                            className="text-white footer-link"
                          >
                            WhatsApp
                          </Link>
                        </li>
                      )}

                      {footerData.website.socialLinks?.telegram && (
                        <li className="flex items-center gap-2 my-[5px]">
                          <FaTelegram className="text-[#0088cc] text-xl" />
                          <Link
                            href={footerData.website.socialLinks.telegram}
                            className="text-white footer-link"
                          >
                            Telegram
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="list-4 flex flex-col flex-1 py-5 sm:basis-full">
                <div className="heading">
                  <h3 className="text-[16px] text-white font-medium">
                    Contact Info
                  </h3>
                </div>
                <div className="border-b-2 w-[50%]"></div>
                <div className="list-itm ">
                  <ul className="py-4">
                    {footerData?.website?.address && (
                      <li className="flex text-white gap-2 my-[5px]">
                        <a>
                          <CiLocationOn className="text-[15px]" />
                        </a>
                        <span className="text-xs upparcase">
                          {footerData.website.address}
                        </span>
                      </li>
                    )}

                    {footerData?.website?.contactNumber[0] && (
                      <li className="flex text-white items-center gap-2 my-[5px]">
                        <a>
                          <IoCall className="text-[15px]" />
                        </a>
                        <span className="text-sm ">
                          <Link
                            href={`tel:${footerData.website.contactNumber[0]}`}
                          >
                            {footerData.website.contactNumber[0]}
                          </Link>
                        </span>
                      </li>
                    )}

                    {footerData?.website?.contactNumber[1] && (
                      <li className="flex text-white items-center gap-2 my-[5px]">
                        <a>
                          <IoCall className="text-[15px]" />
                        </a>
                        <span className="text-sm ">
                          <Link
                            href={`tel:${footerData.website.contactNumber[1]}`}
                          >
                            {footerData.website.contactNumber[1]}
                          </Link>
                        </span>
                      </li>
                    )}

                    {/* <li className="flex text-white items-center gap-2 my-[5px]">
                      <a href="">
                        <IoCall className="text-[15px]" />
                      </a>
                      <span className="text-sm ">8662535845</span>
                    </li> */}

                    {footerData?.website?.email && (
                      <li className="flex text-white items-center gap-2 my-[5px]">
                        <span>
                          <CiMail className="text-[15px]" />
                        </span>

                        <span>
                          <Link
                            className="text-sm"
                            href={`mailto:${footerData.website.email}`}
                          >
                            {footerData.website.email}
                          </Link>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bottom bg-[#091b55]">
          <div className="container mx-auto px-16">
            <div className="msg py-2">
              <p className="text-sm text-medium text-white">
                © 2021 VIJETHA IAS. All rights reserved. | Powered by{" "}
                <span className="text-[#089e1d] font-bold">
                  <Link href="https://edukitapp.com"> Edukitapp</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}