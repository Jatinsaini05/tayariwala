import React, { useState } from 'react';

const ProgramPackages = () => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div>
            <div className='container'>
                <h2 className='text-xl font-semibold text-zinc-900 mt-14 mb-5 text-center lg:text-left'>Program Packages</h2>

                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2">
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 0 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7'  : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(0)}
                    >
                        Mock Interview
                    </button>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 1 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7'  : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(1)}
                    >
                        Online Course for Interview
                    </button>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 2 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7'  : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(2)}
                    >
                        DAF Session
                    </button>
                </div>

                <hr className='mt-10' />


                <div>
                    {activeSection === 0 && (
                        <div className='mt-5'>
                            <div className="overflow-x-auto scrollbar-hide">
                                <table className='min-w-full text-sm'>
                                    <thead>
                                        <tr className='text-white bg-custom007339'>
                                            <td className="border border-custom025D2F px-2 py-1">Date</td>
                                            <td className="px-2 py-1 border border-custom025D2F">Timing</td>
                                            <td className="px-2 py-1 border border-custom025D2F">Mode</td>
                                            <td className="px-2 py-1 border border-custom025D2F">Fee</td>
                                            <td className="px-2 py-1 border border-custom025D2F"></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key="1">
                                            <td className="p-2 border">22 September</td>
                                            <td className="p-2 border">10:00 AM to 07:00 PM</td>
                                            <td className="p-2 border">Online/Offline</td>
                                            <td className="p-2 border">
                                                <p>500/-</p>
                                                <p className='mt-2'>Free for IES MASTER Student enrolled in any program at IES MASTER</p>
                                            </td>
                                            <td className="p-2 border">
                                                <button className='bg-custom337AB7 text-white rounded hover:bg-custom286090 py-1 px-2'>Closed</button>
                                            </td>
                                        </tr>
                                        <tr key="2" className='bg-customD8FAD4'>
                                            <td className="p-2 border">29 September</td>
                                            <td className="p-2 border">10:00 AM to 07:00 PM</td>
                                            <td className="p-2 border">Online/Offline</td>
                                            <td className="p-2 border">
                                                <p>500/-</p>
                                                <p className='mt-2'>Free for IES MASTER Student enrolled in any program at IES MASTER</p>
                                            </td>
                                            <td className="p-2 border">
                                                <div className='flex justify-end'>
                                                    <button className='bg-custom337AB7 text-white rounded hover:bg-custom286090 py-1 px-2'>Enroll Now</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr key="3">
                                            <td className="p-2 border">06 October</td>
                                            <td className="p-2 border">10:00 AM to 07:00 PM</td>
                                            <td className="p-2 border">Online/Offline</td>
                                            <td className="p-2 border">
                                                <p>500/-</p>
                                                <p className='mt-2'>Free for IES MASTER Student enrolled in any program at IES MASTER</p>
                                            </td>
                                            <td className="p-2 border">
                                                <div className='flex justify-end'>
                                                    <button className='bg-custom337AB7 text-white rounded hover:bg-custom286090 py-1 px-2'>Enroll Now</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className='text-sm font-semibold mt-10'>Note</p>
                            <ul className='list-disc list-inside mt-5 text-sm'>
                                <li>Ex-students are entitled to one complimentary mock interview session.</li>
                                <li>For additional mock sessions, a fee of ₹500 will be applied for each session.</li>
                                <li>Students are suggested to choose their interview dates thoughtfully, considering their availability and the UPSC interview schedule.</li>
                            </ul>
                            <p className='text-sm font-semibold mt-10'>Online Interview Instruction</p>
                            <ul className='list-disc list-inside mt-5 text-sm'>
                                <li>On the allotted date and time for Online Mock Interview, <a href="#" className="text-custom337AB7 font-semibold hover:text-custom286090 hover:underline">Login to your student zone</a></li>
                                <li>Go to Interview Course section located on the left side menu. Click on it and select Interviews.</li>
                                <li>The interview schedule box will appear on the right side. Click on Join Live Interview button.</li>
                                <li>Now make your camera and microphone on to start your Online Mock Interview session.</li>
                                <li>Check your Internet connectivity and ambience lighting before starting your session.</li>
                                <li>In case of any interruption during the Mock Interview Session, you can connect again only in the allotted time slot.</li>
                                <li>In case of Internet breakdown or failure to reconnect during the allotted time slot, contact IES Master Help Desk at 80100 09955.</li>
                                <li>To end the session, select the End Call button.</li>
                            </ul>
                        </div>
                    )}

                    {activeSection === 1 && (
                        <div className='my-5'>
                            <h><b className='text-neutral-500 text-sm'>Interview Guidance Program Schedule</b></h>
                            <table className='w-full text-sm mt-5 mb-5'>
                                <thead>
                                    <tr className='text-white bg-custom007339'>
                                        <td className="border border-custom025D2F px-2 py-1">Date</td>
                                        <td className="px-2 py-1 border border-custom025D2F">Session</td>
                                        <td className="px-2 py-1 border border-custom025D2F">Mode</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key="">
                                        <td className="p-2 border">19 August</td>
                                        <td className="p-2 border">Technical Session by Kanchan Sir</td>
                                        <td className="p-2 border">Online</td>
                                    </tr>
                                    <tr key="" className='bg-customD8FAD4'>
                                        <td className="p-2 border">20 August</td>
                                        <td className="p-2 border">Technical</td>
                                        <td className="p-2 border">Online</td>
                                    </tr>
                                    <tr key="">
                                        <td className="p-2 border">21 August</td>
                                        <td className="p-2 border">Technical</td>
                                        <td className="p-2 border">Online</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='text-sm'>
                                <p><strong>Note:-</strong></p>
                                <ul className='list-inside list-disc my-3'>
                                    <li>
                                        All the lectures will be provided in Recorded Videos.
                                    </li>
                                    <li>
                                        Books are to be collected from our main office.
                                    </li>
                                    <li>
                                        If students want the books to be delivered at their correspondense address, they have to pay the courier charges (Rs. 250) extra.
                                    </li>
                                    <li>
                                        Courier charges can be paid through NEFT by adding beneficiary Account.
                                    </li>
                                    <li>
                                        Once payment done, students are requested to send the transaction details to <b className='italic'>info@iesmaster.org &nbsp; </b> from their registered email ID.
                                    </li>
                                    <li>
                                        <b>Account details are mentioned below:-</b>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-4 border w-max rounded-md py-5 bg-emerald-50 text-base text-custom1DB24E'>
                                <h4 className="">IES MASTER PUBLICATION<br></br>
                                    Current Account No. : 50200009774900<br></br>
                                    Bank Name:- HDFC Bank<br></br>
                                    Branch Name :- Katwaria Sarai<br></br>
                                    RTGS/NEFT IFSC Code : HDFC0002055</h4>
                            </div>
                            <div className='text-sm'>
                                <p className='mb-4'><b><u>Instruction to access Online Interview Guidance Program</u></b></p>
                                <p className='mb-4'><strong>How to Access Recorded Lectures</strong></p>
                                <ul>
                                    <li>Recorded lectures can be accessed through Mobile &amp; Desktop App.</li>
                                    <li>Open IES Master Android App/Windows/Mac Desktop app. If you have not installed, <strong><a className='text-custom337AB7 hover:underline hover:text-custom286090' href="#" target="_blank"> Download the app</a></strong></li>
                                    <li>Go to&nbsp;<strong>My Video Course</strong></li>
                                    <li>Select Your Course</li>
                                    <li>Now you can watch video recorded lectures clicking on individual curriculum &amp; subjects.</li>
                                </ul>
                                <p className='my-4'><strong>How to access Class Notes</strong></p>
                                <ul className='list-disc list-inside'>
                                    <li>Class Notes can be downloaded through Web Browser (PC/Laptop/Mobile)</li>
                                    <li><strong><a href="#" className='text-custom337AB7 hover:underline hover:text-custom286090' target="_blank">Login to your student zone</a></strong>&nbsp;with username and password</li>
                                    <li>Click on&nbsp;<strong>My Video Course</strong></li>
                                    <li>Select Your Course/Product</li>
                                    <li>Now you can view/download class notes clicking on individual curriculum &amp; subjects.</li>
                                </ul>
                                <p className='my-4'><strong>Mock Interview Instruction</strong></p>
                                <ul className='list-disc list-inside'>
                                    <li>On the allotted date and time for Online Mock Interview,&nbsp;<strong><a href="#" className='text-custom337AB7 hover:underline hover:text-custom286090' target="_blank">Login to your student zone</a></strong></li>
                                    <li>Go to&nbsp;<strong>Interview Course&nbsp;</strong>section located on the left side menu bar. Click on it and select&nbsp;<strong>Interviews.</strong></li>
                                    <li>The interview schedule box will appear on right side. Click on&nbsp;<strong>Join Live Interview</strong>button</li>
                                    <li>Now make your camera and microphone on to start your Online Mock Interview session.</li>
                                    <li>Check your Internet connectivity and ambience lighting before starting your session.</li>
                                    <li>In case of any interruption during the Mock Interview Session, you can connect again only in the allotted time slot.</li>
                                    <li>In case of Internet breakdown or failure to reconnect during the allotted time slot, connect IES Master Help Desk at 80100 09955.</li>
                                    <li>To end the session, select the End Call button.</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {activeSection === 2 && (
                        <div className='mt-5'>
                            <table className='w-full text-sm'>
                                <thead>
                                    <tr className='text-white bg-custom007339'>
                                        <td className="border border-custom025D2F px-2 py-1">Date</td>
                                        <td className="px-2 py-1 border border-custom025D2F">Timing</td>
                                        <td className="px-2 py-1 border border-custom025D2F">Session</td>
                                        <td className="px-2 py-1 border border-custom025D2F">Mode</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key="">
                                        <td className="p-2 border">17-Aug-2024</td>
                                        <td className="p-2 border">10:00 AM to 07:00 PM</td>
                                        <td className="p-2 border"><b>DAF Filling</b><br></br>One to One Interaction Session</td>
                                        <td className="p-2 border">Online</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className='flex justify-end my-8'>
                        <button className='text-sm py-1 px-2 text-white rounded bg-custom337AB7 hover:bg-custom286090'>
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramPackages;
