import React from 'react'

const WalkIn = () => {
  return (
    <div>
        <div>
                <img src="images/Admission/main.jpg" alt="classroom course image" className='w-full'></img>
            </div>
            <div className="container m-auto">
                <div className="grid grid-rows">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12">
                            <h1 className='text-green-500 font-semibold text-3xl mt-4 mb-8'>Admissions</h1>
                        </div>
                        <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 ">
                            <h2 className='text-xl mb-3 font-bold'>Walk in Admission</h2>
                            <p className='mb-3 text-sm'>You may visit IES MASTER OFFICE where you are required to complete the following formalities:</p>
                            <ul className='list-disc list-inside text-sm'>
                                <li>
                                Fill the Application Form.
                                </li>
                                <li>
                                Attach 2- photographs with the Application Form.
                                </li>
                                <li>
                                Attach Self- Attested copy of Identity/ Address Proof (Such as Aadhaar Card/ Voter ID/ Driving License/ Passport etc.)
                                </li>
                                <li>
                                The fees can be paid via Cash or Demand draft.
                                </li>
                                <li>
                                <strong>For Delhi Centre:</strong> The DD should be made in favor of <strong>“IES MASTER“</strong> payable at New Delhi for Tuition Fee and in favor of <strong>“IESMASTER PUBLICATION“</strong> for study material.
                                </li>
                                <li>
                                <strong>For Noida Centre:</strong> The DD should be made in favor of <strong>“IESMASTER LEARNERS PRIVATE LIMITED“</strong> payable at New Delhi for Tuition Fee and in favor of <strong>“IESMASTER PUBLICATION“</strong> for study material.
                                </li>
                                <li>
                                Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.
                                </li>
                            </ul>
                            <p className='text-sm mt-3 mb-8'>NOTE: Cheque payment is not acceptable.</p>
                        </div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default WalkIn
