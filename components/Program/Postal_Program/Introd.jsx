import React from "react";
import Link from "next/link";
export default function Introd() {
  return (
    <section className="px-[10px] sm:px-[2rem] pt-[2rem] pb-[2rem] sm:pt-[3rem] sm:pb-[4rem]  bg-[#ecfdf5]">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <h3 className="font-medium  text-[20px] sm:text-[23px]">
                About Program
              </h3>
              <div className="mt-[10px]">
                <span className="block text-[14px]">
                  Competitive exams test your understanding of various subjects
                  and require a comprehensive grasp of concepts. Excelling in
                  technical competitions like GATE, ESE, PSUs, State PSCs,
                  UPPSC-AE, and other engineering exams demands not just
                  theoretical knowledge but also practical application skills.
                  It's crucial to stay updated on changing exam patterns and
                  decode the syllabi provided by different exam boards. With the
                  right study resources, half the battle is won, as they provide
                  the necessary framework for effective preparation.
                </span>
                <span className="block text-[14px] mt-[10px]">
                  IES MASTER Publication has revolutionized the learning journey
                  of engineering students across the nation with its innovative
                  study materials. These materials, crafted by a team of expert
                  educators, serve as a transformative tool for learners. The
                  research and development team, comprising experienced subject
                  matter experts, diligently curates vast content to cater to
                  students' needs. Tailoring study materials to suit students'
                  learning preferences requires expertise, and IES MASTER has
                  been delivering acclaimed materials for over a decade.
                </span>
                <span className="block text-[14px] mt-[10px]">
                  This year postal study package comprises{" "}
                  <strong>
                    Self-Practice Tests for all the technical subjects comprises
                    Previous Year Question (PYQ)
                  </strong>{" "}
                  and it will be available in your student portal from the month
                  of June onwards.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
