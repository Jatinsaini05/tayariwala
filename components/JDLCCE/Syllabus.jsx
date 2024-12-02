import React from 'react'

const Syllabus = ({pageData}) => {
    return (
        <div className='container text-[#606060]' id="syllabus">
            <div dangerouslySetInnerHTML={{__html: pageData?.content}}></div>
            {/* <p>
                <u>
                    <strong>
                        <span className='sm:text-[28pt] text-[26px]'>
                            JDLCCE-2023 Exam Syllabus
                        </span>
                    </strong>
                </u>

            </p>
            <p className='mt-3'>
                <u>
                    <b>
                        <span className='text-2xl'>
                            Paper-1
                        </span>
                    </b>
                </u>
            </p>
            <div className='mt-14 ml-7 text-[14pt]' id="syllabus">
                <ul className='list-disc text-[#212529]'>
                    <li>
                        <span>
                            <b>General Knowledge</b>
                        </span>
                        <ul className='ml-7 list-[circle]'>
                            <li>
                                <span>
                                    General mathematics, General science, Computer knowledge
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className='ml-7 my-3'>Mental ability text (reasoning)</p>
                <ul className='ml-7 list-[circle] text-[#212529]'>
                    <li>
                        General awareness (History, culture, Geography, Currency, Constitution, Current Affairs, Agriculture of India).
                    </li>
                    <li>
                        Complete Knowledge of Jharkhand State is Required.
                    </li>
                </ul>
                <ul className='text-[#212529] list-disc mt-14'>
                    <li>
                        <span>
                            <b>General Engineering</b>
                        </span>
                        <ul className='ml-7 list-[circle]'>
                            <li className='mb-14'><span><b>Civil Engineering (Part-A):&nbsp;</b>
                                Building Materials & Concrete Technology, Estimation Costing & Valuation, Surveying, Soil Mechanics, Hydraulics, Irrigation Engineering, Transportation Engineering, Environmental Engineering, RCC & Steel Design, Theory of Structures (SOM).
                            </span></li>
                            <li className='mb-14'><span><b>Electrical Engineering Part (B):&nbsp;</b>
                                Basic Concepts, Circuit Laws Magnetic Circuit, Ac Fundamentals, Electrical Machines, Measurements & Measuring Instruments, Single Phase Induction Motors, Fractional Kilowatt Motors, Synchronous Machines, Generation, Transmission & Distribution, Estimation & Costing, Basic Electronics, Utilization of Electrical Energy.
                            </span></li>
                            <li className='mb-14'>
                                <span><b>Mechanical Engineering Part (C):&nbsp;</b>
                                    Theory of Machines & Machine Design, Engineering Mechanics & SOM, 1st & 2nd Law Of Thermodynamics, Air Standard Cycle For IC Engine, IC Engine Performance, Combustion, Cooling & Lubrication, Rankine Cycle Of System, Boiler, Classification, Specification, Air Compressor, Refrigeration Cycle, Principal Of Refrigeration Plant, Nozzle & Stream Turbines, Fluid Mechanics, Turbines & Centrifugal Pumps, Classification Of Steel.
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p className='pt-8'>
                <u>
                    <b>
                        <span className='text-2xl'>
                            Paper-2
                        </span>
                    </b>
                </u>
            </p>
            <p className='text-[16pt] mt-14'>
                <u>
                    <b>
                        Civil Engineeering
                    </b>
                </u>
            </p>
            <div className='ml-7 mt-7'>
                <ul className='ml-7 list-[circle] text-[14pt]'>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Building Materials: -&nbsp;
                            </b>
                            Physical and chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g., building Stones, silicate-based materials, cement, asbestos products, timber and wood-based products, laminates, bituminous materials, paints, varnishes.


                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Estimating, Costing and Valuation: -&nbsp;
                            </b>
                            Estimate, glossary of technical terms, analysis of rates, methods and unit of measurement, Item of works- Earth work, Brick work (Modular and traditional bricks), RCC work, Shuttering, Timber work, Painting, Flooring, Plastering. Boundary wall, Brick building, Water Tank, Septic Tank, Bar Bending Schedule, Center line method, Mid- section formula, Trapezoidal formula, Simpson’s rule. Cost estimate of Septic tank, flexible pavements, Tube well, isolate, and combined footing, Steel Truss, Piles, and pile- caps. Valuation- value and cost, scrap value, salvage value, assessed value, sinking fund, depreciation and obsolescence, methods of valuation.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Surveying: -&nbsp;
                            </b>
                            Principles of surveying, measurement of distance, chain surveying, working of prismatic compass, compass traversing, bearings, local attraction, plane table surveying, theodolite traversing, adjustment of theodolite. Leveling, Definition of terms used in leveling, contouring, curvature and refraction corrections, temporary and permanent adjustment of dumpy level, methods of contouring, uses of contour map, tachometric survey, curve setting, earth work calculation, advanced surveying equipment.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                                Soil Mechanics: -&nbsp;
                            </b>
                            Origin of soil, phase diagram, Definitions- void ratio, porosity, degree of saturation, water content, specific gravity of soil grains, unit weights, density index and interrelationship of different parameters, Grain size distribution curves and their uses. Index properties of soils, Atterberg’s limits, ISI soil classification and plasticity chart. Permeability of soil, coefficient of permeability, determination of coefficient of permeability, Unconfined and confined aquifers, effective stress, quick sand, consolidation of soils, Principles of consolidation, degree of consolidation, pre- consolidation pressure, normally consolidated soil, e-log p curve, computation of ultimate settlement. Shear strength of soils, direct shear test, Vane shear test, Tri axial test. Soil compaction, Laboratory compaction test, Maximum dry density and optimum moisture content, earth pressure theories, active and passive earth pressure, Bearing capacity of soils, plate load test, standard penetration test.

                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Hydraulics: -&nbsp;
                            </b>
                            Fluid properties, hydrostatics, measurement of flow, Bernoulli’s theorem and its application, flow through pipes, flow in open channel, weirs, flumes, spillways, pumps, and turbines.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Irrigation Engineering: -&nbsp;
                            </b>
                            Definition, necessity, benefits, 211 effect of irrigation, types and methods of irrigation, Hydrology- Measurement of rainfall, run off coefficient, rain gauge, losses from precipitation- evaporation, infiltration etc. Water requirement of crops, duty, delta and base period, Kharif and Rabi crops, Command Area, Time factor, Crop ratio, Overlap allowance, irrigation efficiencies. Different types of canals, types of canal irrigation, losses of water in canals. Canal lining- types and advantages. Shallow and deep tube wells, yield from a well. Weir and barrage, failure of weirs and permeable foundation, Slit and Scour, Kennedy’s theory of critical velocity. Lacey’s theory of uniform flow. Definition of flood, causes and effects, methods of flood control, water logging, preventive measure. Land reclamation, Characteristics of affecting fertility of soils, purposes, methods, description of land and reclamation processes. Major irrigation projects in India.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Transportation Engineering: -    &nbsp;
                            </b>
                            Highway Engineering- cross sectional elements, geometric design, types of pavements, pavement materials- aggregates and bitumen, different tests, Design of flexible and rigid pavements- Water bound Macadam(WBM) and Wet Mix Macadam (WMM), Gravel Road, Bituminous construction, Rigid Pavement Joint, pavement maintenance, Highway drainage, Railway Engineering- Components of permanent waysleepers, ballast, fixtures and fastening, track geometry, points and crossings, track junctions, stations and yards. Traffic Engineering- Different Traffic Survey, speed- flow- density and their inter relationship, intersections and interchanges, traffic signals, traffic operation, traffic signs and marking, road safety.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Environmental Engineering: -    &nbsp;
                            </b>
                            Quality of water, source of water supply, purification of water, distribution of water, need of sanitation, sewerage system, circular sewer, oval sewer, sewer appurtenances, sewage treatment. Surface water drainage. Solid waste management types, effects, engineered management system. Air pollution- pollutants, causes, effects, control. Noise pollution- cause, health effect, control.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Structural Engineering:&nbsp;
                            </b>
                            Theory of structures- Elasticity constants, types of beams determinate and indeterminate, bending moment and shear force diagram of simply supported, cantilever and over hanging beams. Moment of area and moment of inertia for rectangular and circular sections, bending moment and shear stress for tee, channel and compound section, chimneys, dams and retaining walls, eccentric loads, slope deflection of simply supported and cantilever beams, critical load and columns, Torsion of circular section.
                        </span>
                    </li>
                    
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Concrete Technology:&nbsp;
                            </b>
                            Properties, Advantages and uses of concrete, cement aggregates, importance of water quality, water cement ratio, workability, mix design, storage, batching, mixing, placement, compaction, finishing and curing of concrete, quality control of concrete, hot weather and cold weather concreting, repair, and maintenance of concrete structure.
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            RCC Design:&nbsp;
                            </b>
                            RCC beam flexural strength, shear strength, bond strength, design of singly reinforced and double reinforced beam, cantilever beams. T- beams, lintels. One way and two-way slabs, isolated footing. Reinforced brick works, columns, staircases, retaining wall, water tanks (RCC design questions may be based on both Limit State and Working Stress method).
                        </span>
                    </li>
                    <li className='mb-14'>
                        <span className='text-[#212529]'>
                            <b>
                            Steel Design:&nbsp;
                            </b>
                            Steel design and construction of steel columns, beams, roof, trusses, plate, girders.
                        </span>
                    </li>
                </ul>
                

            </div> */}
        </div>
    )
}

export default Syllabus
