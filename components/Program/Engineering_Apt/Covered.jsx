import React from "react";

export default function Covered() {
  return (
    <section className="bg-[#EBF6F4] px-[10px] lg:px-[2rem] py-[2rem] sm:py-[3rem]">
      <div className="container mx-auto">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className="pl-[1rem]">
                <h3 className="text-xl font-medium">Topics Covered</h3>
                <ul className="list-disc pl-[1rem] text-sm  mt-3">
                  <li>
                    Current issues of national and international importance
                    relating to social, economic and industrial development.
                  </li>
                  <li>
                    Engineering Aptitude covering Logical Reasoning and
                    Analytical Ability.
                  </li>
                  <li>Engineering Mathematics and Numerical Analysis.</li>
                  <li>
                    General Principles of Design, Drawing, Importance of Safety.
                  </li>
                  <li>
                    Standard and Quality Practices in Production, Construction,
                    Maintenance and Services.
                  </li>
                  <li>
                    Basics of Energy and Environment: Conservation,
                    Environmental Pollution and Degradation, Climate Change,
                    Environmental impact assessment.
                  </li>
                  <li>Basics of Project Management.</li>
                  <li>Basics of Material Science and Engineering.</li>
                  <li>
                    Information and Communication Technologies (ICT) based tools
                    and their applications in Engineering such as Networking,
                    e-governance and technology based
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;education.
                  </li>
                  <li>Ethics and Values in Engineering Profession.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
