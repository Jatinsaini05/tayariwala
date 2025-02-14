import React from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const LiveClasses = ({ userData }) => {
  const router = useRouter(); // Correctly call the useRouter hook in the component body

  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);

    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    // Extract time components
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Determine AM/PM and format hours
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = String(hours).padStart(2, '0');

    // Format the final output
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  }

  const handleJoinClass = () => {
    Swal.fire({
      icon: 'info',
      title: 'Oops!',
      text: 'You can not access the live classes through web browser. It can be accessed through Mobile & Desktop App. Click on OK button to see the instructions to access the live classes.',
      confirmButtonText: 'OK',
      showCloseButton: true,
      scrollbarPadding: false,
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/how-to-access-live-class'); // Navigate to the desired route on confirmation
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className='text-2xl text-[#221638] mb-10 font-semibold'>Today's Live Class Schedule</h1>
      </div>
      {userData?.map((liveClass, classIndex) => (
        <div key={classIndex}>
          <div className='grid sm:grid-cols-2 gap-3'>
            {liveClass?.lessons?.map((lesson, lessonIndex) => (
              <div key={`${classIndex}-${lessonIndex}`}>
                <div className='border rounded text-[#606060] p-5'>
                  <p>{lesson?.title}</p>
                  <p className='my-1'>{formatDateTime(lesson?.publishDate)}</p>
                  <button onClick={handleJoinClass} className='text-white bg-customFC6200 px-3 py-[6px] rounded'>
                    Join LIVE Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveClasses;
