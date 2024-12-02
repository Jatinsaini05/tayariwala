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
                    <div className='xl:px-[200px]'>
                    <h2 className='font-extrabold mb-[10px] sm:text-4xl text-[26px] text-center'>
                    SSC JE Online Test Series for SSC-JE 2024 Exam
                    </h2>
                    </div>
                    <ul className="flex justify-center items-center gap-6 text-sm sm:text-base">
                        <li className="relative before:content-['/'] before:absolute before:-right-3 before:top-[2px] text-[#606060]">
                            <Link href="/" className="text-[#606060] hover:text-customFC6200">Home</Link>
                        </li>
                        <li className="text-[#221638]">
                        SSC JE Online Test Series for SSC-JE 2024 Exam
                        </li>
                    </ul>
                    <img src="/images/shape8.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                </div>
            </div>
        </div>
    )
}

export default PageTitle