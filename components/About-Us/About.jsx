import React, { useState } from 'react';
import Link from 'next/link';
import { ImCross } from "react-icons/im";
import { FaPlay } from "react-icons/fa";

const About = ({ pageData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='pt-[70px] pb-[100px]'>
      {/* {JSON.stringify(pageData)} */}
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          <div>
            <span className='text-sm text-customFC6200'>MASTER LEARNERS</span>
            <h2 className='xl:text-[36px] md:text-[30px] text-[25px] font-semibold text-[#221638]'>
              {pageData?.heading}
            </h2>
            <div className='leading-7 text-[#606060] py-4'>
              <span dangerouslySetInnerHTML={{ __html: pageData?.content }}>
              </span>
            </div>
            {pageData?.buttons[0]?.link && (
              <Link href={pageData?.buttons[0]?.link} className='text-customFC6200 hover:text-[#221638] hover:border-b hover:border-b-[#221638] pb-1'><strong>Explore Learning</strong></Link>
            )}
          </div>
          <div>
            <div className='rounded-md relative '>
              <div className='group rounded-md overflow-hidden'>

                <img src={pageData?.media} className='rounded-md group-hover:scale-[1.1]' alt="image" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#221638] opacity-[.3] group-hover:border-orange-500 rounded-md"></div>
                <div className='group'>
                  <button
                    onClick={openModal}
                    className='custom-video-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-customFC6200 hover:bg-[#221638] text-white sm:p-5 p-4 rounded-full flex items-center justify-center'
                  >
                    <FaPlay className='sm:text-[40px] text-[30px]' />
                  </button>
                </div>

              </div>

              <div className='hidden lg:block'>
                <img src="https://i.filecdn.in/1mlearners/shape9-1732538543555.png" className='absolute top-8 -z-10 swingX -left-14' />
                <img src="https://i.filecdn.in/1mlearners/shape2-1-1732106256035.png" className='absolute -bottom-28 -z-10 swing right-14' />
                <img src="https://i.filecdn.in/1mlearners/shape4-1732096425741.png" className='absolute -top-24 scale -z-10 -right-5'></img>
              </div>
            </div>

            {/* Custom Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
                onClick={closeModal} // Close modal when clicking on background
              >
                <div
                  className="bg-white w-full max-w-[600px] mx-auto"
                  onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal content
                >
                  <div className="flex justify-center relative">
                    <iframe
                      width="560"
                      height="315"
                      src={pageData?.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full max-w-full"
                    />
                    <div className="absolute right-0 -top-5">
                      <ImCross onClick={closeModal} className="hover:cursor-pointer text-[#fff] opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;