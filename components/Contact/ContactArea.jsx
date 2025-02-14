import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import Link from 'next/link';
import EnquiryForm from './EnquiryForm';

const ContactArea = ({ pageData, websiteData }) => {
  return (
    <div>
      <div className='container'>
        <div className='my-[100px]'>
          <div className='flex flex-col lg:flex-row justify-between lg:gap-5 gap-20'>
            <div className='text-[#221638] lg:w-1/2'>
              <span className='text-sm text-customFC6200 capitalize'>
                {pageData?.subHeading}
              </span>
              <h2 className='mb-3 mt-2 text-4xl font-semibold'>
                {pageData?.heading}
              </h2>
              <ul className='mt-10 leading-7'>
                <li className='group'>
                  <div className='relative'>
                    <div className='bg-[#f8f9f8] rounded w-max p-6 absolute group-hover:bg-customFC6200'>
                      <SlLocationPin className='text-customFC6200 text-[30px] group-hover:text-white duration-0' />
                    </div>
                    <div className='ml-28'>

                      <h3 className='text-2xl font-semibold'>
                        Our Address
                      </h3>
                      <p className='max-w-[300px] text-[#606060]'>{websiteData?.address}
                      </p>
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
                        E-mail
                      </h3>
                      {websiteData?.email?.map((item, index) => (
                        <p key={index} className='max-w-[300px] text-[#606060]'><span>mail: &nbsp;</span><Link href={`mailto:${item}`} className="text-customFC6200">{item}</Link>
                        </p>
                      ))}
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
                        Contact
                      </h3>
                      {websiteData?.contactNumber?.map((item, index) => (
                        <p key={index} className='max-w-[300px]'><span className='text-[#606060]'>Mobile:&nbsp;</span><Link href={`tel:${item}`} className='text-customFC6200'>
                          {item}
                        </Link>
                        </p>
                      ))}
                    </div>
                  </div>

                </li>
                <li className='group mt-10'>
                  <div className='relative'>
                    <div className='bg-[#f8f9f8] rounded absolute w-max p-6 group-hover:bg-customFC6200'>
                      <FiClock className='text-customFC6200 text-[30px] group-hover:text-white duration-0' />
                    </div>
                    {pageData?.advanceData?.data?.map((item, index) => (
                      <div key={index} className='ml-28'>

                        <h3 className='text-2xl font-semibold'>
                          {item?.title}
                        </h3>
                        <p className='max-w-[300px] text-[#606060]'>
                          {item?.more}
                        </p>
                      </div>
                    ))}
                  </div>

                </li>

              </ul>
            </div>
            <div className='lg:w-1/2'>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-2' dangerouslySetInnerHTML={{ __html: websiteData?.gmCode }}>
        {/* {websiteData?.gmCode} */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14013.972062503432!2d77.203376!3d28.584983!3m2!1i1024!2i768!4f13.1!2m1!1sF-126%20Katwaria%20Sarai!5e0!3m2!1sen!2sus!4v1731317075047!5m2!1sen!2sus"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>

    </div>
  )
}

export default ContactArea
