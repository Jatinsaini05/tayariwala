import React, { useEffect, useState } from 'react';
import { testment } from '../../../service/apiFetch';
import { useStoreLogin } from '../../../store/login';
import { IoCalendarOutline } from "react-icons/io5";
import { HiRefresh } from "react-icons/hi";
import ReportModal from './ReportModal';

const Tests = ({ userData }) => {
  const authToken = useStoreLogin.getState().authToken;
  const user = useStoreLogin((state) => state.user);
  const [pId, setPId] = useState();
  const [tests, setTests] = useState();
  const [error, setError] = useState();
  const [openDropdown, setOpendropdown] = useState();
  const [testOpended, setTestOpened] = useState(false)
  const [reportModal, setReportModal] = useState(false);

  const fetchTests = async () => {
    try {
      const params = {
        product: pId
      };
      const response = await testment(user.id, params);

      if (response.error) {
        setError(response.error);
      } else {
        setTests(response);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching order data:', error);
    }
  };

  const closeReportModal = () => {
    setReportModal(false)
  }

  useEffect(() => {
    pId && fetchTests();
  }, [pId]);

  const handleDropdown = (index) => {
    setOpendropdown(openDropdown === index ? null : index);
  };

  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';

    const date = new Date(isoString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
  };

  const startTest = (test) => {
    setTestOpened(true);
    const view = window.innerWidth < 672 ? 'm' : 'w';
    const tkn = window.localStorage.getItem("authToken");

    let url = `https://window.onlinetest.net.in/neet-v1/window-m.html?tkn=${authToken}&test=${test.test._id}&ts=${test.testSeries}&tp=${test.product}&cid=${test?.client}`;

    if (test.test.theme.includes("-v")) {
      url = `https://window.onlinetest.net.in/${test.test.theme.toLowerCase()}/window.html?tkn=${authToken}&test=${test.test._id}&ts=${test.testSeries}&tp=${test.product}&cid=${test?.client}`;
    }

    const params = `width=${window.innerWidth},height=${window.innerHeight},top=0,left=0,fullscreen=yes,resizable=0`;
    const openedWindowRef = window.open(url, 'EXAM', params);
    if (openedWindowRef) {
      openedWindowRef.focus();
    }
  };


  return (
    <div>
      {!tests && (
        <div>
          <div className='w-full overflow-auto'>
            <table className="w-full border-2">
              <thead className="bg-[#f0f1f7] font-semibold">
                <tr>
                  <td className="p-5">Title</td>
                  <td className="p-5">Total Test Series</td>
                  <td className="p-5">Validity</td>
                  <td className="p-5">Actions</td>
                </tr>
              </thead>
              {userData ? (
                <tbody>
                  {userData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-5 text-[#666666] font-semibold">{item?.title}</td>
                      <td className="p-5 text-[#666666] font-thin">{item?.testSeries?.length}</td>
                      <td className="p-5 text-[#666666] font-thin">{item?.isExpired ? 'Expired' : 'Valid'}</td>
                      <td className="p-5 text-[#666666] font-semibold">
                        <button className='hover:text-customFC6200' onClick={() => setPId(item?.id)}>View Tests</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={5} className='p-6'>No Schedule Found</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      )}
      {tests && (
        <div className='flex flex-col gap-[2em]'>
          {tests.map((item, index) => (
            <div key={index} className='w-full shadow-lg p-2'>
              <button onClick={() => handleDropdown(index)} className='pb-[15px] mb-2 border-b flex w-full justify-between items-center'>
                <h3 className='text-[#221638] font-[600] text-[25px]'>
                  {item?.tsDetail?.title}
                </h3>
                {openDropdown === index ? ("▲") : ("▼")}
              </button>
              <div>
                {openDropdown === index && (
                  <>
                    {item?.tests?.map((test, idx) => (
                      <div key={idx} className='border p-5 mb-2 rounded shadow-lg'>
                        <div className='grid sm:grid-cols-3 gap-10 items-center'>
                          <div>
                            <h4 className='text-[#221638] font-semibold text-xl'>{test?.test?.title}</h4>
                            <span className='flex items-center text-xs text-[#606060]'>(
                              <IoCalendarOutline className='inline' />
                              {formatDate(test?.test?.startDate)})
                            </span>
                            <div className='my-5'>
                              <span className='font-semibold'>{test?.test?.maxScore}</span>
                              <span className='text-[#606060]'> Marks </span>
                              <span className='font-semibold'>{test?.test?.totalQs}</span>
                              <span className='text-[#606060]'> Qs </span>
                              <span className='font-semibold'>{test?.test?.duration}</span>
                              <span className='text-[#606060]'> Min. </span>
                            </div>
                          </div>
                          <div>
                            <span className='text-[#606060] leading-7'>{test?.test?.alias}</span>
                          </div>
                          <div className='flex gap-1 flex-wrap items-center justify-center'>
                            {testOpended && (
                              <button onClick={() => setTestOpened(false)} className='text-lg p-5 rounded-full bg-[#6c757d] hover:bg-[#545b62] hover:border-2 border-2 border-white hover:border-[#606060] text-white'><HiRefresh /></button>
                            )}
                            {(test.test.testType == 'LIVE' || test.test.oneTimeSubmission) && !test.test.isAttempted && (
                              <button disabled={testOpended} onClick={() => startTest(test)} className={`text-white py-3 px-6 rounded-[35px] hover:bg-[#606060] bg-customFC6200 ${testOpended ? ('opacity-65 cursor-not-allowed') : ("")}`}>Start Test</button>
                            )}
                            {!test.test.oneTimeSubmission && (!test.test.attemptLimit || test?.attempts < test.test.attemptLimit) && (
                              <button disabled={testOpended} onClick={() => startTest(test)} className={`text-white py-3 px-6 rounded-[35px] hover:bg-[#606060] bg-customFC6200 ${testOpended ? ('opacity-65 cursor-not-allowed') : ("")}`}>Start Test</button>
                            )}
                            <button onClick={() => setReportModal(true)} className='text-white py-3 px-6 rounded-[35px] bg-[#442e66]'>Report</button>
                          </div>
                          {reportModal && (
                            <ReportModal closeReportModal={closeReportModal} test={test} />
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tests;