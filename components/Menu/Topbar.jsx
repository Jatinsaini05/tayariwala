import Link from "next/link";
import React from "react";

const Topbar = ({ websiteData }) => {
  return (
    <div className="relative z-50">
      <div className="bg-white h-1 w-full"></div>
      <div className="bg-custom241737">
        <div className="py-1">
          <marquee
            width="100%"
            behavior="scroll"
            direction="left"
            className="flex items-center"
          >
            {websiteData?.menus?.TOPBAR_MENU?.items?.map((item, index) => (
              <Link
                href={item?.url}
                key={index}
                className="text-customFFEB3B mx-4"
              >
                {item?.title}
              </Link>
            ))}
          </marquee>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
