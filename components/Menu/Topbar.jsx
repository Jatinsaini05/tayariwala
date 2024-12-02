import { Link } from '@nextui-org/link'
import React from 'react'

const Topbar = () => {
    return (
        <div className='relative z-50'>
            <div className='bg-white h-1 w-full'></div>
            <div className='bg-custom241737'>
                <div className='py-1'>
                    <marquee width="100%"
                        behavior="scroll"
                        direction="left" className="flex items-center"> <Link href='#' className='text-customFFEB3B'>Master Learners launches offline centre in Patna. Explore the centre</Link> </marquee>
                </div>
            </div>
        </div>
    )
}
export default Topbar