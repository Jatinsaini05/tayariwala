import React, { useState } from 'react'
import { BiSend } from "react-icons/bi";
import Link from 'next/link';

const WhatsappMsg = ({ PhNo }) => {
    const [msg, setMsg] = useState("I need help on few queries")
    return (
        <div className=''>
            <div>
                <p className='text-[#606060]'>Welcome to Master Learners!!
                </p>
                <p className='text-[#606060]'>
                    We are happy to help you</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='flex items-center'>
                <textarea className='bg-[#f5f5f5] text-[#221638] focus-within:text-[#495057] w-full focus-within:bg-white rounded-[50px] pl-[15px] pt-[15px] focus-within:border outline-none focus-within:border-customFC6200' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <Link target="_blank" className='text-2xl bg-customFC6200 rounded-full p-2 text-white' href={`https://api.whatsapp.com/send?phone=${PhNo}&text=${msg}`}>
                    <BiSend />
                </Link>
            </div>

        </div>
    )
}

export default WhatsappMsg
