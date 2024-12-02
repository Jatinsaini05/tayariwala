import { Link } from '@nextui-org/link'
import React from 'react'

const PageTitle = () => {
    return (
        <div>
            <div
                className="bg-[#f8f9f8] py-16 sm:py-[100px] relative overflow-hidden"
            >
                <div className='container'>
                    <h2 className='font-extrabold mb-[10px] sm:text-4xl text-[26px] text-center'>
                    About Us
                    </h2>
                    <ul className="flex justify-center items-center gap-6 text-sm sm:text-base">
                        <li className="relative before:content-['/'] before:absolute before:-right-3 before:top-[2px] text-[#606060]">
                            <Link href="/" className="text-[#606060] hover:text-customFC6200">Home</Link>
                        </li>
                        <li className="text-[#221638]">
                        About Us
                        </li>
                    </ul>
                    <img src="/images/shape8.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                    <div className='overflow-hidden absolute -bottom-30 hidden lg:block left-0'>
                    <img src="/images/up1.png" className='mix-blend-lighten w-full'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle