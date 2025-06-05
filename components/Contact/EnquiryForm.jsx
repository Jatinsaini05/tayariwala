import React, { useState, useEffect } from "react";
import Link from "next/link";
import HoverButton1 from "../hover effect/HoverButton1";
import Swal from "sweetalert2";
import { sendEnquiry } from "../../service/apiFetch";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    enquiryType: "",
    message: "",
    source: "Contact-Us",
    currentStatus: "Interested",
    course: "",
    stream: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!phoneRegex.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.stream) newErrors.stream = "Stream is required";
    if (!formData.enquiryType) newErrors.type = "Type is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "You must accept the terms and privacy policy";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFormErrorMessage("Please fill all the details correctly.");
      setTimeout(() => {
        setFormErrorMessage("");
        setErrors("");
      }, 3000);
      return false;
    } else {
      setFormErrorMessage("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const data = formData;
        const response = await sendEnquiry(data);
        if (response.done === true) {
          Swal.fire({
            icon: "success",
            title: "Enquiry Submitted!",
            text: "Thank you for your enquiry. We will get back to you soon.",
            timer: 3000,
            showConfirmButton: false,
            scrollbarPadding: false,
          });
          setFormData({
            firstName: "",
            email: "",
            mobile: "",
            course: "",
            stream: "",
            enquiryType: "",
            message: "",
            acceptTerms: false,
          });
          setErrors({});
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "Something went wrong. Please try again later.",
          timer: 3000,
          showConfirmButton: false,
          scrollbarPadding: false,
        });
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
      setLoading(true);

      const [response1, response2, response3] = await Promise.all([
        fetch("https://maheshpratap.institute.org.in/api/public/data/streams"),
        fetch("https://maheshpratap.institute.org.in/api/public/data/courses"),
        fetch("https://maheshpratap.institute.org.in/api/enquiry/enquirytype"),
      ]);

      const [streams, courses, enqtype] = await Promise.all([
        response1.json(),
        response2.json(),
        response3.json(),
      ]);

      setStreams(streams);
      setCourses(courses);
      setEnqtype(enqtype);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://i.filecdn.in/1mlearners/register-shape-1733212771325.jpg')",
        }}
        className="p-[35px] rounded"
      >
        <h2 className="text-white font-semibold text-[33px]">
          Ready to get Started?
        </h2>
        <p className="text-white mt-[10px]">
          Get the best way to help you reach your goals
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
            placeholder="Your name"
          />
          {errors.name && <p className="text-[#ff0000]">{errors.name}</p>}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
            placeholder="Your email address"
          />
          {errors.email && <p className="text-[#ff0000]">{errors.email}</p>}

          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="bg-[#9d4204] mt-6 placeholder:text-white p-3 w-full rounded text-white text-base focus:outline-none focus:ring-0"
            placeholder="Your mobile no."
          />
          {errors.mobile && <p className="text-[#ff0000]">{errors.mobile}</p>}

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Select Course
            </option>
            {courses?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item?.valueAlias}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-[#ff0000]">{errors.course}</p>}

          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Select Stream
            </option>
            {streams?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item.valueAlias}
              </option>
            ))}
          </select>
          {errors.stream && <p className="text-[#ff0000]">{errors.stream}</p>}

          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="mt-6 text-[#221638] p-3 w-full rounded focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Select Type
            </option>
            {enqtype?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item?.title}
              </option>
            ))}
          </select>
          {errors.type && <p className="text-[#ff0000]">{errors.type}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-[135px] w-full mt-8 rounded bg-[#9d4204] pt-3 pl-3 text-white placeholder:text-white focus:outline-none focus:ring-0"
            placeholder="Write your message.."
          />
          {errors.message && <p className="text-[#ff0000]">{errors.message}</p>}

          <div className="mt-6">
            <label className="flex items-center gap-1 w-max">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="accent-[#fc6200]"
              />
              <span className="text-white">
                Accept{" "}
                <Link href="/terms-and-conditions" className="underline">
                  Terms
                </Link>{" "}
                And{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy.
                </Link>
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="text-[#ff0000]">{errors.acceptTerms}</p>
            )}
          </div>

          {formErrorMessage && (
            <p className="text-[#ff0000] mt-4">{formErrorMessage}</p>
          )}
          <div>
            <button className="mt-8" id="sumbitbtn">
              <HoverButton1 text="Submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
