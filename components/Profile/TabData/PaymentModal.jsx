import React, { useEffect, useState } from 'react';
import { PiSealPercentFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { addDiscount, fileUrlUpload, orderUpdate } from '../../../service/apiFetch';
import Swal from 'sweetalert2';

const PaymentModal = ({ closePayment, orderId, paymentnode, fetchPaymentNodes, GatewayUrl }) => {
    const [discount, setDiscount] = useState("close");
    const [discountType, setDiscountType] = useState("none");
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [proofUrl, setProofUrl] = useState("");
    const [orderUpdateData, setOrderupdateData] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("online")
    const [discountRes, setdiscountRes] = useState()
    const [lastPmtOptIndex, setLastPmtOptIndex] = useState("")
    const [error, setError] = useState("")
    const [payableAmount, setPayableAmount] = useState()
    const [paymentOption, setPaymentOption] = useState("")

    const handleFileInput = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("ekFile", file, file.name);
            try {
                const result = await fileUrlUpload(formData);
                if (result && result.url) {
                    setProofUrl(result.url);
                    console.log("File uploaded successfully:", result.url);
                } else {
                    console.error("Error uploading file", result?.response?.details?.message);
                }
            } catch (error) {
                console.error("File upload failed:", error);
            }
        }
    };

    const Discount = async () => {
        const data = {
            discountDetail: {
                type: "COUPON",
                discountCode: discountType === "Ex Student" ? "EXSTUDENT" : couponCode,
                ...(discountType === "Ex Student" && { reqDoc: proofUrl })
            }
        };
        try {
            const response = await addDiscount(orderId, data);
            console.log(response)
            setdiscountRes(response);
            if (response?.response?.details?.code) {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: response.response.details.message || "Something went wrong!",
                    scrollbarPadding: false,
                });
            }
            else if (response?.discountTotal) {
                Swal.fire({
                    icon: "success",
                    title: "Done",
                    text: `Discount of ₹${response?.discountTotal}/- is Applied`,
                    scrollbarPadding: false,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to apply discount. Please try again.",
                scrollbarPadding: false,
            });
            console.error("Error:", error);
        }
    };

    const SubmitExStudentDiscount = (e) => {
        e.preventDefault();
        if (!enrollmentNo) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please enter your enrollment number.",
                scrollbarPadding: false,
            });
        }
        else if (!proofUrl) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please upload your proof of being an ex-student.",
                scrollbarPadding: false,
            });
        }
        else {
            Discount();
        }
    };

    const SubmitCouponDiscount = (e) => {
        e.preventDefault();
        if (!couponCode) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please enter your coupon code.",
                scrollbarPadding: false,
            });
        }
        else {
            Discount();
        }
    };

    const UpdateOrder = async (orderId) => {
        try {
            const data = {
                lastPmtOptIndex: lastPmtOptIndex,
                paymentOptionAmt: payableAmount,
                paymentOption: paymentOption,
                customParams: enrollmentNo ? { exStdSRN: enrollmentNo } : {} // Add only if enrollmentNo exists
            };

            const response = await orderUpdate(orderId, data);
            if (response.error) {
                setError(response.error);
            } else {
                setOrderupdateData(response);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error updating order:', error);
        }
    };

    const RedirectToGateway = () => {
          window.location.href = GatewayUrl;
      }


    useEffect(() => {
        if (paymentnode?.length > 0) {
            const firstEnabledIndex = paymentnode.findIndex((item, index) =>
                !(item?.amount - (item?.discountTotal || 0) <= item?.paid) &&
                (index === 0 || paymentnode[index - 1]?.paid)
            );

            if (firstEnabledIndex !== -1) {
                const selectedItem = paymentnode[firstEnabledIndex];
                setLastPmtOptIndex(firstEnabledIndex.toString()); // Store index
                setPaymentOption(selectedItem?.title || ""); // Store title
                setPayableAmount(selectedItem?.amount - (selectedItem?.discountTotal || 0)); // Store payable amount
            }
        }
    }, [paymentnode]);


    useEffect(() => {
        if (discountRes?.discountTotal) {
            fetchPaymentNodes(orderId)
            setDiscount("close");
            UpdateOrder(orderId)
        }
    }, [discountRes])

    return (
        <div>
            <div className='h-screen w-screen overflow-auto fixed z-50 inset-0 bg-opacity-50 bg-black flex justify-center items-center'>
                <div className={`${discount === "open" ? "w-full" : "sm:w-[66%] w-[90%]"} bg-white shadow-lg rounded-lg p-6 pt-0 max-h-[95vh] sm:max-h-[80vh] overflow-auto`}>
                    <div className='flex justify-between sticky z-10 top-0 py-2 bg-white'>
                        <span>Payment Details</span>
                        <button onClick={closePayment} className='py-[5px] px-[25px] bg-[#f0f0f0] text-base'>x</button>
                    </div>
                    <div className={`bg-white py-3 ${discount === "open" ? ('sm:px-10 px-1') : ('px-6')}`}>
                        <div className='flex sm:justify-between sm:flex-row flex-col items-center'>
                            <span>Payment Method:</span>
                            <select value={paymentMethod} onChange={(e) => { setPaymentMethod(e.target.value) }} className='outline-none text-[#606060] sm:w-2/3 w-full rounded focus-within:border focus-within:bg-white focus-within:border-customFC6200 bg-[#f5f5f5] p-4'>
                                <option value="">Select Payment Method</option>
                                <option value="online">Online (Net Banking or Debit/Credit Card or Wallet)</option>
                            </select>
                        </div>
                        {paymentMethod && (
                            <>
                                <div className='flex sm:justify-between sm:flex-row flex-col items-center my-3'>
                                    <span>Payment Option:</span>
                                    <select className='outline-none sm:w-2/3 w-full rounded text-[#606060] focus-within:border focus-within:bg-white focus-within:border-customFC6200 bg-[#f5f5f5] p-4'>
                                        <option disabled className='text-[#d5d5d5]'>Select</option>
                                        {paymentnode?.map((item, index) => (
                                            <option disabled={(item?.amount - (item?.discountTotal || 0) <= item?.paid) || (index > 0 && !paymentnode[index - 1].paid) ? true : null} key={index} value={``} className={`${index == 0 ? ("") : ("text-[#d5d5d5]")}`}>{item?.title}  ( {(item?.paid >= item?.amount ? 'Paid' : ('₹' + (item?.amount - (item?.discountTotal || 0)) + '/-'))})</option>
                                        ))}
                                    </select>
                                </div>
                                {discount === "open" ? (
                                    <div className='flex sm:justify-end justify-center'>
                                        <div className='border relative shadow-lg sm:w-2/3 w-full mt-4 sm:mt-0'>
                                            <div className='px-4 py-3 bg-[#f0f0f0] border-b rounded flex items-center gap-5'>
                                                <h3 className='text-[25px] font-bold'>Apply Discount Code</h3>
                                                <PiSealPercentFill className='text-[#fc7c49] text-4xl' />
                                            </div>
                                            <button className='absolute text-4xl -top-2 -right-2' onClick={() => setDiscount("close")}>
                                                <MdCancel className='text-customFC6200' />
                                            </button>
                                            <div className='px-4 py-3'>
                                                <form>
                                                    <div className='flex sm:gap-4 gap-2'>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="ex-student"
                                                                name="student_type"
                                                                value="Ex Student"
                                                                className="mr-2"
                                                                checked={discountType === "Ex Student"}
                                                                onChange={(e) => setDiscountType(e.target.value)}
                                                            />
                                                            <label htmlFor="ex-student">Ex Student</label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="coupon"
                                                                name="student_type"
                                                                value="coupon"
                                                                className="mr-2"
                                                                checked={discountType === "coupon"}
                                                                onChange={(e) => setDiscountType(e.target.value)}
                                                            />
                                                            <label htmlFor="coupon">Have Coupon Code</label>
                                                        </div>
                                                    </div>
                                                    <div className='mt-6'>
                                                        {discountType === "Ex Student" && (
                                                            <>
                                                                <div className='flex sm:flex-row flex-col gap-6 items-center justify-between'>
                                                                    <div className='sm:w-1/2 w-full flex flex-col gap-5'>
                                                                        <p>Erollment Number (EX) :</p>
                                                                        <input type="text" value={enrollmentNo} onChange={(e) => setEnrollmentNo(e.target.value)} className='bg-[#f5f5f5] w-full p-3 rounded text-[#221638] outline-none focus-within:bg-white focus-within:border focus-within:border-customFC6200' />
                                                                    </div>
                                                                    <div className='sm:w-1/2 w-full'>
                                                                        <div className='flex flex-col gap-5'>
                                                                            <p>Attach ID Proof (For Discount) :</p>
                                                                            <div className='bg-[#f5f5f5] w-full p-[9px]'>
                                                                                <input type="file" onChange={handleFileInput} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-center mt-11 mb-4'>
                                                                    <button onClick={SubmitExStudentDiscount} className='bg-customFC6200 rounded py-[0.375rem] px-[0.75rem] text-white border border-[#007bff]'>
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}
                                                        {discountType === "coupon" && (
                                                            <>
                                                                <div className='flex gap-6 items-center justify-between'>
                                                                    <div className='sm:w-1/2 w-full flex flex-col gap-5'>
                                                                        <p className='text-[#606060]'>Discount Code*</p>
                                                                        <input type="text" placeholder='Coupon Code' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} className='bg-[#f5f5f5] w-full p-3 rounded text-[#495057] placeholder:text-[#495057] outline-none focus-within:bg-white focus-within:border focus-within:border-customFC6200' />
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-center mt-11 mb-4'>
                                                                    <button onClick={SubmitCouponDiscount} className='bg-customFC6200 rounded py-[0.375rem] px-[0.75rem] text-white border border-[#007bff]'>
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='flex sm:justify-end mt-3 sm:mt-0 justify-center'>
                                        <span className='sm:w-2/3 w-full text-center sm:text-start'>Have any Discount Code? <button className='text-blue-500 hover:text-blue-600' onClick={() => setDiscount("open")}>Click here</button></span>
                                    </div>
                                )}
                                <div className='flex justify-between items-center mt-16 mb-10 text-[#212529]'>
                                    <span className='max-w-[55%]'>Please Pay
                                        {paymentnode?.map((item, index) => (
                                            item?.dueAmount !== 0 && (item?.amount - item?.paid - (item?.discountTotal || 0)) !== 0 && (
                                                <span key={index}> {item?.title} {index < paymentnode.length - 1 && paymentnode[index + 1]?.dueAmount !== 0 ? ' and then ' : ''}</span>
                                            )
                                        ))}

                                    </span>
                                    <div className='flex gap-4 items-center font-semibold'>
                                        {typeof paymentnode?.[0]?.discountTotal === "number" && paymentnode[0]?.discountTotal > 0 && (
                                            <span>
                                                Payable Amount: ₹ <span className='text-customFC6200 line-through'>{paymentnode[0]?.amount}</span> /- ₹{paymentnode[0]?.amount - paymentnode[0]?.discountTotal} /-
                                            </span>
                                        )}
                                        <button onClick={RedirectToGateway} className='text-white bg-[#28a745] hover:bg-[#218838] py-[0.375rem] px-[0.75rem] rounded'>Proceed To Payment</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PaymentModal