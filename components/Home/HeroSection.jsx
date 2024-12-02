import React from 'react';
import Link from 'next/link';
import { LuUser2 } from "react-icons/lu";

const HeroSection = ({ pageData }) => {
  return (
    <div>
      <div className="bg-customEAE1D6">
        {/* Hero Section */}
        <div className='flex justify-center sm:hidden'>
          <img src={pageData?.media} alt="Learning-bro image" className='w-[600px]' />
        </div>
        <div className='md:flex justify-between py-5 pb-10 md:pt-0 pt-10 lg:pb-36 md:pb-44 items-center lg:gap-32 sm:mx-16 mx-4'>
          <div className='md:w-1/2 text-center md:text-start'>
            <h1 className='text-custom241737 font-bold mb-[18px] sm:text-5xl text-2xl'>
              {pageData?.heading} <span className='text-customFC6200'>{pageData?.subHeading}</span>
            </h1>
            <div className='mb-[13px]'>
              <span
                className='text-[#606060] text-[17px]'
                dangerouslySetInnerHTML={{ __html: pageData?.content }}
              ></span>
            </div>
            <div className='flex flex-wrap gap-4 md:justify-normal justify-center'>
              <div>
                {pageData?.buttons?.[0]?.link && (
                  <Link
                    href={pageData.buttons[0].link}
                    className="relative bg-customFC6200 flex w-max items-center py-[14px] px-11 rounded-md text-white text-base overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <LuUser2 className="inline-block mr-2" />
                      {pageData.buttons[0]?.title}
                    </span>
                    <span className="absolute inset-0 bg-custom241737 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                  </Link>
                )}
              </div>
              <div>
                {pageData?.buttons[1]?.link && (
                  <Link href={pageData?.buttons[1]?.link}>
                    <img src={pageData?.buttons[1]?.image} alt="download" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='md:w-1/2 hidden sm:block'>
            <img src={pageData?.media} alt="Learning-bro image" className='w-[600px]' />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className='bg-[#F5F7FA] md:min-h-[840px] lg:min-h-[450px]'>
        <div className='relative'>
          <div className='container md:absolute md:pt-0 pt-10 left-0 right-0 md:top-[-100px]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-[30px] justify-between lg:gap-10 xl:gap-16'>
              {pageData?.advanceData?.data?.map((item, index) => (
                <div
                  key={index}
                  className='p-14 bg-white rounded-xl hover:shadow-xl hover:translate-y-[-20px] transition duration-500'
                >
                  <div className='flex justify-center items-center'>
                    <img src={item.thumb} />
                  </div>
                  <div className='text-center'>
                    <h3 className='text-[23px] font-semibold text-custom241737 mt-3'>{item.title}</h3>
                    <div className='my-5'>

                      <span
                        className='text-[#606060]'
                        dangerouslySetInnerHTML={{ __html: item.desci }}
                      ></span>
                    </div>

                    {item.link && (
                      <Link href={item.link} className='text-customFC6200 hover:text-custom241737'>
                        Start Now!
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
