import React from 'react'
import Link from 'next/link'

const HerosectionDDA = () => {
  return (
    <div>
       <div className="lg:py-24 py-11 bg-gradient-45deg from-[#FC6200] to-[#8E2BFF]">
      <div className='container xl:px-52 relative'>
        <h2 className='lg:text-4xl text-[25px] text-center font-bold text-white'>
        DDA Junior Engineer (JE) 2022 online Test Series - MasterLearners        </h2>
        <ul className='flex flex-wrap text-white justify-center mt-3 gap-4'>
          <li><Link href="#" className="hover:text-[#606060] relative before:content-['/'] before:absolute before:-right-3 before:text-[#cbd3ea]">
            Home
          </Link>
          </li>
          <li className='text-center'>
          DDA Junior Engineer (JE) 2022 online Test Series - MasterLearners          </li>
        </ul>
        <img src="/images/shape8.svg" className='absolute hidden md:block spin1 left-0'></img>
      </div>
    </div>
    </div>
  )
}

export default HerosectionDDA