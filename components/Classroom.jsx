import React from 'react'

export default function Classroom({classRoom}) {

  return (
    <>
     <section className="sec2 bg-[white] lg:py-8 py-1">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="sec-2cont py-[25px] sm:flex sm:flex-col sm:gap-20  md:flex md:flex-row gap-2 mt-[70px] sm:gap-4">
            {classRoom?.map((item, index)=>(
            <div className="sec2-img1 flex flex-1 mb-12 bg-[#d28383] p-[65px_15px] " key={index}>
              <div className="box-1 flex flex-col items-center justify-center relative w-full h-auto">
                <div className="w-24 h-24 rounded-full text-center absolute top-[-565%]">
                  <img
                    src={item.icon}
                    width="100%"
                    className="object-contain rounded-full p-[5px] bg-[white]"
                    alt=""
                  />
                </div>
                <div className="text-white font-medium text-sm text-center">
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
