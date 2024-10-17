import React from 'react'

const OnlineAdmission = () => {
    return (
        <div>
            <div className='container mt-8'>
                <h1 className='text-xl font-bold mb-3'>Online Admission</h1>
                <p className="text-sm mb-3">Candidates may also apply through the Online Admission Process.</p>
                <ul className='list-disc list-inside text-sm'>
                    <li> Click on the ‘Apply Online’ option available at top of the Home page.  </li>
                    <li> The Application Form will open. Fill in the complete form.  </li>
                    <li> Full Name, Date of Birth, Email ID, Mobile No. & Your Address (City, State & Pin) are some of the mandatory fields.  </li>
                    <li> Fill in the Program Details.  </li>
                    <li>  Fill in Your Identity Proof Details. </li>
                    <li> Fill in the details of your educational qualifications and your Guardian’s details.  </li>
                    <li> Upload scanned copies of your photograph & signature.  </li>
                    <li>  Tick Mark on “I have read and agree to all the details”. </li>
                    <li>  Submit the form. </li>
                    <li>  Complete the registration by making the payment through any one of the following modes: </li>
                </ul>
                <p className='mt-2 text-sm mb-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A)&nbsp; Debit Card &nbsp;&nbsp;  B) &nbsp; Credit Card &nbsp;&nbsp;   C)  Net Banking</p>
                <ul className='text-sm list-disc list-inside'>
                    <li>  Students can pay registration fee, first installment or full fees. </li>
                    <li>  Immediately after your Registration, your receipt will be generated. </li>
                    <li> Click on the Print button or Save button.  </li>
                    <li>  Please bring a print out of this receipt, two passport size photographs and Original & photocopy of identity proof for verifying your candidature & receiving IES MASTER ID Card.
                    </li>
                    <li>  Student can pay first installment or full fees through NEFT by adding beneficiary Account. </li>
                    <li className='mt-5 mb-5'><strong>Account details (Delhi Centre) :-</strong>
                        <div className='flex flex-col md:flex-row justify-between items-stretch md:items-stretch gap-6 mt-2'>

                            <div className='flex flex-col flex-grow basis-1/3 px-3 py-5 bg-emerald-50 border border-emerald-100 rounded-md'>
                                <div className='mb-5'>
                                    <h4 className='text-green-600 text-base'>IES MASTER</h4>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p>Current Account No. : 20552560000120</p>
                                    <p>Bank Name: HDFC Bank</p>
                                    <p>Branch Name: Katwaria Sarai</p>
                                    <p>RTGS/NEFT IFSC Code : HDFC0002055</p>
                                </div>
                            </div>


                            <div className='flex flex-col flex-grow basis-1/3 px-3 py-5 bg-emerald-50 border border-emerald-100 rounded-md'>
                                <div className='mb-5'>
                                    <h4 className='text-green-600 text-base'>IES MASTER LEARNERS PRIVATE LIMITED</h4>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p>Current Account No. : 50200038977441</p>
                                    <p>Bank Name: HDFC Bank</p>
                                    <p>Branch Name: Katwaria Sarai</p>
                                    <p>RTGS/NEFT IFSC Code : HDFC0002055</p>
                                </div>
                            </div>


                            <div className='flex flex-col flex-grow basis-1/3 px-3 py-5 bg-emerald-50 border border-emerald-100 rounded-md'>
                                <div className='mb-5'>
                                    <h4 className='text-green-600 text-base'>IES MASTER</h4>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p>Current Account No. : 50200009774900</p>
                                    <p>Bank Name: HDFC Bank</p>
                                    <p>Branch Name: Katwaria Sarai</p>
                                    <p>RTGS/NEFT IFSC Code : HDFC0002055</p>
                                </div>
                            </div>
                        </div>


                    </li>
                    <li>
                        After doing NEFT, please send the details at <strong>info@iesmaster.org</strong>
                    </li>
                    <li>
                        Convenience charges of 1.00% + Service tax will be applicable on payment through Debit Card.
                    </li>
                    <li>
                        Convenience charges of 2.00% + Service tax will be applicable on payment through Credit Card.
                    </li>
                    <li>
                        Convenience charges of Rs. 17 + Service tax will be applicable on payment through Net Banking.
                    </li>
                    <li>
                        The fees will be refunded only if the student informs us in writing through his/her valid email id as mentioned in the Form within 5 days of commencement date of the Batch. No refund request shall be entertained thereafter.
                    </li>
                </ul>
                <p className='text-sm mt-3'>
                    Payment Confirmation will be issued after 48 hrs. of Registration.
                </p>
                <div className='flex justify-end mt-4 mb-11'>
                    <button className='bg-blue-600 text-white px-2 py-1 rounded-md'>
                        Enroll Now
                    </button>
                </div>
            </div>
            <div className='bg-emerald-50'>
                <div className='container py-10'>
                    <h4 className='text-xl font-bold '>Online Test Series</h4>
                    <div className='text-sm flex gap-2'>
                        <p>Visit</p>
                        <a href='#' target='_blank' className='text-blue-600 hover:underline'>Online Test Portal.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineAdmission
