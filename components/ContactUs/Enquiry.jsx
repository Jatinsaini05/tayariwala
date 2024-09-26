import { FaRegAddressCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaAt } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { useStoreSnackbar } from "../../store/snackbar";
import Link from "next/link";
export default function Enquiry({ enquiryDetail, pageText }) {
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [allCourses, setAllCourse] = useState([]);
  const [allStreams, setAllStreams] = useState([]);
  const initiateStream = useRef(true);
  const [streamLoading, setStreamLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    course: "",
    stream: "",
    message: "",
    enquiryType: "",
  });
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoader(true);
        let response = await fetch(
          `https://vijethaiasacademyvja.com/api/public/data/all-courses`
        );
        let data = await response.json();
        setAllCourse(data);
      } catch (err) {
        console.log("Failed to fetch Courses", err);
      } finally {
        setLoader(false);
      }
    };
    fetchCourses();
  }, []);

  const fetchStreams = async () => {
    try {
      setStreamLoading(true);
      let response = await fetch(
        `https://vijethaiasacademyvja.com/api/public/data/all-stream?status=true`
      );
      let data = await response.json();
      setAllStreams(data);
    } catch (err) {
      console.log("Failed to fetch Streams", err);
    } finally {
      setStreamLoading(false);
    }
  };

  if (formData.course && initiateStream.current) {
    fetchStreams();
    initiateStream.current = false;
  }

  // Automatically clear errors after 2 seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 2000); // 2 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [errors]);

  const enquiryTypes = [
    {
      title: "Admissions",
      value: "62a191feb79a6865ee9f7fe1",
    },
  ];

  const enquirySubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        client: "62a191fe75d2d93afa7e0ac3",
        firm: "62a19626a53ef466895a0b0c",
        center: "62a196414ed50566c7603b6e",
        session: "6427b3f7cee6f934cdbb215a",
        currentStatus: "Pending",
        firstName: formData.firstName,
        email: formData.email,
        mobile: formData.mobile,
        course: formData.course,
        stream: formData.stream,
        message: formData.message,
        enquiryType: formData.enquiryType,
        source: "Contact Page Enquiry",
      };

      try {
        setLoader(true);
        const response = await fetch(
          "https://vijethaiasacademyvja.com/api/enquiry/enquiry",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          useStoreSnackbar.getState().showSnackbar({
            description: "Network response was not ok",
            title: "Network Issue",
            color: "red",
          });
          return;
        }
        setFormData({
          firstName: "",
          email: "",
          mobile: "",
          course: "",
          stream: "",
          message: "",
          enquiryType: "",
        });

        if (response.ok) {
          useStoreSnackbar.getState().showSnackbar({
            description: "Enquiry submitted successfully",
            title: "Submitted",
            color: "green",
          });
          return;
        }
      } catch (error) {
        useStoreSnackbar.getState().showSnackbar({
          description: "Error in submitting enquiry:",
          title: error,
          color: "red",
        });
        return;
      } finally {
        setLoader(false);
      }
    }
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) {
      formErrors.firstName = "Full Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.Name)) {
      formErrors.firstName = "Full Name must only contain letters.";
    } else if (formData.firstName.length > 50) {
      formErrors.firstName = "Full Name cannot exceed 50 characters.";
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid.";
    }

    if (!formData.mobile) {
      formErrors.mobile = "Contact Number is required.";
    } else if (!/^\d+$/.test(formData.mobile)) {
      formErrors.mobile = "Contact Number must be numeric.";
    } else if (formData.mobile.length !== 10) {
      formErrors.mobile = "Mobile Number must be of 10 digits.";
    }

    if (!formData.course) {
      formErrors.course = "Please select a course.";
    }
    if (!formData.stream) {
      formErrors.stream = "Please select a stream.";
    }
    if (!formData.enquiryType) {
      formErrors.enquiryType = "Please select an enquiry type.";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[80px] h-[80px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }

  return (
    <section>
      {/* {JSON.stringify(pageText)} */}
      <div className="container mx-auto px-4 lg:px-16 py-4">
        <div className="heading text-center py-4">
          <h3 className="text-3xl font-bold text-[#0c4270]">
            {pageText?.contentBlock?.BASIC_INFORMATION?.heading}
          </h3>
        </div>
        <div className="border-b-2 w-[10%] border-[#104270]  mx-auto"></div>
        <div className="discription-sect text-center py-4">
          <p></p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 text-center text-white">
          <div className=" h-[242px] flex flex-col justify-center items-center py-4  bg-[#f7941d] group  rounded-[6px]">
            <div className="icon my-4">
              <span className="text-3xl font-bold ">
                <FaAt className="group-hover:text-red-700 group-hover:scale-[2] transition ease-in duration-300" />
              </span>
            </div>
            {enquiryDetail?.email[0] && (
              <div>
                <p className="text-lg font-medium ">
                  <Link href={`mailto:${enquiryDetail.email[0]}`}>
                    {enquiryDetail.email[0]}
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className=" h-[242px] flex flex-col justify-center gap-4 items-center py-4  bg-[#0c4270] group  rounded-[6px]">
            <div className="icon my-4">
              <span className="text-3xl font-bold ">
                <IoCall className="group-hover:text-red-700 group-hover:scale-[2] transition ease-in duration-300" />
              </span>
            </div>
            {enquiryDetail?.contactNumber?.length && (
              <div>
                {enquiryDetail.contactNumber.map((item, index) => (
                  <p key={index} className="text-lg font-medium ">
                    <Link href={`tel:${item}`}>{item}</Link>
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className=" h-[242px] flex flex-col gap-4 justify-center items-center py-4 bg-[#128807] group  rounded-[6px]">
            <div className="icon my-4">
              <span className="text-3xl font-bold">
                <FaRegAddressCard className="group-hover:text-red-700 group-hover:scale-[2] transition ease-in duration-300" />
              </span>
            </div>
            {enquiryDetail?.address && (
              <div>
                <p className="text-lg font-medium px-8">
                  {enquiryDetail.address}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="sec-3 py-4">
        <div className="container mx-auto px-4 sm:px-16">
          <div className="heading text-center py-4">
            <h3 className="text-3xl font-bold text-[#0c4270]">
              {pageText?.contentBlock?.CONTACT_FORM?.heading}
            </h3>
          </div>
          <div className="border-b-2 w-[10%] border-[#104270] mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {enquiryDetail?.gmCode && (
              <div className="map-sec">
                <span
                  dangerouslySetInnerHTML={{ __html: enquiryDetail.gmCode }}
                ></span>
              </div>
            )}

            <div className="enq">
              <form onSubmit={enquirySubmit}>
                <div className="inp mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Full Name*"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="inp mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="inp mb-4">
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Contact Number*"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && (
                    <p className="text-red-500">{errors.mobile}</p>
                  )}
                </div>

                <div className="inp mb-4">
                  <select
                    name="course"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    {allCourses?.length ? (
                      <>
                        <option value="">Select Course *</option>
                        {allCourses.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.valueAlias}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">course not available</option>
                    )}
                  </select>

                  {errors.course && (
                    <p className="text-red-500">{errors.course}</p>
                  )}
                </div>
                {/* {streamLoading  && (
                 <div>
                    Loading
                 </div>
                )} */}

                {/* <div className="inp mb-4">
                  <select
                    name="stream"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.stream}
                    onChange={handleChange}
                  >
                    {allStreams?.length ? (
                      <>
                        <option value="">Select Stream *</option>
                        {allStreams.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.valueAlias}
                          </option>
                        ))}
                      </>
                    ) : (
                        {
                            {streamLoading  ? (
                               
                                  <option value="">create Loader</option>
                               
                               ) :(
                                <option value="">Loading Stream ....</option>
                               )
                            }
                        }
                     
                    )}


                  </select>
                  {errors.stream && (
                    <p className="text-red-500">{errors.stream}</p>
                  )}
                </div> */}
                <div className="inp mb-4">
                  <select
                    name="stream"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.stream}
                    onChange={handleChange}
                  >
                    {allStreams?.length ? (
                      <>
                        <option value="">Select Stream *</option>
                        {allStreams.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.valueAlias}
                          </option>
                        ))}
                      </>
                    ) : streamLoading ? (
                      <option value="">Loading......</option>
                    ) : (
                      <option value="">Load Stream </option>
                    )}
                  </select>
                  {errors.stream && (
                    <p className="text-red-500">{errors.stream}</p>
                  )}
                </div>

                <div className="inp mb-4">
                  <select
                    name="enquiryType"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.enquiryType}
                    onChange={handleChange}
                  >
                    {enquiryTypes?.length ? (
                      <>
                        <option value="">Select Enquiry Types*</option>
                        {enquiryTypes.map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.title}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">Enquiry Types not available</option>
                    )}
                  </select>
                  {errors.enquiryType && (
                    <p className="text-red-500">{errors.enquiryType}</p>
                  )}
                </div>

                <div className="inp mb-4">
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    className="w-full py-2.5 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c4270] focus:ring-2 focus:ring-[#0c4270] box-border"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>

                <div className="btn">
                  <button className="px-8 rounded-[6px] pt-[6px] pb-[8px] bg-[black] text-[15px] text-white font-[650] transition-all duration-[0.3s] ease-[ease-in-out] hover:bg-[#2f4285]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
