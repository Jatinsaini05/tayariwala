import React from 'react'
import Link from 'next/link'

const TestSeriesSchedule = () => {
    return (
        <div>
            <div className='bg-emerald-50'>
                <div className='container'>
                    <div className='px-10 md:px-0 pb-12'>
                        <h2 className='text-xl font-semibold pt-12'>Test Series Schedule</h2>
                        <div className="mt-3 text-sm grid sm:grid-cols-2 md:grid-cols-4 justify-between gap-12">
                            <div className='border border-stone-300 bg-white p-3 rounded-md '>
                                <h4 className="mb-2"><b>Civil Engineering</b></h4>
                                <p className="mb-2">Start Date: 31st March, 2024</p>
                                <p className="mb-2">Total Test: 17 Tests</p>
                                <p className="mb-2">(11 Mixed Topic Wise Tests + 6 full Length Tests)</p>
                                <div className='flex gap-2'><Link href="#" className="text-white px-2 py-1 rounded bg-[#5CB85C] hover:text-blue-800 hover:underline">View Schedule</Link>
                                    <Link href="#" className="text-white px-2 py-1 rounded bg-[#337AB7] hover:text-blue-800 hover:underline">Enroll Now</Link>
                                </div>
                            </div>
                            <div className='border border-stone-300 bg-white p-3 rounded-md '>
                                <h4 className="mb-2"><b>Civil Engineering</b></h4>
                                <p className="mb-2">Start Date: 31st March, 2024</p>
                                <p className="mb-2">Total Test: 17 Tests</p>
                                <p className="mb-2">(11 Mixed Topic Wise Tests + 6 full Length Tests)</p>
                                <div className='flex gap-2'><Link href="#" className="text-white px-2 py-1 rounded bg-[#5CB85C] hover:text-blue-800 hover:underline">View Schedule</Link>
                                    <Link href="#" className="text-white px-2 py-1 rounded bg-[#337AB7] hover:text-blue-800 hover:underline">Enroll Now</Link>
                                </div>
                            </div>
                            <div className='border border-stone-300 bg-white p-3 rounded-md '>
                                <h4 className="mb-2"><b>Civil Engineering</b></h4>
                                <p className="mb-2">Start Date: 31st March, 2024</p>
                                <p className="mb-2">Total Test: 17 Tests</p>
                                <p className="mb-2">(11 Mixed Topic Wise Tests + 6 full Length Tests)</p>
                                <div className='flex gap-2'><Link href="#" className="text-white px-2 py-1 rounded bg-[#5CB85C] hover:text-blue-800 hover:underline">View Schedule</Link>
                                    <Link href="#" className="text-white px-2 py-1 rounded bg-[#337AB7] hover:text-blue-800 hover:underline">Enroll Now</Link>
                                </div>
                            </div>
                            <div className='border border-stone-300 bg-white p-3 rounded-md '>
                                <h4 className="mb-2"><b>Civil Engineering</b></h4>
                                <p className="mb-2">Start Date: 31st March, 2024</p>
                                <p className="mb-2">Total Test: 17 Tests</p>
                                <p className="mb-2">(11 Mixed Topic Wise Tests + 6 full Length Tests)</p>
                                <div className='flex gap-2'><Link href="#" className="text-white px-2 py-1 rounded bg-[#5CB85C] hover:text-blue-800 hover:underline">View Schedule</Link>
                                    <Link href="#" className="text-white px-2 py-1 rounded bg-[#337AB7] hover:text-blue-800 hover:underline">Enroll Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-10 px-10 md:px-0'>
                <h4 className='text-xl'><b>How to Use Conventional Online Test Series</b></h4>
                <p className='text-sm my-3'><strong>To access conventional online test series, follow below steps:</strong></p>
                <ol className='text-sm list-inside list-decimal'>
                    <li>Login to student zone. <Link href="#" className='text-blue-700 hover:to-blue-900 hover:underline'>Login here</Link></li>
                    <li>Go to <strong>"Conventional Exam"</strong> section in left side menu. Click <strong>"Online Tests"</strong></li>
                    <li>Download <strong>QCAB</strong> (Question-Cum-Answer-Book).</li>
                    <li>Write your answer in QCAB Format for better practice and real feel of UPSC Mains otherwise you can write your answer in A4 paper also.</li>
                    <li>Scan all the pages of your answer sheet properly with clear visibility in a single PDF File.</li>
                    <li>Answer Sheet PDF file size should not exceed to <strong>30 MB</strong>.</li>
                    <li>Upload your answer sheet before <strong>last date of submission</strong>.</li>
                    <li>You can re-upload your answer sheet if you find any issue in your uploaded sheet.</li>
                    <li>Click on<strong> "Confirm to Evaluate"</strong> Button to submit your answer sheet.</li>
                    <li>Check carefully before submission your answer sheet as you can't upload the file again once submitted.</li>
                    <li>You can view the Solution only after submission of your answer sheet.</li>
                    <li>Once your answer sheet gets evaluated, you can view it in the same panel with your score.</li>
                </ol>
            </div>
        </div>
    )
}

export default TestSeriesSchedule