import { Link } from "@nextui-org/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaPlus,
  FaBell,
  FaMinus,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const FooterSection = ({ footerSection }) => {
  const [openIndex, setOpenIndex] = useState(null);
  // console.log(footerSection);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // const items = [
  //   {
  //     title: "About Us",
  //     subItems: [
  //       { title: "About IES Master", link: "#subitem1a" },
  //       { title: "Why IES Master", link: "#subitem1b" },
  //       { title: "Our Success Story", link: "#subitem1c" },
  //     ],
  //   },
  //   {
  //     title: "Course & Scholarships",
  //     subItems: [
  //       { title: "1 Yr Classroom Course", link: "#subitem2a" },
  //       { title: "2 Yr Classroom Course", link: "#subitem2b" },
  //       { title: "ESE-GS Course", link: "#subitem2a" },
  //       { title: "Online Course", link: "#subitem2b" },
  //       { title: "Master Talent Reward Exam (MTRE)", link: "#subitem2a" },
  //       { title: "ESE", link: "#subitem2b" },
  //       { title: "GATE", link: "#subitem2a" },
  //       { title: "PSUS", link: "#subitem2b" },
  //       { title: "SSC-JE", link: "#subitem2a" },
  //       { title: "IRMS", link: "#subitem2b" },
  //       { title: "UPPSC-AE", link: "#subitem2a" },
  //       { title: "State PSCs", link: "#subitem2b" },
  //       { title: "State AE", link: "#subitem2a" },
  //       { title: "RRB-JE", link: "#subitem2b" },
  //     ],
  //   },
  //   {
  //     title: "Student Corner",
  //     subItems: [
  //       { title: "IES Master Result", link: "#subitem3a" },
  //       { title: "Testimonial", link: "#subitem3b" },
  //       { title: "Admission", link: "#subitem3c" },
  //       { title: "Fee Structure", link: "#subitem2a" },
  //       { title: "Batches", link: "#subitem2b" },
  //       { title: "Student login", link: "#subitem2a" },
  //       { title: "Latest Exam Solutions", link: "#subitem2b" },
  //     ],
  //   },
  //   {
  //     title: "Others",
  //     subItems: [
  //       { title: "Blog", link: "#subitem4a" },
  //       { title: "Enquiry", link: "#subitem4b" },
  //       { title: "FAQ", link: "#subitem2a" },
  //       { title: "Gallery", link: "#subitem2b" },
  //       { title: "Career @IES Master", link: "#subitem2a" },
  //       { title: "Sitemap", link: "#subitem2b" },
  //     ],
  //   },
  // ];
  return (
    <div>
      <div>
        <div className="bg-zinc-800">
          <div className="container m-auto">
            <div className="lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-6 pt-8 hidden md:grid">
              {footerSection?.menus?.NEW_FOOTER_MENU?.items
                ? footerSection.menus.NEW_FOOTER_MENU.items.map(
                    (item, index) => (
                      <div key={index}>
                        <h5 className="text-sm font-lato font-semibold text-green-500 pb-5">
                          {item.title}
                        </h5>
                        <ul className="text-xs text-white">
                          {item?.subItems?.length > 0
                            ? item.subItems.map((subitem, subindex) => (
                                <li className="pb-3" key={subindex}>
                                  <Link
                                    href={subitem.url}
                                    className="text-white text-sm"
                                  >
                                    {subitem.title}
                                  </Link>
                                </li>
                              ))
                            : "null"}
                        </ul>
                      </div>
                    )
                  )
                : "Footer list not found"}
              <div className="flex flex-col xl:col-span-2">
                <div className="flex items-center pb-3">
                  <div className="text-gray-300 text-sm ">
                    <h3>Follow us</h3>
                  </div>
                  <div>
                    <ul className="flex gap-5 items-center px-4">
                      <li>
                        {footerSection?.website?.socialLinks?.facebook && (
                          <Link
                            href={footerSection?.website?.socialLinks?.facebook}
                            className="rounded-full bg-blue-800 p-3 flex items-center justify-center"
                          >
                            <FaFacebookF className="text-white" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {footerSection?.website?.socialLinks?.twitter && (
                          <Link
                            href={footerSection?.website?.socialLinks?.twitter}
                            className="rounded-full bg-blue-400 p-3 flex items-center justify-center"
                          >
                            <FaTwitter className="text-white" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {footerSection?.website?.socialLinks?.linkedIn && (
                          <Link
                            href={footerSection?.website?.socialLinks?.linkedIn}
                            className="rounded-full bg-blue-600 p-3 flex items-center justify-center"
                          >
                            <FaLinkedinIn className="text-white" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {footerSection?.website?.socialLinks?.youTube && (
                          <Link
                            href={footerSection?.website?.socialLinks?.youTube}
                            className="rounded-full bg-red-500 p-2 flex items-center justify-center"
                          >
                            <TiSocialYoutubeCircular className="text-white text-2xl" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {footerSection?.website?.socialLinks?.instagram && (
                          <Link
                            href={
                              footerSection?.website?.socialLinks?.instagram
                            }
                            className="rounded-full bg-red-800 p-3 flex items-center justify-center"
                          >
                            <FaInstagram className="text-white" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {footerSection?.website?.socialLinks?.telegram && (
                          <Link
                            href={footerSection?.website?.socialLinks?.telegram}
                            className="rounded-full bg-orange-700 p-3 flex items-center justify-center"
                          >
                            <FaTelegram className="text-white" />
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold font-lato text-green-500 pb-5">
                    IES MASTER
                  </h5>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="pb-3">Registered Office Address</p>
                  <ul>
                    <li className="pb-3">
                      {footerSection?.website?.address}
                      {/* F-126, Katwaria Sarai, New Delhi, 110016 */}
                    </li>
                    <li className="pb-3">
                      {footerSection?.website?.contactNumber}
                    </li>
                    <li className="pb-5"> {footerSection?.website?.email}</li>
                  </ul>
                </div>

                <div className="text-gray-300 text-sm">Download App</div>
                <div className="mt-3 gap-3 mb-3 grid grid-cols-2">
                  <Link href="#">
                    <img
                      src="/images/Google-play.png"
                      className="w-full "
                    ></img>
                  </Link>
                  <Link href="#">
                    <img
                      src="/images/window-play.png"
                      className="w-full "
                    ></img>
                  </Link>
                  <Link href="#">
                    <img
                      src="/images/mac-app-store.svg"
                      className="w-full "
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden max-md:grid">
              <div className="flex flex-col space-y-2">
                {footerSection?.menus?.NEW_FOOTER_MENU?.items ? (footerSection.menus.NEW_FOOTER_MENU.items.map((item, index) => (
                  <div key={index}>
                    <li
                      className="cursor-pointer flex items-center mt-3 justify-between text-sm pb-2 text-gray-300 border-b-1 border-b-gray-100"
                      onClick={() => handleToggle(index)}
                    >
                      {item.title}

                      {openIndex === index ? (
                        <FaMinus className="ml-2" />
                      ) : (
                        <FaPlus className="ml-2" />
                      )}
                    </li>
                    {openIndex === index && (
                      <ul className=" space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-sm text-white">
                            <Link href={subItem.link} className="hover:underline text-xs font-normal text-white">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))):("mobile footer list not found") }
              </div>
              <div>
                <div className="text-gray-300 text-xs mb-2  mt-4">
                  Follow Us
                </div>
                <div>
                  <ul className="grid gap-5 grid-cols-10 max-sm:grid-cols-3 place-items-center mb-3">
                    <li>
                      {
                        footerSection?.website?.socialLinks?.facebook &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.facebook}
                          className="rounded-full bg-blue-800 p-3 flex items-center justify-center"
                        >
                          <FaFacebookF className="text-white" />
                        </Link>
                        )
                      }
                  
                    </li>
                    <li>
                      {
                        footerSection?.website?.socialLinks?.twitter &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.twitter}
                          className="rounded-full bg-blue-400 p-3 flex items-center justify-center"
                        >
                          <FaTwitter className="text-white" />
                        </Link>
                        )
                      }
                    
                    </li>
                    <li>
                      {
                        footerSection?.website?.socialLinks?.linkedIn &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.linkedIn}
                          className="rounded-full bg-blue-600 p-3 flex items-center justify-center"
                        >
                          <FaLinkedinIn className="text-white" />
                        </Link>
                        )
                      }
                   
                    </li>
                    <li>
                      {
                        footerSection?.website?.socialLinks?.youTube &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.youTube}
                          className="rounded-full bg-red-500 p-2 flex items-center justify-center"
                        >
                          <TiSocialYoutubeCircular className="text-white text-2xl" />
                        </Link>
                        )
                      }
                   
                    </li>
                    <li>
                      {
                        footerSection?.website?.socialLinks?.instagram &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.instagram}
                          className="rounded-full bg-red-800 p-3 flex items-center justify-center"
                        >
                          <FaInstagram className="text-white" />
                        </Link>
                        )
                      }
                   
                    </li>
                    <li>
                      {
                        footerSection?.website?.socialLinks?.telegram &&(
                          <Link
                          href={footerSection?.website?.socialLinks?.telegram}
                          className="rounded-full bg-orange-700 p-3 flex items-center justify-center"
                        >
                          <FaTelegram className="text-white" />
                        </Link>
                        )
                      }
                   
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold font-lato text-green-500 pb-5">
                    IES MASTER
                  </h5>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="pb-3">Registered Office Address</p>
                  <ul>
                    <li className="pb-3">
                    {footerSection?.website?.address}
                    </li>
                    <li className="pb-3">
                    {footerSection?.website?.contactNumber}
                    </li>
                    <li className="pb-5">{footerSection?.website?.email}</li>
                  </ul>
                </div>
                <div className="">
                  <div className="text-gray-300 text-sm">Download App</div>
                  <div className="flex gap-2 flex-col">
                    <a href="#">
                      <img src="/images/Google-play.png" className="w-36"></img>
                    </a>
                    <a href="#">
                      <img src="/images/window-play.png" className="w-36"></img>
                    </a>
                    <a href="#">
                      <img
                        src="/images/mac-app-store.svg"
                        className="w-36"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5 p-5 text-sm text-gray-300 text-center">
              COPYRIGHT © IES MASTER 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
