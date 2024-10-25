import React from "react";
import { FaPlus } from "react-icons/fa";

const DemandDraft = ({ admissionDemand }) => {
  return (
    <div>
      <div className="bg-emerald-50 pt-8 pb-10">
        <div className="container">
          <h1 className="font-bold text-xl">{admissionDemand?.heading}</h1>

          <div
            className="inner-html-box"
            dangerouslySetInnerHTML={{
              __html: admissionDemand?.content
            }}
          />
          {/* <p className='text-sm mt-3 mb-3'>The candidates, who cannot come to our office, should follow the following procedure:</p>
                    <p classname="text sm mb-3">Download the Application form.</p>
                    <ul className='list-disc list-inside text-sm mb-2'>
                        <li>Take a print out of the Application Form.</li>
                        <li>Fill the Application form.</li>
                        <li>Attach 2- photographs with the Application Form.</li>
                        <li>Attach Self- Attested copy of Identity/ Address Proof (Such as Aadhaar Card/ Voter ID/ Driving License/ Passport etc.)</li>
                        <li>Get the DD of required fee made.</li>
                        <li><strong>For Delhi Centre:</strong> The DD should be made in favor of <strong>“IES MASTER“</strong> payable at New Delhi for Tuition Fee and in favor of <strong>“IESMASTER PUBLICATION“</strong> for study material.</li>
                        <li><strong>For Noida Centre:</strong> The DD should be made in favor of <strong>“IESMASTER LEARNERS PRIVATE LIMITED“</strong> payable at New Delhi for Tuition Fee and in favor of <strong>“IESMASTER PUBLICATION“</strong> for study material.</li>
                        <li>(Write your Full Name and Branch of Engineering along with the telephone number on the Back of the Demand Draft.)</li>
                        <li>Send it to our Office at the following address:</li>
                    </ul>
                    <p className='pl-5 mb-2 text-sm'>  IES MASTER  </p>
                    <p className='pl-5 mb-2 text-sm'>  F-126 KATWARIA SARAI  </p>
                    <p className='pl-5 mb-2 text-sm'>  NEW DELHI-110016  </p>
                <div className='mt-10 flex justify-end'>
                    <button className='text-white bg-blue-600 px-1 py-1 rounded flex justify-between items-center gap-1'>Download Admission Form <FaPlus className='text-black'/></button>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default DemandDraft;
