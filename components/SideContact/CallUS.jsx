import Link from 'next/link'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import WhatsappMsg from './WhatsappMsg';
import { IoMail } from "react-icons/io5";
import Enq from './Enq';

const CallUS = ({ websiteData }) => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("whatsapp")
    return (
        <div>
            <div className='fixed top-[40%] z-50 right-2 flex flex-col gap-2'>

                <Link href={`tel:${websiteData?.website?.contactNumber[0]}`} target='_blank' title='Call Us' className='rounded-full block bg-[#221638] w-fit p-2'><LuPhoneCall className='text-3xl text-white' /></Link>
                <button title='Contact Us' onClick={open ? () => setOpen(false) : () => setOpen(true)} className='rounded-full block bg-[#45c655] w-fit p-2'><FaWhatsapp className='text-3xl text-white' /></button>
            </div>
            <div className='fixed right-3 top-[40%] -translate-y-1/3 z-[60] '>
                {open && <div className='rounded-[20px] shadow-[0px_5px_6px_5px_rgba(0,_0,_0,_0.1)] overflow-hidden bg-white w-[18.025rem]'>
                    <div className='relative bg-[#fed0b2] px-5 pb-10 pt-5 flex items-center justify-center'>
                        <img src={websiteData?.website?.logo} className='w-[9.313rem]'></img>
                        <ImCross className='text-sm absolute hover:cursor-pointer top-5 right-5' onClick={() => setOpen(false)} />
                        <div className='absolute bottom-[-24px]'>
                            <img src="https://i.filecdn.in/1mlearners/1-header-1735910297354.png"></img>
                        </div>
                    </div>
                    <div className='h-[300px] overflow-scroll scrollbar-hide p-[1.25rem] bg-white'>
                        {active === "whatsapp" ?
                            <WhatsappMsg PhNo={websiteData?.website?.contactNumber[0]} />
                            :
                            <Enq/>
                        }
                    </div>
                    <div className='bg-white'>
                        <div className='py-3 px-5'>
                            <div className=' flex items-center w-full text-white rounded-[30px] overflow-hidden'>
                                <button className='flex relative bg-customFC6200 justify-center text-3xl p-2 items-center w-full' onClick={() => setActive("whatsapp")}>
                                    <FaWhatsapp />
                                    {active === "whatsapp" ?

                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] absolute bottom-0 border-b-white"></div>
                                        :
                                        null
                                    }

                                </button>
                                <button className='flex relative bg-customFC6200 justify-center text-3xl p-2 items-center w-full' onClick={() => setActive("enq")}>
                                    <IoMail />
                                    {active === "enq" ?

                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] absolute bottom-0 border-b-white"></div>
                                        :
                                        null
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CallUS