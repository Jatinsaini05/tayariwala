import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { user } from "../../service/apiFetch";
import { useStoreLogin } from "../../store/login";

const Register = ({ CoursesData }) => {
  const [streamData, setStreamData] = useState();
  const [shouldSubmit, setShouldSubmit] = useState(false); // State to trigger submission
  const [validatedData, setValidatedData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    conpassword: "",
    course: "",
    stream: "",
  });
const { login, userdata, authToken } = useStoreLogin();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fieldLabels = {
    firstName: "First Name",
    lastname: "Last Name",
    mobile: "Mobile",
    email: "Email",
    password: "Password",
    conpassword: "Confirm Password",
    course: "Course",
    stream: "Stream",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${fieldLabels[name]} is required` }));
    } else if (name === "mobile" && !/^\d{10}$/.test(value)) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile number must be 10 digits" }));
    } else if (name === "password" && value.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be 6+ characters" }));
    } else if (name === "conpassword" && value !== formData.password) {
      setErrors((prev) => ({ ...prev, conpassword: "Passwords do not match" }));
    } else if ((name === "course" || name === "stream") && !value) {
      setErrors((prev) => ({ ...prev, [name]: `${fieldLabels[name]} is required` }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation
    Object.keys(formData).forEach((field) => {
      if (field !== "session" && !formData[field]) {
        newErrors[field] = `${fieldLabels[field]} is required`;
      }
    });

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be 6+ characters";
    }

    if (formData.password !== formData.conpassword) {
      newErrors.conpassword = "Passwords do not match";
    }

    const selectedCourse = CoursesData.find((course) => course._id === formData.course);
    if (!selectedCourse) {
      newErrors.course = "Course is required or invalid";
    }

    const selectedStream = streamData?.find((stream) => stream._id === formData.stream);
    if (!selectedStream) {
      newErrors.stream = "Stream is required or invalid";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setValidatedData(formData);
    setShouldSubmit(true); // Trigger submission in useEffect
  };

  useEffect(() => {
    const makeApiCall = async () => {
      if (!shouldSubmit || !validatedData) return;

      setLoading(true);

      try {
        // Call user API
        const response = await user(validatedData);
        setLoading(false);
        if (response?.error === "HTTP error! status: 500" && response?.details?.message) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.details.message,
            timer: 3000,
            showConfirmButton: false,
            scrollbarPadding: false,
            timerProgressBar: true,
          });
          return;
        }

        // Automatically log in the user
        const loginData = {
          username: response?.user?.username,
          password: validatedData.password,
          type: response?.user?.type || "STUDENT",
        };

        const loginResponse = await login(loginData);

        if (loginResponse?.error) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: loginResponse.error,
            timer: 3000,
            showConfirmButton: false,
            scrollbarPadding: false,
            timerProgressBar: true,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registration and login successful!",
            timer: 3000,
            showConfirmButton: false,
            scrollbarPadding: false,
            timerProgressBar: true,
          });

          // Redirect to profile page
          router.push("/profile");
        }
      } catch (error) {
        setLoading(false);
        console.error("Error during registration/login:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
          timer: 3000,
          showConfirmButton: false,
          scrollbarPadding: false,
          timerProgressBar: true,
        });
      } finally {
        setShouldSubmit(false); // Reset submission trigger
      }
    };

    makeApiCall();
  }, [shouldSubmit, validatedData]);

  useEffect(() => {
    if (formData?.course.length > 0) {
      fetch(`https://masterlearners.in/api/public/data/streams?course=${formData?.course}`)
        .then((response) => response.json())
        .then((data) => {
          setStreamData(data);
          setFormData((prev) => ({ ...prev, stream: "" }));
        })
        .catch((error) => console.error(error));
    }
  }, [formData?.course]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-[60px] md:w-1/2 w-full md:mr-[20px] md:ml-[3.4px] border rounded-md p-[40px] shadow"
    >
      <h3 className="text-[28px] font-semibold mb-[20px]">Register</h3>
      <ul className="text-[13px] text-[#212529]">
        <li className="md:flex w-full xl:gap-16 gap-3 justify-between">
          <div className="mb-3 relative flex w-full flex-col">
            <label className="mb-[5px]" htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="First Name"
            />
            {errors.firstName && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-3 flex relative w-full flex-col">
            <label className="mb-[5px]" htmlFor="lastname">
              Last Name <span>*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Last Name"
            />
            {errors.lastname && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.lastname}</span>
            )}
          </div>
        </li>

        {/* Email and Mobile */}
        <li className="md:flex w-full xl:gap-16 gap-3 justify-between">
          <div className="mb-3 flex relative w-full flex-col">
            <label className="mb-[5px]" htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.email}</span>
            )}
          </div>
          <div className="mb-3 relative flex w-full flex-col">
            <label className="mb-[5px]" htmlFor="mobile">
              Mobile <span>*</span>
            </label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Mobile"
            />
            {errors.mobile && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.mobile}</span>
            )}
          </div>
        </li>

        {/* Password and Confirm Password */}
        <li className="md:flex w-full xl:gap-16 gap-3 justify-between">
          <div className="mb-3 flex relative w-full flex-col">
            <label className="mb-[5px]" htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.password}</span>
            )}
          </div>
          <div className="mb-3 relative flex w-full flex-col">
            <label className="mb-[5px]" htmlFor="conpassword">
              Confirm Password <span>*</span>
            </label>
            <input
              id="conpassword"
              name="conpassword"
              type="password"
              value={formData.conpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Repeat Password"
            />
            {errors.conpassword && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.conpassword}</span>
            )}
          </div>
        </li>

        {/* Course and Stream */}
        <li className="md:flex w-full xl:gap-16 gap-3 justify-between">
          <div className="mb-3 relative flex w-full flex-col">
            <label className="mb-[5px]" htmlFor="course">
              Course <span>*</span>
            </label>
            <select
              id="course"
              name="course"  // Make sure name is course to match the state key
              value={formData.course}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
            >
              <option value="" disabled>Select Course</option>
              {CoursesData.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.valueAlias}
                </option>
              ))}
            </select>
            {errors.course && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.course}</span>
            )}
          </div>
          <div className="mb-3 relative flex w-full flex-col">
            <label className="mb-[5px]" htmlFor="stream">
              Stream <span>*</span>
            </label>
            <select
              id="stream"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              onBlur={handleBlur}
              className="md:p-[8px] w-full p-[6px]  text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
            >
              <option value="" disabled>Select Stream</option>
              {streamData?.length > 0 ? (streamData?.map((itm) => (
                <option key={itm._id} value={itm._id}>
                  {itm.valueAlias}
                </option>
              ))) : <option disabled>please select course first</option>}
            </select>
            {errors.stream && (
              <span className="text-red-500 absolute bottom-[-20px] text-sm">{errors.stream}</span>
            )}
          </div>
        </li>
      </ul>
      <button
        type="submit"
        className="w-full flex justify-center items-center p-[10px] mt-2 bg-customFC6200 text-white rounded"
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center">
          <div className="border-transparent border-t-white w-[20px] h-[20px] animate-spin rounded-[50%] border-2 border-solid "></div>
        </div>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default Register;