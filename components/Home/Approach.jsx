import React, { useState } from 'react'
import Link from 'next/link';

const Approach = ({ pageData }) => {
    const [activeSection, setActiveSection] = useState("all");
    const edu = pageData?.advanceData?.categoryIds || []
    return (
        <div className='bg-[#F5F7FA]  md:pt-8 pt-5'>
            {/* {JSON.stringify(pageData )} */}
            <div className='container text-center lg:w-[50%]'>
                <span className='text-sm text-customFC6200 uppercase'>{pageData?.subHeading}</span>
                <div className='my-4'>

                    <h2 className='text-[#221638] sm:text-4xl text-2xl font-semibold'>
                        {pageData?.heading}
                    </h2>
                </div>
                <span className='text-[#606060]'
                    dangerouslySetInnerHTML={{ __html: pageData?.content }}>
                </span>
                <div className='flex font-semibold text-[16.5px] items-center justify-center mt-20 gap-5'>
                    <button className={`hover:text-customFC6200 hover:cursor-pointer ${activeSection === "all" ? "text-customFC6200 " : ""}`}
                        onClick={() => setActiveSection("all")}
                    >All</button>
                    {edu.map((item, index) => (
                        <button
                            key={item.id}
                            className={`hover:text-customFC6200 hover:cursor-pointer ${activeSection === item ? "text-customFC6200" : ""
                                }`}
                            onClick={() => setActiveSection(item)}
                        >
                            {item.eduStandard?.name}
                        </button>
                    ))}


                </div>
            </div>
            <div className='mt-10 pb-16 sm:pb-32 md:bg-[url("/images/shape15.png")] bg-no-repeat'>
                <div className='container'>
                    {activeSection === "all" && (
                        <div className='flex justify-center flex-wrap gap-5'>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                    {activeSection === 1 && (
                        <div className='flex justify-center flex-wrap gap-5'>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === 2 && (
                        <div className='flex justify-center flex-wrap gap-5'>
                            <div className='bg-white w-max card'>
                                <div className='bg-[#221638]'>
                                    <img src="/images/cardbg.jpg" alt="image" className="w-[350px] opacity-70 hover:opacity-100"></img>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex text-[13px] justify-center gap-4 text-white'>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            SSC JE
                                        </span>
                                        <span className='bg-customFC6200 px-1 py-1 rounded'>
                                            Civil Engineering
                                        </span>
                                    </div>
                                    <div className='text-center my-8'>
                                        <Link href="#" className='text-[#221638] font-semibold'><p>Regular Classroom Program</p></Link>
                                        <span className='text-2xl line-through text-[#606060] font-extrabold'>₹ 35400</span>
                                        <span className='text-xl text-customFC6200 font-extrabold'>₹ 30000</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Approach
