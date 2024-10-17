import React, { useState } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";

const Batches = () => {
  const [ActiveSection, setActiveSection] = useState('CE');
  return (
    <div id="new-batches">
      <div className='mb-4'>
        <img src="/images/NewBatches.jpg" alt="image" className='w-full'>
        </img>
      </div>
      <div className='container mb-8'>
        <div className='p-4 custom-shadow'>
          <div className='custom-shadow'>
            <h1 className='p-5 text-2xl'>Branches</h1>
            <ul className='border flex justify-start p-4 gap-2 flex-wrap'>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'CE' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('CE')}
              >
                CE
              </li>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'ME' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('ME')}
              >
                ME
              </li>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'EE' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('EE')}
              >
                EE
              </li>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'ECE' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('ECE')}
              >
                ECE
              </li>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'CS/IT' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('CS/IT')}
              >
                CS/IT
              </li>
              <li className={` text-sm border rounded px-4 py-2 hover:cursor-pointer   ${ActiveSection === 'GS' ? 'bg-neutral-800 text-white' : 'text-green-600'}`}
                onClick={() => setActiveSection('GS')}
              >
                GS
              </li>
            </ul>
          </div>
          <div className='custom-shadow mt-3'>
            <div>
              {ActiveSection === 'CE' && (
                <div id="Accordion">
                  <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                    <AccordionItem
                      key="1"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="ESE + GATE : 1yr Classroom Course"
                      title="ESE + GATE : 1yr Classroom Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="ESE + GATE : 1yr Extensive Course"
                      title="ESE + GATE : 1yr Extensive Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="ESE + GATE + SES(GS) : 1yr Classroom Course"
                      title="ESE + GATE + SES(GS) : 1yr Classroom Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="ESE + GATE + SES(GS) : 1yr Extensive Course"
                      title="ESE + GATE + SES(GS) : 1yr Extensive Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="GATE : 1yr Classroom Course"
                      title="GATE : 1yr Classroom Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="6"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="GATE : 1yr Extensive Course"
                      title="GATE : 1yr Extensive Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="7"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="GATE + SES(GS) : 1yr Classroom Course"
                      title="GATE + SES(GS) : 1yr Classroom Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="8"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="GATE + SES(GS) : 1yr Extensive Course"
                      title="GATE + SES(GS) : 1yr Extensive Course"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="9"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="Live Online Courses for ESE & GATE"
                      title="Live Online Courses for ESE & GATE"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="10"
                      className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                      aria-label="ESE 2024 Mains Exam Batches"
                      title="ESE 2024 Mains Exam Batches"
                    >
                      <div className="bg-white">
                        <div className='p-3'>
                          <div>
                            <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                          </div>
                          <div className='border rounded w-max text-sm custom-shadow'>
                            <div className='border-b'>
                              <h1 className='text-green-600 py-2 text-center'>
                                Batch Code <br></br> (CMEG2414)
                              </h1>
                            </div>
                            <div className='border-b p-2'>
                              <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                              <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                              <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                              <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                              <p className='mb-2'><span>Admission Status : Open</span></p>
                            </div>
                            <div className='flex items-center justify-center my-1'>
                              <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                            </div>
                            <div>
                            </div>
                          </div>
                          <p className='text-sm'><strong>Note:-</strong></p>
                          <ul className='list-disc text-sm list-inside pl-8'>
                            <li>This Course includes
                            </li>

                            <ul className='list-disc text-sm list-inside pl-12'>
                              <li>Complete Technical & GS syllabus of ESE</li>
                              <li>
                                ESE & GATE Study Package
                              </li>
                              <li>
                                GATE 2025 Online Test Series
                              </li>
                              <li>
                                ESE 2025 Prelims & Mains Test Series
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}

              {ActiveSection === 'ME' && (
                <div id="Accordion">
                <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                  <AccordionItem
                    key="11"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="12"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="13"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 2yr Classroom Course"
                    title="ESE + GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="14"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="GATE : 2yr Classroom Course"
                    title="GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              )}

              {ActiveSection === 'EE' && (
                <div id="Accordion">
                <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                  <AccordionItem
                    key="15"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="16"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="17"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 2yr Classroom Course"
                    title="ESE + GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="18"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="GATE : 2yr Classroom Course"
                    title="GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              )}

              {ActiveSection === 'ECE' && (
                <div id="Accordion">
                <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                  <AccordionItem
                    key="19"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="20"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 1yr Classroom Course"
                    title="ESE + GATE : 1yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="21"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="ESE + GATE : 2yr Classroom Course"
                    title="ESE + GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="22"
                    className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                    aria-label="GATE : 2yr Classroom Course"
                    title="GATE : 2yr Classroom Course"
                  >
                    <div className="bg-white">
                      <div className='p-3'>
                        <div>
                          <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                        </div>
                        <div className='border rounded w-max text-sm custom-shadow'>
                          <div className='border-b'>
                            <h1 className='text-green-600 py-2 text-center'>
                              Batch Code <br></br> (CMEG2414)
                            </h1>
                          </div>
                          <div className='border-b p-2'>
                            <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                            <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                            <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                            <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                            <p className='mb-2'><span>Admission Status : Open</span></p>
                          </div>
                          <div className='flex items-center justify-center my-1'>
                            <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                          </div>
                          <div>
                          </div>
                        </div>
                        <p className='text-sm'><strong>Note:-</strong></p>
                        <ul className='list-disc text-sm list-inside pl-8'>
                          <li>This Course includes
                          </li>

                          <ul className='list-disc text-sm list-inside pl-12'>
                            <li>Complete Technical & GS syllabus of ESE</li>
                            <li>
                              ESE & GATE Study Package
                            </li>
                            <li>
                              GATE 2025 Online Test Series
                            </li>
                            <li>
                              ESE 2025 Prelims & Mains Test Series
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              )}

              {ActiveSection === 'CS/IT' && (
               <div id="Accordion">
               <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                 <AccordionItem
                   key="23"
                   className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                   aria-label="Live Online Courses for GATE 1025 - CS/IT"
                   title="Live Online Courses for GATE 1025 - CS/IT"
                 >
                   <div className="bg-white">
                     <div className='p-3'>
                       <div>
                         <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                       </div>
                       <div className='border rounded w-max text-sm custom-shadow'>
                         <div className='border-b'>
                           <h1 className='text-green-600 py-2 text-center'>
                             Batch Code <br></br> (CMEG2414)
                           </h1>
                         </div>
                         <div className='border-b p-2'>
                           <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                           <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                           <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                           <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                           <p className='mb-2'><span>Admission Status : Open</span></p>
                         </div>
                         <div className='flex items-center justify-center my-1'>
                           <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                         </div>
                         <div>
                         </div>
                       </div>
                       <p className='text-sm'><strong>Note:-</strong></p>
                       <ul className='list-disc text-sm list-inside pl-8'>
                         <li>This Course includes
                         </li>

                         <ul className='list-disc text-sm list-inside pl-12'>
                           <li>Complete Technical & GS syllabus of ESE</li>
                           <li>
                             ESE & GATE Study Package
                           </li>
                           <li>
                             GATE 2025 Online Test Series
                           </li>
                           <li>
                             ESE 2025 Prelims & Mains Test Series
                           </li>
                         </ul>
                       </ul>
                     </div>
                   </div>
                 </AccordionItem>
               </Accordion>
             </div>
              )}

              {ActiveSection === 'GS' && (
               <div id="Accordion">
               <Accordion variant="splitted" className="accordion-tab text-sm px-0">
                 <AccordionItem
                   key="24"
                   className='bg-emerald-50 shadow-none text-base border py-0 px-0 rounded-none m-0 '
                   aria-label="ESE-2025 GS & Enginnering Aptitude"
                   title="ESE-2025 GS & Enginnering Aptitude"
                 >
                   <div className="bg-white">
                     <div className='p-3'>
                       <div>
                         <button className='text-sm text-white mb-5 p-2 bg-neutral-800'>Regular Batches</button>
                       </div>
                       <div className='border rounded w-max text-sm custom-shadow'>
                         <div className='border-b'>
                           <h1 className='text-green-600 py-2 text-center'>
                             Batch Code <br></br> (CMEG2414)
                           </h1>
                         </div>
                         <div className='border-b p-2'>
                           <p className='mb-2'><span>Start Date </span> : 24th Jul, 2024</p>
                           <p className='mb-2'><span>Timing </span> : 03:30 PM to 09:30 PM</p>
                           <p className='mb-2'><span>Venue </span> : Ber Sarai, New Delhi</p>
                           <p className='mb-2'><span>Fee </span> : Rs. 99,500/- <button className='px-1 bg-blue-600 rounded text-white text-xs'>Fee Details</button></p>
                           <p className='mb-2'><span>Admission Status : Open</span></p>
                         </div>
                         <div className='flex items-center justify-center my-1'>
                           <button className='bg-blue-400 text-white rounded py-1 px-1'>Enroll Now</button>
                         </div>
                         <div>
                         </div>
                       </div>
                       <p className='text-sm'><strong>Note:-</strong></p>
                       <ul className='list-disc text-sm list-inside pl-8'>
                         <li>This Course includes
                         </li>

                         <ul className='list-disc text-sm list-inside pl-12'>
                           <li>Complete Technical & GS syllabus of ESE</li>
                           <li>
                             ESE & GATE Study Package
                           </li>
                           <li>
                             GATE 2025 Online Test Series
                           </li>
                           <li>
                             ESE 2025 Prelims & Mains Test Series
                           </li>
                         </ul>
                       </ul>
                     </div>
                   </div>
                 </AccordionItem>
               </Accordion>
             </div>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Batches