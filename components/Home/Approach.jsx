import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Approach = ({ pageData, productData }) => {
    const [activeSection, setActiveSection] = useState("all");
    const [filteredData, setFilteredData] = useState(productData || []);
    const [course, setCourse] = useState([]); // Dynamic course list

    useEffect(() => {
        if (productData) {
            // Extract unique courses from productData
            const uniqueCourses = [
                ...new Map(
                    productData.map((item) => [
                        item.course.id,
                        {
                            id: item.course.id,
                            value: item.course.valueAlias,
                        },
                    ])
                ).values(),
            ];

            setCourse(uniqueCourses); // Set the course list
            setFilteredData(productData); // Initialize filtered data
        }
    }, [productData]);

    const handleCourseClick = (courseId) => {
        setActiveSection(courseId);
        const filtered = productData.filter((item) => item.course.id === courseId);
        setFilteredData(filtered);
    };

    return (
        <div className="bg-[#F5F7FA] md:pt-8 pt-5">
            <div className="container text-center lg:w-[50%]">
                <span className="text-sm text-customFC6200 uppercase">
                    {pageData?.subHeading}
                </span>
                <div className="my-4">
                    <h2 className="text-[#221638] sm:text-4xl text-2xl font-semibold">
                        {pageData?.heading}
                    </h2>
                </div>
                <span
                    className="text-[#606060]"
                    dangerouslySetInnerHTML={{ __html: pageData?.content }}
                ></span>
                <div className="flex font-semibold text-[16.5px] items-center justify-center mt-20 gap-5">

                    <button
                        className={`hover:text-customFC6200 hover:cursor-pointer ${activeSection === "all" ? "text-customFC6200" : ""
                            }`}
                        onClick={() => {
                            setActiveSection("all");
                            setFilteredData(productData); // Reset to all data
                        }}
                    >
                        All
                    </button>

                    {course.map((item) => (
                        <button
                            key={item.id}
                            className={`hover:text-customFC6200 hover:cursor-pointer ${activeSection === item.id ? "text-customFC6200" : ""
                                }`}
                            onClick={() => handleCourseClick(item.id)}
                        >
                            {item.value}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10 pb-16 sm:pb-32 md:bg-[url('https://i.filecdn.in/1mlearners/shape15-1733729085549.png')] bg-no-repeat">
                <div className="container">
                    <div className="flex justify-center flex-wrap gap-5">

                        {filteredData?.slice(0, 6).map((item) => (
                            <div className="bg-white group" key={item.id}>
                                <div className="bg-[#221638]">
                                    <Link href={`/${item?.uri}`}>
                                        <img
                                            src={item.thumb}
                                            alt="image"
                                            className="w-[350px] opacity-70 group-hover:opacity-100"
                                        ></img>
                                    </Link>
                                </div>
                                <div className="mt-6">
                                    <div className="flex text-[13px] justify-center gap-4 text-white">
                                        <span className="bg-customFC6200 px-1 py-1 rounded text-wrap">
                                            {item?.course?.valueAlias}
                                        </span>
                                        <span className="bg-customFC6200 px-1 py-1 rounded">
                                            {item?.stream?.valueAlias}
                                        </span>
                                    </div>
                                    <div className="text-center my-8 w-[350px]">
                                        <Link
                                            href={`/${item?.uri}`}
                                            className="text-[#221638] font-semibold"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.description,
                                                }}
                                            ></span>
                                        </Link>
                                        <span className="text-2xl line-through text-[#606060] mr-1 font-extrabold">
                                            ₹{item?.mrp}
                                        </span>
                                        <span className="text-xl text-customFC6200 font-extrabold">
                                            ₹{item?.cost}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;