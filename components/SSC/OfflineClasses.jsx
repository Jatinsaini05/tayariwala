import React from 'react'
import Link from 'next/link'

const OfflineClasses = () => {
  return (
    <div className='container pt-14 lg:mb-[60px]' id="offline-classes">
      <h3 className='text-[28px] text-[#221638] pl-5 font-medium'>Classroom Offline Course</h3>
      <div className='container flex flex-wrap sm:flex-nowrap sm:justify-between justify-center gap-4 sm:gap-0'>
        <div className='border rounded px-3 pt-3 py-6 w-max'>
          <div className='bg-white max-w-[380px] rounded overflow-hidden shadow-xl'>
            <div className="relative">
              <Link href="#">
                <img src="/images/cardbg.jpg" alt="image" className="w-[380px]"></img>
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
                <p className='text-[#221638] text-[24px] font-semibold hover:text-customFC6200'><Link href="#">Regular Classroom Program - SSC JE</Link></p>

                <p className='text-[#606060] pt-5 text-base leading-6'>Join our SSC-JE Offline Course (Patna Centre) today and take a significant step towards achieving your engineering career goals.</p>

              </div>
              <div className='py-8 flex justify-between text-[#007bff]'>
                <p>Start Date : 17 Jun, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfflineClasses
