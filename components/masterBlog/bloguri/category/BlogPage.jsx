import Link from 'next/link'
import React, { useEffect } from 'react'
import { CiCalendar } from "react-icons/ci";

const BlogPage = ({ postData, pageData }) => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    return (
        <div>
            <div className='container py-10 sm:py-[100px]'>
                <div className='xl:grid xl:grid-cols-12'>
                    <div className='xl:col-span-8 col-span-12 xl:px-[15px]'>
                        {postData?.map((item, index) => (
                            <div key={index} className='rounded-t mb-5 shadow-xl hover:shadow-2xl'>
                                <img src={item?.featureImg} className='rounded-t w-full' alt="image" />
                                <div className='p-[25px] bg-white break-words'>
                                    {item?.tags?.length > 0 && (
                                        item?.tags?.map((tag, index) => (
                                            <span key={index}>
                                                <span className='font-medium'>#</span>
                                                <span className='pr-2'>{tag}</span>
                                            </span>
                                        ))
                                    )}

                                    <h2 className='mb-3 mt-3 text-[#221638] text-2xl block font-semibold'>{item?.title}
                                    </h2>
                                    <div className='text-ellipsis desci text-[16px] text-[#212529] overflow-x-auto'>
                                        <span dangerouslySetInnerHTML={{ __html: item?.description }}></span>
                                    </div>
                                    <div className='mt-[18px] flex items-center sm:gap-4 gap-2'>
                                        <div className='flex items-center'>
                                            <img src={"https://i.filecdn.in/1mlearners/user-1732266672215.png"} className='w-[35px] rounded-full mr-[10px]' />
                                            <span className='text-[15px] text-[#606060]'>Master Learners</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <CiCalendar className='text-customFC6200 text-[20px] mr-[10px]' />
                                            <Link href={`/blog/${item?.uri}`} className='text-[#221638] hover:text-customFC6200 text-[15px]'>{formatDate(item?.publishedAt)}</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='xl:col-span-4 col-span-12 xl:px-[15px]'>
                        <div className='xl:pl-[15px] mb-10'>

                            <div className='px-[25px] bg-white py-[30px] shadow-xl'>
                                <div className='relative mb-[25px]'>
                                    <h2 className='text-[22px] font-semibold pl-[10px] border-l-3 border-dashed border-[#dfdfdf]'>Recent Posts</h2>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] top-0'></div>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] bottom-0'></div>
                                </div>
                                <div>
                                    {pageData?.advanceData?.data?.map((item, index) => (
                                        <div key={index} className='mb-[15px] bg-white pb-[15px] border-b'>
                                            <div>
                                                <div className='flex gap-5'>
                                                    <div>
                                                        <Link href={`/blog/${item?.uri}`} className=''>
                                                            <span className='w-[80px] h-[80px] bg-center bg-cover block' style={{ backgroundImage: `url(${item?.featureImg})` }}
                                                            ></span>
                                                        </Link>
                                                    </div>
                                                    <div className='overflow-hidden'><span className='mt-[5px] mb-[3px] text-[#747474] block'>{formatDate(item?.publishedAt)}</span>
                                                        <Link href={`/blog/${item?.uri}`} className='font-semibold text-[#212529]'>{item?.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className='xl:pl-[15px]'>

                            <div className='px-[25px] bg-white py-[30px] shadow-xl'>
                                <div className='relative mb-[25px]'>
                                    <h2 className='text-[22px] font-semibold pl-[10px] border-l-3 border-dashed border-[#dfdfdf]'>Categories</h2>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] top-0'></div>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] bottom-0'></div>
                                </div>
                                <div>

                                    <ul className='list-disc list-inside text-[#221638] text-[14px]'>
                                        {pageData?.advanceData?.categoriesData?.map((item, index) =>
                                            <li key={index} className='relative mb-3'><Link href={`/blog/category/${item?.slug}`} className='hover:text-customFC6200'>{item?.title}</Link>
                                                <div className='bg-customFC6200 w-2 h-2 rounded-full absolute left-[-2px] top-2'></div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage