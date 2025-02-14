import React, { useEffect, useState } from "react";




const Index = ({ pageData }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 border rounded-lg shadow-sm bg-white">
        {/* Product/Program and Amount Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-4 font-bold text-lg">Product/Program</th>
              <th className="p-4 font-bold text-lg text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Product Row */}
            <tr>
              <td className="p-4 text-gray-700">
                SSC-JE 2025 Live Online Course - Batch-08
              </td>
              <td className="p-4"></td>
            </tr>
            {/* Price Row */}
            <tr>
              <td className="p-4 text-gray-700">Price</td>
              <td className="p-4 text-right font-semibold text-gray-700">₹35400 /-</td>
            </tr>
            {/* Discount Row */}
            <tr>
              <td className="p-4 text-gray-700">Less (Offer/Discount)</td>
              <td className="p-4 text-right font-semibold text-orange-600">-₹5400 /-</td>
            </tr>
            {/* Total Row */}
            <tr>
              <td className="p-4 font-bold text-gray-900">Order Total</td>
              <td className="p-4 text-right font-bold text-black">₹30000 /-</td>
            </tr>
          </tbody>
        </table>
  
        {/* Offer and Next Button */}
        <div className="mt-6 text-center">
          <p className="text-red-500 text-sm font-medium">
            * Offer ends on 31 December
          </p>
          <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 transition">
            Next
          </button>
        </div>
      </div>
    );
};

export default Index;