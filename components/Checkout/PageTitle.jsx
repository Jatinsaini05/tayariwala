import React from 'react'
import Link from 'next/link'
const PageTitle = ({ pageData }) => {
    return (
        <div>
            <div
                className="bg-gray-50 py-16 sm:py-[100px] relative"
            >
                <div className='container'>
                    <h2 className='font-extrabold mb-[10px] sm:text-4xl text-[26px] text-center'>
                        {pageData?.pageData?.title}
                    </h2>
                    <ul className="flex justify-center items-center gap-6 text-sm sm:text-base">
                        <li className="relative before:content-['/'] before:absolute before:-right-3 text-[#606060]">
                            <Link href="/" className="text-[#606060] hover:text-customFC6200">Home</Link>
                        </li>
                        <li className="text-[#221638]">
                            {pageData?.pageData?.title}
                        </li>
                    </ul>
                    <img src="https://i.filecdn.in/1mlearners/shape8-1734003592729.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                </div>
            </div>
        </div>
    )
}

export default PageTitle