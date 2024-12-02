import { Link } from '@nextui-org/link'
import React from 'react'

const PageTitle = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center py-16 sm:py-[100px] relative"
                style={{ backgroundImage: "url('/images/CourseHeader.jpg')" }}
            >
                <div className='container'>
                    <h2 className='font-extrabold mb-[10px] sm:text-4xl text-[26px] text-center'>
                        Live Classes
                    </h2>
                    <ul className="flex justify-center items-center gap-6 text-sm sm:text-base">
                        <li className="relative before:content-['/'] before:absolute before:-right-3 before:top-[2px] text-[#606060]">
                            <Link href="/" className="text-[#606060] hover:text-customFC6200">Home</Link>
                        </li>
                        <li className="text-[#221638]">
                            Live Classes
                        </li>
                    </ul>
                    <img src="/images/shape8.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                </div>
            </div>
        </div>
    )
}

export default PageTitle