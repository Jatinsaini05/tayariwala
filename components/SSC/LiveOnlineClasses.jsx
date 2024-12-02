import React from 'react'
import Link from 'next/link'

const LiveOnlineClasses = () => {
  return (
    <div className='container mt-14 lg:mb-[60px]' id="live-classes">
      <h3 className='text-[28px] text-[rgb(34,22,56)] pl-5 font-medium'>Live Online Classes</h3>
      <div className='container flex flex-wrap sm:flex-nowrap sm:justify-between justify-center gap-4 sm:gap-0'>
        <div className='border rounded px-3 pt-3 py-6 w-max'>
          <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
            <div className="relative">
              <Link href="#">
                <img src="/images/SSCJEMains.jpg" alt="image" className="w-[380px]"></img>
              </Link>
              <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                <span className='line-through text-[13px] font-semibold'>
                  ₹ 5550
                </span>
                <span className='text-white text-xl font-semibold ml-1'>
                  ₹ 4500
                </span>
              </span>
            </div>
            <div className='p-8'>
              <div>
                <p className='text-[#212529] mb-4'>Civil Engineering</p>
                <p className='text-[#221638] text-[24px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2024 Mains Practise Program</Link></p>

                <p className='text-[#606060] pt-5 text-base leading-6'>Enroll in SSC-JE Mains Paper-II&nbsp;Civil Engineering Test Series&nbsp;and seize the opportunity to enhance your chances of success in the SSC-JE (Mains) Paper-II exam.</p>

              </div>
              <div className='py-8 flex justify-between text-[#007bff]'>
                <p>Start Date : 14 Jun, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border rounded px-3 pt-3 py-6 w-max'>
          <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
            <div className="relative">
              <Link href="#">
                <img src="/images/SSCJE.jpg" alt="image" className="w-[380px]"></img>
              </Link>
              <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                <span className='line-through text-[13px] font-semibold'>
                  ₹ 5550
                </span>
                <span className='text-white text-xl font-semibold ml-1'>
                  ₹ 4500
                </span>
              </span>
            </div>
            <div className='p-8'>
              <div>
                <p className='text-[#212529] mb-4'>Civil Engineering</p>
                <p className='text-[#221638] text-[24px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2024 Mains Practise Program</Link></p>

                <p className='text-[#606060] pt-5 text-base leading-6'>Enroll in SSC-JE Mains Paper-II&nbsp;Civil Engineering Test Series&nbsp;and seize the opportunity to enhance your chances of success in the SSC-JE (Mains) Paper-II exam.</p>

              </div>
              <div className='py-8 flex justify-between text-[#007bff]'>
                <p>Start Date : 14 Jun, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border rounded px-3 pt-3 py-6 w-max'>
          <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
            <div className="relative">
              <Link href="#">
                <img src="/images/istockphoto.jpg" alt="image" className="w-[380px]"></img>
              </Link>
              <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                <span className='line-through text-[13px] font-semibold'>
                  ₹ 5550
                </span>
                <span className='text-white text-xl font-semibold ml-1'>
                  ₹ 4500
                </span>
              </span>
            </div>
            <div className='p-8'>
              <div>
                <p className='text-[#212529] mb-4'>Civil Engineering</p>
                <p className='text-[#221638] text-[24px] font-semibold hover:text-customFC6200'><Link href="#">SSC-JE 2025 Live Online Course - Batch-07</Link></p>

                <p className='text-[#606060] pt-5 text-base leading-6'>A comprehensive SSC-JE live online course includes live classes, doubt-clearing sessions, study materials, and mock tests, designed to ensure thorough preparation and success</p>

              </div>
              <div className='py-8 flex justify-between text-[#007bff]'>
                <p>Start Date : 14 Jun, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveOnlineClasses
