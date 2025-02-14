import React from 'react'
import { RiBookletFill } from "react-icons/ri";
import Link from 'next/link';
import HoverButton from '../hover effect/hoverButton';


const CourseNews = ({ pageData }) => {
    return (
        <div>
            <div className='bg-[#f9f9f9] pt-10 md:pt-0 pb-28'>
                <div className='container'>
                    <div className='text-center xl:px-52'>
                        <span className='text-base text-customFC6200 uppercase'>{pageData?.advanceData?.data[1]?.more}</span>
                        <h2 className='mt-5 text-2xl sm:text-4xl text-[#221638] font-semibold'>{pageData?.advanceData?.data[1]?.title}</h2>
                        <div className='mt-5'>
                        <span className='text-[#606060]' dangerouslySetInnerHTML={{__html: pageData?.advanceData?.data[1]?.desci}}></span>
                        </div>
                    </div>
                    <div className='text-center mt-20 sm:mt-32 lg:mt-52 lg:px-32 xl:px-52 relative'>
                        <span className='text-base text-customFC6200 uppercase'>{pageData?.advanceData?.data[0]?.more}</span>
                        <h2 className='mt-5 text-2xl sm:text-4xl text-[#221638] font-semibold'>{pageData?.advanceData?.data[0]?.title}</h2>
                        <div className='mt-5'>
                        <span className='text-[#606060]' dangerouslySetInnerHTML={{__html: pageData?.advanceData?.data[0]?.desci}}></span>
                        </div>
                        <div id="getnow" className='flex justify-center mt-8'>
                            {pageData?.buttons[0]?.link && (
                                <HoverButton text={pageData?.buttons[0]?.title} icon={RiBookletFill} link={pageData?.buttons[0]?.link}/>
                            )}
                        </div>
                        <div className='hidden lg:block'>
                            <div className='absolute top-2 left-10'>
                                <img src="https://i.filecdn.in/1mlearners/shape7-1732167605314.png" className='swing'></img>
                            </div>

                            <div className='absolute bottom-[-50] right-16'>
                                <img src="https://i.filecdn.in/1mlearners/shape3-1732167683241.png" className='spin'></img>

                            </div>
                            <div className='absolute top-0 right-16'>
                                <img src="https://i.filecdn.in/1mlearners/shape4-1732096425741.png" className='scale'></img>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseNews