import React from "react";
import Link from "next/link";

const NoidaOffice = ({ noidaOfficeAddress }) => {
  return (
    <div className="bg-emerald-50 mt-7">
      {/* {JSON.stringify(noidaOfficeAddress)} */}
      <div className="container">
        <div className="px-2 pt-14">
          <h2 className="text-xl">
            <b>{noidaOfficeAddress?.heading}</b>
          </h2>

          {noidaOfficeAddress?.advanceData?.data?.length && (
            <div className="grid gap-4 sm:gap-0 sm:grid-cols-3 p-3">
              {noidaOfficeAddress.advanceData.data.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg">{item?.title}</h4>
                  <div className="my-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item?.desci,
                      }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          )}

        

          <hr className="my-2 mx-3 mb-4" />
          {noidaOfficeAddress?.media && (
            <div className="px-3 pb-16">
              <iframe
                src={noidaOfficeAddress.media}
                width="600"
                height="450"
                className="w-full"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoidaOffice;
