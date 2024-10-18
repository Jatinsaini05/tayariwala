import React, { useState } from 'react';
import { SiWindows11 } from "react-icons/si";

export default function PhotoGallery() {

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <>
            <div className='container'>
                <div className='mt-20'>
                    <h1 className='text-2xl text-white font-bold w-max px-3 py-2 rounded-md bg-black'>Video Gallery</h1>
                    <a href='#' className='text-xs text-green-300'>Home</a>
                    <span className='text-gray-300 pl-1 pr-1'> / </span>
                    <a href='#' className='text-xs text-green-300'>Gallery</a>
                    <span className='text-gray-300 pl-1 pr-1'> / </span>
                    <span className='text-xs text-gray-300'>Video Gallery</span>
                </div>
            </div>

            <div className='w-full h-10 bg-black'>
                <div className='container'>
                    <div className='flex items-center space-x-2 pt-3'>

                        <SiWindows11
                            className={`transition-colors duration-300 ${isClicked ? 'text-white' : 'text-gray-500 hover:text-white'
                                }`}
                            size={16}
                        />
                        <a
                            href="#"
                            onClick={handleClick}
                            className={`text-base transition-colors duration-300 ${isClicked ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Video Gallery
                        </a>
                        <a
                            href="#" className='text-sm text-white pl-4'>
                            ESE Testimonials
                        </a>
                        <a
                            href="#" className='text-sm text-white pl-4'>
                            GATE Testimonials
                        </a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='border-1 border-r-2 border-green-600 mt-10'>
                    <div className='px-3'>

                        <div className='border-b-2 border-green-400'>
                            <h1 className='text-black text-2xl pl-5 pt-5'>ESE</h1><br></br>
                        </div>
                    </div>


                    <div className='flex justify-center flex-wrap space-x-2 gap-4 pt-3 px-3 pb-3'>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/inZDma5yCcQ?si=3r40PXTHPLvFr4S6" title="YouTube video player" className="aspect-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/vfISZURMXxI?si=QakvHAdkQLi8MShF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/4bcU2H-EFt8?si=UPEX1BSwjNRoO6GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/rRiZerGkhxk?si=rmopnjNTpFVPyS_i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/f6JCND1F0XM?si=gvJXyzfDxo9YfTR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/4I5WBDOOSCM?si=J7RZWK5-BTy2SqKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/TJx-Y2jHMU4?si=PtJY7Abm0QrVTpbt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/Ll9thnjKV1c?si=RHYPR7iFiYioLDkC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/254Fck83n1Q?si=zPudYi6jYUAMt7Ov" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/C13fAYcaXpg?si=zax67MkNzh_o3wfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/bpOI5FmNgRE?si=IqfORRGRPH9eTIfX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/jTS-8mYYABk?si=5Pt4Gi2i2Scw8JTJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/M-sUyyhDNWU?si=_w7hOG2y6zK8ahCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/pEoMc-JKBkY?si=WLIRQTg-Yn2osHz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/HrC7UAsYhTo?si=j_6B5caSIAD9x4CQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/DARHJBR9nMw?si=juBsq_T_cdhD0AGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/APQOjGzxKiM?si=YN1nyw0STXo7C-QB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/LHwJy1OznbY?si=7eOJmplDaDERiWL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/Px4gIMWiapk?si=ufYTAvj5MMBzTnx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/49U5cEkaqPE?si=nXEICbnPA339vC26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/M7RcsUB3OdQ?si=GANjSRtDUyKKCWpR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/i5Do_LUCt8E?si=dNX_HHpSryUecSsN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/fvaF53agFv0?si=6_twm3kNHd7neTXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/CN18Hz_alTU?si=MdMfAVxDUNrq2xhn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/USKJWDe2_fw?si=UEHqawz8Y0a1sA3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/FQM5KwHjzow?si=gm3mBG9PTi600_3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/j8UrG2pqIMo?si=9hWR2DzT0VlrXx2O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/jD1wPv6ZJr4?si=H3gxhynDFI0rGPlN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/c8CnaFuKrRk?si=Zyin95QiZfw1ddZW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/-w_nIClhFaw?si=kJFwpOAUmu9bWTks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/V6RbKtjVTZI?si=74hDZCszvJ08KZky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/GaXjaGY0pOE?si=7_iTOveEHkwMFw-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/nf2eR8MkMX4?si=-XE3HlDwPWQ2Ge7G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/VHl6iHPS84A?si=ITb1mbpgRKJH4aGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/0qeiCKBo9co?si=1JFKO0roJu8NFNVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/iqA3QfBAHEY?si=CkjxSCag9E7Bfy14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/H1LK6PpXEW4?si=DSP52L8zQs6CKaRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/yaTIZnO1WA0?si=CQeZ1cu47XX8rtW-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/jxJdaU8xjls?si=ywRb9338-yQ_j0DX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/MpuzLTlrVoQ?si=BToLQAiAk1t398Gj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/AX5uxYn0qX8?si=ulPv1WnASConq4P_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/YwMlebaD6OM?si=UX1jJz-ht5oEBkYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/hNcrTqb4KZ0?si=dMoGYoU1yOy6wppt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/ZqgirfrHucg?si=I1q2ODlea_GwPIXD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/xnDZhMoNDMM?si=9MIceeV85jiNAQBX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/veoouGJdv-Y?si=w6Rh-l5wjwEHOPd9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/ysdghda3-BE?si=v2Us3wZrSpdIr8nv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/bQT5cbnybNE?si=pusBLpbZR9eMikyF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/T_HnwWorB18?si=AhyIUTPlOQnyyrUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/H8BBDzkqAWs?si=6EABp_72UDk82xag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/pC3VnuR_kPo?si=VrP7ZWKMP374r478" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/V7kG1Bgj8zU?si=50QPXb6dJMFojrDH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/R9XyIUMmv7I?si=yDY0s_VJdLn0ZThw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/6U63Sj1TYvI?si=NK8Lowi-sUcIimKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="250" height="140" src="https://www.youtube.com/embed/FCB56-fgpZ8?si=DIAOrUdqI81LR1TZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>





                <div className='container'>
                    <div className='border-1 border-r-2 border-green-600 mt-5'>
                        <div className='px-3'>

                            <div className='border-b-2 border-green-400'>
                                <h1 className='text-black text-2xl pl-5 pt-5'>GATE</h1><br></br>
                            </div>
                        </div>


                        <div className='flex justify-center flex-wrap space-x-2 gap-3 pt-3 px-3 pb-3'>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/2G9DFCTcvTA?si=8qlqaWWjGeRlbRDN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/l7og9AKoXRU?si=P6oMr44Acfzv4gMq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/EMNVP3Dvf9I?si=goncR2Ua7DVd1Eur" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/f77iKXOim0g?si=_G9CF-zzgPx_gZ9x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/WcO9pJctQHc?si=aO-7b73V6fQO82je" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/RzRLwzCMblk?si=BC3oBjI3RxOZhBLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/61jWISsLC4A?si=qWjDt8PUaXNjV5ND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/SLsw1wgjMVs?si=qf85q3oWlxeFL9FN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/giMgu6seAyM?si=FKVrJ7Nc3OeXaSX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/W8GTzOlzxeI?si=obEzUJ79qgxV61QC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/giMgu6seAyM?si=5WVebGG3ZQ2hAe2n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/Q0TzwNg7Ih4?si=ddhqMExchMJqZG_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/xhQXCZYdmrw?si=ASpRYSEE4x45fy3v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/xXekN2y2HsY?si=ZjpY4KmyyuvoaBW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/VXedPECvmG4?si=MCfMRcTGAuOkF9w8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/czHm-Qg445U?si=lXnWHSO0nWOeb2Vr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/s5GuGG4aHYc?si=RNcik9QkhQOh-gff" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/txx4FZ1Z5Yo?si=2-PeQFcT1Uzql-AR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/jYd18cV3Vxg?si=7plkR6mknnFhrvQH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/F3n4r_obgyU?si=R1aPw9EolTLVjrwy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/KHCiShX2I88?si=J1j3MDF0U76ZYMVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/fjwg57WZCYI?si=S4ViogHsYYAlaI9r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/vQ093cG-R5s?si=vEYxkbF1-y5-gV9d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/2uYxr7e0DFI?si=8JrwZIm6qrO0W4OK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/KNOiIw9_jWo?si=WT2hoHxhS9RAPKUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/aFYTXTJ_OhQ?si=Eucr-M2aKD9q_OgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/cuYNptGtzmw?si=OGfT8s5GyuhJi0NZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/9OJV3whPXXw?si=tqvDvR1r_BnUp4l1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/eWUq8x0wSS0?si=R6Vtb3T78ZkEIlU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/_E_X_qo_krc?si=NOgl6BC8b4EIe-Jq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/FRkmPetC_Uo?si=jxWUlTtVgaUKlIzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/10jNZkMzAO0?si=meLUMrdpXXAsSlXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/RRe1wC0muRk?si=LArvpgAqtlNngwKW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/6sHQn0xyYnw?si=PTv2BfL7Cn2mqQe5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/1b7n6U7nOOM?si=Pu2zNjn8T0oYVp64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/G2JZU9x6PWA?si=Tp5cDWhH6-efodJi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/jRi3Kp-4n5s?si=0EuKfSoSRAGqJYUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/5-QQkwwpCDE?si=XwBqcTNQSD8TxmaG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/ThbJFY9-39k?si=y7q72N6NaW9SesQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/RvpO-eI_QlM?si=I1wLuEeNGyjfGAEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/LOfFWZTcej8?si=kuG607RbLtHxHOL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/nnPqdLTRG-4?si=qNSU94OuXakSprFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/0yEYvycyf_E?si=XcU9WZosTkyVp5Wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/ZqgirfrHucg?si=3RhM3WK1Ns3anomj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/4HmeTuGkmUE?si=W9926bwlhUUIPgdZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/5oZwNXu6ZSM?si=1H0I4xzoL7Ixj60r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/ErqmyYvWp_o?si=eI7ido_aFBajFF5X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/pzooVk5fKG0?si=TzDYZ2c_obuCRNuu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/BKn9d4Myvj0?si=e_VXRV_2xR86VlTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/L1_0Pkey63k?si=taag70lcyuvSUPVr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="240" height="140" src="https://www.youtube.com/embed/hsjrBmEKJa8?si=spTdzjz49aeJFB9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>







                </div>
            </div>


            <div className='container'>
                <div className='border-1 border-r-2 border-green-600 mt-5 mb-5'>
                    <div className='px-3'>

                        <div className='border-b-2 border-green-400'>
                            <h1 className='text-black text-2xl pl-5 pt-5'>ESE 2017 Revised Pattern</h1><br></br>
                        </div>
                    </div>


                    <div className='flex justify-center flex-wrap space-x-2 gap-3 pt-3 px-3 pb-3'>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/TfzBUwfJyjY?si=v0MFGwixHGH5YzV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/UZjrYZKXITA?si=DyN-dJ82Jc2-pzRP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/jvu5QpowCvA?si=4rnzjn9vxQblUOWv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/VgyfkfSZ7I4?si=eg_ulwjoXuA064XV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/oKIpf31xP-Q?si=VCC4T0FAcyevwsWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/bjY3z7C1gxQ?si=khUvH-Y_ii0kcS3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/OPVaveXbErY?si=xCsegC1ckxn6XlrJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/N8jnjzYuIPU?si=l2p4le9lz7tDVska" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="240" height="130" src="https://www.youtube.com/embed/uHYxYrQBXKE?si=r23G91rRzaCsCZtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>

        </>
    );
}