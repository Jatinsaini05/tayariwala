import React from 'react'

const PageTitle = ({details}) => {
    return (
        <div>
            <div
                className="bg-cover bg-center py-16 sm:py-[100px] relative"
                style={{ backgroundImage: `url(https://i.filecdn.in/1mlearners/events-details3-1647866368579-1735209539566.jpg)` }}
            >
                <div className='container'>
                    <div className='flex lg:pr-[400px]'>
                    <h2 className='font-extrabold mb-[10px] text-white sm:text-4xl text-[26px] text-center'>
                    {details?.name} | Master Learners
                    </h2>
                    </div>
                    <img src="https://i.filecdn.in/1mlearners/shape8-1734003592729.svg" className='absolute left-36 bottom-14 spin1 hidden lg:block'></img>
                </div>
            </div>
        </div>
    )
}

export default PageTitle