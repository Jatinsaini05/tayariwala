import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Enq = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [stream, setStream] = useState([]);
  const [id, setId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStreams, setLoadingStreams] = useState(true);

  const data = {
    firstName: name,
    lastName: "",
    email: email,
    mobile: mobile,
    enquiryType: "",
    message: message,
    source: "RIGHT-SIDE-WIDGET",
    currentStatus: "Interested",
    course: "",
    stream: id,
    acceptTerms: false,
  };

  console.log(data);

  useEffect(() => {
    fetch("https://maheshpratap.institute.org.in/api/public/data/streams")
      .then((response) => response.json())
      .then((data) => setStream(data))
      .catch((error) => {
        console.error("Error fetching streams:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to fetch streams. Please try again later.",
          icon: "error",
          scrollbarPadding: false,
        });
      })
      .finally(() => setLoadingStreams(false));
  }, []);

  const validateForm = () => {
    if (!name) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter your name.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!email) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter your email.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid email address.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!mobile) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter your mobile number.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid 10-digit mobile number.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!id) {
      Swal.fire({
        title: "Validation Error",
        text: "Please select a stream.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    if (!message) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter your message.",
        icon: "warning",
        scrollbarPadding: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    fetch("https://maheshpratap.institute.org.in/api/enquiry/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response from server:", responseData);
        Swal.fire({
          title: "Success",
          text: "Enquiry submitted successfully!",
          icon: "success",
          scrollbarPadding: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
        setId("");
      })
      .catch((error) => {
        console.error("Error submitting enquiry:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to submit enquiry. Please try again.",
          icon: "error",
          scrollbarPadding: false,
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <div className="mt-[5px]">
        <form className="flex flex-col gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-[15px] h-[50px] rounded-md w-full focus-within:bg-white focus-within:border focus-within:border-customFC6200 focus-within:text-[#606060] outline-none bg-[#f5f5f5] px-[0.75rem] py-[0.375rem]"
            placeholder="Enter Your Full Name"
            type="text"
            autoComplete="name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-[15px] h-[50px] rounded-md w-full focus-within:bg-white focus-within:border focus-within:border-customFC6200 focus-within:text-[#606060] outline-none bg-[#f5f5f5] px-[0.75rem] py-[0.375rem]"
            placeholder="Enter Your Email"
            type="text"
            autoComplete="email"
          />
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="pl-[15px] h-[50px] rounded-md w-full focus-within:bg-white focus-within:border focus-within:border-customFC6200 focus-within:text-[#606060] outline-none bg-[#f5f5f5] px-[0.75rem] py-[0.375rem]"
            placeholder="Enter Your Mobile"
            type="tel"
            autoComplete="tel"
          />
          {loadingStreams ? (
            <p>Loading streams...</p>
          ) : (
            <select
              value={id}
              onChange={(e) => {
                const selectedStream = stream.find(
                  (item) => item._id === e.target.value
                );
                if (selectedStream) {
                  setId(selectedStream._id);
                }
              }}
              defaultValue=""
              className="pl-[15px] h-[50px] rounded-md w-full focus-within:bg-white focus-within:border focus-within:border-customFC6200 focus-within:text-[#606060] outline-none bg-[#f5f5f5] px-[0.75rem] py-[0.375rem]"
            >
              <option value="" disabled>
                Select a Stream
              </option>
              {stream.map((streamItem) => (
                <option key={streamItem._id} value={streamItem._id}>
                  {streamItem.valueAlias}
                </option>
              ))}
            </select>
          )}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-[15px] rounded-md w-full focus-within:bg-white focus-within:border focus-within:border-customFC6200 focus-within:text-[#606060] outline-none bg-[#f5f5f5] px-[0.75rem] py-[0.375rem]"
            placeholder="Enter Your Message"
          ></textarea>
          <button
            className={`${
              isSubmitting ? "bg-gray-400" : "bg-[#ffc107]"
            } px-4 w-full py-2 rounded-md mt-3`}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enq;
