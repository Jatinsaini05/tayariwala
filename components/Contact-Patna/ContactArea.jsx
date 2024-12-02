import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import Link from 'next/link';
import EnquiryForm from '../Contact/EnquiryForm';

const ContactArea = ({ pageData }) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div className='container'>
        <div className='my-[100px]'>
          <div className='flex flex-col lg:flex-row justify-between lg:gap-5 gap-20'>
            <div className='text-[#221638] lg:w-1/2'>
              <span className='text-sm text-customFC6200'>
                {pageData?.subHeading}
              </span>
              <h2 className='mb-3 mt-2 text-4xl font-semibold'>
                {pageData?.heading}
              </h2>
              <ul className="leading-7">
                <li className="group mt-10">
                  <div className="relative">
                    <div className="bg-[rgb(248,249,248)] rounded w-max p-6 absolute group-hover:bg-customFC6200">
                      <SlLocationPin className="text-customFC6200 text-[30px] group-hover:text-white duration-0" />
                    </div>
                    <div className="ml-28">
                      <h3 className="text-2xl font-semibold">
                        {pageData?.advanceData?.data[0]?.title}
                      </h3>
                      <div className="max-w-[300px] text-[#606060]">
                        <span dangerouslySetInnerHTML={{ __html: pageData?.advanceData?.data[0]?.desci }}></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='group mt-10'>
                  <div className='relative'>
                    <div className='bg-[#f8f9f8] rounded absolute w-max p-6 group-hover:bg-customFC6200'>
                      <MdOutlineEmail className='text-customFC6200 text-[30px] group-hover:text-white duration-0' />
                    </div>
                    <div className='ml-28'>
                      <h3 className='text-2xl font-semibold'>
                        {pageData?.advanceData?.data[1]?.title}
                      </h3>
                      <p className='max-w-[300px] text-[#606060]'><span>mail: &nbsp;</span><Link href={`mailto:${pageData?.advanceData?.data[1]?.link}`} className="text-customFC6200">{pageData?.advanceData?.data[1]?.link}</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li className='group mt-10'>
                  <div className='relative'>
                    <div className='bg-[#f8f9f8] rounded absolute w-max p-6 group-hover:bg-customFC6200'>
                      <FiPhoneCall className='text-customFC6200 text-[30px] group-hover:text-white duration-0' />
                    </div>
                    <div className='ml-28'>

                      <h3 className='text-2xl font-semibold'>
                        {pageData?.advanceData?.data[2]?.title}
                      </h3>

                      <p className='max-w-[300px]'><span className='text-[#606060]'>Mobile:&nbsp;</span><Link href={`tel:${pageData?.advanceData?.data[2]?.link}`} className='text-customFC6200'>
                        {pageData?.advanceData?.data[2]?.link}
                      </Link>
                      </p>
                      <p className='max-w-[300px]'><span className='text-[#606060]'>Phone:&nbsp;</span><Link href={`tel:${pageData?.advanceData?.data[2]?.more}`} className='text-customFC6200'>
                        {pageData?.advanceData?.data[2]?.more}
                      </Link>
                      </p>

                    </div>
                  </div>

                </li>
                <li className='group mt-10'>
                  <div className='relative'>
                    <div className='bg-[#f8f9f8] rounded absolute w-max p-6 group-hover:bg-customFC6200'>
                      <FiClock className='text-customFC6200 text-[30px] group-hover:text-white duration-0' />
                    </div>
                    <div className='ml-28'>

                      <h3 className='text-2xl font-semibold'>
                        {pageData?.advanceData?.data[3]?.title}
                      </h3>
                      <div className='max-w-[300px] text-[#606060]'>
                        <span dangerouslySetInnerHTML={{ __html: pageData?.advanceData?.data[3]?.desci }}></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='lg:w-1/2'>
              <div>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <iframe
          src={pageData?.link}
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  )
}

export default ContactArea