import React from 'react'

const InterviewGuidance = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-4'>
                <div className='mt-3 mb-2'>
                    <h1 className='text-custom1DB24E font-semibold text-[28px]'>
                        Interview Guidance Program
                    </h1>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-semibold'>
                        Interview Guidance Program
                    </h2>
                    <p className='my-3 text-sm italic'>
                        “Your knowledge will get you to the interview room, but it's your personality that will see you through...”
                    </p>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap gap-3 mt-3'>
                    <div className='px-2 w-full sm:w-1/2'>
                        <p className='text-sm my-3'>
                            The interview is a crucial and integral part of the Engineering Services Exam (ESE). The Interview Guidance Program is structured into three sessions:
                        </p>
                        <ul className='list-disc list-inside text-sm sm:text-base'>
                            <li><strong>Informal</strong></li>
                            <li><strong>Technical/PD/Current Affairs Session</strong></li>
                            <li><strong>Mock Interview</strong></li>
                        </ul>
                        <p className='text-sm mt-3'>
                            <strong>Informal Interaction Session</strong> provides individual guidance on filling out the Detailed Application Form (DAF) for ESE 2024, helping you avoid awkward questions during the actual interview.
                        </p>
                    </div>
                    <div className='px-2 w-full sm:w-1/2'>
                        <iframe
                            className='aspect-video w-full'
                            height={250}
                            src="https://www.youtube.com/embed/phRJbUdUHXs?autoplay=1&mute=1&si=nsGuWfIu2MGoWZ7Q"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div className='mt-4 text-sm'>
                    <p className='mb-3'>
                        The second session features <strong>Technical Classes</strong> and a<strong> Personality</strong> Development program designed to help students overcome shyness and negative personality traits. Additionally, the psychological aspects of the interview are thoroughly addressed during this session.
                    </p>
                    <p className='mb-3'>
                        Technical classes will be led by Kanchan Sir, focusing on practical situations relevant to interview requirements. Experts will conduct <strong>Personality Development </strong> and<strong> Current Affairs </strong>classes to enhance students' confidence.
                    </p>
                    <p className='mb-3'>
                        At the end of the session,<strong> Mock Interviews</strong> will be conducted, with comprehensive feedback provided on personal attributes. Students will also receive video recordings of their mock interviews to identify weaknesses and improve their overall personality.
                    </p>
                    <p className='mb-4'>
                        The interview panel consists of experienced and reputable technical and psychological experts who will help you identify and address your weaknesses and psychological challenges.
                    </p>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-custom337AB7 rounded py-1 text-sm px-2 text-white hover:bg-custom286090 '>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InterviewGuidance