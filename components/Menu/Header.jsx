import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { FiMinus, FiPlus } from "react-icons/fi";
import HoverButton from "../hover effect/hoverButton";
import { useStoreLogin } from "../../store/login";
import { search } from "../../service/apiFetch";

const Header = ({ websiteData }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Fix hydration issue by checking if running on the client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Login state
  const user = useStoreLogin.getState().user;
  const authToken = useStoreLogin.getState().authToken;

  // Search API call
  useEffect(() => {
    if (input.trim() === "") {
      setData([]);
      return;
    }

    const fetchData = async () => {
      try {
        const params = { term: input };
        const response = await search(params);
        // if (!response.ok) throw new Error("Error occurred while fetching data");
        // const result = await response.json();
        setData(response);
        // console.log(data)
        setError(null);
      } catch (error) {
        setError(error.message);
        setData([]);
      }
    };
    fetchData();
  }, [input]);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <div>
      <div>
        <div className="md:px-2 relative z-50 px-[15px] py-4 flex justify-normal gap-5 lg:gap-0 lg:justify-between bg-white">
          <div className="flex flex-grow lg:flex-grow-0 justify-between  gap-3 xl:gap-14">
            <div>
              <Link href="/">
                <img
                  src={websiteData?.website?.logo}
                  className="hover:cursor-pointer max-w-[140px]"
                />
              </Link>
            </div>
            <div className="hidden relative sm:flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="bg-neutral-100 py-3 lg:px-1 2xl:px-4 w-48 2xl:w-auto px-4 rounded-md focus:outline-none"
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="absolute right-0 flex items-center pr-4">
                <button>
                  <FaSearch className="text-customFC6200" />
                </button>
              </div>
              <div className="absolute scbar right-0 left-0 top-[52px]">
                {input.length > 0 && (
                  <>
                    <div className="h-[300px] bg-[#f5f5f5] border overflow-x-auto">
                      {data?.products?.map((item, index) => (
                        <div key={index} className="bg-[#f5f5f5] p-2">
                          <div className="border-b">
                            <Link
                              href={`/${item?.uri}`}
                              className="text-[#221638] text-xs inline hover:text-customFC6200"
                            >
                              <span>{item?.title}</span>
                            </Link>
                            <span className="text-xs text-customFC6200">{`(${item?.stream?.valueAlias})`}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-grow lg:flex-grow-0 justify-end sm:justify-between gap-1 2xl:gap-14">
            <div className="hidden lg:flex items-center">
              {websiteData?.menus?.PRIMARY_MENU?.items?.map(
                (menuItem, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={menuItem.url}
                      className="text-black lg:text-[12px] xl:text-[13px] text-[13px] font-semibold px-1 xl:px-3 flex items-center hover:text-customFC6200"
                    >
                      {menuItem.title}
                      {menuItem.subItems && menuItem.subItems.length > 0 && (
                        <RiArrowDownSLine className="ml-1" />
                      )}
                    </Link>

                    {menuItem.subItems && menuItem.subItems.length > 0 && (
                      <div>
                        <div className="h-6 w-full absolute -bottom-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible"></div>
                        <ul className="absolute bg-white border-t-3 border-t-customFC6200 z-10 top-full mt-6 left-0 w-max shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                          {menuItem.subItems.map((subItem, subIndex) => {
                            const isLastItem =
                              subIndex === menuItem.subItems.length - 1;

                            return (
                              <li
                                key={subIndex}
                                className={`text-base py-3 px-4 border-b border-dashed ${
                                  isLastItem
                                    ? "text-sm text-gray-500 py-3 px-4 border-b border-dashed"
                                    : "hover:text-customFC6200"
                                }`}
                              >
                                {!isLastItem ? (
                                  <Link
                                    href={subItem.url}
                                    className="text-black font-semibold hover:text-customFC6200"
                                  >
                                    {subItem.title}
                                  </Link>
                                ) : (
                                  <span>{subItem.title}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="hidden sm:flex items-center">
              {isClient && user && authToken ? (
                <div className="flex items-center" id="loginheader">
                  <HoverButton icon={LuUser2} text="Profile" link="/profile" />
                </div>
              ) : (
                <div className="flex items-center" id="loginheader">
                  <HoverButton
                    icon={LuUser2}
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
              <div className="px-3 py-4 sm:hidden flex flex-col gap-5">
                <div className="relative flex items-center">
                  <input
                    type="search"
                    value={input}
                    placeholder="Search"
                    className="bg-neutral-100 py-3 px-4 rounded-md focus:outline-none"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <div className="absolute right-0 flex items-center pr-4">
                    <button>
                      <FaSearch className="text-customFC6200" />
                    </button>
                  </div>
                  <div className="absolute scbar right-0 left-0 z-20 top-[52px]">
                    {input.length > 0 && (
                      <>
                        <div className="h-[300px] bg-[#f5f5f5] border overflow-x-auto">
                          {data?.products?.map((item, index) => (
                            <div key={index} className="bg-[#f5f5f5] p-2">
                              <div className="border-b">
                                <Link
                                  href={`/${item?.uri}`}
                                  className="text-[#221638] text-xs inline hover:text-customFC6200"
                                >
                                  <span>{item?.title}</span>
                                </Link>
                                <span className="text-xs text-customFC6200">{`(${item?.stream?.valueAlias})`}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div id="hiddenlogin">
                    {isClient && user && authToken ? (
                      <div className="flex items-center" id="loginheader">
                        <HoverButton
                          icon={LuUser2}
                          text="Profile"
                          link="/profile"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center" id="loginheader">
                        <HoverButton
                          icon={LuUser2}
                          text="Login/Register"
                          link="/login"
                        />
                      </div>
                    )}
                  </div>
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
                {websiteData?.menus?.PRIMARY_MENU?.items?.map(
                  (menuItem, index) => (
                    <ul key={index}>
                      <li className="cursor-pointer border-t py-2 border-[#DBEEFD] flex items-center justify-between">
                        <Link
                          href={menuItem?.url}
                          className="text-[#221638] text-[13px]"
                        >
                          {menuItem?.title}
                        </Link>
                        {menuItem?.subItems?.length > 0 && (
                          <>
                            {openDropdown === `menu-${index}` ? (
                              <FiMinus
                                className="text-[#221638]"
                                onClick={() => toggleDropdown(`menu-${index}`)}
                              />
                            ) : (
                              <FiPlus
                                className="text-[#221638]"
                                onClick={() => toggleDropdown(`menu-${index}`)}
                              />
                            )}
                          </>
                        )}
                      </li>

                      {/* Sub-menu rendering */}
                      {menuItem?.subItems?.length > 0 && (
                        <ul
                          className={`overflow-hidden pl-2 text-[14.5px] transition-transform transform duration-300 origin-top ${
                            openDropdown === `menu-${index}`
                              ? "scale-y-100 max-h-max"
                              : "scale-y-0 max-h-0"
                          }`}
                        >
                          {menuItem?.subItems.map((subItem, subIndex) => {
                            const isLastItem =
                              subIndex === menuItem.subItems.length - 1;

                            return (
                              <>
                                <li
                                  key={`${index}-${subIndex}`}
                                  className={`border-t border-[#DBEEFD] py-2 ${isLastItem ? "text-sm text-gray-500" : ""}`}
                                >
                                  {!isLastItem ? (
                                    <Link
                                      href={subItem?.url}
                                      className="text-[#221638] text-[14.5px]"
                                    >
                                      {subItem?.title}
                                    </Link>
                                  ) : (
                                    <span>{subItem.title}</span>
                                  )}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      )}
                    </ul>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
