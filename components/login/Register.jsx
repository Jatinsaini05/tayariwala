// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { useStoreSnackbar } from "../../store/snackbar";
import Link from "next/link";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon
import { Input } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";

export default function Register({ changeScreen }) {
  // const toast = useRef(null);
  const initialValue = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    course: "",
    stream: "",
    dob: null,
    gender: "",
    session: "6427b3f7cee6f934cdbb215a",
    personalImg: null,
    address: {
      city: "",
      state:"",
    },
  };

  const [regisData, setRegisData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [errorOtp, setFormErrorsOtp] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpId, setOtpId] = useState("");
  const otpRefs = useRef([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [token, setTokens] = useState(new Array(4).fill(""));
  const [allCourses, setAllCourse] = useState([]);
  const [allStreams, setAllStreams] = useState([]);
  const initiateStream = useRef(true);
  const [streamLoading, setStreamLoading] = useState(false);
  const myOtp = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "state") {
      setRegisData({
        ...regisData,
        address: {
          ...regisData.address,
          [name]: value,
        },
      });
    } else {
      setRegisData({
        ...regisData,
        [name]: value,
      });
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setRegisData({
      ...regisData,
      personalImg: file,
    });
  };
  const isFile = (value) => {
    return value && typeof value === "object" && value instanceof File;
  };

  async function getFileUploadUrl(obj) {
    return new Promise(async (resolve, reject) => {
      let newObj = {};
      for (const key in obj) {
        if (isFile(obj[key])) {
          const fd = new FormData();
          fd.append("ekFile", obj[key], obj[key].name);
          console.log(1, fd);
          try {
            const myData = await fetch(
              "https://ihub.masterlearners.in/api/public/file/upload",
              {
                method: "POST",
                body: fd,
              }
            );
            const result = await myData.json();
            if (result) {
              newObj[key] = result.url;
            }
          } catch (error) {
            console.log(error);
            reject(error);
          }
        } else {
          newObj[key] = obj[key];
        }
      }
      resolve(newObj);
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      try {
        const uploadedData = await getFileUploadUrl(regisData);
        console.log("Form Data with Uploaded File URL:", uploadedData);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let response = await fetch(
          `https://ihub.masterlearners.in/api/public/data/all-courses`
        );
        let data = await response.json();
        setAllCourse(data);
      } catch (err) {
        console.log("Failed to fetch Courses", err);
      }
    };
    fetchCourses();
  }, []);

  const fetchStreams = async () => {
    try {
      setStreamLoading(true);
      let response = await fetch(
        `https://ihub.masterlearners.in/api/public/data/all-stream?status=true`
      );
      let data = await response.json();
      setAllStreams(data);
    } catch (err) {
      console.log("Failed to fetch Streams", err);
    } finally {
      setStreamLoading(false);
    }
  };
  if (regisData.course && initiateStream.current) {
    fetchStreams();
    initiateStream.current = false;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length > 0) {
      const timer = setTimeout(() => {
        setFormErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (Object.keys(errorOtp).length > 0) {
      const timer = setTimeout(() => {
        setFormErrorsOtp({});
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [formErrors, errorOtp]);

  async function getOtpRegis() {
    if (validate()) {
      try {
        setLoading(true);
        let data = { mobile: regisData.mobile };
        const response = await fetch(
          "https://ihub.masterlearners.in/api/public/user/signup-with-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        if (response.ok) {
          setOtpId(result.id);
          setPage(2);
          generatePassword();
          console.log(result);
          useStoreSnackbar.getState().showSnackbar({
            description: "Successfully send register",
            title: "Sent OTP",
            color: "green",
          });
        } else {
          useStoreSnackbar.getState().showSnackbar({
            description: "Error in submitting",
            title: "Error",
            color: "red",
          });
        }
      } catch (error) {
        useStoreSnackbar.getState().showSnackbar({
          description: "Error in Register",
          title: "Error",
          color: "red",
        });
      } finally {
        setLoading(false);
      }
    }
  }
  async function Submit() {
    if (validateOtp()) {
      let dataOtp = {
        id: otpId,
        otp: myOtp.current,
        password: regisData.password,
        username: regisData.mobile,
      };
      dataOtp.student = await getFileUploadUrl(regisData);
      try {
        setLoading(true);
        const res = await fetch(
          "https://ihub.masterlearners.in/api/public/user/register-student-with-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataOtp),
          }
        );
        const studentWithOtp = await res.json();
        if (res.ok) {
          useStoreSnackbar.getState().showSnackbar({
            description: " You have registered successfully",
            title: "Successfully Registered",
            color: "green",
          });
          setPage(3);
        } else {
          useStoreSnackbar.getState().showSnackbar({
            description: "Wrong or Invalid Otp",
            title: "Error",
            color: "red",
          });
        }
      } catch (error) {
        useStoreSnackbar.getState().showSnackbar({
          description: "Error in Submitting",
          title: error,
          color: "red",
        });
      } finally {
        setLoading(false);
      }
    }
  }
  async function backStep() {
    setPage((prevPage) => prevPage - 1);
  }
  async function generatePassword() {
    const length = 6;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    return generatedPassword;
  }

  const validate = () => {
    const errors = {};
    if (!regisData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(regisData.email)) {
      errors.email = "Email is not valid.";
    }

    if (!regisData.firstName) {
      errors.firstName = "First Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(regisData.firstName)) {
      errors.firstName = "Name must only contain letters.";
    } else if (regisData.firstName.length > 20) {
      errors.firstName = "First Name cannot exceed 20 characters.";
    }

    if (!regisData.lastName) {
      errors.lastName = "Last Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(regisData.lastName)) {
      errors.lastName = "Name must only contain letters.";
    } else if (regisData.lastName.length > 20) {
      errors.lastName = "Last Name cannot exceed 20 characters.";
    }

    if (!regisData.mobile) {
      errors.mobile = "Mobile Number is required.";
    } else if (!/^\d+$/.test(regisData.mobile)) {
      errors.mobile = "Mobile Number must be numeric.";
    } else if (regisData.mobile.length !== 10) {
      errors.mobile = "Mobile Number must be of 10 digits.";
    }

    if (!regisData.dob) {
      errors.dob = "Date of birth is required";
    }
    if (!regisData.gender) {
      errors.gender = "Gender is required";
    }
    if (!regisData.personalImg) {
      errors.personalImg = "Image is required";
    }

    if (!regisData?.address?.city) {
      errors.city = "City is required";
    }
    if (!regisData?.address?.state) {
      errors.state = "State is required";
    }
    if (!regisData.course) {
      errors.course = "Please select a course.";
    }
    if (!regisData.stream) {
      errors.stream = "Please select a stream.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateOtp = () => {
    const errors = {};
    if (!myOtp?.current) {
      errors.myOtp = "Otp is required";
    } else if (!/^\d+$/.test(myOtp?.current)) {
      errors.myOtp = "Otp must be numeric.";
    } else if (myOtp?.current?.length != 4) {
      errors.myOtp = "Otp must be of 4 digits.";
    }
    setFormErrorsOtp(errors);
    return Object.keys(errors).length === 0;
  };

  const handleTokenChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      let newToken = [...token];
      newToken[index] = value;
      setTokens(newToken);
    }
  };

  if (token?.length) {
    myOtp.current = token.join("");
  }
  return (
    <section id="register">
      <div className="container">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
              {loading ? (
                <div className="flex justify-center items-center min-h-[10rem]">
                  <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit}>
                    {page === 1 ? (
                      <div className="rounded-[8px]  shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
                        <div className="rounded-t-[8px] text-[18px] sm:text-[23px] gap-[8px] flex items-center py-3 px-3 justify-center bg-[#071e63] text-white mb-5">
                          <FaUser />
                          <h3>Personal Details</h3>
                        </div>

                        <div className="px-[10px] sm:px-4">
                          <div>
                            <div>
                              <label
                                htmlFor="firstName"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                First Name{" "}
                                <p className="p-0 m-0 text-red-500">*</p>
                              </label>
                              <input
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.firstName}
                                onChange={handleChange}
                              />
                              {formErrors?.firstName && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.firstName}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="lastName"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Last Name{" "}
                                <p className="p-0 m-0 text-red-500">*</p>
                              </label>
                              <input
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.lastName}
                                onChange={handleChange}
                              />

                              {formErrors?.lastName && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.lastName}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="mobile"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Mobile Number{" "}
                                <p className="p-0 m-0 text-red-500">*</p>
                              </label>
                              <input
                                name="mobile"
                                type="number"
                                placeholder="Mobile Number"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.mobile}
                                onChange={handleChange}
                                keyfilter="num"
                              />
                              {formErrors?.mobile && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.mobile}
                                </p>
                              )}
                            </div>
                            <div className="mt-[10px]">
                              <label
                                htmlFor="email"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Email <p className="p-0 m-0 text-red-500">*</p>{" "}
                              </label>
                              <input
                                name="email"
                                type="text"
                                placeholder="Email"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.email}
                                onChange={handleChange}
                                keyfilter="email"
                              />
                              {formErrors?.email && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.email}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="course"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Select Course{" "}
                                <p className="p-0 m-0 text-red-500">*</p>{" "}
                              </label>
                              <select
                                name="course"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.course}
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

                              {formErrors.course && (
                                <p className="text-red-500">
                                  {formErrors.course}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="stream"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Select Stream{" "}
                                <p className="p-0 m-0 text-red-500">*</p>{" "}
                              </label>
                              <select
                                name="stream"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.stream}
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
                              {formErrors.stream && (
                                <p className="text-red-500">
                                  {formErrors.stream}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="email"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Gender <p className="p-0 m-0 text-red-500">*</p>{" "}
                              </label>
                              <select
                                name="gender"
                                value={regisData.gender} // Binding the value to regisData.gender
                                onChange={(e) =>
                                  handleChange({
                                    target: {
                                      name: e.target.name,
                                      value: e.target.value,
                                    },
                                  })
                                }
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                              >
                                <option value="">Select Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                              </select>
                              {formErrors?.gender && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.gender}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="dob"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                DOB <p className="p-0 m-0 text-red-500">*</p>
                              </label>
                              <DatePicker
                                selected={regisData.dob}
                                onChange={(date) =>
                                  handleChange({
                                    target: { name: "dob", value: date },
                                  })
                                }
                                customInput={
                                  <div
                                    className="custom-date-input"
                                    style={{ position: "relative" }}
                                  >
                                    <Input
                                      name="dob"
                                      className="dob"
                                      fullWidth
                                      placeholder="Select your date of birth"
                                      value={
                                        regisData.dob
                                          ? regisData.dob.toLocaleDateString(
                                              "en-GB"
                                            )
                                          : ""
                                      }
                                    />
                                    <FaCalendarAlt
                                      style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        document.querySelector(".dob").focus()
                                      }
                                    />
                                  </div>
                                }
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                showMonthDropdown
                                dropdownMode="select"
                              />
                              {formErrors?.dob && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.dob}
                                </p>
                              )}
                            </div>
                            <div className="mt-[10px]">
                              <label
                                htmlFor="state"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                State <p className="p-0 m-0 text-red-500">*</p>
                              </label>

                              <input
                                name="state"
                                type="text"
                                placeholder="Enter State"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.address.state}
                                onChange={handleChange}
                              />

                              {formErrors?.state && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.state}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="city"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                City <p className="p-0 m-0 text-red-500">*</p>
                              </label>

                              <input
                                name="city"
                                type="text"
                                placeholder="Enter City"
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                                value={regisData.address.city}
                                onChange={handleChange}
                              />

                              {formErrors?.city && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.city}
                                </p>
                              )}
                            </div>

                            <div className="mt-[10px]">
                              <label
                                htmlFor="personalImg"
                                className="text-[15px] font-bold flex gap-[2px]"
                              >
                                Upload Pic
                                <p className="p-0 m-0 text-red-500">*</p>
                              </label>
                              <input
                                type="file"
                                onChange={handleFileInput}
                                className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                              />
                              {formErrors?.personalImg && (
                                <p className="text-[red] text-[15px]">
                                  {formErrors.personalImg}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="mb-[10px]">
                            <button
                              className="block mx-auto text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                              onClick={getOtpRegis}
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>

                          <div className="flex justify-end items-center gap-2 ">
                            Already Registered ?
                            <button
                              type="button"
                              onClick={() => changeScreen("LOGIN")}
                              className="text-white bg-[#071e63] text-[14px] rounded-[6px] cursor-pointer px-6 pt-[2px] pb-[4px]"
                            >
                              Log In
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : page === 2 ? (
                      <div className="rounded-[8px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
                        <div className="rounded-t-[8px] text-[18px] sm:text-[23px] gap-[8px] flex items-center py-3 px-3 justify-center bg-[#071e63] text-white mb-5">
                          <FaLock />
                          <h3>Enter OTP</h3>
                        </div>
                        <div className="px-[10px] sm:px-4 ">
                          <div>
                            <div className="otpCard flex gap-[10px] justify-center">
                              {token.map((value, index) => (
                                <div key={index} className="w-[60px]">
                                  <Input
                                    className="border-1 border-[lightgray] border-solid rounded-[10px] bg-transparent outline-none"
                                    value={value}
                                    onChange={(e) =>
                                      handleTokenChange(e, index)
                                    }
                                    maxLength={1}
                                    clearable
                                    aria-label={`OTP Digit ${index + 1}`}
                                    ref={(input) =>
                                      (otpRefs.current[index] = input)
                                    }
                                    onKeyUp={(e) => {
                                      if (
                                        e.target.value.length === 1 &&
                                        index < token.length - 1
                                      ) {
                                        otpRefs.current[index + 1]?.focus(); // Move to next input box
                                      } else if (
                                        e.key === "Backspace" &&
                                        index > 0
                                      ) {
                                        otpRefs.current[index - 1]?.focus(); // Move to previous input on backspace
                                      }
                                    }}
                                  />
                                </div>
                              ))}
                            </div>

                            {errorOtp?.myOtp && (
                              <p className="text-[red] mt-[4px] text-[15px] text-center">
                                {errorOtp.myOtp}
                              </p>
                            )}
                          </div>

                          <div className="my-3 pb-[1rem] flex justify-between gap-[1rem]">
                            <div>
                              <button
                                onClick={Submit}
                                type="submit"
                                className="text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                              >
                                Submit
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={backStep}
                                type="submit"
                                className="text-white bg-[#071e63]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : page === 3 ? (
                      <div className="rounded-[8px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
                        <div className="rounded-t-[8px] text-[18px] sm:text-[23px] gap-[8px] flex items-center py-3 px-3 justify-center bg-[#071e63] text-white mb-5">
                          <h3>Registered Successfully</h3>
                        </div>
                        <div className="px-[10px] sm:px-4">
                          <p>
                            Registration was successful! Login details have been
                            sent to your registered mobile number.
                          </p>
                          <div className="mt-3  pb-[1rem]">
                            <button
                              type="button"
                              className="text-white bg-[#071e63]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                              onClick={() => changeScreen("LOGIN")}
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="px-4">
                        <p>Page Not Found</p>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="grid col-12 flex linear  border-round-md sm:px-5 py-5 gap-0 m-auto">
          <div className="col-12 bg-gray-50 border-round-md px-0 sm:px-3 ">
           
          </div>
        </div>
      </div> */}
    </section>
  );
}
