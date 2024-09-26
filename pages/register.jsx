// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
// import { useStoreSnackbar } from "../../store/snackbar";
import { useStoreSnackbar } from "../store/snackbar";
import Link from "next/link";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon
import { Input } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";

export default function Register() {
  // const toast = useRef(null);
  const initialValue = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    gender: "",
    dob: null,
    session: "6427b3f7cee6f934cdbb215a",
    personalImg: null,
    address: {
      city: "",
    },
  };

  const [regisData, setRegisData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpId, setOtpId] = useState("");
  const otpRefs = useRef([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [token, setTokens] = useState("");
  const [token, setTokens] = useState(new Array(4).fill(""));
  const myOtp = useRef(null);
  // const city = [{ name: "DELHI" }, { name: "NOIDA" }];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisData({
      ...regisData,
      [name]: value,
      address: {
        ...regisData.address,
        [name]: value,
      },
    });
    console.log(regisData);
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
              "https://vijethaiasacademyvja.com/api/public/file/upload",
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
    setFormErrors(validate(regisData));
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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  async function getOtpRegis() {
    debugger;
    try {
      setLoading(true);
      let data = { mobile: regisData.mobile };
      const response = await fetch(
        "https://vijethaiasacademyvja.com/api/public/user/signup-with-otp",
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
        // debugger;
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
  async function Submit() {
    debugger;
    let dataOtp = {
      id: otpId,
      otp: myOtp.current,
      password: regisData.password,
      username: regisData.mobile,
    };
    // dataOtp.student = regisData
    dataOtp.student = await getFileUploadUrl(regisData);
    try {
      setLoading(true);
      const res = await fetch(
        "https://vijethaiasacademyvja.com/api/public/user/register-student-with-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataOtp),
        }
      );
      const studentWithOtp = await res.json();
      // debugger;
      if (res.ok) {
        useStoreSnackbar.getState().showSnackbar({
          description: " You have registered successfully",
          title: "Successfully Registered",
          color: "green",
        });
        setPage(3);
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
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.dob) {
      errors.dob = "Date of birth is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    return errors;
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
  if (loading) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  return (
    <section id="register">
      <div>
        <form onSubmit={handleSubmit}>
          {page === 1 ? (
            <div className="block mx-auto my-[2rem] w-[90%] sm:w-[70%]  lg:w-[60%] xl:w-[50%]  rounded-[8px]  shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
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
                      First Name <p className="p-0 m-0 text-red-500">*</p>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                      value={regisData.firstName}
                      onChange={handleChange}
                    />
                    <p className="text-[red] text-[15px]">
                      {formErrors.firstName}
                    </p>
                  </div>

                  <div className="mt-[10px]">
                    <label
                      htmlFor="lastName"
                      className="text-[15px] font-bold flex gap-[2px]"
                    >
                      Last Name <p className="p-0 m-0 text-red-500">*</p>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                      value={regisData.lastName}
                      onChange={handleChange}
                    />
                    <p className="text-[red] text-[15px]">
                      {formErrors.lastName}
                    </p>
                  </div>

                  <div className="mt-[10px]">
                    <label
                      htmlFor="mobile"
                      className="text-[15px] font-bold flex gap-[2px]"
                    >
                      Mobile Number <p className="p-0 m-0 text-red-500">*</p>
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
                    <p className="text-[red] text-[15px]">
                      {formErrors.mobile}
                    </p>
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
                    <p className="text-[red] text-[15px]">{formErrors.email}</p>
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

                    {/* <select
                     value={regisData.gender}
                     onChange={handleChange}
                      name="gender"
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                    >
                      <option value="">Select Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select> */}

                    {/* <input
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                      value={regisData.email}
                      onChange={handleChange}
                      keyfilter="email"
                    /> */}

                    <p className="text-[red] text-[15px]">
                      {formErrors.gender}
                    </p>
                  </div>

                  <div className="mt-[10px]">
                    <label
                      htmlFor="dob"
                      className="text-[15px] font-bold flex gap-[2px]"
                    >
                      DOB <p className="p-0 m-0 text-red-500">*</p>
                    </label>

                    {/* <DatePicker
                      selected={regisData.dob}
                      onChange={(date) =>
                        handleChange({
                          target: { name: "dob", value: date },
                        })
                      }
                      customInput={
                        <Input
                          name="dob"
                          className="dob"
                          fullWidth
                          placeholder="Select your date of birth"
                          value={
                            regisData.dob
                              ? regisData.dob.toLocaleDateString("en-GB")
                              : ""
                          }
                        />
                      }
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    /> */}

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
                                ? regisData.dob.toLocaleDateString("en-GB")
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
                            } // Trigger focus on the input to open calendar
                          />
                        </div>
                      }
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />

                    <p className="text-[red] text-[15px]">{formErrors.dob}</p>
                  </div>

                  {/* <div className="flex flex-column gap-2 col-12 md:col-6 ">
                      <label
                        htmlFor="dob"
                        className="font-normal text-xs flex align-items-center gap-1"
                      >
                        DOB <p className="p-0 m-0 text-red-500">*</p>
                      </label>
                      <Calendar
                        name="dob"
                        className="dob"
                        value={regisData.dob}
                        onChange={handleChange}
                      />
                      <p className="m-0 text-red-400">{formErrors.dob}</p>
                    </div> */}

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
                  </div>

                  <div className="mt-[10px]">
                    <label
                      htmlFor="personalImg"
                      className="text-[15px] font-bold flex gap-[2px]"
                    >
                      Upload Pic<p className="p-0 m-0 text-red-500">*</p>
                    </label>
                    <input
                      type="file"
                      onChange={handleFileInput}
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                    />
                    <p className="text-[red] text-[15px]">
                      {formErrors.personalImg}
                    </p>
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
                  <Link
                    href="/login"
                    className="text-white bg-[#071e63] text-[14px] rounded-[6px] cursor-pointer px-6 pt-[2px] pb-[4px]"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          ) : page === 2 ? (
            <div className="block mx-auto my-[2rem] w-[90%] sm:w-[70%]  lg:w-[60%] xl:w-[50%] rounded-[8px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
              <div className="rounded-t-[8px] text-[18px] sm:text-[23px] gap-[8px] flex items-center py-3 px-3 justify-center bg-[#071e63] text-white mb-5">
                <FaLock />
                <h3>Enter OTP</h3>
              </div>
              <div className="px-[10px] sm:px-4 ">
                <div>
                  {/* <div className="otpCard flex gap-[10px] justify-center">
                    {token.map((value, index) => (
                      <div key={index} className="w-[60px]">
                        <Input
                          className="border-1 border-[lightgray] border-solid rounded-[10px] bg-transparent outline-none"
                          value={value}
                          onChange={(e) => handleTokenChange(e, index)}
                          maxLength={1}
                          clearable
                          aria-label={`OTP Digit ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div> */}
                  <div className="otpCard flex gap-[10px] justify-center">
                    {token.map((value, index) => (
                      <div key={index} className="w-[60px]">
                        <Input
                          className="border-1 border-[lightgray] border-solid rounded-[10px] bg-transparent outline-none"
                          value={value}
                          onChange={(e) => handleTokenChange(e, index)}
                          maxLength={1}
                          clearable
                          aria-label={`OTP Digit ${index + 1}`}
                          ref={(input) => (otpRefs.current[index] = input)} // Assigning refs for each input
                          onKeyUp={(e) => {
                            if (
                              e.target.value.length === 1 &&
                              index < token.length - 1
                            ) {
                              otpRefs.current[index + 1]?.focus(); // Move to next input box
                            } else if (e.key === "Backspace" && index > 0) {
                              otpRefs.current[index - 1]?.focus(); // Move to previous input on backspace
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
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
            <div className="block mx-auto my-[2rem] w-[90%] sm:w-[70%]  lg:w-[60%] xl:w-[50%] rounded-[8px] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
              <div className="rounded-t-[8px] text-[18px] sm:text-[23px] gap-[8px] flex items-center py-3 px-3 justify-center bg-[#071e63] text-white mb-5">
                <h3>Registered Successfully</h3>
              </div>
              <div className="px-[10px] sm:px-4">
                <p>
                  Registration was successful! Login details have been sent to
                  your registered mobile number.
                </p>

                <div className="mt-3  pb-[1rem]">
                  <Link
                    href="/login"
                    className="text-white bg-[#071e63] text-[14px] rounded-[6px] cursor-pointer px-6 pt-[4px] pb-[8px]"
                  >
                    Log In
                  </Link>
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

      {/* <div className="container">
        <div className="grid col-12 flex linear  border-round-md sm:px-5 py-5 gap-0 m-auto">
          <div className="col-12 bg-gray-50 border-round-md px-0 sm:px-3 ">
           
          </div>
        </div>
      </div> */}
    </section>
  );
}
