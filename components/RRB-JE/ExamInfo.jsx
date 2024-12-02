import React from "react";
import Link from "next/link";

const ExamInfo = ({pageData}) => {
    return (
        <div className="container mb-32">
            {/* {JSON.stringify(pageData)} */}
            <section id="exam-info" className="px-2">
                <div>
                    <div>
                        <h1 className="sm:text-[40px] text-[35px] text-[#221638]">
                            {pageData?.heading}
                        </h1>
                        <div className="mt-3">
                            <span dangerouslySetInnerHTML={{__html: pageData?.content}}></span>
                            {/* <div className="text-[#606060] mt-3">
                                <p className="leading-7 mt-3">
                                    The RRB JE Notification 2024 has been released. This brief
                                    announcement appeared in the employment newspaper, revealing a
                                    total of 7,951 openings for various roles including Junior
                                    Engineer, Depot Material Superintendent, Chemical and
                                    Metallurgical Assistant, Chemical Supervisor (Research), and
                                    Metallurgical Supervisor (Research). Candidates can apply from
                                    July 30, 2024, to August 29, 2024. This is an excellent
                                    opportunity for those looking to pursue a career in the railway
                                    sector.&nbsp; &nbsp; &nbsp; &nbsp;
                                </p>
                                <ul className="mt-4 list-disc list-inside text-[#212529]">
                                    <li>
                                        Applicants must hold a relevant engineering degree or diploma
                                        to be eligible.
                                    </li>
                                    <li>
                                        The selection process consists of Computer Based Test (CBT) 1,
                                        Computer Based Test (CBT) 2, Document Verification, and a
                                        Medical Examination.
                                    </li>
                                    <li>The age limit for RRB JE candidates is 18-36 years.</li>
                                </ul>
                                <p className="mt-4">
                                    <b>RRB JE Exam Overview &amp; Important Dates</b>
                                </p>
                                <p className="mt-4">
                                    The RRB JE Recruitment Notification has been announced, offering
                                    7,951 vacancies. Prospective candidates can review the key
                                    highlights of the examination in the table below.
                                </p>
                                <div className="mt-4">
                                    <table className="border-collapse border w-full">
                                        <tbody>
                                            <tr className="border">
                                                <td colspan="3" className="p-4">
                                                    <p>
                                                        <strong>
                                                            RRB JE Recruitment 2024: Important Details
                                                        </strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Name of Organization</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>Indian Railways</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Exam Conducting Body</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>Railways Recruitment Board</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Post Name</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>Junior Engineer</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Advt.no</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>CEN-No. 03/2024</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Total Vacancy</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>7951</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Notification Release Date</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>27th July 2024</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Application Start Date</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>30th July 2024</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Application End Date</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>29th August 2024</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Mode of Exam</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <p>CBT</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Marking Scheme</p>
                                                </td>
                                                <td colspan="2" className="p-4 border text-[#212529]">
                                                    Negative Marking of 0.33 for a wrong answer.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>Official Website</p>
                                                </td>
                                                <td colspan="2" className="p-4 border">
                                                    <Link
                                                        href="#" className="font-semibold text-customFC6200"
                                                    >
                                                        RRB Official Website
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        <strong>RRB JE Notificatio 2024</strong>
                                    </p>
                                    <p className="mt-4">
                                        The <strong>RRB JE Notification 2024</strong> is now available
                                        on the Railway Recruitment Board's official website. This
                                        notification outlines essential details about the RRB JE
                                        Recruitment, including the number of vacancies, application
                                        periods, exam schedules, and the selection procedure.
                                    </p>
                                    <p className="mt-4">
                                        <strong>RRB JE Exam Dates 2024</strong>
                                    </p>
                                    <p className="mt-4">
                                        Understanding the RRB JE Recruitment Exam Dates for each phase
                                        of the selection process is crucial for candidates to
                                        effectively plan their preparation. The exam dates for each
                                        stage are listed below.
                                    </p>
                                    <div className="mt-4">
                                        <table className="border w-full">
                                            <tbody>
                                                <tr class="table-head-bg-color">
                                                    <td className="p-4 border">
                                                        <p>
                                                            <strong>Event</strong>
                                                        </p>
                                                    </td>
                                                    <td className="p-4 border">
                                                        <p>
                                                            <b>Exam Date</b>
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">
                                                        <p>Computer Based Test -01</p>
                                                    </td>
                                                    <td className="p-4 border">
                                                        <p>To be announced&nbsp;</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">
                                                        <p>Computer Based Test -01</p>
                                                    </td>
                                                    <td className="p-4 border">
                                                        <p>To be announced</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">
                                                        <p>Document Verification</p>
                                                    </td>
                                                    <td className="p-4 border">
                                                        <p>To be announced</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 border">
                                                        <p>Medical Test</p>
                                                    </td>
                                                    <td className="p-4 border">
                                                        <p>To be announced</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    <strong>RRB JE Vacancy</strong>
                                    <strong> 2024</strong>
                                </p>
                                <p className="mt-4">
                                    The vacancies for RRB JE Recruitment 2024 have been released.
                                    These vacancies are categorized by discipline and zone. The
                                    detailed distribution of RRB JE vacancies for the 2024 cycle is
                                    provided below.
                                </p>
                                <div className="mt-4">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>Posts</strong>
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>Vacancies (2024)</strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>
                                                        Junior Engineers (JE),&nbsp;Chemical &amp;
                                                        Metallurgical Assistant,&nbsp;Depot Material
                                                        Superintendent (DMS)
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>7934</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>
                                                        Chemical Supervisor (Research) and Metallurgical
                                                        Supervisor (Research)
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>17 (RRB Gorakhpur Only)</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>TOTAL</strong>
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>7951</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4">
                                    <strong>RRB JE Application Fee</strong>
                                </p>
                                <p className="mt-4">
                                    Applicants must pay the specified application fee when applying
                                    for the RRB JE Exam. The application fee varies by category. The
                                    details are outlined below:
                                </p>
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>S.No.</strong>
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>Category</strong>
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        <strong>Application Fee</strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>1</p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>General</p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        ₹500 (A refund of ₹400 will be issued, minus bank
                                                        charges, upon appearing for the 1st stage CBT)
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">
                                                    <p>2</p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        SC, ST, Ex-Servicemen, Women, Transgender, Minorities,
                                                        or Economically Backward Classes (EBC)
                                                    </p>
                                                </td>
                                                <td className="p-4 border">
                                                    <p>
                                                        ₹250 (Refundable, minus applicable bank charges, upon
                                                        appearing for the 1st stage CBT)
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4">
                                    <strong>RRB JE Selection Process 2024</strong>
                                </p>
                                <p className="mt-4">
                                    The RRB JE Recruitment involves a comprehensive selection
                                    process designed to identify the most qualified candidates for
                                    the position. The process consists of four key stages:
                                </p>
                                <h3 className="mt-4 text-[28px] text-[#221638]">1. Computer-Based Test 1 (CBT 1)</h3>
                                <p className="mt-4">
                                    The initial stage is CBT 1, which assesses candidates' knowledge
                                    through objective-type multiple-choice questions. The exam
                                    covers four sections: Mathematics, General Awareness, General
                                    Science, and General Intelligence and Reasoning. Candidates have
                                    90 minutes to complete this test.
                                </p>
                                <h3 className="mt-4 text-[28px] text-[#221638]">2. Computer-Based Test 2 (CBT 2)</h3>
                                <p className="mt-4">
                                    Those who pass CBT 1 will be eligible to take CBT 2. This stage
                                    includes questions on five topics: General Awareness, Physics
                                    and Chemistry, Computer Application Basics, Environmental and
                                    Pollution Basics, and Technical Abilities. The duration of CBT 2
                                    is 2 hours.
                                </p>
                                <h3 className="mt-4 text-[28px] text-[#221638]">3. Document Verification</h3>
                                <p className="mt-4">
                                    After clearing the CBT stages, candidates must undergo Document
                                    Verification. During this phase, they are required to present
                                    original documents such as educational certificates,
                                    identification proofs, and other relevant credentials to confirm
                                    their eligibility and authenticity.
                                </p>
                                <h3 className="mt-4 text-[28px] text-[#221638]">4. Medical Examination</h3>
                                <p className="mt-4">
                                    The final stage is the Medical Examination, which assesses
                                    candidates' physical and medical fitness for the role. This step
                                    ensures that candidates are in good health and capable of
                                    performing the job duties effectively. Both Document
                                    Verification and the Medical Examination are crucial for
                                    ensuring that only suitable and qualified candidates are
                                    selected for the position.
                                </p>
                                <p className="mt-4">
                                    <strong>RRB JE Eligibility 2024</strong>
                                </p>
                                <p className="mt-4">
                                    To be considered for the RRB JE position, applicants must meet
                                    the specified eligibility criteria. Candidates who do not
                                    satisfy these requirements will be disqualified. Below are the
                                    details of the eligibility criteria:
                                </p>
                                <p className="mt-4">
                                    Candidates must be between 18 and 36 years of age, allowing for
                                    both recent graduates and individuals with prior work
                                    experience. To qualify, applicants should hold either a
                                    three-year diploma in a relevant discipline or a
                                    B.E./B.Tech/B.Sc degree in a related field. These educational
                                    qualifications are essential to ensure candidates have the
                                    requisite technical expertise for the role.
                                </p>
                                <p className="mt-4">
                                    <strong>RRB JE Exam Pattern 2024</strong>
                                </p>
                                <p className="mt-4">
                                    According to last year's RRB JE notification, the examination
                                    consists of two stages, both conducted online. The pattern for
                                    the upcoming exam may change, pending the release of the
                                    official notification. Below is an overview of the current RRB
                                    JE Exam Pattern:
                                </p>
                                <ul className="mt-4 list-inside list-disc text-[#212529]">
                                    <li>
                                        CBT 1 will feature questions from four sections: Mathematics,
                                        General Awareness, General Science, and General Intelligence
                                        and Reasoning. Mathematics and General Science will carry the
                                        most weight.
                                    </li>
                                    <li>
                                        The test will include objective-type multiple-choice
                                        questions, with a total duration of 90 minutes.
                                    </li>
                                    <li>
                                        There will be 100 questions, each worth one mark. Incorrect
                                        answers will incur a penalty of 1/3 mark.
                                    </li>
                                    <li>
                                        CBT 2 will cover five topics: General Awareness, Physics and
                                        Chemistry, Computer Application Basics, Environmental and
                                        Pollution Basics, and Technical Abilities.
                                    </li>
                                    <li>
                                        This test will primarily focus on Technical Abilities, which
                                        will include 100 questions out of a total of 150. The marking
                                        scheme will be the same as CBT 1.
                                    </li>
                                    <li>The duration for CBT 2 will be 2 hours.</li>
                                </ul>
                                <div className="mt-4 overflow-x-auto">
                                    <table>
                                        <tbody>
                                            <tr className="text-[#212529]">
                                                <td className="p-4 border">
                                                    <b>Exam Pattern</b>
                                                </td>
                                                <td className="p-4 border">
                                                    <b>CBT 1</b>
                                                </td>
                                                <td className="p-4 border">
                                                    <b>CBT 2</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">No. of Questions</td> <td className="p-4 border">100</td> <td className="p-4 border">150</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">Marks</td> <td className="p-4 border">100</td> <td className="p-4 border">150</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">Type of Questions</td>
                                                <td className="p-4 border">Objective-type multiple-choice questions</td>
                                                <td className="p-4 border">Objective-type multiple-choice questions</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border">Duration</td> <td className="border p-4">90 minutes</td> <td className="border p-4">120 minutes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4">
                                    <strong>RRB JE Syllabus 2024</strong>
                                </p>
                                <p className="mt-4">
                                    To ensure thorough preparation, candidates should align their
                                    study plans with the RRB Junior Engineer Syllabus. This approach
                                    will help in covering all required topics efficiently. The CBT
                                    Test syllabus includes Mathematics, General Awareness, General
                                    Science, and General Intelligence and Reasoning. For more
                                    detailed information on the &nbsp;
                                    <Link href="#" className="text-customFC6200">
                                        RRB JE Syllabus
                                    </Link>
                                    , please refer to the provided link.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExamInfo;