import React from 'react'

const Features = () => {
    return (
        <div>
            <div className='bg-emerald-50 mt-10'>
                <div className='container pt-20 pb-12'>
                    <h2 className='text-3xl text-center text-zinc-800'>Features</h2>
                    <div className='flex flex-col sm:flex-row mt-4 justify-around gap-5 lg:gap-32 sm:gap-20'>
                        <div className='p-5 border border-black flex-1'>
                            <h4 className='text-lg text-custom1DB24E'>Informal Interaction Session</h4>
                            <ul className="text-sm list-inside list-disc">
                                <li>Guidance to fill up Detailed Application Form (DAF)</li>
                                <li>One-To-One interaction</li>
                                <li>Preferences to various government</li>
                                <li>Brief about approach to interview</li>
                            </ul>
                        </div>
                        <div className='p-5 border border-black flex-1'>
                            <h4 className='text-lg text-custom1DB24E'>Technical/PD Current Affairs Session</h4>
                            <ul className="text-sm list-inside list-disc">
                                <li>Technical Discussion Session</li>
                                <li>Overall Personality Development</li>
                                <li>Tips & Techniques to Face Interview</li>
                                <li>General Awareness & Current Affairs</li>
                                <li>Study Material for Quick Revision</li>
                            </ul>
                        </div>
                        <div className='p-5 border border-black flex-1'>
                            <h4 className='text-lg text-custom1DB24E'>Mock Interview Session</h4>
                            <ul className="text-sm list-inside list-disc">
                                <li>Mock Interview by Expert Panel</li>
                                <li>Simulated UPSC Environment</li>
                                <li>Focused one-to-one Interaction</li>
                                <li>Video Recording of Mock Interview</li>
                                <li>Comprehensive Feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Features
