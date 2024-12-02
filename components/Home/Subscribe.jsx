import React from 'react'
import { LuUser2 } from 'react-icons/lu'
import Link from 'next/link'

const Subscribe = ({pageData}) => {
    return (
        <div>
            {/* {JSON.stringify(pageData)} */}
            <div className="bg-[#f9f9f9]">
                <div className='container'>
                    <div className='text-center xl:px-52 pb-24 sm:py-24 relative z-30'>
                        <span className='text-base uppercase text-customFC6200'>{pageData?.subHeading}</span>
                        <h2 className='mt-5 text-2xl sm:text-4xl text-[#221638] font-semibold'>{pageData?.heading}</h2>
                        <div className='mt-5'>
                        <span className='text-[#606060]' dangerouslySetInnerHTML={{__html: pageData?.content}}></span>
                        </div>
                        <div className='flex items-center md:flex-row gap-6 md:gap-0 flex-col justify-center mt-10'>
                            <input placeholder='Enter your email address' className='pl-3 py-[14px] w-full md:rounded-r-none rounded-md md:rounded-l-md bg-[#eaeaea] focus:outline-none' />
                            {pageData?.buttons[0]?.link &&(
                            <div>
                                <Link href={pageData?.buttons[0]?.link} className='relative bg-customFC6200 md:rounded-l-none flex w-max items-center py-[14px] px-11 rounded-md text-white text-base overflow-hidden group'>
                                    <span className="relative z-10 capitalize flex items-center font-medium">
                                        <LuUser2 className='mr-2' />{pageData?.buttons[0]?.title}
                                    </span>
                                    <span className="absolute inset-0 bg-custom241737 justify-around transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                                </Link>
                            </div>
                            )}
                        </div>
                        <div className='hidden lg:block'>
                            <div className='absolute -z-10 right-0 bottom-[70px]'><img src="https://i.filecdn.in/1mlearners/shape14-1732254383332.png" className='spin'></img> </div>
                            <div className='absolute -z-10 left-[105px] bottom-[85px]'><img src="https://i.filecdn.in/1mlearners/shape12-1732254251780.png" className='spin'></img> </div>
                            <div className='absolute  -z-10 right-0 bottom-[140px]'><img src="https://i.filecdn.in/1mlearners/shape13-1732254234784.png" className='swing'></img> </div>
                            <div className='absolute -z-10 left-[155px] bottom-[170px]'><img src="https://i.filecdn.in/1mlearners/shape4-1732096425741.png" className='scale'></img> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe