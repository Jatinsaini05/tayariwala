import React, { useState } from 'react'

const HowtoEnroll = () => {
    const [activeSection, setActiveSection] = useState(0);
    return (
        <div>

            <div className='bg-customEBF5F3'>
                <div className='container pt-14 pb-14'>
                    <h2 className='text-xl font-semibold text-zinc-900  mb-5 text-center lg:text-left'>How To Enroll</h2>

                    <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2">
                        <button
                            className={`text-sm px-2 py-1 ${activeSection === 0 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7' : 'text-blue-600 hover:bg-zinc-100'}`}
                            onClick={() => setActiveSection(0)}
                        >
                            Online Admission
                        </button>
                        <button
                            className={`text-sm px-2 py-1 ${activeSection === 1 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7' : 'text-blue-600 hover:bg-zinc-100'}`}
                            onClick={() => setActiveSection(1)}
                        >
                            Walk in Admission
                        </button>
                    </div>
                    {activeSection === 0 && (
                        <div className='mt-5'>
                            <h1 className='text-xl font-bold mb-8'>Online Admission</h1>
                            <hr className='mb-4'></hr>
                            <ul className='list-disc list-inside text-sm'>
                                <li>For online registration, click on the <strong>‘Apply Online’</strong> option available at the top of the home page</li>
                                <li>In the Application Form that displays, Select the Session <strong>2022-23</strong>&nbsp;and fill in all the required details</li>
                                <li>Full Name, Date of Birth, E-mail address, Mobile No. &amp; Your Address (City, State &amp; Pin Code) are some of the mandatory fields</li>
                                <li>Fill in the Program Details</li>
                                <li>Fill in your Identity Proof details</li>
                                <li>Fill in the details of your Educational Qualifications and your details about your Guardian</li>
                                <li>Upload scanned copies of your Photograph and Signature</li>
                                <li>Tick to select the box next to “I have read and agree to all the details”</li>
                                <li>Click on the ‘Submit’ button to submit your Application Form</li>
                                <li>Complete the registration procedure by making the payment through any one of the following modes:&nbsp;&nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) Debit Card&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;b)&nbsp;Credit Card&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;c)&nbsp;Net Banking</li>
                                <li>Students can pay registration fee, first instalment or full fees</li>
                                <li>Immediately after your Registration, your receipt will be generated</li>
                                <li>Click on the <strong>Print</strong> button or <strong>Save</strong> button to print/save the receipt</li>
                                <li>Please bring a print out of this receipt, two passport size photographs and original &amp; photocopy of identity proof for verifying your candidature and receiving the IES MASTER ID Card
                                </li>
                                <ul className='list-inside list-disc pl-10'>
                                    <li>Convenience charges of 1.00% + Service tax will be applicable on payment through Debit Card</li>
                                    <li>Convenience charges of 1.10% + Service tax will be applicable on payment through Credit Card</li>
                                    <li>Convenience charges of Rs 17 + Service tax will be applicable on payment through Net Banking</li>
                                </ul>
                                <li>Payment Confirmation will be issued after 48 hrs of Registration</li>
                            </ul>
                            <div className='flex justify-end mt-8'>
                                <button className='text-sm py-1 px-2 text-white rounded bg-custom337AB7 hover:bg-custom286090'>
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    )}
                    {activeSection === 1 && (
                        <div className='mt-5 text-sm'>
                            <p>You may visit in person at IES MASTER Delhi office, and complete the following formalities to register for the Interview Guidance Program:</p>
                            <ul className='list-inside list-disc my-3'>
                                <li>Fill in the Application Form</li>
                                <li>Attach your DAF filled form copy</li>
                                <li>Attach two passport size photographs with the Application Form</li>
                                <li>Attach self-attested copy of Identity Proof (Voter ID/ PAN Card/ Driving License/Passport)</li>
                                <li>The program fee can be paid via Cash&nbsp;or online available mode.</li>
                            </ul>
                            <p>&nbsp;<strong>NOTE:</strong> Payment through cheque is not acceptable.</p>
                        </div>
                    )}
                </div>

            </div>
            <div className='container'>

            <div className='my-12'>
                <h2 className='text-xl my-4'><b>Results</b></h2>
                <div className='grid grid-cols-2'>
                    <div className='ml-3 rounded hover:bg-customE6E6E6 cursor-pointer border w-max py-1 px-2 text-sm'>
                        ESE Toppers
                    </div>
                    <div className='ml-3 rounded hover:bg-customE6E6E6 cursor-pointer border w-max py-1 px-2 text-sm'>
                        ESE Toppers
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HowtoEnroll