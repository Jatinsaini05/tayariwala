import React, { useState } from "react";

export default function Admission() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <section className="bg-[#ebf6f4] py-[2rem] px-[10px] lg:px-[2rem]">

      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
            
        <h1 className="text-[22px] font-semibold text-center sm:text-left">Admission Process</h1>
        <div className="mt-[1rem] flex gap-[15px] sm:gap-[20px] flex-wrap justify-start items-center">
          <div>
            <button
              onClick={() => setActiveIndex(0)}
              className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 0 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
            >
              Walk in Admission
            </button>
          </div>
          <div>
            <button
              onClick={() => setActiveIndex(1)}
              className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 1 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
            >
              Admission through DD
            </button>
          </div>
          <div>
            <button
              onClick={() => setActiveIndex(2)}
              className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 2 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
            >
              Online Admission
            </button>
          </div>
        </div>

        {activeIndex == 0 && (
          <div className="mt-[1rem]">
            <h3 className="text-[14px]">
              You may visit IES MASTER OFFICE where you are required to complete
              the following formalities:
            </h3>
            <ul className="list-disc pl-[1rem] text-[14px]">
              <li>Fill the Application Form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>
                Attach Self- Attested copy of Identity Proof (Such as Voter ID/
                PAN Card/ Driving License/ Passport etc.)
              </li>
              <li>The fees can be paid via Cash or Demand draft.</li>
              <li>
                <strong> Delhi Centre:</strong> The DD should be made in favor
                of “IES MASTER“ payable at New Delhi for Tuition Fee and in
                favor of "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                <strong> Noida Centre: </strong>
                The DD should be made in favor of “IESMASTER LEARNERS PRIVATE
                LIMITED“ payable at New Delhi for Tuition Fee and in favor of
                "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                Write your Full Name and Branch of Engineering along with the
                telephone number on the Back of the Demand Draft.
              </li>
            </ul>
            <span className="mt-[10px]"> NOTE: Cheque payment is not acceptable.</span>
          </div>
        )}
           {activeIndex == 1 && (
          <div className="mt-[1rem]">
            <h3 className="text-[14px] ">
              You may visit IES MASTER OFFICE where you are required to complete
              the following formalities: 2
            </h3>
            <ul className="list-disc pl-[1rem] text-[14px]">
              <li>Fill the Application Form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>
                Attach Self- Attested copy of Identity Proof (Such as Voter ID/
                PAN Card/ Driving License/ Passport etc.)
              </li>
              <li>The fees can be paid via Cash or Demand draft.</li>
              <li>
                <strong> Delhi Centre:</strong> The DD should be made in favor
                of “IES MASTER“ payable at New Delhi for Tuition Fee and in
                favor of "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                <strong> Noida Centre: </strong>
                The DD should be made in favor of “IESMASTER LEARNERS PRIVATE
                LIMITED“ payable at New Delhi for Tuition Fee and in favor of
                "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                Write your Full Name and Branch of Engineering along with the
                telephone number on the Back of the Demand Draft.
              </li>
            </ul>
            <span className="mt-[10px]"> NOTE: Cheque payment is not acceptable.</span>
          </div>
        )}
           {activeIndex == 2 && (
          <div className="mt-[1rem]">
            <h3 className="text-[14px]">
              You may visit IES MASTER OFFICE where you are required to complete
              the following formalities: 3
            </h3>
            <ul className="list-disc pl-[1rem] text-[14px]">
              <li>Fill the Application Form.</li>
              <li>Attach 2- photographs with the Application Form.</li>
              <li>
                Attach Self- Attested copy of Identity Proof (Such as Voter ID/
                PAN Card/ Driving License/ Passport etc.)
              </li>
              <li>The fees can be paid via Cash or Demand draft.</li>
              <li>
                <strong> Delhi Centre:</strong> The DD should be made in favor
                of “IES MASTER“ payable at New Delhi for Tuition Fee and in
                favor of "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                <strong> Noida Centre: </strong>
                The DD should be made in favor of “IESMASTER LEARNERS PRIVATE
                LIMITED“ payable at New Delhi for Tuition Fee and in favor of
                "IES MASTER PUBLICATION" for study material (17500/-).
              </li>
              <li>
                Write your Full Name and Branch of Engineering along with the
                telephone number on the Back of the Demand Draft.
              </li>
            </ul>
            <span className="mt-[10px] text-[14px]"> NOTE: Cheque payment is not acceptable.</span>
          </div>
        )}
            </div>
          </div>
        </div>
      </div>


      </section>

      {/* <div className="w-full bg-slate-100 pt-14">
        <div className="container mx-auto">
          <h1 className="text-[23px] sm:text-[2rem] font-semibold flex flex-col sm:flex-row">
            Admission Process
          </h1>

          <span
            onClick={() => setActiveIndex(0)}
            className={`text-blue-600  px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 0 ? "border-2 border-green-700 bg-emerald-200" : "hover:bg-red-50"}`}
          >
            Walk in Admission
          </span>
          <span
            onClick={() => setActiveIndex(1)}
            className={` text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 1 ? "border-2 border-green-700 bg-emerald-200" : "hover:bg-red-50"}`}
          >
            {" "}
            Admission through DD
          </span>
          <span
            onClick={() => setActiveIndex(2)}
            className={`text-blue-600 px-2 py-1 rounded pr-3 pl-3 ${activeIndex === 2 ? "border-2 border-green-700  bg-emerald-200" : " hover:bg-red-50"}`}
          >
            {" "}
            Online Admission
          </span>
          {activeIndex == 0 && (
            <div>
              <p className="pt-6">
                You may visit IES MASTER OFFICE where you are required to
                complete the following formalities:
              </p>
              <ul className="list-disc list-inside font-sans mr-2 text-base leading-6">
                <li className="pt-3">Fill the Application Form.</li>
                <li>Attach 2- photographs with the Application Form.</li>
                <li>
                  Attach Self- Attested copy of Identity Proof (Such as Voter
                  ID/ PAN Card/ Driving License/ Passport etc.)
                </li>
                <li>The fees can be paid via Cash or Demand draft.</li>
                <li>
                  <strong>Delhi Centre:</strong> The DD should be made in favor
                  of “IES MASTER“ payable at New Delhi for Tuition Fee and in
                  favor of "IES MASTER PUBLICATION" for study material
                  (17500/-).
                </li>
                <li>
                  <strong>Noida Centre:</strong> The DD should be made in favor
                  of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi
                  for Tuition Fee and in favor of "IES MASTER PUBLICATION" for
                  study material (17500/-).
                </li>
                <li>
                  Write your Full Name and Branch of Engineering along with the
                  telephone number on the Back of the Demand Draft.
                </li>

                <li className="pb-16">
                  NOTE: Cheque payment is not acceptable.
                </li>
              </ul>
            </div>
          )}
          {activeIndex == 1 && (
            <div className="pb-16">
              <p className="text-xl font-semibold pt-6">
                Admission through Demand Draft
              </p>
              <hr className="mt-14"></hr>
              <ul className="font-sans  text-base font-normal">
                <li className="pt-6">
                  {" "}
                  The candidates, who cannot come to our office, should follow
                  the following procedure:
                </li>
                <li className="pt-2"> Download the Application form.</li>
              </ul>
              <ul className="list-disc list-inside mr-3 text-base leading-6">
                <li className="pt-2">
                  {" "}
                  Take a print out of the Application Form.
                </li>
                <li>Fill the Application form.</li>
                <li>Attach 2- photographs with the Application Form.</li>
                <li>
                  Attach Self- Attested copy of Identity Proof (Such as PAN
                  Card/ Voter ID/ Driving License/ Passport etc.)
                </li>
                <li>Get the DD of required fee made.</li>
                <li>
                  <strong>Delhi Centre:</strong> The DD should be made in favor
                  of “IES MASTER“ payable at New Delhi for Tuition Fee and in
                  favor of "IES MASTER PUBLICATION" for study material
                  (17500/-).
                </li>
                <li>
                  <strong>Noida Centre:</strong> The DD should be made in favor
                  of “IESMASTER LEARNERS PRIVATE LIMITED“ payable at New Delhi
                  for Tuition Fee and in favor of "IES MASTER PUBLICATION" for
                  study material (17500/-).
                </li>
                <li>
                  (Write your Full Name and Branch of Engineering along with the
                  telephone number on the Back of the Demand Draft.)
                </li>
                <li>Send it to our Office at the following address:</li>
              </ul>
              <p className="pb-2 pt-2 pl-8">IES MASTER</p>
              <p className="pb-2 pl-8">F-126 KATWARIA SARAI</p>
              <p className="pb-2 pl-8">NEW DELHI-110016</p>
              <br></br>
              <div className="flex justify-end">
                <a
                  href="https://iesmaster.org/public/resources/admission-forms/Admission-Form[Regular_Delhi]-2018-19.pdf"
                  className="px-3 py-1  bg-cyan-600 text-white font-normal rounded-md hover:bg-cyan-700 text-base "
                >
                  Download Admission Form
                </a>
              </div>
            </div>
          )}
          {activeIndex == 2 && (
            <div className="pb-16">
              <p className="text-xl font-semibold pt-6">Online Admission</p>
              <hr className="mt-14"></hr>
              <ul className="font-sans  text-base font-normal">
                <li className="pt-6">
                  Candidates may also apply through the Online Admission
                  process.
                </li>
              </ul>
              <ul className="list-disc list-inside mr-3 text-base leading-6">
                <li>
                  Click on the ‘Apply Online’ option available at top of the
                  Home page.
                </li>
                <li>
                  The Application Form will open. Fill in the complete form.
                </li>
                <li>
                  Full Name, Date of Birth, Email ID, Mobile No. & Your Address
                  (City, State & Pin) are some of the mandatory fields.
                </li>
                <li>Fill in the Program Details.</li>
                <li>Fill in Your Identity Proof Details.</li>
                <li>
                  Fill in the details of your educational qualifications and
                  your Guardian’s details.
                </li>
                <li>Upload scanned copies of your photograph & signature.</li>
                <li>
                  Tick Mark on “I have read and agree to all the details”.
                </li>
                <li>Submit the form.</li>
                <li>
                  {" "}
                  Complete the registration by making the payment through any
                  one of the following modes:
                </li>
              </ul>
              <p className="text-base mb-4 mt-2 ml-36">
                a) Debit Card &nbsp; b) Credit Card &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;c) Net Banking
              </p>
              <ul className="list-disc list-inside mr-3 text-base leading-6">
                <li>
                  Students can pay the registration fee, first installment or
                  full fees.
                </li>
                <li>
                  Immediately after your Registration, your receipt will be
                  generated.
                </li>
                <li>Click on the Print button or Save button.</li>
                <li>
                  Please bring a print out of this receipt, two passport size
                  photographs and Original & photocopy of identity proof for
                  verifying your candidature & receiving IES MASTER ID Card.
                </li>
                <li>
                  Convenience charges of 1.00% + Service tax will be applicable
                  on payment through Debit Card.
                </li>
                <li>
                  Convenience charges of 1.10% + Service tax will be applicable
                  on payment through Credit Card.
                </li>
                <li>
                  Convenience charges of Rs. 17 + Service tax will be applicable
                  on payment through Net Banking.
                </li>
                <li>
                  The fees will be refunded only if the student informs us in
                  writing through his/her valid email id as mentioned in the
                  Form within 5 days of commencement date of the Batch. No{" "}
                  <br></br>refund request shall be entertained thereafter.
                  Admission Charges of Rs. 6000 shall be deducted.
                </li>
              </ul>
              <p className="text-base mt-2">
                Payment Confirmation will be issued after 48 hrs. of
                Registration.
              </p>
              <br></br>
              <div className="flex justify-end">
                <a
                  href="https://iesmaster.org/im/online-registration"
                  className="px-3 py-1  bg-blue-400 text-white font-normal rounded-md hover:bg-blue-600 text-base "
                >
                  Enroll Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}
