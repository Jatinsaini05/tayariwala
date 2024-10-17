import React from "react";

export default function test() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="1st text-blue-500 pt-8">
            <h3> TRIVIDHA PHARMACEUTICALS PVT. LTD</h3>
            <p> G-76 FIRST FLOOR SECTOR 63 NOIDA 201307</p>
            <p>
              Phone : 9499383838,9012919692 Fax : 01204265100 D.L.No. :
              UP1621B000431 GSTIN : 09AAICT2758H1ZY
            </p>
          </div>

          <div className="1st col-span-2 border-l-2 border-r-2">
            <h3 className="text-blue-500 text-center pt-8">GST INVOICE</h3>
            <table class="table w-full text-center border">
              <thead>
                <tr>
                  <th scope="row-span-3"> </th>
                </tr>
                <tr className="border-b-2 ">
                  <th scope="col"> Invoice No</th>
                  <th scope="col"> RT000018</th>
                  <th scope="col"> Order No.</th>
                  <th scope="col"> Cases</th>
                </tr>

                <tr className="border-b-2 ">
                  <th scope="col"> Invoice Date</th>
                  <th scope="col"> 11-10-2024</th>
                  <th scope="col"> L.R. No</th>
                  <th scope="col"> Transport</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div className="1st pt-8">
            <span> <u> Party Name :</u></span>
            <h3 className="font-bold">DR. ARADHANA MISHRA</h3>
            <p>BALLIA</p>
            <p> PHONE. : 9565981077</p>
          </div>
        </div>
      </div>
    </div>
  );
}
