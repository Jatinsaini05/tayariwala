import Link from 'next/link';
import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";

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
                        <div className='rounded-t mb-5 shadow-xl hover:shadow-2xl'>
                            <img
                                src={postData?.featureImg}
                                className='rounded-t w-full'
                                alt={postData?.title || 'Blog post image'}
                            />
                            <div className='p-[25px] bg-white'>
                                <div className='mt-[18px] font-[500] text-[#606060] mb-4 flex items-center sm:gap-4 gap-2'>
                                    <div className='flex items-center sm:gap-4 gap-2'>
                                        <TbUsers />
                                        <span className='text-[15px]'>Master Learners</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <CiCalendar className='text-[20px] mr-[10px]' />
                                        <span className='text-[15px]'>{formatDate(postData?.publishedAt)}</span>
                                    </div>
                                </div>
                                
                              <div className='break-words'>
                                {postData?.tags?.length > 0 && (
                                    postData?.tags?.map((tag, index) => (
                                        <span key={index}>
                                            <span className='font-medium'>#</span>
                                            <span className='pr-2'>{tag}</span>
                                        </span>
                                    ))
                                )}
                                </div>

                                <h2 className='mb-3 mt-3 text-[#221638] text-2xl block font-semibold'>{postData?.title}</h2>
                                <div className='text-ellipsis desci text-[16px] text-[#212529] overflow-x-auto'>
                                    <span dangerouslySetInnerHTML={{ __html: postData?.description }}></span>
                                </div>
                            </div>
                        </div>
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
                                    {pageData?.advanceData?.data?.map((item) => (
                                        <div key={item?.uri} className='mb-[15px] bg-white pb-[15px] border-b'>
                                            <div>
                                                <div className='flex gap-5'>
                                                    <div>
                                                        <Link href={`/blog/${item?.uri}`}>
                                                            <span
                                                                className='w-[80px] h-[80px] bg-center bg-cover block'
                                                                style={{ backgroundImage: `url(${item?.featureImg})` }}
                                                                alt={item?.title || 'Recent post image'}
                                                            ></span>
                                                        </Link>
                                                    </div>
                                                    <div className='overflow-hidden'>
                                                        <span className='mt-[5px] mb-[3px] text-[#747474] block'>
                                                            {formatDate(item?.publishedAt)}
                                                        </span>
                                                        <Link href={`/blog/${item?.uri}`} className='font-semibold text-[#212529]'>
                                                            {item?.title}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Categories Section */}
                        <div className='xl:pl-[15px]'>
                            <div className='px-[25px] bg-white py-[30px] shadow-xl'>
                                <div className='relative mb-[25px]'>
                                    <h2 className='text-[22px] font-semibold pl-[10px] border-l-3 border-dashed border-[#dfdfdf]'>Categories</h2>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] top-0'></div>
                                    <div className='bg-customFC6200 absolute h-[7px] w-[3px] bottom-0'></div>
                                </div>
                                <div>
                                    <ul className='list-disc list-inside text-[#221638] text-[14px]'>
                                        {pageData?.advanceData?.categoriesData?.map((item) => (
                                            <li key={item?.slug} className='relative mb-3'>
                                                <Link href={`/blog/category/${item?.slug}`} className='hover:text-customFC6200'>
                                                    {item?.title}
                                                </Link>
                                                <div className='bg-customFC6200 w-2 h-2 rounded-full absolute left-[-2px] top-2'></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
