import React, { useState, useRef, useEffect } from "react";
import { useStoreSnackbar } from "../../store/snackbar";
import { Input } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
export default function ForgetPassword({ changeScreen }) {
  const [username, setUsername] = useState("");
  const [page, setPage] = useState(1);
  const otpRefs = useRef([]);
  const [myOtp, setOtp] = useState(new Array(4).fill(""));
  let otp = "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  async function resetPasswordOtp() {
    if (validate()) {
      try {
        setLoading(true);
        let data = { username };
        const response = await fetch(
          "https://ihub.masterlearners.in/api/public/user/sent-reset-password-otp",
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
          setPage(2);
          setUserId(result.id);
          console.log(result);
          useStoreSnackbar.getState().showSnackbar({
            description: "Successfully send otp for Reset Password",
            title: "Sent OTP",
            color: "green",
          });
        } else {
          useStoreSnackbar.getState().showSnackbar({
            description: "Failed to send otp for Reset Password",
            title: "Failed",
            color: "red",
          });
        }
      } catch (error) {
        alert("Error in sent otp");
        useStoreSnackbar.getState().showSnackbar({
          description: "Error in sent Otp for  Reset Password",
          title: error,
          color: "red",
        });
      } finally {
        setLoading(false);
      }
    }
  }

  async function resetPassword() {
    if (validatePasswod()) {
      if (newPassword !== confirmPassword) {
        useStoreSnackbar.getState().showSnackbar({
          description: "Password don not match",
          title: "Mismatch",
          color: "red",
        });
        return;
      }

      try {
        setLoading(true);
        let data = { newPassword, id: userId, confirmPassword, otp };

        const response = await fetch(
          "https://ihub.masterlearners.in/api/public/user/reset-password",
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
          setPage(3);
          console.log(result);
          useStoreSnackbar.getState().showSnackbar({
            description: "Successfully Reset Password",
            title: "Success",
            color: "green",
          });
        } else {
          useStoreSnackbar.getState().showSnackbar({
            description: "Failed in submitting",
            title: "Failed",
            color: "yellow",
          });
          throw new Error(result.message || "Failed");
        }
      } catch (error) {
        useStoreSnackbar.getState().showSnackbar({
          description: "Error in submitting",
          title: error,
          color: "red",
        });
      } finally {
        setLoading(false);
      }
    }
  }

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      let newOtp = [...myOtp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  if (myOtp?.length) {
    otp = myOtp.join("");
  }
  const validate = () => {
    debugger;
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    // if (!confirmPassword) {
    //   errors.confirmPassword = "Conform Password is required";
    // }
    // if (!newPassword) {
    //   errors.newPassword = "New Password is required";
    // }
    // if (!otp) {
    //   errors.otp = "Otp is required";
    // }
    setErrorMessage(errors);
    return Object.keys(errors).length === 0;
  };
  const validatePasswod = () => {
    // debugger;
    const errors = {};
    if (!confirmPassword) {
      errors.confirmPassword = "Conform Password is required";
    }
    if (!newPassword) {
      errors.newPassword = "New Password is required";
    }
    if (!otp) {
      errors.otp = "Otp is required";
    }
    setErrorMessagePassword(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    if (Object.keys(errorMessage).length > 0) {
      const timer = setTimeout(() => {
        setErrorMessage({});
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (Object.keys(errorMessagePassword).length > 0) {
      const timer = setTimeout(() => {
        setErrorMessagePassword({});
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, errorMessagePassword]);

  return (
    <>
      <section id="loginForgetPwd">
        <div className="col-12 rounded-[8px] p-0 shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)]">
          <div className="flex  rounded-t-[8px] justify-between bg-[#071e63] text-white mb-5 flex-wrap flex-col sm:flex-row">
            <h2 className="m-0 py-3 px-4 lg:text-lg text-base  font-bold white-space-nowrap text-center sm:text-left ">
              Reset Password
            </h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[10rem]">
              <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
            </div>
          ) : (
            <div>
              {page === 1 ? (
                <div className="flex flex-col justify-center px-5">
                  <div className="field py-[8px]  rounded-[6px] px-[6px] items-center border border-[lightgray] border-solid flex w-full mb-3">
                    <FaUser className="mr-[6px]" />
                    <input
                      className=" w-full outline-none "
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Your Username"
                    />
                  </div>
                  {errorMessage?.username && (
                    <p className="text-[red] text-[15px] mb-[5px]">
                      {errorMessage.username}
                    </p>
                  )}
                  <div>
                    <button
                      className="block mx-auto text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                      onClick={() => resetPasswordOtp()}
                      type="submit"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="flex justify-end gap-2 mt-3 pb-[1rem]">
                    <div>
                      <button
                        className="block mx-auto text-white bg-[#071e63]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                        onClick={() => changeScreen("LOGIN")}
                        type="submit"
                      >
                        Back
                      </button>
                    </div>

                    <div>
                      <button
                        className="block mx-auto text-white bg-[#071e63]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                        onClick={() => changeScreen("REGISTER")}
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ) : page === 2 ? (
                <div className="col-12 flex flex-col justify-content-center px-5">
                  <div>
                    <div>
                      <label className="text-[15px] font-bold flex gap-[2px]">
                        Enter Otp: <p className="p-0 m-0 text-red-500">*</p>{" "}
                      </label>
                    </div>

                    <div className="otpCard flex gap-[10px] justify-content">
                      {myOtp.map((value, index) => (
                        <div key={index} className="w-[60px]">
                          <Input
                            className="border-1 border-[lightgray] border-solid rounded-[10px] bg-transparent outline-none"
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            maxLength={1}
                            clearable
                            aria-label={`OTP Digit ${index + 1}`}
                            ref={(input) => (otpRefs.current[index] = input)}
                            onKeyUp={(e) => {
                              if (
                                e.target.value.length === 1 &&
                                index < myOtp.length - 1
                              ) {
                                otpRefs.current[index + 1]?.focus(); // Move to next input box
                              } else if (e.key === "Backspace" && index > 0) {
                                otpRefs.current[index - 1]?.focus(); // Move to previous input on backspace
                              }
                            }}
                          />
                        </div>
                      ))}

                      {/* {myOtp.map((value, index) => (
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
                  ))} */}
                    </div>

                    {errorMessagePassword?.otp && (
                      <p className="text-[red] text-[15px] mb-[5px]">
                        {errorMessagePassword.otp}
                      </p>
                    )}
                  </div>

                  <div className="mt-[10px]">
                    <div>
                      <label className="text-[15px] font-bold flex gap-[2px]">
                        New Password: <p className="p-0 m-0 text-red-500">*</p>
                      </label>
                    </div>
                    <input
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />

                    {errorMessagePassword?.newPassword && (
                      <p className="text-[red] text-[15px] mb-[5px]">
                        {errorMessagePassword.newPassword}
                      </p>
                    )}
                  </div>

                  <div className="mt-[10px]">
                    <div>
                      <label className="text-[15px] font-bold flex gap-[2px]">
                        Confirm Password:{" "}
                        <p className="p-0 m-0 text-red-500">*</p>
                      </label>
                    </div>
                    <input
                      type="password"
                      className="w-full border-1 border-[lightgray] border-solid py-[6px] px-[8px] outline-none rounded-[6px]"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />

                    {errorMessagePassword?.confirmPassword && (
                      <p className="text-[red] text-[15px] mb-[5px]">
                        {errorMessagePassword.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="mt-[1rem] pb-[1rem]">
                    <button
                      className="block mx-auto text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2"
                      onClick={() => resetPassword()}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="font-bold text-center pb-[1rem]">
                    Your Password has been reset successfully
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
