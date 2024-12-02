import Link from 'next/link'
import React from 'react'

const Policy = ({ pageData }) => {
  return (
    <div className='container py-[100px]'>
      <div className='flex md:flex-row flex-grow flex-col justify-start'>
        <div className='px-[15px] md:w-2/3 w-full h-auto'>
          <div dangerouslySetInnerHTML={{ __html: pageData?.content }}></div>
          {/* <img src="/images/policy.jpg" alt="Privacy Policy Image" className='rounded w-full'></img>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a ullam nulla non sunt. Possimus corrupti in, reprehenderit cumque accusantium expedita unde laboriosam excepturi fuga necessitatibus eveniet consectetur minima magnam!
          </div> */}
        </div>
        <div className='px-[15px] md:w-1/3'>
          <div className='py-[30px] px-[25px] shadow-md'>
            <ul className='list-inside list-disc'>
              {pageData?.advanceData?.data?.map((item, index) => (
                item?.link && (
                  <li
                    key={index}
                    className='relative before:absolute hover:text-customFC6200 before:bg-[#FC6200] before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                )
              ))}

              {/* <li className='relative before:absolute before:bg-[#FC6200] before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className='relative before:absolute before:bg-[#FC6200] before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li className='relative before:absolute before:bg-[#FC6200] before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li> */}
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Policy