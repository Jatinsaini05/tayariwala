import React, { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import dynamic from "next/dynamic";
import Link from "next/link";
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
});

// export const getStaticProps = async () => {
//   try {
//     let url = "https://v3.edkt.net/api/s/news";
//     let response = await fetch(url, {
//       headers: {
//         apihost: "https://vijethaiasacademyvja.com/",
//       },
//     });

//     let topApi = await response.json();
//     console.log("topAp",topApi)
//     return {
//       props: {
//         topApi,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         topApi: [],
//       },
//     };
//   }
// };

// const TopNav = ({ topNavData },props) => {
//   const [nav, setNav] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const handleToggleSubMenu = (index) => {
//     setOpenSubMenu(openSubMenu === index ? null : index);
//   };
//   return (
//     <div>
//       <header>
//         <div className="topNav bg-[white]">
//           <div className="container mx-auto md:px-8 px-4 lg:px-16">
//             <div className="topnav-contInfo">
//               <ul className="md:hidden lg:flex gap-2 py-2">
//                 <div className="flex md:justify-start justify-center">
//                   {topNavData?.website?.contactNumber?.length > 0 ? (
//                     topNavData.website.contactNumber.map((item, index) => (
//                       <li
//                         className="flex text-white items-center gap-2 my-[5px] px-2"
//                         key={index}
//                       >
//                         <Link href="">
//                           <IoCall className="text-sm text-[#0c4270]" />
//                         </Link>
//                         <span className="text-sm text-[#0c4270]">{item}</span>
//                       </li>
//                     ))
//                   ) : (
//                     <span className="text-sm text-[#0c4270]">
//                       Contact Details not found
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex md:justify-start justify-center">
//                   <li className="flex text-white items-center gap-2 my-[5px]">
//                     <Link href="">
//                       <IoMdMail className="text-sm text-[#0c4270] font-bold" />
//                     </Link>
//                     <span className="text-sm text-[#0c4270]">
//                       {topNavData?.website?.email || "Email not found"}
//                     </span>
//                   </li>
//                 </div>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="2nd-nav bg-[#071e63] px-8">
//           <div className="cont bg-[white] ">
//             <div className="flex items-center space-x-4 border border-4 border-[#071e63]">
//               <span className="bg-orange-600 p-[0.79rem]">
//                 <FaBell className="text-white text-lg" />
//               </span>
//               <Marquee>
//                 <Link
//                   href="/"
//                   className="flex items-center gap-2 px-1 text-sm md:text-lg text-orange-600 font-bold"
//                 >
//                   {props?.topApi?.map((item, index) => (
//                     <span
//                       className="flex items-center text-center gap-2 py-2"
//                       key={index}
//                     >
//                       <FaRegHandPointRight />

//                       {item.title}
//                     </span>
//                   ))}
//                 </Link>
//               </Marquee>
//             </div>
//           </div>
//         </div>

//         <div className="nav3 bg-[#ffffff]">
//           <div className="container mx-auto md:px-8 px-4 lg:px-16">
//             <div className="md:flex md:justify-between justify-center md:py-0 py-4 md:items-center gap-2">
//               <div className="logo py-4 text-center">
//                 <Link href="/">
//                   <img
//                     src={topNavData?.website?.logo}
//                     alt="logo image"
//                     className="w-[250px] md:w-[330px] md:h-[56px]"
//                   />
//                 </Link>
//               </div>
//               <div className="btn flex justify-center  gap-4">
//                 {topNavData?.menus?.TOP_MENU?.items.length
//                   ? topNavData.menus.TOP_MENU.items.map((items, ind) => (
//                       <Link href={items.url} className="" key={ind}>
//                         <span className=" bg-orange-600 hover:bg-[#071e63] transition-all duration-[ease-in-out] delay-[0.3s]  font-semi-medium md:font-medium pt-[5px] text-[13px]  sm:text-[15px] pb-[8px] px-3  rounded text-white">
//                           {items.title}
//                         </span>
//                       </Link>
//                     ))
//                   : "top button not found"}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mainNav bg-[#071e63]">
//           <div className="container mx-auto md:px-8 px-4 lg:px-16">
//             <ul className="topNav hidden md:flex text-white gap-4 lg:text-lg md:text-sm">
//               {topNavData?.menus?.PRIMARY_MENU?.items?.length
//                 ? topNavData.menus.PRIMARY_MENU.items.map((navList, ind) => (
//                     <li
//                       className="list group relative hover:bg-[#eb5d06] py-3 px-2"
//                       key={ind}
//                     >
//                       <Link href={navList.url} className="topNavLink">
//                         {navList.title}
//                         {navList.subItems?.length ? (
//                           <IoMdArrowDropdown className="inline-block text-2xl ml-1" />
//                         ) : null}
//                       </Link>

