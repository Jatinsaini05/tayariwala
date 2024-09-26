import React from "react";

export default function SecVijetha({ aboutSec }) {
  return (
    <>
      <section className="sec3 bg-[#f5f5f5]">
        <div className="container mx-auto md:px-8 px-4 lg:px-16">
          <div className="sec-3cont lg:flex  justify-center gap-8 py-6">
            <div className="features-block flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-[#0c4270]">
                {aboutSec?.heading}
              </h3>
              <div className="border-b-2 w-[150px] py-[5px] border-[#0c4270]"></div>
              <br />
              <div dangerouslySetInnerHTML={{ __html: aboutSec?.content }} />
              <div className="btn py-[25px]">
                <button className="bg-[#f5f5f5] hover:bg-[#0c4270] hover:text-white hover:ease-in transition text-[#7895ae] p-[6px_30px] border-2 border-[#0c4270] font-medium">
                  Read More
                </button>
              </div>
            </div>

            <div className="features-vid flex flex-1 pb-2">
              <iframe
                className="w-full aspect-video"
                src={aboutSec?.media}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
