import React from 'react'

const AboutGenius = () => {
    return (
        <div>
            <div className='mb-5'>
                <img src="/images/Genius.jpg" alt="hero image" className='w-full'></img>
            </div>
            <div className='container'>
                <h1 className='text-3xl text-green-500 font-semibold'>Genius Batch</h1>
                <div className='mt-12'>
                    <h2 className='text-xl font-medium'>About Genius Batch</h2>
                    <p className='my-4 text-sm'>Genius Batch is an exclusive classroom program for the Smart Learners who are extraordinary, and way above the rest. The sole objective of Genius Batch is to give a cutting edge to the students by offering smart comprehensive learning skills.</p>
                    <p className='text-sm'>In fact, the Genius Batch is similar to other regular batches with similar faculty, study material, tests, teaching methodology. The only difference is that it is structured in a smart and efficient way due to the composition of students. As the eligibility criterion for Genius Batch is different than other study programs, the program involves brilliant level of discussions and learning at a faster pace.</p>
                </div>
            </div>
            <div className='bg-emerald-50 py-9 mt-14'>
                <div className='container py-5'>
                    <h1 className='text-xl mb-5'>Features</h1>
                    <ul className='list-disc list-inside text-sm'>
                        <li>Suitable for students looking for clarity in concepts and problem solving</li>
                        <li>Concept building from elementary to advanced level</li>
                        <li>Uniformity of students saves time, and ensures speedy and collective progress</li>
                        <li>Quick review, complete revision through PPT</li>
                        <li>Stay updated with continuous question practice and discussion sessions</li>
                        <li>Get in exam mode with regular practice tests</li>
                        <li>Classes taken by highly experienced faculty</li>
                    </ul>
                </div>
            </div>
            <div className='py-9'>
                <div className='container py-5'>
                    <h1 className='text-xl mb-5'>Eligibility Criteria</h1>
                    <p className='text-sm mb-5'>Students interested in to be a part of Genius Batch should fulfil any one of the following criteria:</p>
                    <ul className='list-disc list-inside text-sm'>
                        <li>B.Tech or M.Tech from IIT/NIT/DTU</li>
                        <li>Cleared ESE Prelims/Mains</li>
                        <li>GATE Rank up to 2000</li>
                        <li>Ex-IES Master students, either GATE qualified or 65% marks in B.Tech</li>
                        <li>65% in B.Tech from any private engineering college / reputed college</li>
                        <li>Through Genius Batch Entrance Test*</li>
                    </ul>
                    <h5 className='text-sm font-semibold my-5'>List of Reputed Engineering Colleges:</h5>
                    <p className='text-sm'>BIT-Mesra, BIT-Sindri, BITS-Pilani, College of Engg. Roorkee, College of Engg. Pune, HBTI-Kanpur, Jabalpur Engg. College, JMI-Delhi, Madan Mohan Malviya Gorakhpur, MBM Jodhpur, NSIT-Delhi, Punjab Engg. College, SGSITS-Indore, Thapar University Punjab, Jadavpur University Kolkata</p>
                    <p className='mt-5 text-sm'>*Those students who do not meet the above eligibility criteria can write the Genius Batch Entrance Test (GBET) conducted by IES Master</p>
                </div>
            </div>
            <div className='bg-emerald-50'>
                <div className='container py-10'>
                    <h1 className='mb-5 text-xl font-semibold'>
                        Genius Batch Entrance Test (GBET)
                    </h1>
                    <p className='mb-5 text-sm'>
                        IES Master believes that students, who have not performed previously, have some inherent talent, and hence they should be given an opportunity irrespective of their previous track record. Thus, IES MASTER is announcing Genius Batch Entrance Test (GBET) for students desirous of taking admission in Genius Batch, but do not meet the criteria for direct admission.
                    </p>
                    <p className='mb-3 text-sm'><strong>Examination Mode: </strong>Offline (OMR Based)</p>
                    <p className='mb-3 text-sm'><strong>Examination Date: </strong>17th and 24th April. 2022</p>
                    <p className='mb-3 text-sm'><strong>Examination Time: </strong>2.00 P.M. to 4.00 P.M</p>
                    <p className='mb-3 text-sm'><strong>Examination Venue: </strong>98-A, Katwaria Sarai, New Delhi-110016</p>
                    <p className='mb-3 text-sm'><strong>Examination Pattern: </strong></p>
                    <ul className='list-disc list-inside mb-5 text-sm'>
                        <li>Complete paper will carry objective type questions</li>
                        <li>Total questions - 100 (General Aptitude - 50 & Engineering Discipline - 50)</li>
                        <li>Each question will be provided by 4 options.</li>
                        <li>Exam Duration - 2 hours</li>
                    </ul>
                    <p className='mb-3 text-sm'><strong>Syllabus</strong></p>
                    <p className='mb-5 text-sm'>General Aptitude & Engineering Discipline</p>
                    <p className='mb-3 text-sm'><strong>Marking Scheme</strong></p>
                    <p className='mb-5 text-sm'>Total Marks - 100 (each question will carry 1 mark) & 1/3 marks will be deducted for a wrong answer</p>
                    <p className='mb-3 text-sm'><strong>Registration</strong></p>
                    <p className='mb-5 text-sm'>Registration Start Date : 16th-Mar. 2022 [FREE Registration]</p>
                    <ul className='mb-5 text-sm list-disc list-inside'>
                        <li>Application Forms are available at IES Master Head Office (F-126, Katwaria Sarai, New Delhi-110016)
                        </li>
                        <li>Students can also apply online at <a href="#" className='text-blue-500 hover:underline'>www.iesmaster.org/genius-batch-registration</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default AboutGenius
