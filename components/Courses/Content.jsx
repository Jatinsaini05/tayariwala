import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';
import { getProductData } from '../../service/apiFetch';  // Importing the function for API call

const Content = ({ courseData }) => {
    const [currentId, setCurrentId] = useState(null);
    const [categoryId, setCategoryId] = useState('5cf0cfc4e6636f4d815ccb0a');
    const [secondApiData, setSecondApiData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        if (courseData?.length > 0) {
            setCurrentId(courseData[0]._id); // Set the default course ID
            setSelectedOption(courseData[0].valueAlias); // Set the default selected option
        }
    }, [courseData]);

    const categoryMapping = {
        liveClasses: '5cf0cfc4e6636f4d815ccb0a',
        testSeries: '5b47f7ef1e899567332d1d0a',
        postalPackage: '5b47f7ef1e899567332d1d0c',
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    const getCategoryName = () => {
        switch (categoryId) {
            case categoryMapping.liveClasses: return "Live Classes";
            case categoryMapping.testSeries: return "Test Series";
            case categoryMapping.postalPackage: return "Postal Packages";
            default: return "Courses";
        }
    };

    useEffect(() => {
        if (courseData?.length > 0) setCurrentId(courseData[0]._id);
    }, [courseData]);

    // Replacing the direct API call with getProductData for both API calls
    useEffect(() => {
        const fetchData = async () => {
            try {
                // First API Call - Fetch data using getProductData
                const courseData = await getProductData({ course: currentId, category: categoryId, populate: 'stream' });
                setSecondApiData(courseData || []);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };
        fetchData();
    }, [currentId, categoryId]);

    const handleSelect = (option) => {
        const selectedCourse = courseData.find(course => course.valueAlias === option);
        if (selectedCourse) setCurrentId(selectedCourse._id);
    };

    const handleCategorySelect = (category) => setCategoryId(categoryMapping[category]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Updated handleSearch function to use getProductData for search functionality
    const handleSearch = async (e) => {
        const searchQuery = e.target.value;
        setSearchTerm(searchQuery);

        try {
            // Fetch data again using getProductData with search term
            const filteredData = await getProductData({
                course: currentId,
                category: categoryId,
                populate: 'stream',
                title: searchQuery, // Adding search term to the API call
            });
            setSecondApiData(filteredData || []);
        } catch (error) {
            console.error("Error searching courses:", error);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = secondApiData?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((secondApiData?.length || 0) / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="container pt-[100px]">
            <div className='flex sm:flex-row flex-col gap-3 justify-between sm:items-center text-center sm:text-start mb-10'>
                <p className='text-[#606060]'>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, secondApiData?.length)} of {secondApiData?.length} results</p>
                <div className="sm:w-64 w-full relative">
                    <div
                        className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md text-[#212529] shadow-sm sm:text-sm cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        {selectedOption}
                    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <RiArrowDropDownLine className={`text-gray-600 transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isOpen && (
                        <div className="absolute z-10 bg-white w-full mt-1 border border-gray-300 rounded-md text-sm text-[#212529] overflow-hidden">
                            {courseData.map((course, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                        setSelectedOption(course?.valueAlias);
                                        handleSelect(course?.valueAlias);
                                        setIsOpen(false);
                                    }}
                                >
                                    {course?.valueAlias}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="bg-[#eef5f9] relative p-2 rounded-l-full rounded-r-full sm:w-max w-full">
                    <input
                        type="text"
                        placeholder="Search our courses"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="px-2 py-1 pl-10 border-none outline-none bg-transparent text-[#221638] text-[15px] placeholder:text-[#606060]"
                    />
                    <FiSearch className='absolute top-[15px] text-[#ababab] left-5 text-base' />
                </div>
            </div>
            <div className="my-6 flex gap-4 mb-4">
                <button
                    onClick={() => handleCategorySelect('liveClasses')}
                    className={`sm:p-5 px-4 py-5 shadow-lg rounded-[4px] w-full 
                    ${categoryId === categoryMapping.liveClasses ? 'bg-customFC6200 text-white' : 'bg-white'}`}
                >
                    Live Classes
                </button>
                <button
                    onClick={() => handleCategorySelect('testSeries')}
                    className={`sm:p-5 px-4 py-5 shadow-lg rounded-[4px] w-full 
                    ${categoryId === categoryMapping.testSeries ? 'bg-customFC6200 text-white' : 'bg-white'}`}
                >
                    Test Series
                </button>
                <button
                    onClick={() => handleCategorySelect('postalPackage')}
                    className={`sm:p-5 px-4 py-5 shadow-lg rounded-[4px] w-full 
                    ${categoryId === categoryMapping.postalPackage ? 'bg-customFC6200 text-white' : 'bg-white'}`}
                >
                    Postal Packages
                </button>
            </div>

            <div className='mb-16'>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-1'>
                    {currentItems?.length > 0 ? (
                        currentItems.map((item, index) => (
                            <div key={index} className='border rounded px-3 pt-3 py-6 w-fit'>
                                <div className='bg-white md:max-w-[380px] rounded overflow-hidden shadow-xl'>
                                    <div className="relative">
                                        <Link href={item?.uri}>
                                            <img src={item?.thumb} alt="image" className="md:w-[380px]" />
                                        </Link>
                                        <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                                            <span className='line-through text-[13px] font-semibold'>₹ {item?.mrp}</span>
                                            <span className='text-white text-xl font-semibold ml-1'>₹ {item?.cost}</span>
                                        </span>
                                    </div>
                                    <div className='p-8'>
                                        <p className='text-[#212529] mb-4'>{item?.stream?.valueAlias}</p>
                                        <p className='text-[#221638] md:text-[24px] text-[20px] font-semibold hover:text-customFC6200'>
                                            <Link href={item?.uri}>{item?.title}</Link>
                                        </p>
                                        <p className='text-[#606060] pt-5 md:text-base text-sm leading-6'>
                                            <span dangerouslySetInnerHTML={{ __html: item?.fullDescription }}></span>
                                        </p>
                                        <div className='py-8 flex justify-between text-[#007bff]'>
                                            <p>Start Date : {formatDate(item?.startDate)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='border col text-center md:col-span-2 xl:col-span-3 py-5 w-full shadow-lg'>
                            <h5 className='text-[#221638] text-xl'>
                                There are no {getCategoryName()} found..
                            </h5>
                        </div>
                    )}

                </div>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mb-24">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`mx-1 px-3 py-1 font-semibold rounded ${currentPage === index + 1 ? 'bg-customFC6200 text-white' : 'bg-white text-black'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Content;
