import React from 'react'
import { useState } from 'react';
import TopperTalk from "../../components/TopperTalk"


export default function PostalProgram() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <div>
        <a href='#'>
          <img src="/images/img.jpg" alt="Image" className='w-full' />
        </a>
      </div>


      <div className='bg-emerald-50 w-full py-20'>
        <div className="container m-auto">

          <div className='pl-6'>
            <h1 className='text-xl font-bold'>
              About Program
            </h1>
            <p className='text-sm font-medium mt-3'>
              Competitive exams test your understanding of various subjects and require a comprehensive grasp of concepts. Excelling in technical competitions like GATE, ESE, PSUs, State  PSCs, UPPSC-AE, and other engineering exams demands not just theoretical knowledge but also practical application skills. It's crucial to stay updated on changing exam patterns and decode the syllabi provided by different exam boards. With the right study resources, half the battle is won, as they provide the necessary framework for effective preparation.<br></br><br></br>

              IES MASTER Publication has revolutionized the learning journey of engineering students across the nation with its innovative study materials. These materials, crafted by a team of expert educators, serve as a transformative tool for learners. The research and development team, comprising experienced subject matter experts, diligently curates vast content to cater to students' needs. Tailoring study materials to suit students' learning preferences requires expertise, and IES MASTER has been delivering acclaimed materials for over a decade.<br></br><br></br>

              This year postal study package comprises &nbsp;<strong>Self-Practice Tests for all the technical subjects comprises Previous Year Question (PYQ)</strong>&nbsp;&nbsp;  and it will be available in your student portal from the month of June onwards.
            </p>
          </div>


        </div>
      </div>


      <div className="container m-auto">

        <div className='pl-6'>
          <h1 className='text-xl font-bold mt-14'>
            Postal Study Package
          </h1>
          <ul className='mt-4'>
            <span
              onClick={() => setActiveIndex(0)}
              className={`text-blue-600  px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 0 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-gray-100'}`}
            >
              ESE + GATE
            </span>
            <span onClick={() => setActiveIndex(1)} className={` text-blue-500 px-2 py-2 rounded pr-3 pl-4 ${activeIndex === 1 ? 'border-2 border-green-700 bg-green-200' : 'hover:bg-gray-100'}`} > GATE </span>
            <span onClick={() => setActiveIndex(2)} className={`text-blue-500 px-2 py-2 rounded pr-3 pl-4 ${activeIndex === 2 ? 'border-2 border-green-700  bg-green-200' : ' hover:bg-gray-100'}`}> UPPSC-AE</span>
            <a href='#' className=' text-blue-600  hover:bg-gray-100 pl-4'>SSC-JE</a>
          </ul>
          {activeIndex == 0 &&
            (<div className='flex justify-between gap-8'>
              <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                <div>
                  <p className='text-lg text-green-400  '>Civil Engineering</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                  <p className='text-2xl text-black mt-4'>ESE + GATE + PSUs Study Material</p>
                  <p className='text-sm text-green-400'>Total Books : 34</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 18,000/-</p>
                </div>


                <div className='flex justify-start gap-6 mt-8 mb-3 '>
                  <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                  <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                  <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                </div>
              </div>
              <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                <div>
                  <p className='text-lg text-green-400  '>Mechanical Engineering</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                  <p className='text-2xl text-black mt-4'>ESE + GATE + PSUs Study Material</p>
                  <p className='text-sm text-green-400'>Total Books : 30</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 15,000/-</p>
                </div>


                <div className='flex justify-start gap-6 mt-8 mb-3 '>
                  <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                  <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                  <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                </div>
              </div>

            </div>)}
          {activeIndex == 1 &&
            (<div>
              <div className='flex justify-between gap-8'>
                <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                  <div>
                    <p className='text-lg text-green-400  '>Civil Engineering</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                    <p className='text-2xl text-black mt-4'> GATE Study Material</p>
                    <p className='text-sm text-green-400'>Total Books : 22</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 16,000/-</p>
                  </div>


                  <div className='flex justify-start gap-6 mt-8 mb-3 '>
                    <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                    <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                    <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                  </div>
                </div>

                <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                  <div>
                    <p className='text-lg text-green-400  '>Mechanical Engineering</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                    <p className='text-2xl text-black mt-4'>GATE Study Material</p>
                    <p className='text-sm text-green-400'>Total Books : 19</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 13,000/-</p>
                  </div>


                  <div className='flex justify-start gap-6 mt-8 mb-3 '>
                    <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                    <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                    <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                  </div>
                </div>
              </div>



              <div className='flex justify-between gap-8'>


                <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                  <div>
                    <p className='text-lg text-green-400'>Computer Science</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                    <p className='text-2xl text-black mt-4'>GATE Study Material</p>
                    <p className='text-sm text-green-400'>Total Books : 22</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 10,000/-</p>
                  </div>


                  <div className='flex justify-start gap-6 mt-12 mb-2 '>
                    <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                    <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                    <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                  </div>
                </div>


                <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                  <div>
                    <p className='text-lg text-green-400  '>Computer Science</p>
                    <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2024-25</p>
                    <p className='text-2xl text-black mt-4'>GATE Study Material + GATE 2025 Online Test Series</p>
                    <span className='flex justify-between'>
                      <span className='text-sm text-green-400'>Total Books : 22</span>
                      <span className='pr-2'>
                        <span className='text-base text-black px-1 py-0'>Total Tests:&nbsp;</span>
                        <span className='bg-gray-300 rounded-lg text-base px-1 text-black'>58</span>
                      </span>
                    </span>

                    <span className='flex justify-between mt-1/2'>
                      <span className=' text-base text-gray-400 '>Fee : 11,000/-</span>
                      <span className='pr-2'><a href='#' className='px-1 py-1  bg-blue-700 text-white   rounded-md hover:bg-blue-800 text-sm '>Test Details</a></span>
                    </span>

                  </div>


                  <div className='flex justify-start gap-6 mt-8 mb-3 '>
                    <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                    <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                    <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                  </div>
                </div>


              </div>
            </div>)}
          {activeIndex == 2 &&
            (<div className='flex justify-between gap-8'>
              <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                <div>
                  <p className='text-lg text-green-400  '>Civil Engineering</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2022-23</p>
                  <p className='text-2xl text-black mt-4'>UPPSC-AE Study Material</p>
                  <p className='text-sm text-green-400'>Total Books : 21</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Fee : 7,000/-</p>
                </div>


                <div className='flex justify-start gap-6 mt-10 mb-2'>
                  <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                  <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                  <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                </div>
              </div>

              <div className='bg-gradient-to-b from-blue-50 to-white w-1/2 mt-6 pt-2 flex flex-col mb-2 pl-4 shadow-lg'>
                <div>
                  <p className='text-lg text-green-400  '>Civil Engineering</p>
                  <p className=' text-base text-gray-400 mb-2 mt-2'>Session - 2022-23</p>
                  <p className='text-2xl text-black mt-4'>UPPSC-AE Study Material + Online Test Series</p>
                  <span className='flex justify-between'>
                    <span className='text-sm text-green-400'>Total Books : 21</span>
                    <span className='pr-2'>
                      <span className='text-base text-black px-1 py-0'>Total Tests:&nbsp;</span>
                      <span className='bg-gray-300 rounded-lg text-base px-1 text-black'>18</span>
                    </span>
                  </span>
                  <span className='flex justify-between mt-1/2'>
                  <span className=' text-base text-gray-400 mb-2 mt-2'>Fee : 8,000/-</span>
                  <span className='pr-2'><a href='#' className='px-1 py-1  bg-blue-700 text-white   rounded-md hover:bg-blue-800 text-sm '>Test Details</a></span>
                  </span>
                </div>


                <div className='flex justify-start gap-6 mt-8 mb-3 '>
                  <a href='#' className='px-2 py-2   bg-white  border-green-300 border-1 text-sm text-green-400 font-normal rounded-md hover:bg-green-400 hover:text-white pl-3'>Features</a>
                  <a href='#' className='px-2 py-2  bg-green-400 text-white font-normal rounded-md hover:bg-green-600 hover:text-black text-sm '>Checklist</a>
                  <a href='#' className='px-2 py-2  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-sm '>Enroll Now</a>

                </div>
              </div>
            </div>)}


          <ul className='mt-8 pl-6'>
            <li className='list-disc text-base'><strong>Important Alert: Beware of Fraudulent Activities</strong></li>
            <ul style={{ listStyleType: 'circle' }} className="list-inside text-sm">

              <li>Please be aware of fraudulent activities targeting individuals by requesting payments or personal information via unsolicited messages.</li>
              <li>DO NOT CLICK on any links or share sensitive information sent from unverified sources claiming association with our institution.</li>
              <li>We NEVER request payments or sensitive details through unexpected messages or calls.</li>

            </ul>
          </ul>

          <ul className='pl-6 mb-16'>
            <li className='list-disc text-base'><strong>Protect yourself:</strong></li>
            <ul style={{ listStyleType: 'circle' }} className="list-inside text-sm">


              <li>Avoid clicking on suspicious links, especially those requesting payments or personal details.</li>
              <li>Never share sensitive information unless you are certain about the legitimacy of the request.</li>
              <li>Do report any suspicious activity claiming association with our institution immediately.</li>

            </ul>
          </ul>





        </div>
      </div>

      <div className='w -full bg-emerald-50 py-14 mt-10'>
        <div className='container mx-auto pl-14'>
          <h8 className='text-xl font-semibold'>Terms & Conditions</h8>
          <ul className='list-disc list-inside text-sm leading-5 mt-3'>
            <li>The Study Material will be dispatched in <strong>2-3 lots.</strong></li>
            <li><strong>Current Affairs Magazine</strong> (Annual Edition) will be provided as <strong>soft copy</strong> in Student Portal.</li>
            <li>On receiving the Postal Study Package, students are required to thoroughly check the books.</li>
            <li>In case of any discrepancy or issue with the books received, students are required to inform IES Master within<strong> 15 days</strong> from the date of delivery.</li>
            <li>No complaint or request will be entertained beyond <strong>15 days.</strong></li>
            <li>Postal Study Package once ordered, can not be refunded at any circumstances.</li>
          </ul>
          <p className='mt-3'>
            <strong>Note : Books will be dispatched at your registered address. </strong>
          </p>

        </div>
      </div>


      <div className='my-12'>
        <div className="container mx-auto p-6">
          <div className='text-2xl font-semibold pl-6'> Our Results</div>
          <div className='flex mt-5 justify-start pl-10'>
            <div className='w-1/2'>
              <a
                href="https://iesmaster.org/results/ese"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-1 border-black bg-white text-black-xl font-normal rounded px-3 py-1 hover:bg-gray-100 text-base"
              >
                ESE Toppers
              </a>
            </div>

            <div className='w1/2'>
              <a
                href="https://iesmaster.org/results/gate"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-1 border-black bg-white text-black font-normal rounded px-3 py-1 hover:bg-gray-100 text-base "
              >
                GATE Toppers
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-emerald-50 py-2'>
        <div><TopperTalk /></div>
      </div>

    </>

  );
}
