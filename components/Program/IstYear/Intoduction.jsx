import React from "react";

export default function Intoduction() {
  return (
    <section className="px-[10px] sm:px-[2rem] pt-[1rem] pb-[3rem] ">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div>
                <h1 className="text-center sm:text-left text-[23px] sm:text-[28px] font-semibold text-green-600">
                  Classroom Programs
                </h1>
              </div>
              <div className="mt-3 sm:mt-6">
                <h2 className="text-[22px] text-center sm:text-left text-[#333333] font-semibold">
                  Regular Classroom Program
                </h2>

                <span className=" block text-[14px]  mt-3">
                  Classroom Teaching of IES Master aims to create a learning
                  environment where every student gets the maximum benefit and
                  they should reach to their optimum potential. It contributes
                  to effective learning and knowledge base of students reaches
                  to its top, the program comprises student-teacher interaction,
                  immediate feedback, and most importantly, they can avail the
                  benefits of teacher's expertise by asking academic as well as
                  non-academic doubts within the classroom. Guidance is
                  available for Engineering Services (ESE 2025) and state
                  engineering services (SES) the salient feature of the same are
                  described below:
                </span>
                <h3 className="text-[14px] font-bold my-[10px]">
                  Classroom Program for Engineering Services Examination (ESE)
                </h3>
                <span className="mb-[10px] block text-[14px]">
                  Classroom teaching program includes elaborative preparation
                  (1000-1200 hours) for GATE, ESE, and SEs exams. The program is
                  further bifurcated into 850 hours and 250 hours for technical
                  subjects and non-technical subjects, respectively.
                </span>
                <span className="mb-[10px] block text-[14px]">
                  Regular Program is for students who have completed B.Tech and
                  want to dedicatedly prepare for competitive exams like GATE &
                  ESE. Other salient features of the program are:
                </span>
                <ul className="list-disc pl-[1rem] text-[14px]">
                <li>Comprehensive and updated study material,</li>
                  <li>Practice test papers</li>
                  <li>Guidance for personality test and interview</li>
                  <li>Performance tracking</li>
                </ul>
               
                <h3 className="text-[14px] font-bold  my-[10px]">
                  Classroom Program for State Engineering Services (SES)
                </h3>
                <p className=" text-[14px]">
                  This program is designed for holistic preparation and to
                  cultivate the necessary skills in the mind of aspirants and to
                  instill the necessary confidence to approach the exam with
                  full preparedness. Classroom teaching includes guidance for
                  full technical syllabus along with doubt solving, study
                  material, and test series.
                </p>
                <h3 className="italic text-[14px] font-bold font-sans mt-[10px]">
                  Note: &nbsp;Guidance for Non-technical syllabus will be
                  available in online mode.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
