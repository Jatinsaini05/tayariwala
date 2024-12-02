import Link from 'next/link'
import React from 'react'

const TermsConditions = ({ pageData }) => {
  return (
    <div className='container py-[100px]'>
      <div className='flex md:flex-row flex-grow flex-col justify-start'>
        <div className='px-[15px] md:w-2/3 w-full h-auto'>
          <div dangerouslySetInnerHTML={{ __html: pageData?.content }}>

          </div>
        </div>
        <div className='px-[15px] md:w-1/3'>
          <div className='py-[30px] px-[25px] shadow-md'>
            <ul className='list-inside list-disc'>
              {pageData?.advanceData?.data?.map((item, index) => (
                <li
                  key={index}
                  className="relative before:absolute before:bg-[#FC6200] hover:text-customFC6200 before:rounded-full before:content-[''] before:w-2 before:h-2 before:-left-[1px] before:top-2"
                >
                  {item.link && (
                    <Link href={item.link}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

              {/* <li className='relative before:absolute before:bg-[#FC6200] hover:text-customFC6200 before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className='relative before:absolute before:bg-[#FC6200] hover:text-customFC6200 before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li className='relative before:absolute before:bg-[#FC6200] hover:text-customFC6200 before:rounded-full before:content-[""] before:w-2 before:h-2 before:-left-[1px] before:top-2'>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </li> */}
          </ul>
        </div>

      </div>
    </div>

    </div >
  )
}

export default TermsConditions