//                       {navList.subItems?.length ? (
//                         <ul className="bg-[white] rounded-[4px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)]  text-[black] w-48 absolute top-full left-0 z-10 py-3 px-1 text-sm hidden group-hover:block">
//                           {navList.subItems.map((subItem, subInd) => (
//                             <li
//                               className="py-2 px-4 hover:bg-[#ff6500]"
//                               key={subInd}
//                             >
//                               <Link
//                                 href={subItem.url}
//                                 className="hover:text-white hover:bg-[#ff6500] topNavLink"
//                               >
//                                 {subItem.title}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       ) : null}
//                     </li>
//                   ))
//                 : "Navbar list not found"}
//             </ul>

//             <div className="menu md:hidden flex items-center justify-between text-white py-2">
//               <div className="name text-xl font-bold">Menu</div>
//               <div className="icon text-2xl font-bold">
//                 <GiHamburgerMenu onClick={() => setNav(!nav)} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {nav && (
//           <div className="mobileNav bg-[#071e63] md:hidden w-full text-center">
//             <div className="mobileNav mx-auto px-16 justify-center">
//               <ul className="text-white py-2 gap-4 text-lg">
//                 {topNavData?.menus?.PRIMARY_MENU?.items?.length
//                   ? topNavData.menus?.PRIMARY_MENU.items.map(
//                       (mobNavItem, mobInd) => (
//                         <li className="py-2" key={mobInd}>
//                           <Link
//                             href={mobNavItem.url}
//                             onClick={() => setNav(false)}
//                           >
//                             {mobNavItem.title}
//                           </Link>

//                           {mobNavItem?.subItems?.length > 0 && (
//                             <IoMdArrowDropdown
//                               className="text-white inline-block text-2xl ml-1 cursor-pointer"
//                               onClick={() => handleToggleSubMenu(mobInd)}
//                             />
//                           )}

//                           {/* Submenu */}
//                           {openSubMenu === mobInd &&
//                           mobNavItem.subItems?.length ? (
//                             <ul className="bg-transparent text-white">
//                               {mobNavItem.subItems.map((item, index) => (
//                                 <li
//                                   className="py-2 px-4 hover:bg-[#ff6500]"
//                                   key={index}
//                                 >
//                                   <Link
//                                     onClick={() => setNav(false)}
//                                     href={item.url}
//                                     className="hover:text-white hover:bg-[#ff6500] topNavLink"
//                                   >
//                                     {item.title}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           ) : null}
//                         </li>
//                       )
//                     )
//                   : "Mobile Navlist not found"}
//               </ul>
//             </div>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };
// export default  TopNav;


