import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";


const Footer = ({ websiteData }) => {
    return (
        <div>
            <div className='bg-[#100f1f] relative z-10 pt-24 overflow-hidden'>
                <div className='container'>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 text-white gap-12'>
                        <div>
                            <Link href="#">
                                <h2 className='text-[32px] font-semibold'>{websiteData?.website?.title}</h2>
                            </Link>
                            <p className='leading-7 my-4 text-[#e4e4e4]'>{websiteData?.website?.description}</p>
                            <ul className='flex items-center gap-3  text-[#e4e4e4]'>
                                <li> {websiteData?.website?.socialLinks?.twitter && (
                                    <Link href={websiteData?.website?.socialLinks?.twitter}>
                                        <FaTwitter className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.facebook && (
                                    <Link href={websiteData?.website?.socialLinks?.facebook}>
                                        <FaFacebookF className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.instagram && (
                                    <Link href={websiteData?.website?.socialLinks?.instagram}>
                                        <FaInstagram className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.youTube && (
                                    <Link href={websiteData?.website?.socialLinks?.youTube}>
                                        <FaYoutube className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.telegram && (
                                    <Link href={websiteData?.website?.socialLinks?.telegram}>
                                        <FaTelegram className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.whatsapp && (
                                    <Link href={websiteData?.website?.socialLinks?.whatsapp}>
                                        <FaWhatsapp className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                                <li> {websiteData?.website?.socialLinks?.linkedIn && (
                                    <Link href={websiteData?.website?.socialLinks?.linkedIn}>
                                        <FaLinkedin className='bg-[#1d1c2e] p-2 text-3xl rounded-sm hover:bg-customFC6200' />
                                    </Link>
                                )}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold pb-2 mb-6 border-b border-[#192129]'>Resources</h3>
                            <ul className='text-[#e4e4e4] leading-9 list-inside list-[square]'>
                                {websiteData?.menus?.FOOTER_MENU_1?.items?.map((item) => (

                                    <li className='relative before:absolute before:bg-[#FC6200] before:content-[""] before:w-2 before:h-2 before:-left-0 before:top-3.5'>
                                        {item?.url && (
                                            <Link href={item?.url} className='hover:text-customFC6200 hover:translate-x-2 inline-block'>{item?.title}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold pb-2 mb-6 border-b border-[#192129]'>Explore</h3>
                            <ul className='text-[#e4e4e4] leading-9 list-inside list-[square]'>
                                {websiteData?.menus?.FOOTER_MENU_2?.items?.map((item) => (
                                    <li className='relative before:absolute before:bg-[#FC6200] before:content-[""] before:w-2 before:h-2 before:-left-0 before:top-3.5'>
                                        {item?.url && (<Link href={item?.url} className='hover:text-customFC6200 hover:translate-x-2 inline-block'>{item?.title}</Link>
                                        )}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold pb-2 mb-6 border-b border-[#192129]'>Address</h3>
                            <ul className='text-[#e4e4e4] leading-9'>
                                <li className='relative'><IoLocationOutline className='absolute top-2.5 bg-[#100f1f] -left-1.5' /><Link href='#' className='hover:text-customFC6200 hover:translate-x-2 inline-block pl-[21px]'>{websiteData?.website?.address}</Link></li>
                                <li className='relative'><FiPhoneCall className='absolute top-2.5 bg-[#100f1f] -left-1.5' /><Link href={`tel:${websiteData?.website?.contactNumber[0]}`} className='hover:text-customFC6200 hover:translate-x-2 inline-block pl-[21px]'>{websiteData?.website?.contactNumber[0]}</Link></li>
                                <li className='relative'> <MdOutlineMailOutline className='absolute top-2.5 bg-[#100f1f] -left-1.5' /><Link href={`mailto:${websiteData?.website?.email}`} className='hover:text-customFC6200 hover:translate-x-2 inline-block pl-[21px]'>{websiteData?.website?.email}</Link></li>
                                <li className='relative'> <RiInboxFill className='absolute top-2.5 bg-[#100f1f] -left-1.5' /><Link href={`tel:${websiteData?.website?.contactNumber[1]}`} className='hover:text-customFC6200 hover:translate-x-2 inline-block pl-[21px]'>{websiteData?.website?.contactNumber[1]}</Link></li>
                            </ul>
                            <div className='mt-0.5'><Link href="/master-learners-mobile-app-and-desktop-app" className='hover:translate-x-2 inline-block'><img src={"https://i.filecdn.in/1mlearners/download-1731910381227.png"} alt="download"></img></Link></div>
                        </div>
                    </div>
                    <div className='text-[#e4e4e4] border-t border-[#192129] text-[14px] sm:text-base py-6 mt-[70px]'>
                        <div className='flex flex-wrap justify-center text-center gap-3 sm:justify-between'><p>© 2022 Master Learners Proudly Crafted by <Link href="https://iesmaster.org/" target='_blank' className='text-customFC6200 hover:text-white'>IES Master</Link> </p>
                            <ul className='flex gap-4'>
                                <li><Link href='/privacy-policy' className='hover:text-customFC6200'>Privacy Policy</Link></li>
                                <li> | </li>
                                <li><Link href="/terms-and-conditions" className='hover:text-customFC6200'>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className='pt-3 flex text-center justify-center'><p>All rights reserved by <Link href="/" className='text-customFC6200 hover:text-white'>IES Master Learners Pvt. Ltd.</Link></p></div>

                    </div>

                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full">
                    <div className="absolute left-[25%] h-full w-[1px] bg-[#282736]">
                        <img src={"https://i.filecdn.in/1mlearners/shoot-1733492755518.png"} className='shoot absolute -top-[110px]'></img>
                    </div>
                    <div className="absolute right-[25%] h-full w-[1px] bg-[#282736]">
                        <img src={"https://i.filecdn.in/1mlearners/shoot-1733492755518.png"} className='shoot absolute -top-[510px]'></img>
                    </div>
                    <div className="absolute left-[50%] h-full w-[1px] bg-[#282736]">
                        <img src={"https://i.filecdn.in/1mlearners/shoot-1733492755518.png"} className='shoot absolute -top-[1000px]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer