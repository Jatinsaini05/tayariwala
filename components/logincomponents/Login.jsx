import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import ForgetPassword from "./ForgetPassword";
import { ImCross } from "react-icons/im";
import { useStoreLogin } from "../../store/login";


const Login = () => {
  const [forget, setForget] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    type: "STUDENT",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const { login, user, authToken } = useStoreLogin();
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const forgetshow = () => {
    setForget(!forget);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Call the login function from Zustand store
      await login(formData);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong. Please try again.",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && authToken) {
      router.push("/profile")
    }
  }, [user, authToken]);

  return (
    <div className="mb-[60px] md:w-1/2 w-full md:mr-[20px] md:ml-[3.4px] border rounded-md p-[40px] shadow">
      <h3 className="text-[28px] font-semibold mb-[20px]">Login</h3>
      <form onSubmit={handleSubmit}>
        <ul className="text-[13px] text-[#212529]">
          <li className="flex flex-col mb-3 relative">
            <label className="mb-[5px]" htmlFor="username">
              Username <span>*</span>
            </label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="md:p-[8px] p-[6px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
              placeholder="Username"
            />
            {errors.username && (
              <p className="absolute bottom-[-20px] text-red-600 text-sm mt-1">{errors.username}</p>
            )}
          </li>
          <li className="flex flex-col relative">
            <label className="mb-[5px]" htmlFor="password">
              Password <span>*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="md:p-[8px] p-[6px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666] w-full pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-[#666666] focus:outline-none"
              >
                {isPasswordVisible ? (
                  <FaEyeSlash className="text-black text-[18px]" />
                ) : (
                  <FaEye className="text-black text-[18px]" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 absolute bottom-[-20px] text-sm mt-1">{errors.password}</p>
            )}
          </li>
        </ul>

        <p className="my-5 text-[#606060]">
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-customFC6200 px-[25px] py-[10px] text-[13px] flex items-center justify-center"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="border-transparent border-t-white w-[20px] h-[20px] animate-spin rounded-[50%] border-2 border-solid "></div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </p>
        <div>
          <div onClick={() => setForget(true)} className="text-[#666666] hover:cursor-pointer">
            <span>
              Lost your password?
            </span>
          </div>
        </div>
      </form>
      {forget && (
        <div className="fixed z-[70] backdrop-blur-sm bg-white bg-opacity-80 text-[#212529] rounded-md overflow-hidden shadow-[0px_0px_10px_0px_#fc6200] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="flex p-3 pb-0">
              <p className="w-full">Reset Password via OTP</p>
              <ImCross onClick={() => setForget(false)} className="hover:cursor-pointer" />
            </div>
            <ForgetPassword hideForget={forgetshow} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
