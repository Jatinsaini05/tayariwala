import React, { useState } from 'react';
import { HiRefresh } from "react-icons/hi";
import Link from 'next/link';

const Quiz = ({ userData, user }) => {
  const [filter, setFilter] = useState('All');

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  const filteredData = userData?.filter((quiz) => {
    if (filter === 'All') return true;
    if (filter === 'Attempted') return quiz.isAttempted;
    if (filter === 'Un-Attempted') return !quiz.isAttempted;
    return true;
  });

  return (
    <div className=''>
      {/* Filter Buttons */}
      <div className='flex gap-16 my-4'>
        <button
          onClick={() => setFilter('All')}
          className={filter === 'All' ? 'text-orange-500' : 'text-gray-700'}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Attempted')}
          className={filter === 'Attempted' ? 'text-orange-500' : 'text-gray-700'}
        >
          Attempted
        </button>
        <button
          onClick={() => setFilter('Un-Attempted')}
          className={filter === 'Un-Attempted' ? 'text-orange-500' : 'text-gray-700'}
        >
          Un-Attempted
        </button>
      </div>

      {/* Table or No Quizzes Message */}
      <div>
        {filteredData?.length === 0 ? (
          <p className='text-center text-xl font-semibold text-gray-500'>
            No Quiz found for you!
          </p>
        ) : (
          <div className='overflow-auto'>
          <table className='w-max border'>
            <thead>
              <tr className='bg-[#f1f2f8] font-semibold text-lg'>
                <td className='p-[15px]'>Quiz</td>
                <td className='p-[15px]'>Marks</td>
                <td className='p-[15px]'>Result</td>
                <td className='p-[15px]'>Date</td>
                <td className='p-[15px]'>Actions</td>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((quiz, quizIndex) => (
                <tr key={quizIndex} className='text-[#666666]'>
                  <td className='p-[15px] font-semibold w-44 sm:w-auto border-t'>
                    {quiz.qset?.title}
                  </td>
                  <td className='p-[15px] border-t'>{quiz.qset?.totalMarks}</td>
                  <td className='p-[15px] font-semibold border-t'>
                    {quiz.isAttempted ? 'Completed' : 'Not Attempted'}
                  </td>
                  <td className='p-[15px] border-t'>{formatDate(quiz.startDate)}</td>
                  <td className='p-[15px] border-t'>
                    {quiz.isAttempted ? (
                      <span className='text-gray-500'>Attempted</span>
                    ) : (
                      <div>
                        <Link href={`/quiz?quizId=${quiz?.id}`} className='bg-customFC6200 text-white px-4 py-2 rounded-md'>
                          Start Quiz
                        </Link>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;