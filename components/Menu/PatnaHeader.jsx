import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useStoreLogin } from "../../store/login";
import HoverButton from "../hover effect/hoverButton";

const PatnaHeader = ({ websiteData }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  let user = useStoreLogin.getState().user;
  let authToken = useStoreLogin.getState().authToken;
  return (
    <div>
      <div>
        <div className="md:px-2 px-[15px] py-4 flex justify-normal gap-5 lg:gap-0 lg:justify-between bg-white">
          <div className="flex flex-grow lg:flex-grow-0 justify-between  gap-3 xl:gap-14">
            <div>
              <Link href="/">
                <img
                  src={websiteData?.website?.logo}
                  className="hover:cursor-pointer max-w-[140px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-grow lg:flex-grow-0 justify-end sm:justify-between gap-1 2xl:gap-14">
            <div className="hidden lg:flex items-center text-[#221638]">
              <div className=" flex h-full items-center">
                {websiteData?.menus?.PATNA_MENUS?.items?.map((item, index) => (
                  <Link
                    href={item?.url}
                    className="lg:text-[12px] xl:text-[13px] text-[13px] font-semibold h-full px-1 2xl:px-3 flex items-center hover:text-customFC6200 hover:cursor-pointer"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              {isClient && user && authToken ? (
                <div className="flex items-center" id="loginheader">
                  <HoverButton icon={LuUser} text="Profile" link="/profile" />
                </div>
              ) : (
                <div className="flex items-center" id="loginheader">
                  <HoverButton
                    icon={LuUser}
                    text="Login/Register"
                    link="/login"
                  />
                </div>
              )}
            </div>

            <div
              className={`text-sm sm:hidden px-2 py-1 ${activeSection === 1 ? "text-customFC6200" : "text-custom241737"}`}
              onClick={() => setActiveSection(activeSection === 1 ? null : 1)}
            >
              <HiDotsHorizontal className="text-4xl" />
            </div>

            <div
              className={`absolute top-[120px] z-10 bg-white shadow-lg
                origin-center transform transition-transform duration-500 ${activeSection === 1 ? "scale-x-100" : "scale-x-0"}`}
            >
              <div className="px-3 py-4 sm:hidden">
                <div className="flex justify-center">
                  {isClient && user && authToken ? (
                    <div className="flex items-center" id="loginheader">
                      <HoverButton
                        icon={LuUser}
                        text="Profile"
                        link="/profile"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center" id="loginheader">
                      <HoverButton
                        icon={LuUser}
                        text="Login/Register"
                        link="/login"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`text-sm lg:hidden px-2 py-1`}
              onClick={() => setActiveSection(activeSection === 2 ? null : 2)}
            >
              {activeSection !== 2 ? (
                <GiHamburgerMenu className="text-3xl sm:text-5xl text-custom241737" />
              ) : (
                <ImCross className="text-3xl sm:text-4xl text-custom241737" />
              )}
            </div>

            <div
              className={`absolute top-[120px] text-[#221638] px-2 sm:right-3 sm:left-3 right-10 left-10 z-10 bg-white shadow-lg
                origin-top transform transition-transform duration-500 ${activeSection === 2 ? "scale-y-100" : "scale-y-0"}`}
            >
              <div className="lg:hidden overflow-scroll h-72">
                <ul>
                  {websiteData?.menus?.PATNA_MENUS?.items?.map(
                    (item, index) => (
                      <li className="cursor-pointer border-t py-2 border-[#DBEEFD] flex items-center justify-between">
                        <Link
                          href={item?.url}
                          className="text-[#221638] text-[13px]"
                        >
                          {item?.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatnaHeader;
