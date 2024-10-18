import React, { useState } from 'react';
/*import { ClassroomProgram } from '../../components/ClassroomProgram';*/
import TopperTalk from "../../components/TopperTalk"

export default function Classroom() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndexx, setActiveIndexx] = useState(3)
  return (
    <div>
      {/* <div>< ClassroomProgram/></div> */}
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">

              <div className='text-3xl font-semibold text-green-600 mt-6'>
                Classroom Programs
              </div>
              <br></br>
              <div className='text-2xl font-semibold p-2 mt-6'>
                Regular Classroom Program
                <p className='font-normal text-sm  mt-3'>
                  Classroom Teaching of IES Master aims to create a learning environment
                  where every student gets the maximum benefit and they should reach to
                  their optimum potential. It contributes to effective learning and
                  knowledge base of students reaches to its top, the program comprises
                  student-teacher interaction, immediate feedback, and most importantly,
                  they can avail the benefits of teacher's expertise by asking academic as
                  well as non-academic doubts within the classroom. Guidance is available
                  for Engineering Services (ESE 2025) and state engineering services (SES)
                  the salient feature of the same are described below:
                </p>


                <h1 className='text-xl font-semibold leading-10 mt-2'>
                  Classroom Program for Engineering Services Examination (ESE)
                </h1>

                <p className='font-normal text-sm'>
                  Classroom teaching program includes elaborative preparation (1000-1200
                  hours) for GATE, ESE, and SEs exams. The program is further bifurcated
                  into 850 hours and 250 hours for technical subjects and non-technical
                  subjects, respectively.<br /><br />
                  Regular Program is for students who have completed B.Tech and want to
                  dedicatedly prepare for competitive exams like GATE & ESE. Other salient
                  features of the program are:
                  <br /><br />
                </p>


                <ul className='list-disc list-inside font-normal mr-2 text-sm leading-5'>
                  <li>Comprehensive and updated study material,</li>
                  <li>Practice test papers</li>
                  <li>Guidance for personality test and interview</li>
                  <li>Performance tracking</li>
                </ul>



                <h2 className='text-xl font-semibold leading-10 mt-2'>
                  Classroom Program for State Engineering Services (SES)
                </h2>
                <p className='font-normal text-sm leading-tight'>
                  This program is designed for holistic preparation and to cultivate the
                  necessary skills in the mind of aspirants and to instill the necessary
                  confidence to approach the exam with full preparedness. Classroom
                  teaching includes guidance for full technical syllabus along with doubt
                  solving, study material, and test series.
                </p>

                <h3 className='text-base font-bold leading-10 font-sans'>
                  <p class='italic pb-16'> Note: &nbsp;Guidance for Non-technical syllabus will be available in online
                    mode.</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full bg-slate-100 pt-14'>
        <div className="container mx-auto">
          <h1 className='text-2xl font-semibold'>Admission Process</h1><br></br>
          <span
            onClick={() => setActiveIndex(0)}
            className={`text-blue-600  px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 0 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-red-50'}`}
          >
            Walk in Admission
          </span>
          <span onClick={() => setActiveIndex(1)} className={` text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 1 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-red-50'}`} > Admission through DD</span>
          <span onClick={() => setActiveIndex(2)} className={`text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 2 ? 'border-2 border-green-700  bg-emerald-200' : ' hover:bg-red-50'}`}> Online Admission</span>
          {activeIndex == 0 && (<div>
            <p className='pt-6'>You may visit IES MASTER OFFICE where you are required to complete the following formalities:</p>
            <ul className='list-disc list-inside font-sans mr-2 text-base leading-6'>
              <li className='pt-3'>Fill the Application Form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>Attach Self- Attested copy of Identity Proof (Such as Voter ID/ PAN Card/ Driving License/ Passport etc.)</li>
              <li>The fees can be paid via Cash or Demand draft.</li>
              <li><strong>Delhi Centre:</strong> The DD should be made in favor of “IES MASTER“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li><strong>Noida Centre:</strong> The DD should be made in favor of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li>Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.</li>

              <li className='pb-16'>NOTE: Cheque payment is not acceptable.</li>
            </ul>
          </div>)}
          {activeIndex == 1 && (<div className='pb-16'>
            <p className='text-xl font-semibold pt-6'>Admission through Demand Draft</p>
            <hr className='mt-14'></hr>
            <ul className='font-sans  text-base font-normal'>
              <li className='pt-6'> The candidates, who cannot come to our office, should follow the following procedure:</li>
              <li className='pt-2'> Download the Application form.</li></ul>
            <ul className='list-disc list-inside mr-3 text-base leading-6'>
              <li className='pt-2'> Take a print out of the Application Form.</li>
              <li>Fill the Application form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>Attach Self- Attested copy of Identity Proof (Such as PAN Card/ Voter ID/ Driving License/ Passport etc.)</li>
              <li>Get the DD of required fee made.</li>
              <li><strong>Delhi Centre:</strong> The DD should be made in favor of “IES MASTER“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li><strong>Noida Centre:</strong> The DD should be made in favor of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi for Tuition Fee and in favor of "IES MASTER PUBLICATION" for study material (17500/-).</li>
              <li>(Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.)</li>
              <li>Send it to our Office at the following address:</li></ul>
            <p className='pb-2 pt-2 pl-8'>IES MASTER</p>
            <p className='pb-2 pl-8'>F-126 KATWARIA SARAI</p>
            <p className='pb-2 pl-8'>NEW DELHI-110016</p><br></br>
            <div className='flex justify-end'>
              <a href='https://iesmaster.org/public/resources/admission-forms/Admission-Form[Regular_Delhi]-2018-19.pdf' className='px-3 py-1  bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base '>Download Admission Form</a></div>
          </div>)}
          {activeIndex == 2 && (<div className='pb-16'>
            <p className='text-xl font-semibold pt-6'>Online Admission</p>
            <hr className='mt-14'></hr>
            <ul className='font-sans  text-base font-normal'>
              <li className='pt-6'>Candidates may also apply through the Online Admission process.</li></ul>
            <ul className='list-disc list-inside mr-3 text-base leading-6'>
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
              <li>Please bring a print out of this receipt, two passport size photographs and Original & photocopy of identity proof for verifying your candidature & receiving IES MASTER ID Card.</li>
              <li>Convenience charges of 1.00% + Service tax will be applicable on payment through Debit Card.</li>
              <li>Convenience charges of 1.10% + Service tax will be applicable on payment through Credit Card.</li>
              <li>Convenience charges of Rs. 17 + Service tax will be applicable on payment through Net Banking.</li>
              <li>The fees will be refunded only if the student informs us in writing through his/her valid email id as mentioned in the Form within 5 days of commencement date of the Batch. No <br></br>refund request shall be entertained thereafter. Admission Charges of Rs. 6000 shall be deducted.</li>
          
            </ul>
            <p className='text-base mt-2'>Payment Confirmation will be issued after 48 hrs. of Registration.</p><br></br>
            <div className='flex justify-end'>
              <a href='https://iesmaster.org/im/online-registration' className='px-3 py-1  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-base '>Enroll Now</a></div>
          </div>)}


        </div>
      </div>


      <div className='container my-14 mx-auto' >
        <h1 className='text-xl font-semibold mb-2'>  New Batch for Classroom Program</h1>

        <a
          href="https://iesmaster.org/upcoming-batches"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base  mt-4"
        >
          Click here to view Upcoming Batches
        </a>
      </div>

      <div className='w-full bg-emerald-50 py-12 '>
        <div className="container mx-auto ">
          <div className='text-xl font-semibold mb-2'> Fee Structure of classroom Program</div>
          <a
            href="https://iesmaster.org/fee-structure"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base mt-4"
          >
            Click here to view Fee Structure
          </a><br></br>
        </div>
      </div>

      <div className='container mx-auto'>
        <h1 className='font-bold text-lg pt-16'>Reference Books</h1><br></br>
        <span
          onClick={() => setActiveIndexx(3)}
          className={`text-blue-600  px-2 py-1 rounded pr-4 pl-4 ${activeIndexx === 3 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-gray-100'}`}
        >CE
        </span>
        <span
          onClick={() => setActiveIndexx(4)}
          className={`text-blue-600  px-2 py-1 rounded pr-4 pl-4 ${activeIndexx === 4 ? 'border-2 border-green-700 bg-emerald-200' : 'hover:bg-gray-100'}`}
        >ME
        </span>


        {activeIndexx == 3 && (<div>
          <table className=' table-auto w-full text-left border-collapse  mt-8 '>
            <thead className='bg-green-800 text-white '>
              <tr>
                <th className='p-1 pr-3 border text-sm w-[6%]'>S.No</th>
                <th className='p-1 pr-3 border text-sm w-[44%]'>Subject/Book Name</th>
                <th className='p-1 pr-3 border text-sm w-[44%]'>Author Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-[50px]'>
                <td className='p-1 border'>1</td>
                <td className="p-1 border">Strength of Materials /Mechanics of Structure</td>
                <td className="p-1 border">Gere & Goodno, L. Singer</td>
              </tr>
              <tr className="bg-green-100">
                <td className="p-1 border">2</td>
                <td className="p-1 border">Theory of Structures/ Analysis of Structure</td>
                <td className="p-1 border">L.S. Negi & Jangit, Gupta & Pandit,<br></br> C.S. Reddy</td>
              </tr>
              <tr>
                <td className="p-1 border">3</td>
                <td className="p-1 border leading-5">Construction Planning & Management<br></br>
                  (i) PERT -CPM<br></br>
                  (ii)Engineering Economy & unsolved<br></br>
                  Problems on PERT-CPM<br></br>
                  (iii) Equipment</td>
                <td className="p-1"><p className='mb-2'>B.C. Punamia<br></br></p><p className='mb-2'> U.K. Shrivastav<br></br></p> <p className='mb-2'>Robert Peurifoy</p></td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">4</td>
                <td className="p-1 border">Soil Mechanics & Foundation Engineering</td>
                <td className="p-1 border">R.F. Craig, Muni Budhu</td>
              </tr>
              <tr>
                <td className="p-1 border">5</td>
                <td className="p-1 border">Fluid Mechanics and Fluid Machines</td>
                <td className="p-1 border">Modi & Seth, R.K. Bansal Cengel and<br></br>
                  Cimbala, K.Subramanyam, Jagdish Lal.
                </td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">6</td>
                <td className="p-1 border">Environmental Engineering</td>
                <td className="p-1 border">G.O.I Manual , S.K. Garg (Part-I & II),<br></br>
                  Peavy and R owe, Metcalf & Eddy</td>
              </tr>
              <tr>
                <td className="p-1 border">7</td>
                <td className="p-1 border">Highway Engineering</td>
                <td className="p-1 border">Khanna & Justo, Kadiyali</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">8</td>
                <td className="p-1 border">Railway Engineering</td>
                <td className="p-1 border">Saxena & Arora</td>
              </tr>
              <tr>
                <td className="p-1 border">9</td>
                <td className="p-1 border">Airport Engineering</td>
                <td className="p-1 border">Saxena & Arora</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">10</td>
                <td className="p-1 border">Docks & Harbors</td>
                <td className="p-1 border">Rangwala</td>
              </tr>
              <tr>
                <td className="p-1 border">11</td>
                <td className="p-1 border">Building Materials</td>
                <td className="p-1 border">Rangwala, M.L. Gambhir</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">12</td>
                <td className="p-1 border">R.C.C. Design</td>
                <td className="p-1 border"><p className='mb-2'>Pillai and Menon, A.K. jain, H.J.Shah<br></br></p>
                  <p className='mb-2'>I.S. Code-456---2000</p></td>
              </tr>
              <tr>
                <td className="p-1 border">13</td>
                <td className="p-1 border">Steel Design</td>
                <td className="p-1 border"><p className='mb-2'>Arya & Ajmani, L.S. Negi,<br></br></p>
                  <p className='mb-2'> I.S. Code-800</p></td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">14</td>
                <td className="p-1 border">Plastic Analysis</td>
                <td className="p-1 border">Manicka Selvam</td>
              </tr>
            </tbody>

          </table>
        </div>)}
        {activeIndexx == 4 && (<div>
          <table className=' table-auto w-full text-left border-collapse mt-8 '>
            <thead className='bg-green-800 text-white '>
              <tr>
                <th className='p-1 pr-3 border text-sm'>S.No</th>
                <th className='p-1 pr-3 border text-sm'>Subject/Book Name</th>
                <th className='p-1 pr-3 border text-sm'>Author Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1 border">1</td>
                <td className="p-1 border">Engg. Thermodynamics</td>
                <td className="p-1 border">P.K Nag , Cengel & Boles</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">2</td>
                <td className="p-1 border">Strength of Materials</td>
                <td className="p-1 border space-y-2"> <p className='mb-2'>Gere & Timoshenko<br></br></p>
                  <p className='mb-2'>Sadhu Singh<br></br></p>
                  <p className='mb-2'> E.J Hern</p></td>
              </tr>
              <tr>
                <td className="p-1 border">3</td>
                <td className="p-1 border">Industrial Engg.</td>
                <td className="p-1 border space-y-2"> <p className='mb-2'>OP Khanna , Ravi Shankar <br></br></p>
                  <p className='mb-2'>Buffa & Sarin</p></td>
              </tr>

              <tr className="bg-emerald-100">
                <td className="p-1 border">4</td>
                <td className="p-1 border">Production Engg.</td>
                <td className="p-1 border space-y-2"><p className='mb-2'>Kalpkjian Schmid<br></br></p>
                  <p className='mb-2'>Amitabh Ghosh<br></br></p>
                  <p className='mb-2'>AK Malik</p></td>
              </tr>
              <tr>
                <td className="p-1 border">5</td>
                <td className="p-1 border">Material Science</td>
                <td className="p-1 border"><p className='mb-2'>WD Callister</p>
                  <p className='mb-2'> IP Singh ,V Raghvan</p>
                </td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">6</td>
                <td className="p-1 border">Machine Design</td>
                <td className="p-1 border"><p className='mb-2'>Shigley</p>
                  <p className='mb-2'>V.B Bhandari</p></td>
              </tr>
              <tr>
                <td className="p-1 border">7</td>
                <td className="p-1 border">Mechanical Vibration</td>
                <td className="p-1 border">Grover</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">8</td>
                <td className="p-1 border">Theory of Machines</td>
                <td className="p-1 border"><p className='mb-2'>RS Khurmi , S.S Rattan</p>
                  <p className='mb-2'>Malik & Ghosh</p></td>
              </tr>
              <tr>
                <td className="p-1 border">9</td>
                <td className="p-1 border">	Fluid Machinery</td>
                <td className="p-1 border"><p className='mb-2'>Jagdish Lal</p>
                  <p className='mb-2'>R.K.Bansal</p></td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">10</td>
                <td className="p-1 border">Refrigeration & Air Conditioning</td>
                <td className="p-1 border"><p className='mb-2'>CP Arora</p>
                  <p className='mb-2'>Domukundwar</p></td>
              </tr>
              <tr>
                <td className="p-1 border">11</td>
                <td className="p-1 border">Heat Mass And Transfer</td>
                <td className="p-1 border">D.S.Kumar</td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">12</td>
                <td className="p-1 border">Compressible Flow</td>
                <td className="p-1 border">S.M.Yahya</td>
              </tr>
              <tr>
                <td className="p-1 border">13</td>
                <td className="p-1 border">Fluid Mechanics</td>
                <td className="p-1 border"><p className='mb-2'>Modi & Seth</p>
                  <p className='mb-2'>R.K.Bansal</p></td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">14</td>
                <td className="p-1 border">Gas Turbine & Propulsive Systems</td>
                <td className="p-1 border"><p className='mb-2'>V Ganeshan</p>
                  <p className='mb-2'>P.K Nag</p></td>
              </tr><tr>
                <td className="p-1 border">15</td>
                <td className="p-1 border">	I.C.Engine</td>
                <td className="p-1 border"><p className='mb-2'>Sharma Mathur,</p>
                  <p className='mb-2'>V. Ganeshan</p></td>
              </tr>
              <tr className="bg-emerald-100">
                <td className="p-1 border">16</td>
                <td className="p-1 border">	Operations Research</td>
                <td className="p-1 border"><p className='mb-2'>Taha , S.D Sharma</p>
                  <p className='mb-2'>Kanti Swarup</p></td>
              </tr>
            </tbody>

          </table>
        </div>)}

      </div>
      <div className='w-full bg-emerald-50 my-12'>
        <div className="container mx-auto p-10">
          <div className='text-2xl font-semibold'>Results</div>
          <div className='flex mt-4 justify-start'>
            <div className='w-1/2'>
              <a
                href="https://iesmaster.org/results/ese"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-1 border-black bg-white text-black-xl font-normal rounded px-3 py-1 hover:bg-gray-100 text-base"
              >
                ESE Result
              </a>
            </div>

            <div className='w1/2'>
              <a
                href="https://iesmaster.org/results/gate"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-1 border-black bg-white text-black font-normal rounded px-3 py-1 hover:bg-gray-100 text-base "
              >
                GATE Result
              </a>
            </div>
          </div>
        </div>
      </div>

<div className='container mx-auto'>
<div><TopperTalk/></div>
</div>
    </div>
  );
}
