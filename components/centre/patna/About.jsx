import React from 'react'

const About = ({ pageData }) => {
    return (
        <div className='container'>
            <div className='sm:pt-[100px] pt-9 pb-[40px]'>

                <h2 className='sm:text-[40px] text-[35px] text-customFC6200'>{pageData?.heading}</h2>
                <div className='text-[#606060] leading-7'><span dangerouslySetInnerHTML={{ __html: pageData?.content }}></span></div>
                {/* <p className='text-[#606060] mb-[15px] leading-7'>Welcome to our esteemed offline center in Patna! We take pride in
                    providing a conducive learning environment
                    for aspiring candidates of SSC-JE and other engineering exams. Our
                    center is strategically located in Patna,
                    the capital city of Bihar, and offers a range of facilities to support
                    your exam preparation journey.
                    We have designed our center with state-of-the-art infrastructure to
                    ensure a comfortable and focused learning
                    experience. Our classrooms are equipped with modern amenities, including
                    comfortable seating, audiovisual aids,
                    and proper ventilation, to enhance your study environment.</p>
                <p className='text-[#606060] mb-[15px] leading-7'>Our center boasts a team of highly qualified and experienced faculty
                    members who are experts in their respective
                    fields. They possess in-depth knowledge of the SSC-JE and engineering
                    exam syllabi and are dedicated to
                    helping you understand concepts, solving queries, and providing valuable
                    guidance throughout your preparation
                    journey. At our Patna center, we provide comprehensive study material
                    and resources curated specifically for SSC-JE and
                    engineering exams. Our study material is regularly updated, ensuring
                    that you have access to the latest
                    information and practice materials. We understand the importance of mock
                    tests and practice sessions in exam preparation.
                    Our center organizes regular mock tests and practice sessions to help
                    you assess your progress, identify strengths and
                    weaknesses, and improve your time management and exam-taking skills.
                    These simulated exams will prepare you for the actual
                    exam environment, boosting your confidence and performance. </p>
                <p className='text-[#606060] mb-[15px] leading-7'>We believe in providing comprehensive support to our students. Our center
                    offers individual counseling sessions
                    where you can seek guidance regarding exam preparation strategies,
                    career opportunities, and any other
                    concerns you may have. Our team is dedicated to your success and will
                    support you throughout your
                    preparation journey. </p>
                <p className='text-[#606060] mb-[15px] leading-7'>Join our Patna center today and embark on your journey towards success in
                    SSC-JE and engineering exams.
                    Experience our student-centric approach, excellent faculty, and
                    comprehensive resources that will empower
                    you to achieve your goals</p>
                <p className='text-[#606060] mb-[15px] leading-7'>Thank you for your continued trust and support. We are excited to serve
                    you at our new offline branch,
                    here at Patna centre.</p> */}
            </div>
        </div>
    )
}

export default About
