import React, { useState } from 'react';

const Books = ({ userData }) => {
  const [filter, setFilter] = useState('All'); // Current filter state

  // Format the date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  // Filter logic
  const filteredData = userData?.filter((item) => {
    if (filter === 'All') return true; // Show all items
    if (filter === 'Issued') return item?.isIssued; // Show only issued books
    if (filter === 'Un-Issued') return !item?.isIssued; // Show only un-issued books
    return true;
  });

  return (
    <div className="overflow-x-auto">
      {/* Filter Buttons */}
      <div className="flex gap-16 my-4">
        <button
          onClick={() => setFilter('All')}
          style={{ color: filter === 'All' ? 'orange' : 'inherit' }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Issued')}
          style={{ color: filter === 'Issued' ? 'orange' : 'inherit' }}
        >
          Issued
        </button>
        <button
          onClick={() => setFilter('Un-Issued')}
          style={{ color: filter === 'Un-Issued' ? 'orange' : 'inherit' }}
        >
          Un-Issued
        </button>
      </div>

      {/* Data Table */}
      <div>
        <table className="border w-full">
          <thead>
            <tr className="bg-[#f1f2f8] font-semibold text-lg">
              <td className="p-[15px]">Book</td>
              <td className="p-[15px]">Status</td>
              <td className="p-[15px]">Dispatch Date</td>
            </tr>
          </thead>
          <tbody>
            {filteredData?.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="text-[#666666]">
                  <td className="p-[15px]  border-t">
                    {item?.book?.title || 'N/A'}
                  </td>
                  <td className="p-[15px] border-t">
                    {item?.isIssued ? 'Dispatched' : 'Not Dispatched'}
                  </td>
                  <td className="p-[15px] border-t">
                    {item?.issuedAt ? formatDate(item?.issuedAt) : '--'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-[15px] text-gray-500">
                  Books not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
