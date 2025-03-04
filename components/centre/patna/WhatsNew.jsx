import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const WhatsNew = ({ blogData, updateData, linksData }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (linksData?.advanceData?.data?.length) {
      const data = linksData?.advanceData?.data;
      const links = [];
      data.forEach((el) => {
        if (el.link?.trim()) {
          links.push(el);
        } else {
          let index = links.findIndex((item) => item.title == el.title);
          if (index != -1) {
            links[index].items.push(el);
          } else {
            links.push({ title: el.title, items: [] });
          }
        }
      });
      setLinks(links);
    }
  }, [linksData]);

  return (
    <div className="container pb-[50px]">
      <h2 className="sm:text-[40px] text-[35px] text-orange-500 mb-3">
        What's New
      </h2>
      <div id="whatsNew">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
          <div className="border border-dashed border-orange-500 rounded-xl p-3">
            <h2 className="text-orange-500 text-[32px]">
              {linksData?.heading}
            </h2>
            <ul className="text-base h-[225px] overflow-y-auto pr-[10px]">
              {links?.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-dashed border-black py-[10px]"
                >
                  {item.link ? (
                    <Link href={item.link}>{item.title}</Link>
                  ) : (
                    <>
                      <span>{item.title}</span>
                      <div ID="Accordion" className="bg-orange-500  p-0">
                        {item.items.map((faq, faqIndex) => (
                          <Disclosure key={faqIndex}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-white focus:outline-none">
                                  <span>{faq.more}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-white`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="bg-gray-100 text-gray-600 p-4">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: faq.desci,
                                    }}
                                  />
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-dashed border-orange-500 rounded-xl p-3">
            <h2 className="text-orange-500 text-[32px]">{blogData?.heading}</h2>
            <ul className="text-base h-[225px] overflow-y-auto pr-[10px]">
              {blogData?.advanceData?.data?.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-dashed border-black py-[10px]"
                >
                  <Link href={`/blog/${item?.link}`}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-dashed border-orange-500 rounded-xl p-3">
            <h2 className="text-orange-500 text-[32px]">
              {updateData?.heading}
            </h2>
            <ul className="text-base h-[225px] overflow-y-auto pr-[10px]">
              {updateData?.advanceData?.data?.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-dashed border-black py-[10px]"
                >
                  <Link href={item?.link}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
