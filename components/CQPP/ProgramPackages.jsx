import React, { useState } from 'react';
import Link from 'next/link';


const Program = () => {

    const [activeSection, setActiveSection] = useState(0);
    const programData = [
        { id: 1, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 2, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 3, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 4, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 5, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 6, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 7, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' },
        { id: 8, name: 'Conventional Free Full Length Tests', stream: 'CE, ME, EE, E&T', examDate: '16th June', totalTests: 2, Mode: 'Available in both Offline & Online mode', Fee: '1000 + GST' }
    ];

    return (
        <div>
            <div className='bg-customEBF5F3'>
                <div className='container pt-10'>
                    <div className='px-3 pt-5'>
                        <h2 className='text-xl pb-3'><strong>Program Packages</strong></h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 xl:gap-32'>
                            {programData.map((program) => (
                                <div key={program.id} className='border rounded-md border-stone-300 p-2 bg-white'>
                                    <p className='text-sm text-custom5CB85C'><b>{program.name}</b></p>
                                    <p className='text-[11px] mt-3'>
                                        <strong>Stream:</strong> {program.stream}<br />
                                        <strong>Exam Date:</strong> {program.examDate}<br />
                                        <br />
                                        <b>Total Tests:</b> {program.totalTests}
                                    </p>
                                    <p className='text-[11px]'>
                                        <strong>Mode:</strong> {program.Mode}<br />
                                        <br />
                                        <br />
                                        &nbsp;
                                    </p>
                                    <p className='text-[11px] mb-3'>
                                        <strong>Fee: </strong> {program.Fee}
                                    </p>
                                    <button className='text-sm text-center bg-custom5CB85C text-white py-1 w-full rounded-md'>Enroll Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-8 pb-12 px-10 md:px-0'>
                        <p className='text-sm'><strong>Note: </strong></p>
                        <p className='text-xs'>  Live Online Classes are accessible on Mobile, Tab, Desktop/Laptop either through IES Master Android App or&nbsp;Desktop App (Windows OS/ macOS) installed on your smartphone/PC with a stable internet connection.&nbsp;The videos can be accessed only on one device (either mobile app/ desktop app) in which you will login first as this device is registered with us to provide video access and you can not access the videos from other than registered device.</p>
                        <p className='text-xs mt-5'>If a subject has already been covered in either live or offline mode before students join the CQPP, it will be accessible to students in recorded format only, regardless of whether they opt for offline or online batches</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='text-xl font-semibold text-zinc-900 mt-14 mb-5 text-center lg:text-left'>Conventional Question Practise Program Features</h2>

                <div className="px-10 md:px-0 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2">
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 0 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7' : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(0)}
                    >
                        Complete Package
                    </button>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 1 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7' : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(1)}
                    >
                        Classroom Program
                    </button>
                    <button
                        className={`text-sm px-2 py-1 ${activeSection === 2 ? 'bg-customD7F9D3 border-2 border-custom33A037 rounded text-custom337AB7' : 'text-blue-600 hover:bg-zinc-100'}`}
                        onClick={() => setActiveSection(2)}
                    >
                        Conventional Offline/Online Test Series
                    </button>
                </div>
                <div className='mt-5 px-10 md:px-0'>
                    {activeSection === 0 && (
                        <div>
                            <h2 className="text-xl font-bold">Complete Package</h2>
                            <hr className='mt-8 mb-6'></hr>
                            <div class="text-sm">
                                <p><b>Stream:</b> CE</p>

                                <p className='my-3'><a className='text-custom337AB7 hover:text-custom286090 hover:underline hover:cursor-pointer' onClick={() => setActiveSection(1)}>Classroom Program</a> +
                                    <a className='text-custom337AB7 hover:text-custom286090 hover:underline hover:cursor-pointer' onClick={() => setActiveSection(2)}> Conventional Test Series</a></p>

                                <p className='my-3'><b>The program helps you improve:</b></p>
                                <ul className='list-disc list-inside'>
                                    <li>Subject wise Discussion and Practice Session of 300-350 Hrs</li>
                                    <li>Covers all Concepts as per ESE Mains Exam Aspects</li>
                                    <li>Revised, Updated and Exam Oriented Practice Booklets with Solutions Outlines</li>
                                    <li>Exclusive Test Series with Unique Approach : Test on New Topics + Revision Topics</li>
                                    <li>How to Write Answer (Counselling Session)</li>
                                    <li>Improve Question Selection Ability &amp; Time Management</li>
                                </ul>

                            </div>
                        </div>
                    )}
                    {activeSection === 1 && (
                        <div>
                            <h2 className="text-xl font-bold">Conventional Classroom Practice program</h2>
                            <hr className='mt-8 mb-6'></hr>
                            <div class="text-sm">
                                <p><b>Stream:</b> CE</p>
                                <p className='my-3'><b>Duration: </b>300-350 hours (Monday to Sunday)</p>
                                <p><b>Class starts from: </b>08th March, 2024</p>
                                <p className='my-3'><b>Features</b></p>
                                <ul className='list-disc list-inside'>
                                    <li>Subject wise Discussion and Practice Session of 300-350 Hrs</li>
                                    <li>Covers all Concepts as per ESE Mains Exam Aspects</li>
                                    <li>Test after completion of Each Subject to analyze your performance</li>
                                    <li>Revised, Updated and Exam Oriented Practice Booklets with Solutions Outlines</li>
                                    <li>How to Write Answer (Counselling Session)</li>
                                </ul>

                            </div>

                        </div>
                    )}

                    {activeSection === 2 && (
                        <div>
                            <h2 className="text-xl font-bold">Conventional Classroom Practice program</h2>
                            <hr className='mt-8 mb-6'></hr>
                            <div class="text-sm">
                                <p><b>Stream:</b> CE, ME, EE, ECE</p>
                                <p className='my-3'><b>Start Date: </b>31st March, 2024</p>
                                <p><b>Timing: </b>As Per 
                                <Link href="#" className='text-custom337AB7 hover:text-custom286090 hover:underline'> Schedule</Link> 
                                </p>
                                <p className='my-3'><b>Total Tests: </b>11 Mixed Topic-wise Tests + 6 Full Length Test</p>
                                <p className='my-3'><b>Features</b></p>
                                <ul className='list-disc list-inside'>
                                    <li>Subject wise Discussion and Practice Session of 300-350 Hrs</li>
                                    <li>Covers all Concepts as per ESE Mains Exam Aspects</li>
                                    <li>Revised, Updated and Exam Oriented Practice Booklets with Solutions Outlines</li>
                                    <li>Exclusive Test Series with Unique Approach : Test on New Topics + Revision Topics</li>
                                    <li>How to Write Answer (Counselling Session)</li>
                                    <li>Improve Question Selection Ability &amp; Time Management</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <button className='text-sm py-1 px-2 mt-3 mb-12 text-white rounded bg-custom337AB7 hover:bg-custom286090'>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Program; 