export default function TopNav({ topNavData }) {
  const [nav, setNav] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const handleToggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const [topApi, setTopApi] = useState(null);

  const fetchTopbar = async () => {
    try {
      let url = "https://v3.edkt.net/api/s/news";
      let response = await fetch(url, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });

      let data = await response.json();
      setTopApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopbar();
  }, []);

  return (
    <div>
      <header>
        <div className="topNav bg-[white]">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <div className="topnav-contInfo">
              <ul className="md:hidden lg:flex gap-2 py-2">
                <div className="flex md:justify-start justify-center">
                  {topNavData?.website?.contactNumber?.length > 0 ? (
                    topNavData.website.contactNumber.map((item, index) => (
                      <li
                        className="flex text-white items-center gap-2 my-[5px] px-2"
                        key={index}
                      >
                        <Link href="">
                          <IoCall className="text-sm text-[#0c4270]" />
                        </Link>
                        <span className="text-sm text-[#0c4270]">{item}</span>
                      </li>
                    ))
                  ) : (
                    <span className="text-sm text-[#0c4270]">
                      Contact Details not found
                    </span>
                  )}
                </div>

                <div className="flex md:justify-start justify-center">
                  <li className="flex text-white items-center gap-2 my-[5px]">
                    <Link href="">
                      <IoMdMail className="text-sm text-[#0c4270] font-bold" />
                    </Link>
                    <span className="text-sm text-[#0c4270]">
                      {topNavData?.website?.email || "Email not found"}
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="2nd-nav bg-[#071e63] px-8">
          <div className="cont bg-[white] ">
            <div className="flex items-center space-x-4 border border-4 border-[#071e63]">
              <span className="bg-orange-600 p-[0.79rem]">
                <FaBell className="text-white text-lg" />
              </span>
              <Marquee>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-1 text-sm md:text-lg text-orange-600 font-bold"
                >
                  {topApi?.map((item, index) => (
                    <span
                      className="flex items-center text-center gap-2 py-2"
                      key={index}
                    >
                      <FaRegHandPointRight />

                      {item.title}
                    </span>
                  ))}
                </Link>
              </Marquee>
            </div>
          </div>
        </div>

        <div className="nav3 bg-[#ffffff]">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <div className="md:flex md:justify-between justify-center md:py-0 py-4 md:items-center gap-2">
              <div className="logo py-4 text-center">
                <Link href="/">
                  <img
                    src={topNavData?.website?.logo}
                    alt="logo image"
                    className="w-[250px] md:w-[330px] md:h-[56px]"
                  />
                </Link>
              </div>
              <div className="btn flex justify-center  gap-4">
                {topNavData?.menus?.TOP_MENU?.items.length
                  ? topNavData.menus.TOP_MENU.items.map((items, ind) => (
                      <Link href={items.url} className="" key={ind}>
                        <span className=" bg-orange-600 hover:bg-[#071e63] transition-all duration-[ease-in-out] delay-[0.3s]  font-semi-medium md:font-medium pt-[5px] text-[13px]  sm:text-[15px] pb-[8px] px-3  rounded text-white">
                          {items.title}
                        </span>
                      </Link>
                    ))
                  : "top button not found"}
              </div>
            </div>
          </div>
        </div>

        <div className="mainNav bg-[#071e63]">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <ul className="topNav hidden md:flex text-white gap-4 lg:text-lg md:text-sm">
              {topNavData?.menus?.PRIMARY_MENU?.items?.length
                ? topNavData.menus.PRIMARY_MENU.items.map((navList, ind) => (
                    <li
                      className="list group relative hover:bg-[#eb5d06] py-3 px-2"
                      key={ind}
                    >
                      <Link href={navList.url} className="topNavLink">
                        {navList.title}
                        {navList.subItems?.length ? (
                          <IoMdArrowDropdown className="inline-block text-2xl ml-1" />
                        ) : null}
                      </Link>

                      {navList.subItems?.length ? (
                        <ul className="bg-[white] rounded-[4px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)]  text-[black] w-48 absolute top-full left-0 z-10 py-3 px-1 text-sm hidden group-hover:block">
                          {navList.subItems.map((subItem, subInd) => (
                            <li
                              className="py-2 px-4 hover:bg-[#ff6500]"
                              key={subInd}
                            >
                              <Link
                                href={subItem.url}
                                className="hover:text-white hover:bg-[#ff6500] topNavLink"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))
                : "Navbar list not found"}
            </ul>

            <div className="menu md:hidden flex items-center justify-between text-white py-2">
              <div className="name text-xl font-bold">Menu</div>
              <div className="icon text-2xl font-bold">
                <GiHamburgerMenu onClick={() => setNav(!nav)} />
              </div>
            </div>
          </div>
        </div>

        {nav && (
          <div className="mobileNav bg-[#071e63] md:hidden w-full text-center">
            <div className="mobileNav mx-auto px-16 justify-center">
              <ul className="text-white py-2 gap-4 text-lg">
                {topNavData?.menus?.PRIMARY_MENU?.items?.length
                  ? topNavData.menus?.PRIMARY_MENU.items.map(
                      (mobNavItem, mobInd) => (
                        <li className="py-2" key={mobInd}>
                          <Link
                            href={mobNavItem.url}
                            onClick={() => setNav(false)}
                          >
                            {mobNavItem.title}
                          </Link>

                          {mobNavItem?.subItems?.length > 0 && (
                            <IoMdArrowDropdown
                              className="text-white inline-block text-2xl ml-1 cursor-pointer"
                              onClick={() => handleToggleSubMenu(mobInd)}
                            />
                          )}

                          {/* Submenu */}
                          {openSubMenu === mobInd &&
                          mobNavItem.subItems?.length ? (
                            <ul className="bg-transparent text-white">
                              {mobNavItem.subItems.map((item, index) => (
                                <li
                                  className="py-2 px-4 hover:bg-[#ff6500]"
                                  key={index}
                                >
                                  <Link
                                    onClick={() => setNav(false)}
                                    href={item.url}
                                    className="hover:text-white hover:bg-[#ff6500] topNavLink"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      )
                    )
                  : "Mobile Navlist not found"}
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
