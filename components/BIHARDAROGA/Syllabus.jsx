import React from 'react'
import Link from 'next/link'

const Syllabus = ({ pageData }) => {
    return (
        <div>
            {/* {JSON.stringify(pageData)} */}
            <div id="syllabus">
                <div className='container'>
                    <div className='flex flex-col-reverse lg:flex-row justify-between gap-5'>
                        <div className='text-[#606060] leading-8'>
                            <h1 className='sm:text-[40px] text-[35px] text-[#221638]'>{pageData?.heading}</h1>

                            <div id={pageData?.title} className='p-4'>
                                <div dangerouslySetInnerHTML={{ __html: pageData?.content }}>

                                </div>
                            </div>

                            {/* <div><p className='mb-3'><strong>SSC JE 2024 Syllabus&nbsp;</strong></p>

                                <p className='mb-3'>The standard of the questions in Engineering subjects will be approximately of the level of Diploma in Engineering (Civil/Mechanical/Electrical). The details of the syllabus are given below:&nbsp;</p>

                                <p className='mb-3'><strong>Paper-I:</strong><br />
                                    General Intelligence &amp; Reasoning: The Syllabus for General Intelligence would include questions of both verbal and non-verbal type. The test may include questions on analogies, similarities, differences, space visualization, problem solving, analysis, judgment, decision making, visual memory, discrimination, observation, relationship concepts, arithmetical reasoning, verbal and figure classification, arithmetical number series, etc. The test will also include questions designed to test the candidate’s abilities to deal with abstract ideas and symbols and their relationships, arithmetical computations, and other analytical functions.</p>

                                <p className='mb-3'>General Awareness: Questions will be aimed at testing the candidate’s general awareness of the environment around him/her and its application to society. Questions will also be designed to test knowledge of current events and of such matters of everyday observations and experience in their scientific aspect as may be expected of any educated person. The test will also include questions relating to India and its neighboring countries especially pertaining to History, Culture, Geography, Economic Scene, General Polity and Scientific Research, etc. These questions will be such that they do not require a special study of any discipline.</p>

                                <p className='mb-3'><br />
                                    <strong>General Engineering: Civil &amp; Structural</strong></p>

                                <p className='mb-3'>Part-A (Civil Engineering):</p>

                                <p className='mb-3'>Building Materials, Estimating, Costing and Valuation, Surveying, Soil Mechanics, Hydraulics, Irrigation Engineering, Transportation Engineering, Environmental Engineering.</p>

                                <p className='mb-3'>Structural Engineering: Theory of Structures, Concrete Technology, RCC Design, Steel Design.<br />
                                    &nbsp;</p>
                            </div> */}

                            {/* <div id="SSC-JE Paper-II" className='p-4'><div><p>Part-A (Civil &amp; Structural Engineering):<br/>
                                <strong>Building Materials:</strong> Physical and Chemical properties, classification, standard tests, uses and manufacture/quarrying of materials e.g. building stones, silicate based materials, cement (Portland), asbestos products, timber and wood based products, laminates, bituminous materials, paints, varnishes.</p>

                                <p className='mb-3'><strong>Estimating, Costing and Valuation:</strong> estimate, glossary of technical terms, analysis of rates, methods and unit of measurement, Items of work– earthwork, Brick work (Modular &amp; Traditional bricks), RCC work, Shuttering, Timber work, Painting, Flooring, Plastering, Boundary wall, Brick building, Water Tank, Septic tank, Bar bending schedule, Centre line method, Mid-section formula, Trapezodial formula, Simpson’s rule, Cost estimate of Septic tank, flexible pavements, Tube well, isolates and combined footings, Steel Truss, Piles and pile-caps. Valuation – Value and cost, scrap value, salvage value, assessed value, sinking fund, depreciation and obsolescence, methods of valuation.</p>

                                <p className='mb-3'><strong>Surveying:</strong> Principles of surveying, measurement of distance, chain surveying, working of prismatic compass, compass traversing, bearings, local attraction, plane table surveying, theodolite traversing, adjustment of theodolite, Levelling, Definition of terms used in levelling, contouring, curvature and refraction corrections, temporary and permanent adjustments of dumpy level, methods of contouring, uses of contour map, tachometric survey, curve setting, earth work calculation, advanced surveying equipment<br />
                                    Soil Mechanics: Origin of soil, phase diagram, Definitions-void ratio, porosity, degree of saturation, water content, specific gravity of soil grains, unit weights, density index and interrelationship of different parameters, Grain size distribution curves and their uses Index properties of soils, Atterberg‟s limits, ISI soil classification and plasticity chart Permeability of soil, coefficient of permeability, determination of coefficient of permeability, Unconfined and confined aquifers, effective stress, quick sand, consolidation of soils, Principles of consolidation, degree of consolidation, pre-consolidation pressure, normally consolidated soil, e- log p curve, computation of ultimate settlement Shear strength of soils, direct shear test, Vane shear test, Triaxial test Soil compaction, Laboratory compaction test, Maximum dry density and optimum moisture content, earth pressure theories, active and passive earth pressures, Bearing capacity of soils, plate load test, standard penetration test</p>

                                <p className='mb-3'><strong>Hydraulics:</strong> Fluid properties, hydrostatics, measurements of flow, Bernoulli’s theorem and its application, flow through pipes, flow in open channels, weirs, flumes, spillways, pumps and turbines</p>

                                <p className='mb-3'><strong>Irrigation Engineering:</strong> Definition, necessity, benefits, 2II effects of irrigation, types and methods of irrigation, Hydrology – Measurement of rainfall, run off coefficient, rain gauge, losses from precipitation – evaporation, infiltration, etc Water requirement of crops, duty, delta and base period, Kharif and Rabi Crops, Command area, Time factor, Crop ratio, Overlap allowance, Irrigation efficiencies Different type of canals, types of canal irrigation, loss of water in canals Canal lining– types and advantages Shallow and deep to wells, yield from a well Weir and barrage, Failure of weirs and permeable foundation, Slit and Scour, Kennedy’s theory of critical velocity Lacey’s theory of uniform flow Definition of flood, causes and effects, methods of flood control, water logging, preventive measure Land reclamation, Characteristics of affecting fertility of soils, purposes, methods, description of land and reclamation processes Major irrigation projects in India</p>

                                <p className='mb-3'><strong>Transportation Engineering:</strong> Highway Engineering – cross sectional elements, geometric design, types of pavements, pavement materials – aggregates and bitumen, different tests, Design of flexible and rigid pavements – Water Bound Macadam (WBM) and Wet Mix Macadam (WMM), Gravel Road, Bituminous construction, Rigid pavement joint, pavement maintenance, Highway drainage, Railway Engineering- Components of permanent way – sleepers, ballast, fixtures and fastening, track geometry, points and crossings, track junction, stations and yards Traffic Engineering – Different traffic survey, speed-flow-density and their interrelationships, intersections and interchanges, traffic signals, traffic operation, traffic signs and markings, road safety</p>

                                <p className='mb-3'><strong>Environmental Engineering:</strong> Quality of water, source of water supply, purification of water, distribution of water, need of sanitation, sewerage systems, circular sewer, oval sewer, sewer appurtenances, sewage treatments Surface water drainage Solid waste management – types, effects, engineered management system Air pollution – pollutants, causes, effects, control Noise pollution – cause, health effects, control<br />
                                    &nbsp;</p>

                                <p className='mb-3'><strong>Structural Engineering:<br />
                                    Theory of structures:</strong> Elasticity constants, types of beams – determinate and indeterminate, bending moment and shear force diagrams of simply supported, cantilever and over hanging beams Moment of area and moment of inertia for rectangular &amp; circular sections, bending moment and shear stress for tee, channel and compound sections, chimneys, dams and retaining walls, eccentric loads, slope deflection of simply supported and cantilever beams, critical load and columns, Torsion of circular section<br/>
                                        <strong>Concrete Technology:</strong> Properties, Advantages and uses of concrete, cement aggregates, importance of water quality, water cement ratio, workability, mix design, storage, batching, mixing, placement, compaction, finishing and curing of concrete, quality control of concrete, hot weather and cold weather concreting, repair and maintenance of concrete structures<br />
                                        <strong>RCC Design:</strong> RCC beams-flexural strength, shear strength, bond strength, design of singly reinforced and double reinforced beams, cantilever beams T-beams, lintels One way and two way slabs, isolated footings Reinforced brick works, columns, staircases, retaining wall, water tanks (RCC design questions may be based on both Limit State and Working Stress methods)<br />
                                        <strong>Steel Design:</strong> Steel design and construction of steel columns, beams roof trusses plate girders<br />
                                        &nbsp;</p>
                            </div></div> */}

                        </div>
                        {/* <div className='lg:w-full'>
                            <ul className='border shadow-xl'>
                                <li className='border-b p-4'><Link href="#SSC-JE Paper-I" className='hover:text-customFC6200 text-[#221638] text-base'>SSC-JE Paper-I</Link></li>
                                <li className='border-b p-4'><Link href="#SSC-JE Paper-II" className='hover:text-customFC6200 text-[#221638] text-base'>SSC-JE Paper-II</Link></li>
                            </ul>
                        </div> */}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Syllabus
