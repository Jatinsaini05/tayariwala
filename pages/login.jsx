import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useStoreLogin } from "../store/login";
import { useStoreLoader } from "../store/loader";
import { useStoreSnackbar } from "../store/snackbar";
import Link from "next/link";
// import { useStoreLogin } from "../../store/login";
// import { useStoreLoader } from "../../store/loader";
// import { Dialog } from "primereact/dialog";

export default function LoginPassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isloading = useStoreLoader((state) => state.isloading);
  const [errorMessage, setErrorMessage] = useState("");
  // const { user, authToken } = useStoreLogin();
  const [page, setPage] = useState(1);
  let user = useStoreLogin.getState().user;
  let authToken = useStoreLogin.getState().authToken;
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      if (username && password) {
        let data = await useStoreLogin.getState().login({ username, password });
      } else {
        useStoreSnackbar.getState().showSnackbar({
          description: "Username & Password are required",
          title: "Required",
          color: "red",
        });
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    debugger;
    try {
      setLoading(true);
      let data = useStoreLogin.getState().logout();
    } catch (err) {
      alert("Error in Sign Out");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (user && authToken) {
      setPage(2);
    }
  }, [user, authToken]);

  if (loading) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="grid">
          <div>
            {/* <div className="flex justify-between bg-[#071e63] text-white mb-5 flex-wrap flex-col sm:flex-row">
              <h2 className="m-0 py-3 px-4 lg:text-lg text-base  font-bold white-space-nowrap text-center sm:text-left ">
                Welcome Back
              </h2>
              <span
                className="m-0 cursor-pointer pt-0 sm:pt-4 px-3  text-sm lg:text-base  font-medium no-underline text-white  white-space-nowrap  text-right p-3"
                onClick={() => changeScreen("FORGOT_PASSWORD")}
              >
                Forgot password?
              </span>
            </div> */}

            {page == 1 && (
              <div className="block mt-[2rem] mb-[2rem] mx-auto w-[100%] rounded-[8px] sm:w-[70%]  lg:w-[60%] cl:w-[50%] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
                <div className=" bg-[#071e63] rounded-t-[8px] text-white mb-5 ">
                  <h2 className="m-0 py-3 px-4 lg:text-lg text-base  font-bold text-center ">
                    Login
                  </h2>
                </div>
                <div className="col-12 flex flex-col justify-center px-5">
                  <div className="field py-[8px]  rounded-[6px] px-[6px] items-center border border-[lightgray] border-solid flex w-full mb-3 ">
                    <FaUser className="mr-[6px]" />
                    <input
                      className=" w-full outline-none "
                      value={username}
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="field py-[8px] rounded-[6px] px-[6px] items-center border border-[lightgray] border-solid flex w-full mb-3 ">
                    <FaLock className="mr-[6px]" />
                    <input
                      className="w-full outline-none"
                      value={password}
                      type="password"
                      placeholder="Password"
                      pt={{
                        meter: { className: "w-full" },
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      toggleMask
                    />
                  </div>

                  <div className="w-full flex flex-wrap flex-col px-5 justify-center  border-bottom-1 pb-6 ">
                    {errorMessage && (
                      <h3 className=" flex justify-content-center text-red-500 text-sm m-0 p-0 ">
                        {errorMessage}
                      </h3>
                    )}
                    <div className="flex justify-center rounded-[6px] p-0 m-0 ">
                      <button
                        className="text-white bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                        loading={isloading}
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center gap-[8px] items-center pt-3 pb-2 text-xs lg:text-sm text-600">
                   Don&apos;t have an account?
                   <Link
                    href="/register"
                    className="text-white bg-[#071e63] text-[14px] rounded-[6px] cursor-pointer px-6 pt-[2px] pb-[5px]"
                  >
                    Register
                  </Link>
                   {/* <span
                     className="no-underline text-blue-400 cursor-pointer"
                     onClick={() => changeScreen("REGISTER")}
                   >
                     Register Now!
                   </span> */}
                 </div>
                </div>
              </div>
            )}
            {page == 2 && (
              <div className="block rounded-[8px] mt-[2rem] mb-[2rem] mx-auto w-[100%]  sm:w-[70%]  lg:w-[60%] cl:w-[50%] shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)] pb-[1rem]">
                <div className=" bg-[#071e63]  rounded-t-[8px] text-white mb-5 ">
                  <h2 className="m-0 py-3 px-4 lg:text-lg text-base  font-bold text-center ">
                    You Logged in
                  </h2>
                </div>
                <p className="font-bold text-center pb-[1rem]">
                  You have Login
                </p>
                <div className="flex justify-end">
                  <button
                    className="text-white  mr-[10px] sm:mr-[1rem] bg-[#ea580c]  rounded-[6px] cursor-pointer px-6 pt-1 pb-2 mt-3"
                    onClick={signOut}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
