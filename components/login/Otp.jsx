import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Register from "./Register";
// import {InputOtp} from 'primereact/inputotp';
import { Input } from "@nextui-org/react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";
import { useStoreLogin } from "../../store/login";
import { useStoreLoader } from "../../store/loader";
export default function Otp({ changeScreen }) {
  const [username, setUsername] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  // const [otp, setOtp] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [screen, setScreen] = useState("USERNAME");
  const isloading = useStoreLoader((state) => state.isloading);
  const [timeLeft, setTimeLeft] = useState(60); // Assuming a 60 seconds timer
  const timerRef = useRef(null);
  const [otpId, setOtpId] = useState(null);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const startTimer = () => {
    setTimeLeft(60); // Reset timer to 60 seconds
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    if (screen === "OTP") {
      startTimer();
    }
    return () => clearInterval(timerRef.current); // Cleanup timer on component unmount or screen change
  }, [screen]);

  const resetOtp = () => {
    clearInterval(timerRef.current);
    startTimer();
    getOtp();
  };

  const getOtp = async () => {
    let data;
    try {
      data = await useStoreLogin.getState().getLoginOtp({ username });

      if (data) {
        if (data?.error) {
          setErrorMessage("Mobile number not found. Please check your number.");
        } else {
          setScreen("OTP");
          if (data?.id) {
            setOtpId(data?.id);
          }
          if (data?.user) {
            setUser(data?.user);
          }
          setErrorMessage(""); // Clear error message if OTP is successfully fetched
        }
      }
    } catch (error) {
      setErrorMessage("This Mobile Number is not Registered, Try Again.");
    }
  };

  function verifyLoginOtp() {
    // debugger
    console.log(otpId, username, user.id);
    useStoreLogin
      .getState()
      .verifyLoginOtp({ otp, id: otpId, mobile: username, user: user.id });
  }
  useEffect(() => {
    if (screen == "OTP") {
      getOtp();
    }
  }, [screen]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <>
      <section id="loginOtp">
        {!showRegister ? (
          <div className="p-0 shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
            <div className="flex justify-center bg-[#071e63] text-white mb-5 flex-wrap flex-col sm:flex-row">
              <h2 className="m-0 py-3 px-4 lg:text-lg text-base  font-bold white-space-nowrap text-center sm:text-left ">
                Login
              </h2>
            </div>
            {
              {
                USERNAME: (
                  <div className="col-12 flex flex-col justify-content-center px-5">
                    <div className="field py-[8px]  rounded-[6px] px-[6px] items-center border border-[lightgray] border-solid flex w-full mb-3 ">
                      <FaMobileScreenButton className="mr-[6px]" />
                      <input
                        keyfilter="int"
                        className=" w-full outline-none "
                        value={username}
                        placeholder="Enter your mobile"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="w-full flex flex-wrap flex-col px-5 justify-center  border-b pb-6">
                      {errorMessage && (
                        <h3 className="flex justify-centertext-[red] text-[14px] m-0 p-0">
                          {errorMessage}
                        </h3>
                      )}
                      <div className="flex justify-center p-0 m-0 ">
                        <button
                          className="text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                          loading={isloading}
                          onClick={getOtp}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ),
                OTP: (
                  <>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-[18px] mb-2">
                        Authenticate Your Account
                      </p>
                      <p className="text-[#071e63] block my-1">
                        Please enter the code sent to your phone.
                      </p>
                      <p className="flex gap-[10px] items-center mb-5">
                        {username}
                        <FiRefreshCcw
                          className="text-[#071e63]"
                          onClick={() => setScreen("USERNAME")}
                        />
                        {/* <button
                        className="edkt-primary-color p-0"
                        icon="pi pi-refresh"
                        link
                        onClick={() => setScreen("USERNAME")}
                      /> */}
                      </p>

                      {/* <input
                      value={otp}
                      onChange={(e) => setOtp(e.value)}
                      integerOnly
                    /> */}
                      <div>
                        <div className="otpCard flex gap-[10px] justify-content">
                          {otp.map((value, index) => (
                            <div key={index} className="w-[60px]">
                              <Input
                                className="border-1 border-[lightgray] border-solid rounded-[10px] bg-transparent outline-none"
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                maxLength={1}
                                clearable
                                aria-label={`OTP Digit ${index + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex w-full gap-[1rem] justify-between px-7 mt-5 items-center mb-3">
                        <div>
                          <button
                            className="text-white block bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                            loading={isloading}
                            onClick={verifyLoginOtp}
                          >
                            Submit Code
                          </button>
                        </div>

                        <div className="flex items-center gap-[8px]">
                          <div>
                            <button
                              className="text-black  bg-[lightblue]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                              onClick={resetOtp}
                              disabled={timeLeft > 0}
                            >
                              Resend OTP
                            </button>
                          </div>

                          {timeLeft > 0 && (
                            <div>
                              <p className="text-center border-1 border-[black] border-solid rounded-[100%] w-[36px] h-[36px] leading-[3px] text-[14px] text-[black]">
                                {timeLeft}s
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      {errorMessage && (
                        <div className="text-[red] text-[14px] mt-2">
                          {errorMessage}
                        </div>
                      )}
                    </div>
                  </>
                ),
              }[screen]
            }
            <div className="flex justify-center	 w-full  text-center pt-2 pb-2 text-[14px] ">
              Don&apos;t have an account?
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => changeScreen("REGISTER")}
              >
                Register Now!
              </span>
            </div>
          </div>
        ) : (
          <Register backToLogin={() => setShowRegister(false)}></Register>
        )}
      </section>
    </>
  );
}
