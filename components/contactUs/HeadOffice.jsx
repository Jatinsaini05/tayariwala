import React from "react";

const HeadOffice = ({ pageTitle, headOfficeAddress }) => {
  return (
    <section>
      <div>
        <img className="w-full" src="/images/Genius.jpg" alt="Genius" />
      </div>

      <div className="container">
        <h1 className="text-[28px] text-[#1DB24B] pt-4 font-semibold">
          {pageTitle}
        </h1>
        <div className="mt-16 p-3">
          <h2 className="text-xl">
            <b>{headOfficeAddress?.heading}</b>
          </h2>
          {headOfficeAddress?.advanceData?.data?.length && (
            <div className="grid gap-4 sm:gap-0 sm:grid-cols-3 p-3">
              {headOfficeAddress.advanceData.data.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg">{item?.title}</h4>
                  <div className="my-2">
                    <span
                      //   className="block"
                      dangerouslySetInnerHTML={{
                        __html: item?.desci,
                      }}
                    ></span>
                  </div>
                  {/* <p className="text-sm my-2">
                    <b>IES Master</b>
                  </p>
                  <p className="text-sm">
                    F - 126, Katwaria Sarai,
                    <br />
                    110016
                    <br />
                    New Delhi, India
                  </p> */}
                </div>
              ))}

              {/* <div>
                  <h4 className="text-lg">Contact No.</h4>
                  <p className="my-2 text-sm">+91 – 9711853908</p>
                  <p className="text-sm">+91 – 8010009955</p>
                  <p className="mt-2 text-sm">+91 9711853908</p>
                </div>
                <div>
                  <h4 className="text-lg">Email</h4>
                  <p className="mt-2 text-sm">info@iesmaster.org</p>
                  <p className="text-sm">ies_master@yahoo.co.in</p>
                </div> */}
            </div>
          )}

          <hr className="my-2 mx-3 mb-4" />
          {headOfficeAddress?.media && (
            <div className="px-3">
              <iframe
                src={headOfficeAddress.media}
                width="600"
                height="450"
                className="w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeadOffice;
