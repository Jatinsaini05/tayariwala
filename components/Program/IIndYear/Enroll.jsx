import React, { useState } from "react";

export default function Enroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <section className="py-[2rem] px-[10px] lg:px-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h1 className="text-[22px] font-semibold text-center sm:text-left">
                  How to Enroll
                </h1>
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
                      You may visit IES MASTER OFFICE where you are required to
                      complete the following formalities:
                    </h3>
                    <ul className="list-disc pl-[1rem] text-[14px]">
                      <li>Fill the Application Form.</li>
                      <li>Attach 2- photographs with the Application Form.</li>
                      <li>
                        Attach Self- Attested copy of Identity Proof (Such as
                        Voter ID/ PAN Card/ Driving License/ Passport etc.)
                      </li>
                      <li>The fees can be paid via Cash or Demand draft.</li>
                      <li>
                        <strong> Delhi Centre:</strong> The DD should be made in
                        favor of “IES MASTER“ payable at New Delhi for Tuition
                        Fee and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        <strong> Noida Centre: </strong>
                        The DD should be made in favor of “IESMASTER LEARNERS
                        PRIVATE LIMITED“ payable at New Delhi for Tuition Fee
                        and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        Write your Full Name and Branch of Engineering along
                        with the telephone number on the Back of the Demand
                        Draft.
                      </li>
                    </ul>
                    <span className="mt-[10px]">
                      {" "}
                      NOTE: Cheque payment is not acceptable.
                    </span>
                  </div>
                )}
                {activeIndex == 1 && (
                  <div className="mt-[1rem]">
                    <h3 className="text-[14px] ">
                      You may visit IES MASTER OFFICE where you are required to
                      complete the following formalities: 2
                    </h3>
                    <ul className="list-disc pl-[1rem] text-[14px]">
                      <li>Fill the Application Form.</li>
                      <li>Attach 2- photographs with the Application Form.</li>
                      <li>
                        Attach Self- Attested copy of Identity Proof (Such as
                        Voter ID/ PAN Card/ Driving License/ Passport etc.)
                      </li>
                      <li>The fees can be paid via Cash or Demand draft.</li>
                      <li>
                        <strong> Delhi Centre:</strong> The DD should be made in
                        favor of “IES MASTER“ payable at New Delhi for Tuition
                        Fee and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        <strong> Noida Centre: </strong>
                        The DD should be made in favor of “IESMASTER LEARNERS
                        PRIVATE LIMITED“ payable at New Delhi for Tuition Fee
                        and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        Write your Full Name and Branch of Engineering along
                        with the telephone number on the Back of the Demand
                        Draft.
                      </li>
                    </ul>
                    <span className="mt-[10px]">
                      {" "}
                      NOTE: Cheque payment is not acceptable.
                    </span>
                  </div>
                )}
                {activeIndex == 2 && (
                  <div className="mt-[1rem]">
                    <h3 className="text-[14px]">
                      You may visit IES MASTER OFFICE where you are required to
                      complete the following formalities: 3
                    </h3>
                    <ul className="list-disc pl-[1rem] text-[14px]">
                      <li>Fill the Application Form.</li>
                      <li>Attach 2- photographs with the Application Form.</li>
                      <li>
                        Attach Self- Attested copy of Identity Proof (Such as
                        Voter ID/ PAN Card/ Driving License/ Passport etc.)
                      </li>
                      <li>The fees can be paid via Cash or Demand draft.</li>
                      <li>
                        <strong> Delhi Centre:</strong> The DD should be made in
                        favor of “IES MASTER“ payable at New Delhi for Tuition
                        Fee and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        <strong> Noida Centre: </strong>
                        The DD should be made in favor of “IESMASTER LEARNERS
                        PRIVATE LIMITED“ payable at New Delhi for Tuition Fee
                        and in favor of "IES MASTER PUBLICATION" for study
                        material (17500/-).
                      </li>
                      <li>
                        Write your Full Name and Branch of Engineering along
                        with the telephone number on the Back of the Demand
                        Draft.
                      </li>
                    </ul>
                    <span className="mt-[10px] text-[14px]">
                      {" "}
                      NOTE: Cheque payment is not acceptable.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
