import React from 'react';

const OfflineSch = ({ userData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formatTime = (dateString) => {
    let date = new Date(dateString);
    
    // Extract hours and minutes separately
    let hours = date.getUTCHours() + 5;  // Adding 5 hours
    let minutes = date.getUTCMinutes() + 30; // Adding 30 minutes

    // Handle minute overflow (if adding 30 min makes it 60, reset to next hour)
    if (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    // Convert to 12-hour format
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <div>
      <div className='w-full overflow-auto'>
        <table className="w-full border-2">
          <thead className="bg-[#f0f1f7] font-semibold">
            <tr>
              <td className="p-5">Date</td>
              <td className="p-5">Timing</td>
              <td className="p-5">Subject</td>
              <td className="p-5">Faculty</td>
              <td className="p-5">Venue</td>
            </tr>
          </thead>
          {
            userData ? (
          <tbody>
            {userData?.map((item, index) => (
              <tr key={index}>
                <td className="p-5 text-[#666666] font-thin">{formatDate(item?.start)}</td>
                <td className="p-5 text-[#666666] font-thin">{formatTime(item?.start)} - {formatTime(item?.end)}</td>
                <td className="p-5 text-[#666666] font-thin">{item?.subject?.name}</td>
                <td className="p-5 text-[#666666] font-thin">
                  {item?.user?.firstName} {item?.user?.lastName}
                </td>
                <td className="p-5 text-[#666666] font-thin">{item?.classroom?.name}</td>
              </tr>
            ))}
          </tbody>
          ) : (
            <tbody>
              <td colSpan={5} className='p-6'>
                No Schedule Found
              </td>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default OfflineSch;