import React from 'react';
import { useState } from 'react';
import TopperTalk from "../../components/TopperTalk"



export default function ClassRoom() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>

      <div>
        <a href='#'>
          <img src="/images/img1.jpg" alt="Image" className='w-full' />
        </a>
      </div>


      <div className="container m-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className='text-green-600 text-3xl font-medium mt-5 pl-12'>
                2 Year Classroom Program
              </div>
              <div className='mt-16 pl-14'>
                <h1 className='text-xl font-semibold'>About Program
                </h1>
                <p className='text-base mt-4'>
                  The program is specially designed for engineering students from Civil, Mechanical, Electrical, and Electronics & Communications streams, who want to prepare for ESE, GATE, and PSUs in a time span of two years. This is the most ideal study program for engineering students pursuing graduation or working professionals as it allows fair amount of time for concept building and comprehensive preparation for the top engineering exams. Students have the option to enrol for either Two-Year Regular Classroom Program or Two-Year Weekend Classroom Program.<br></br><br></br>
                  To achieve success in ESE, GATE, and PSUs, you need more than just studying harder and longer. You need to be smarter with a focused approach, and we at IES Master help you proceed towards your career goal just like that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full bg-emerald-50 py-12 mt-16 '>
        <div className='container mx-auto'>
          <div className='text-xl font-bold mb-2 pl-14'> Class Timing
            <p className='mt-3'>
              <b>Weekend Classroom Program:</b>
              &nbsp;<l className='font-normal'>08:30 AM to 07:30 PM</l>
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='py-12 pl-14'>
          <h2 className='text-xl font-bold '>
            Course Duration
          </h2>
          <h3 className='text-2xl font-normal mt-5'>2 Years.</h3>

        </div>
      </div>


      <div className='bg-emerald-50 py-12 mt-2'>
        <div className='container mx-auto'>
          <div className='pl-14'>
            <h4 className='text-xl font-bold mb-3'> New Batches</h4>
            <a
              href="https://iesmaster.org/upcoming-batches"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base"
            >
              Click here to view Upcoming Batches
            </a>
          </div>
        </div>
      </div>



      <div className='container mx-auto py-12 '>
        <div className=' pl-14'>
          <h5 className='text-xl font-bold'> Fee Structure
            <p className='mt-3'><a
              href="https://iesmaster.org/fee-structure"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base"
            >
              Click here to view Fee Structure
            </a>
            </p>
          </h5>
        </div>
      </div>

      <div className='w -full bg-emerald-50 py-16 '>
        <div className='container mx-auto pl-14'>
          <h6 className='text-xl font-bold'> Features</h6>
          <ul className='list-disc list-inside text-sm leading-8 mt-3'>
            <li> Carefully designed program that also complements semester grades</li>
            <li>Saves you from final year blues of campus placement</li>
            <li>Gives you a head-start to a fulfilling and satisfying career</li>
            <li>Ideal for those in college, in job, or short on time</li>
            <li> Crafted and customised material for complete guidance</li>
            <li>Classrooms by highly experienced faculty, IITians, and ESE/GATE rankers</li>
            <li>Regular tests followed by comprehensive doubt clearing mechanism</li>
            <li>Timely completion of syllabus</li>
            <li>A learning ecosystem that keeps you motivated in a competing environment</li>
            <li>Let opportunities chase you rather than you looking for opportunities</li>
            <li>Pursue your passion while others are after placements</li>
          </ul>

        </div>
      </div>
     


      
        <div className="container mx-auto">
        <div className=' pt-12 pl-14'>
          <h className='text-2xl font-semibold'>How to enroll</h>
          <ul className='mt-4'>
          <span
            onClick={() => setActiveIndex(0)}
            className={`text-blue-600  px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 0 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-gray-100'}`}
          >
            Walk in Admission
          </span>
          <span onClick={() => setActiveIndex(1)} className={` text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 1 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-gray-100'}`} > Admission through DD</span>
          <span onClick={() => setActiveIndex(2)} className={`text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 2 ? 'border-2 border-green-700  bg-emerald-200' : ' hover:bg-gray-100'}`}> Online Admission</span>
          </ul>
          {activeIndex == 0 && (<div>
            <p className='pt-6'>You may visit <strong>IES MASTER DELHI</strong> or <strong>IES MASTER NOIDA</strong> where you are required to complete the following formalities:</p>
            <ul className='list-disc list-inside font-sans mr-2 text-base leading-6'>
              <li className='pt-3'>Fill the Application Form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>Attach Self- Attested copy of Identity Proof (Such as Voter ID/ PAN Card/ Driving License/ Passport etc.)</li>
              <li>The fees can be paid via Cash or Demand draft.</li>
              <li><strong>Delhi Centre:</strong> The DD should be made in favor of “IES MASTER“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li><strong>Noida Centre:</strong> The DD should be made in favor of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li>The D.D. should be made in favor of “IES MASTER” payable at New Delhi. (Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.)</li>

              <li className='pb-16'><strong>NOTE</strong>: Cheque payment is not acceptable.</li>
            </ul>
          </div>)}
          {activeIndex == 1 && (<div className='pb-16'>
            <p className='text-xl font-bold pt-6'> Through Demand Draft</p>
            <hr className='mt-14'></hr>
            <ul className='font-sans  text-base font-normal'>
              <li className='pt-6'>If you cannot visit our Delhi or Noida centre then you should follow the below given steps:</li>
              </ul>
            <ul className='list-disc list-inside mr-3 text-base leading-8'>
            <li className='pt-2'> Download the Application form on your computer.</li>
              <li> Take a print out of the Application Form.</li>
              <li>Fill all the required details on the  Application form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>Attach Self- Attested copy of Identity Proof (Such as PAN Card/ Voter ID/ Driving License/ Passport etc.)</li>
              <li>Get the DD of required fee amount made.</li>
              <li><strong>Delhi Centre:</strong> The DD should be made in favor of “IES MASTER“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(17500/-).</li>
              <li><strong>Noida Centre:</strong> The DD should be made in favor of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PUBLICATION" for study material (17500/-).</li>
              <li>(Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.)</li>
              <li>Send it via post to our office at any of the following addresses:   </li></ul>
            <p className='pb-2 pt-2 pl-8'><strong>IES MASTER DELHI CENTRE</strong></p>
            <p className='pb-2 pl-8 text-sm'>F/126, KATWARIA SARAI</p>
            <p className='pb-2 pt-2 pl-8'><strong>IES MASTER NOIDA CENTRE</strong></p>
            <p className='pb-2 pl-8 text-sm'>New Delhi -110016 B-23 A, 5th Floor, Gaurav Deep Heights,</p>
            <p className='pb-2 pl-8 text-sm'>Near Fortis Hospital, Sector 62, Noida - 201305</p>
            <div className='flex justify-end'>
              <a href='https://iesmaster.org/public/resources/admission-forms/Admission-Form[Regular_Delhi]-2018-19.pdf' className='px-3 py-1  bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base '>Download Admission Form</a></div>
          </div>)}
          {activeIndex == 2 && (<div className='pb-16'>
            <p className='text-xl font-semibold pt-6'>Online Admission</p>
            <hr className='mt-14'></hr>
            <ul className='font-sans  text-base font-normal'>
              <li className='pt-6'>Candidates may also apply through the Online Admission process.</li></ul>
            <ul className='list-disc list-inside mr-3 text-base leading-6 mt-2'>
              <li>Click on the ‘Apply Online’ option available at top of the Home page.</li>
              <li>The Application Form will open. Fill in the complete form.</li>
              <li>Full Name, Date of Birth, Email ID, Mobile No. & Your Address (City, State & Pin) are some of the mandatory fields.</li>
              <li>Fill in the Program Details.</li>
              <li>Fill in Your Identity Proof Details.</li>
              <li>Fill in the details of your educational qualifications and your Guardian’s details.</li>
              <li>Upload scanned copies of your photograph & signature.</li>
              <li>Tick Mark on “I have read and agree to all the details”.</li>
             <li>Submit the form.</li>
             <li> Complete the registration by making the payment through any one of the following modes:</li></ul>
              <p className='text-base mb-4 mt-2 ml-36'>a) Debit Card   &nbsp; b)  Credit Card  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;c)  Net Banking</p>
              <ul className='list-disc list-inside mr-3 text-base leading-6'>
              <li>Students can pay the registration fee, first installment or full fees.</li>
              <li>Immediately after your Registration, your receipt will be generated.</li>
              <li>Click on the Print button or Save button.</li>
              <li>Please bring a print out of this receipt, two passport size photographs and Original & photocopy of identity proof for verifying your candidature & receiving IES MASTER &nbsp;&nbsp;&nbsp;&nbsp; ID Card.</li>
              <li>Convenience charges of 1.00% + Service tax will be applicable on payment through Debit Card.</li>
              <li>Convenience charges of 1.10% + Service tax will be applicable on payment through Credit Card.</li>
              <li>Convenience charges of Rs. 17 + Service tax will be applicable on payment through Net Banking.</li>
              <li>The fees will be refunded only if the student informs us in writing through his/her valid email id as mentioned in the Form within 5 days of commencement date of the Batch. No refund request shall be entertained thereafter. Admission Charges of Rs. 6000 shall be deducted.</li>
          
            </ul>
            <p className='text-base mt-2'>Payment Confirmation will be issued after 48 hrs. of Registration.</p><br></br>
            <div className='flex justify-end'>
              <a href='https://iesmaster.org/im/online-registration' className='px-3 py-1  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-base '>Enroll Now</a></div>
          </div>)}


        </div>
      </div>

      <div className='w -full bg-emerald-50 py-14 '>
        <div className='container mx-auto pl-14'>
          <h8 className='text-xl font-semibold'> General Terms for 2 Years Classroom Program</h8>
          <p className='pt-2'><strong>General Terms & Conditions:-</strong></p>
          <ul className='list-disc list-inside text-sm leading-5 mt-3'>
           <li>Under the two-year classroom program, subjects that have been covered once would not be repeated.</li>
           <li>Students are required to attend all the classes regularly and punctually. Students are expected to cover all the subjects during the duration of two-year classroom program only.</li>
           <li>The program would not be extended to cover subjects that the students were unable to cover in two years.</li>
           <li>If a student fails to attend any class due to some genuine reasons such as semester exam, family emergency, etc. then wherever possible the IES Master Management can <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrange for the missed classes at a later date.</li>
           <li>IES Master Management reserves the right to set or amend the schedule of the two-year classroom program.</li>
           <li>Students’ intervention in planning the time schedule for classroom program would not be entertained under any circumstances.</li>
           <li>IES Master reserves the right to cancel classes, amalgamate classes, change class times or schedule, or change the number of classes in a week if the need arises.</li>
           <li>Study Material/Books will be provided only once.</li>
          </ul>

        </div>
      </div>

      <div className='container mx-auto pl-4'>
<div><TopperTalk/></div>
</div>
    </>
  );
}
