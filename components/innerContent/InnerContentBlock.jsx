import React, { useEffect, useRef } from "react";
// import "../InnerData/InnerContentBlockStyle.css"
const InnerContentBlock = ({ innerData }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    const styleTables = () => {
      if (mainRef.current) {
        const tables = mainRef.current.querySelectorAll("table");
        const images = mainRef.current.querySelectorAll("img");

        tables.forEach((table) => {
          const parentDiv = document.createElement("div");
          parentDiv.classList.add("table-wrapper");
          table.parentNode.insertBefore(parentDiv, table);
          parentDiv.appendChild(table);
          table.style.width = "100%";
        });

        images.forEach((img) => {
          img.removeAttribute("height");
          img.removeAttribute("width");
          const parentDiv = document.createElement("div");
          parentDiv.classList.add("image-wrapper");
          img.parentNode.insertBefore(parentDiv, img);
          parentDiv.appendChild(img);
          img.style.maxWidth = "100%";
        });
      }
    };

    styleTables();
  }, [innerData]);

  return (
    <>
      <div id="inner-content-block">
        {innerData && (
          <div
            ref={mainRef}
            className="innerDataContent"
            dangerouslySetInnerHTML={{ __html: innerData }}
          />
        )}
      </div>
    </>
  );
};

export default InnerContentBlock;