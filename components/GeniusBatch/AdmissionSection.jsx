import React, { useState } from 'react';

const AdmissionSection = () => {
    const [activeSection, setActiveSection] = useState('walk-in');

    return (
        <div>
            <div className='container py-10 text-xl'>
                <h1 className='mb-4'>How to enroll</h1>
                <div className='flex justify-start gap-1'>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 'walk-in' ? 'bg-green-200  border-2 border-green-400 rounded text-blue-600' : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection('walk-in')}
                    >
                        Walk in Admission
                    </button>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 'online' ? 'bg-green-200 border-2 border-green-400 rounded text-blue-600' : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection('online')}
                    >
                        Online Admission
                    </button>
                </div>

                {/* Walk-in Admission Section */}
                {activeSection === 'walk-in' && (
                    <div className='mt-4'>
                        <p className='text-sm mb-3'>You may visit IES MASTER OFFICE where you are required to complete the following formalities:</p>
                        <ul className='list-disc list-inside text-sm mb-3'>
                            <li>Fill up the admission form.</li>
                            <li>Attach 2- photographs with the Application Form</li>
                            <li>Attach Self- Attested copy of Identity/ Address Proof (Such as Aadhaar Card/ Voter ID/ Driving License/ Passport etc.)</li>
                            <li>The fees can be paid via Cash or Demand draft.</li>
                            <li>The DD should be made in favor of <strong>“IES MASTER“</strong> payable at New Delhi for Tuition Fee and in favor of <strong>“IESMASTER PUBLICATION“</strong> for study material.</li>
                            <li>Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.</li>
                        </ul>
                        <p className='text-sm'>NOTE: Cheque payment is not acceptable
                        </p>
                    </div>
                )}

                {/* Online Admission Section */}
                {activeSection === 'online' && (
                    <div className='mt-4'>
                        <h1 className='text-xl mb-5 font-semibold'>Online Admission</h1>
                        <hr className='mb-4'></hr>
                        <p className='text-sm font-semibold mb-4'>New Users</p>
                        <ul className='text-sm list-disc list-inside mb-9'>
                            <li>
                            Visit <a href="#" className='text-blue-600 underline'>https://iesmaster.org/</a>, and click on Apply Online
                            </li>
                            <li>
                            On the <strong> Online Admission</strong> Form page that opens, select your Centre, Session, and Stream
                            </li>
                            <li>
                            Under Program, choose <strong>1 Year Classroom Program </strong> from the drop-down. Select the Program Package, and Course from the respective dropdowns
                            </li>
                            <li>
                            Now fill all the mandatory fields under various sections
                            </li>
                            <li>
                            Read the Terms & Conditions, check the box next to Accept Terms & Conditions, and then click on Next to proceed
                            </li>
                            <li>
                            Check again the details provided by you in the Online Admission Form, and then click on Confirm & Next
                            </li>
                            <li>
                            Now under the Payment Details section, choose the payment method and payment option. Check the payable amount, and then click on Proceed to Payment to make the payment
                            </li>
                        </ul>
                        <p className='text-sm font-semibold mb-4'>Registered Users</p>
                        <ul className='text-sm list-disc list-inside mb-9'>
                            <li> Click on the Login button </li>
                            <li> Enter your registered e-mail ID and password to login </li>
                            <li> On the student’s dashboard page, click on the Apply Online option from the left panel </li>
                            <li> On the Online Admission Form that opens, select your Centre and Session, and Stream. </li>
                            <li>  Under Program, choose <strong>1 Year Classroom Program </strong> from the drop-down. Select the Program Package, and Course from the respective dropdowns</li>
                            <li> Read the Terms & Conditions, check the box next to Accept Terms & Conditions, and then click on Next to proceed </li>
                            <li> Check again the details provided by you in the Online Admission Form, and then click on Confirm & Next </li>
                            <li> Now under the Payment Details section, choose the payment method and payment option. Check the payable amount, and then click on Proceed to Payment to make the payment </li>
                            <li> Candidates are required to bring along the print-out of this receipt, two passport size photographs and original & photocopy of identity proof to IES Master Office for verification and receiving the IES Master Student’s ID Card </li>
                            <li> Convenience charge of 1.00% + Service Tax will be applicable on payment through Debit Card </li>
                            <li> Convenience charge of 1.10% + Service Tax will be applicable on payment through Credit Card </li>
                            <li> Convenience charge of Rs. 17 + Service Tax will be applicable on payment through Net Banking </li>
                            <li> Payment Confirmation will be issued after 48 hours of registration </li>
                        </ul>
                        <div className='flex justify-end items-center'>
                            <button className='text-white bg-blue-600 hover:bg-blue-700 px-2 rounded py-2 text-sm'>Enroll Now</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdmissionSection;
