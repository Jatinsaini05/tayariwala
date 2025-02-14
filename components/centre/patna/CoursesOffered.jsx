import React, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const CoursesOffered = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item for the modal
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
            <h2 className="sm:text-[40px] text-[35px] text-customFC6200">
              Courses we offer
            </h2>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-3 xl:gap-2.5">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="p-[10px] border rounded-2xl border-black shadow-lg shadow-black"
                >
                  <div className="mb-6">
                    <img src={item?.thumb} alt={item?.title} />
                  </div>
                  <div>
                    <h4 className="text-customFC6200">{item?.title}</h4>
                    <p className="leading-7 mt-3 text-[#606060]">
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
                      <span className="text-[#606060] line-through text-base">
                        ₹ {item?.mrp}
                      </span>
                      <span className="text-customFC6200 text-[26px] font-semibold">
                        ₹ {item?.cost}
                      </span>
                    </div>
                    <div className="flex gap-10 mt-3">
                      <button
                        onClick={() => setSelectedItem(item)} // Open the modal for the selected item
                        className="bg-custom241737 border rounded border-[#007bff] hover:border-customFC6200 text-white py-[6px] px-3"
                      >
                        More Info
                      </button>
                      <Link
                        href={`/checkout?product=${item?.id}`}
                        className="bg-customFC6200 text-white border rounded border-[#007bff] hover:border-opacity-0 py-[9px] px-3"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal to display the selected course */}
            {selectedItem && (
              <Modal
                isOpen={!!selectedItem}
                onOpenChange={() => setSelectedItem(null)} // Close modal
              >
                <ModalContent className="max-h-[90vh] md:max-h-svh scbar w-full md:w-screen mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                  {() => (
                    <>
                      <div className="p-4">
                        <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                          {selectedItem?.title}
                        </ModalHeader>
                        <hr className="mb-2.5" />
                        <ModalBody className="p-4 scbar max-h-[65vh] lg:h-svh overflow-y-auto">
                          <div>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: selectedItem?.fullDescription,
                              }}
                            ></span>
                          </div>
                        </ModalBody>
                        <ModalFooter className="p-4 flex justify-around items-center gap-2">
                          <span className="text-[10px] text-customFC6200">
                            Get this course @ Rs. {selectedItem?.cost}. OFFER is
                            valid till {formatDate(selectedItem?.validity)}.
                          </span>
                          <Link
                            href={`/checkout?product=${selectedItem?.id}`}
                            className="bg-customFC6200 text-white border rounded border-[#007bff] hover:border-opacity-0 py-1 text-[10px] px-2"
                          >
                            Enroll Now
                          </Link>
                        </ModalFooter>
                      </div>
                    </>
                  )}
                </ModalContent>
              </Modal>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoursesOffered;