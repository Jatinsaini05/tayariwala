import React from "react";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import HoverButton from "../hover effect/hoverButton";

const AchieveYourGoal = ({ pageData }) => {
  return (
    <div>
      <div className="md:flex  justify-between py-5 sm:pb-36 items-center lg:gap-32 sm:mx-16 mx-4">
        <div className="md:w-1/2 text-center md:text-start">
          <h1 className="text-custom241737 font-bold sm:text-4xl text-2xl">
            {pageData?.heading}
          </h1>
          <p className="my-8 leading-7 text-[#606060]">
            {pageData?.subHeading}
          </p>
          <div className="mb-8">
            <span
              className="leading-7 text-[#606060]"
              dangerouslySetInnerHTML={{ __html: pageData?.content }}
            ></span>
          </div>
          <div
            id="viewcourses"
            className="flex justify-center md:justify-normal"
          >
            {pageData?.buttons[0]?.link && (
              <HoverButton
                text={pageData?.buttons[0]?.title}
                icon={LuUser}
                link={pageData?.buttons[0]?.link}
              />
            )}
          </div>
          {/* <div className='flex justify-center md:justify-normal'>
                        <div>
                            {pageData?.buttons[0]?.link &&(
                            <Link href={pageData?.buttons[0]?.link} className='relative bg-customFC6200 flex w-max items-center py-[14px] px-11 rounded-md text-white text-base overflow-hidden group'>
                                <span className="relative z-10 flex items-center font-medium capitalize">
                                    <LuUser  className='mr-2' />{pageData?.buttons[0]?.title}
                                </span>
                                <span className="absolute inset-0 bg-custom241737 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                            </Link>
                            )}
                        </div>
                    </div> */}
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src={pageData?.media}
              alt="Meeting image"
              className="w-[600px]"
            />
            <div className="hidden lg:block">
              <img
                src="https://i.filecdn.in/1mlearners/shape20-1732096402191.png"
                className="absolute spin bottom-0 right-20 z-[-10]"
              ></img>
              <img
                src="https://i.filecdn.in/1mlearners/shape20-1732096402191.png"
                className="absolute swing bottom-16 left-[-90px] z-[-10]"
              ></img>
              <img
                src="https://i.filecdn.in/1mlearners/shape4-1732096425741.png"
                className="absolute scale top-6 right-0 z-[-10]"
              ></img>
              <img
                src="https://i.filecdn.in/1mlearners/shape4-1732096425741.png"
                className="absolute spin top-[40%] right-10 z-[-10]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchieveYourGoal;
