import React, { useState, useEffect } from 'react';
import { sendotp, resetpass } from '../../service/apiFetch';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const ForgetPassword = ({ hideForget }) => {
    const [username, setUsername] = useState('');
    const [section, setSection] = useState(1);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [id, setId] = useState('');

    const [loadingOtp, setLoadingOtp] = useState(false);
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const [triggerSendOtp, setTriggerSendOtp] = useState(false);
    const [triggerResetPassword, setTriggerResetPassword] = useState(false);

    useEffect(() => {
        const getOtp = async () => {
            if (!triggerSendOtp) return;

            setLoadingOtp(true);
            try {
                const response = await sendotp({ username });

                if (response.id) {
                    Swal.fire({
                        icon: 'success',
                        text: 'OTP sent to registered mobile number',
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        scrollbarPadding: false,
                    });
                    setId(response.id);
                    setSection(2);
                } else if (response.error) {
                    Swal.fire({
                        icon: 'error',
                        text: response.details.message,
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        scrollbarPadding: false,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    text: 'Something went wrong. Please try again.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    scrollbarPadding: false,
                });
            } finally {
                setTriggerSendOtp(false);
                setLoadingOtp(false);
            }
        };

        getOtp();
    }, [triggerSendOtp, username]);

    useEffect(() => {
        const resetPassword = async () => {
            if (!triggerResetPassword) return;
    
            if (newPassword.length < 6) {
                Swal.fire({
                    icon: 'error',
                    text: 'Password must be at least 6 characters long.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    scrollbarPadding: false,
                });
                setTriggerResetPassword(false);
                return;
            }
    
            if (newPassword !== confirmPassword) {
                Swal.fire({
                    icon: 'error',
                    text: 'Passwords do not match.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    scrollbarPadding: false,
                });
                setTriggerResetPassword(false);
                return;
            }
    
            setLoadingSubmit(true);
            try {
                const response = await resetpass({
                    username,
                    otp,
                    newPassword,
                    id,
                });
            
                // console.log('API Response:', response);
            
                if (response.done) {
                    // console.log('Response done is true');
                    Swal.fire({
                        icon: 'success',
                        title: 'Password reset successful!',
                        text: 'Now you can login',
                        showConfirmButton: true,
                        scrollbarPadding: false,
                    });
                    hideForget();
                } else{
                    // console.log('Response contains an error:', response.error);
                    Swal.fire({
                        icon: 'error',
                        text: response.details?.message || 'An error occurred.',
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        scrollbarPadding: false,
                    });
                } 
                // else {
                //     // console.log('Unexpected response structure:', response);
                //     Swal.fire({
                //         icon: 'error',
                //         text: 'Unexpected response from server.',
                //         timer: 2000,
                //         showConfirmButton: false,
                //         timerProgressBar: true,
                //         scrollbarPadding: false,
                //     });
                // }
            } catch (error) {
                console.error('Error caught in catch block:', error);
                Swal.fire({
                    icon: 'error',
                    text: 'Something went wrong. Please try again.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    scrollbarPadding: false,
                });
            }
              finally {
                setTriggerResetPassword(false);
                setLoadingSubmit(false);
            }
        };
    
        resetPassword();
    }, [triggerResetPassword, username, otp, newPassword, id, confirmPassword]);
    

    return (
        <div className="p-3 flex justify-center items-center">
            <div>
                <div className="p-2">
                    {section === 1 && (
                        <div>
                            <p>Username</p>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-72 p-2 border text-[#212529] outline-customFC6200 sm:w-96 bg-[#f5f5f5] border-gray-400 rounded"
                            />
                            <div>
                                {username ? (
                                    <button
                                        onClick={() => setTriggerSendOtp(true)}
                                        className="text-white bg-customFC6200 my-3 px-2 py-1 rounded"
                                        disabled={loadingOtp}
                                    >
                                        {loadingOtp ? (
                                            <div className="flex justify-center items-center">
                                                <div className="border-transparent border-t-white w-[20px] h-[20px] animate-spin rounded-full border-2 border-solid"></div>
                                            </div>
                                        ) : (
                                            'Get OTP'
                                        )}
                                    </button>
                                ) : (
                                    <button className="text-white opacity-80 bg-customFC6200 my-3 px-2 hover:cursor-default py-1 rounded">
                                        Get OTP
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                    {section === 2 && (
                        <div>
                            <p className="mb-1">OTP</p>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-72 p-2 border text-[#212529] outline-customFC6200 sm:w-96 bg-[#f5f5f5] border-gray-400 rounded"
                            />
                            <p className="mb-1 mt-3">New Password</p>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-72 p-2 border text-[#212529] outline-customFC6200 sm:w-96 bg-[#f5f5f5] border-gray-400 rounded"
                            />
                            <p className="mb-1 mt-3">Confirm Password</p>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-72 p-2 border text-[#212529] outline-customFC6200 sm:w-96 bg-[#f5f5f5] border-gray-400 rounded"
                            />
                            <div>
                                {username && otp && newPassword && confirmPassword ? (
                                    <button
                                        onClick={() => setTriggerResetPassword(true)}
                                        className="text-white bg-customFC6200 my-3 px-2 py-1 rounded"
                                        disabled={loadingSubmit}
                                    >
                                        {loadingSubmit ? (
                                            <div className="flex justify-center items-center">
                                                <div className="border-transparent border-t-white w-[20px] h-[20px] animate-spin rounded-full border-2 border-solid"></div>
                                            </div>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                ) : (
                                    <button className="text-white opacity-80 bg-customFC6200 my-3 px-2 hover:cursor-default py-1 rounded">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
