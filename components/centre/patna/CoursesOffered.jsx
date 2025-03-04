import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

const CoursesOffered = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="container">
      <div className="mb-[100px]" id="batch">
        {data?.length > 0 && (
          <>
            <h2 className="sm:text-[40px] text-[35px] text-orange-500">
              Courses we offer
            </h2>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-2xl border-black shadow-lg"
                >
                  <div className="mb-6">
                    <img src={item?.thumb} alt={item?.title} />
                  </div>
                  <h4 className="text-orange-500">{item?.title}</h4>
                  <p className="leading-7 mt-3 text-gray-600">
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.fullDescription
                            ?.split(" ")
                            .slice(0, 20)
                            .join(" ") +
                          (item?.fullDescription?.split(" ").length > 20
                            ? "..."
                            : ""),
                      }}
                    ></span>
                  </p>
                  <div className="mt-3 flex gap-2 items-center">
                    <span className="text-gray-600 line-through text-base">
                      ₹ {item?.mrp}
                    </span>
                    <span className="text-orange-500 text-[26px] font-semibold">
                      ₹ {item?.cost}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="bg-gray-800 text-white border border-blue-500 hover:border-orange-500 py-2 px-4 rounded"
                    >
                      More Info
                    </button>
                    <Link
                      href={`/checkout?product=${item?.id}`}
                      className="bg-orange-500 text-white border border-blue-500 hover:border-opacity-0 py-2 px-4 rounded"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {selectedItem && (
              <Dialog
                open={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-50"
              >
                <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
                  <Dialog.Title className="text-lg font-semibold mb-2">
                    {selectedItem?.title}
                  </Dialog.Title>
                  <hr className="mb-2.5" />
                  <Dialog.Description>
                    <div className="text-gray-700 leading-7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: selectedItem?.fullDescription,
                        }}
                      ></span>
                    </div>
                  </Dialog.Description>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-orange-500">
                      Get this course @ Rs. {selectedItem?.cost}. OFFER is valid
                      till {formatDate(selectedItem?.validity)}.
                    </span>
                    <Link
                      href={`/checkout?product=${selectedItem?.id}`}
                      className="bg-orange-500 text-white py-1 px-3 rounded"
                    >
                      Enroll Now
                    </Link>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </Dialog>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoursesOffered;
