import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const Faqs = ({ faqData }) => {
  return (
    <div>
      <div
        id="faqaccordion"
        className="container mx-auto mt-10 flex flex-col md:flex-row justify-between"
      >
        <div className="border rounded w-full md:w-96 h-72 flex flex-col mb-4 md:mb-0">
          <div className="bg-emerald-50 p-4 flex items-center border-b border-black text-lg">
            <a href="#" className="flex items-center">
              <i className="text-emerald-600">
                <FaRegNewspaper />
              </i>
              <h3 className="ml-2 text-emerald-600 font-semibold">
                {faqData?.contentBlock?.ESE_FAQS?.heading}
              </h3>
            </a>
          </div>
          <div className="flex-grow overflow-y-auto  px-3 mt-3">
            <Accordion className="text-sm">
              {faqData?.contentBlock?.ESE_FAQS?.advanceData?.data
                ? faqData.contentBlock.ESE_FAQS.advanceData.data.map(
                    (itm, ind) => (
                      <AccordionItem
                        className="mb-1 border rounded-md text-[#388e3c]"
                        title={itm.title}
                        key={ind}
                      >
                        <div dangerouslySetInnerHTML={{ __html: itm.desci }} />
                      </AccordionItem>
                    )
                  )
                : "faq title list not found"}

              
            </Accordion>
          </div>

          <div className="mb-1 text-right  text-emerald-600">
            <Link
              href="/faq"
              className="bg-gray-200 px-1 mt-2 py-1 hover:bg-[#388e3c] hover:text-white  text-xs text-[#388e3c]"
            >
              View More &gt;
            </Link>
          </div>
        </div>

        <div className="border rounded w-full md:w-96 h-72 flex flex-col mb-4 md:mb-0">
          <div className="bg-emerald-50 p-4 flex items-center border-b border-black text-lg">
            <a href="#" className="flex items-center">
              <i className="text-emerald-600">
                <FaRegNewspaper />
              </i>
              <h3 className="ml-2 text-emerald-600 font-semibold">
                {faqData?.contentBlock?.GATE_FAQS?.heading}
              </h3>
            </a>
          </div>
          <div className="flex-grow overflow-y-auto  px-3 mt-3">
            <Accordion className="text-sm">
              {faqData?.contentBlock?.GATE_FAQS?.advanceData?.data
                ? faqData.contentBlock.GATE_FAQS.advanceData.data.map(
                    (itm, ind) => (
                      <AccordionItem
                        className="mb-1 border rounded-md text-[#388e3c]"
                        title={itm.title}
                        key={ind}
                      >
                        <div dangerouslySetInnerHTML={{ __html: itm.desci }} />
                      </AccordionItem>
                    )
                  )
                : "faq title list not found"}
            </Accordion>
          </div>

          <div className="mb-1 text-right text-xs text-emerald-600">
            <Link
              href="/faq"
              className="bg-gray-200 px-1 mt-2 py-1 hover:bg-[#388e3c] hover:text-white  text-xs text-[#388e3c]"
            >
              View More &gt;
            </Link>
          </div>
        </div>

        <div className="border rounded w-full md:w-96 h-72 flex flex-col mb-4 md:mb-0">
          <div className="bg-emerald-50 p-4 flex items-center border-b border-black">
            <a href="#" className="flex items-center">
              <i className="text-emerald-600">
                <FaRegNewspaper />
              </i>
              <h3 className="ml-2 text-emerald-600 font-semibold">
                {faqData?.contentBlock?.WHAT_NEW?.heading}
              </h3>
            </a>
          </div>
          <div className="custom-marquee p-4">
            <ul className="text-xs">
              {faqData?.contentBlock?.WHAT_NEW?.advanceData?.data
                ? faqData.contentBlock.WHAT_NEW.advanceData.data.map(
                    (itm, ind) => (
                      <li key={ind}>
                        <Link
                          href=""
                          className="mb-2 border-b pb-1 hover:underline cursor-pointer text-[black] font-normal text-sm flex items-center"
                        >
                          <FaRegCircleDot />
                          {itm.title}
                        </Link>
                      </li>
                    )
                  )
                : "data not found"}
            </ul>
          </div>
          <div className="mb-1 text-right text-xs text-emerald-600">
            <Link
              href="/faq"
              className="bg-gray-200 px-1 mt-2 py-1 hover:bg-[#388e3c] hover:text-white  text-xs text-[#388e3c]"
            >
              View More &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
