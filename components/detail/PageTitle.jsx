import React from 'react'

const PageTitle = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center py-16 sm:py-[100px] relative"
                style={{ backgroundImage: "url('/images/detailsbg.jpg')" }}
            >
                <div className='container'>
                    <div className='flex lg:pr-[400px]'>
                    <h2 className='font-extrabold mb-[10px] text-white sm:text-4xl text-[26px] text-center'>
                    SSC JE Online Test Series for SSC-JE 2024 Exam
                    </h2>
                    </div>
                    <img src="/images/shape8.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                </div>
            </div>
        </div>
    )
}

export default PageTitle