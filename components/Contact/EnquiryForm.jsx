import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EnquiryForm = () => {
    // State for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:' ',
        email: '',
        mobile: '',
        enquiryType: '',
        message: '',
        source: 'Contact-Us',
        currentStatus: 'Interested',
        course: '',
        stream: '',
        // acceptTerms: false,
    });

    // State for form validation errors
    const [errors, setErrors] = useState({});

    // Handle form field change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Form validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        else if (!phoneRegex.test(formData.mobile)) newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
        if (!formData.course) newErrors.course = 'Course is required';
        if (!formData.stream) newErrors.stream = 'Stream is required';
        if (!formData.enquiryType) newErrors.type = 'Type is required';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and privacy policy';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // console.log("Submitting form with data:", formData);
                const response = await fetch("https://ihub.masterlearners.in/api/enquiry/enquiry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const data = await response.json();
                    // console.log("Form submitted successfully:", data);
                    alert("Thank you! Your enquiry has been submitted.");
                    
                    // Reset form
                    setFormData({
                        firstName: '',
                        email: '',
                        mobile: '',
                        course: '',
                        stream: '',
                        enquiryType: '',
                        message: '',
                        acceptTerms: false,
                    });
                    setErrors({});
                } else {
                    // console.error("Error submitting the form:", response.statusText);
                    alert("There was an error submitting your enquiry. Please try again.");
                    
                }
            } catch (error) {
                // console.error("Error submitting the form:", error);
                alert("Something went wrong. Please try again later.");
            }
        }
    };
    const [streams, setStreams] = useState(null);
    const [courses, setCourses] = useState(null);
    const [enqtype, setEnqtype] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true); // Start loading

            // Fetch all APIs in parallel
            const [response1, response2, response3] = await Promise.all([
                fetch('https://ihub.masterlearners.in/api/public/data/streams'),
                fetch('https://ihub.masterlearners.in/api/public/data/courses'),
                fetch('https://ihub.masterlearners.in/api/enquiry/enquirytype'),
            ]);

            // Convert responses to JSON
            const [streams, courses, enqtype] = await Promise.all([
                response1.json(),
                response2.json(),
                response3.json(),
            ]);

            // Store the data in state
            setStreams(streams);
            setCourses(courses);
            setEnqtype(enqtype);
        } catch (err) {
            // console.error('Error fetching APIs:', err);
            setError('Failed to fetch data');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Fetch data when the component loads
    useEffect(() => {
        fetchData();
    }, []);

    // Conditional rendering for loading or error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div style={{ backgroundImage: "url('/images/register-shape.jpg')" }} className='p-[35px] rounded'>
                <h2 className='text-white font-semibold text-[33px]'>Ready to get Started?</h2>
                <p className='text-white mt-[10px]'>Get the best way to help you reach your goals</p>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
                        placeholder="Your name"
                    />
                    {errors.name && <p className="text-[#ff0000]">{errors.name}</p>}

                    {/* Email Field */}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
                        placeholder="Your email address"
                    />
                    {errors.email && <p className="text-[#ff0000]">{errors.email}</p>}

                    {/* Mobile Field */}
                    <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
                        placeholder="Your mobile no."
                    />
                    {errors.mobile && <p className="text-[#ff0000]">{errors.mobile}</p>}

                    {/* Course Selection */}
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
                    >
                        <option value="" disabled>Select Course</option>
                        {courses?.map((item, index) => (
                        <option key={index} value={item?.id}>{item?.valueAlias}</option>
                    ))}
                    </select>
                    {errors.course && <p className="text-[#ff0000]">{errors.course}</p>}

                    {/* Stream Selection */}
                    <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                        className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
                    >
                        <option value="" disabled>Select Stream</option>
                        {streams?.map((item, index) => (
                            <option key={index} value={item?.id}>
                                {item.valueAlias}
                            </option>
                        ))}
                    </select>
                    {errors.stream && <p className="text-[#ff0000]">{errors.stream}</p>}

                    {/* Type Selection */}
                    <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
                    >
                        <option value="" disabled>Select Type</option>
                        {enqtype?.map((item, index) => (
                            <option value={item?.id}>{item?.title}</option>
                        ))}
                    </select>
                    {errors.type && <p className="text-[#ff0000]">{errors.type}</p>}

                    {/* Message Field */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='h-[135px] w-full mt-8 rounded bg-[#9d4204] pt-3 pl-3 text-white placeholder:text-white focus:outline-none focus:ring-0'
                        placeholder='Write your message..'
                    />
                    {errors.message && <p className="text-[#ff0000]">{errors.message}</p>}

                    {/* Terms Checkbox */}
                    <div className='mt-6'>
                        <label className='flex items-center gap-1 w-max'>
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                            />
                            <span className='text-white'>
                                Accept <Link href="#" className='underline'>Terms</Link> And <Link href="#" className='underline'>Privacy Policy.</Link>
                            </span>
                        </label>
                        {errors.acceptTerms && <p className="text-[#ff0000]">{errors.acceptTerms}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className='relative mt-8 bg-[#221638] flex w-max items-center py-[14px] px-8 rounded-md text-white text-base overflow-hidden group hover:text-customFC6200'
                    >
                        <span className="relative z-10 flex items-center">Submit</span>
                        <span className="absolute inset-0 bg-white transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;