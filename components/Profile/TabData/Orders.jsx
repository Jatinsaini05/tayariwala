import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPaymentNodes } from '../../../service/apiFetch';
import PaymentModal from './PaymentModal';

const Orders = ({ userData }) => {
  const [paymentnode, setPaymentNode] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [gatewayUrl, setGatewayUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openPayment, setOpenPayment] = useState("close");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getGatewayUrl = (validPayment) => {
    return validPayment ? `https://masterlearners.in/api/sales/order/make-online-payment?
      storeId=${validPayment.store}
      &orderId=${validPayment.order}
      &orderNo=${validPayment.orderNo}
      &totalAmount=${validPayment.dueAmount}
      &nodeId=${validPayment.id}
      &redirectUrl=https://masterlearners.in/api/sales/order/online-payment-response/${validPayment.store}
      &cancelUrl=https://masterlearners.in/api/sales/order/online-payment-cancel-response/${validPayment.store}
      &responsePreviewUrl=https://masterlearners.in/api/sales/order/online-payment-response/${validPayment.store}`
      .replace(/\s+/g, '') : '';
  };

  const fetchPaymentNodes = async (orderId) => {
    setLoading(true);
    try {
      const params = { order: orderId };
      const response = await getPaymentNodes(params);
      if (response.error) {
        setError(response.error);
      } else {
        setPaymentNode(response);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching order data:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    if (Array.isArray(paymentnode) && paymentnode.length > 0) {
      const validPayment = paymentnode.find(node => node?.dueAmount > 0) || paymentnode[0];
      const generatedUrl = getGatewayUrl(validPayment);
      setGatewayUrl(generatedUrl);

      if (paymentnode.length === 1 && generatedUrl) {
        window.location.href = generatedUrl;  // Redirect only if exactly 1 node exists
      } else if (paymentnode.length > 1) {
        setOpenPayment("open");  // Open modal if more than 1 payment node
      }
    }
  }, [paymentnode]);

  const handlePaymentClick = (orderId) => {
    setOrderId(orderId);
    fetchPaymentNodes(orderId);
  };

  return (
    <div>
      <div>
        {userData?.length > 0 ? (
          <div className='border overflow-y-auto'>
            <table className='border'>
              <thead className='w-full text-[#333333] font-semibold sm:text-lg bg-[#f1f2f8]'>
                <tr>
                  <td className='p-[15px]'>Order</td>
                  <td className='p-[15px]'>Total</td>
                  <td className='p-[15px]'>Paid</td>
                  <td className='p-[15px]'>Status</td>
                  <td className='p-[15px]'>Date</td>
                  <td className='p-[15px]'>Payment Status</td>
                  <td className='p-[15px]'>Actions</td>
                </tr>
              </thead>
              <tbody className='text-[#666666]'>
                {userData?.map((order, index) => (
                  <tr key={index} className='border-t'>
                    <td className='p-[15px] font-semibold'># {order?.orderNo}</td>
                    <td className='p-[15px]'><span className='font-semibold'>₹</span> {order?.total}</td>
                    <td className='p-[15px]'><span className='font-semibold'>₹</span> {order?.paid}</td>
                    <td className='p-[15px]'>{order?.status}</td>
                    <td className='p-[15px] font-light'>{formatDate(order?.createdAt)}</td>
                    <td className='p-[15px]'>{order?.total > 0 ? order?.paymentStatus : order?.total === 0 ? "Free" : ""}</td>
                    <td className='p-[15px]'>
                      {order?.total - order?.paid > 0 ? (
                        <button 
                          onClick={() => handlePaymentClick(order?.id)} 
                          className='rounded px-3 py-[6px] border border-[#666666] hover:text-white hover:border-[#28a745] hover:bg-[#28a745]'
                          disabled={loading}
                        >
                          {loading ? "Processing..." : "Pay Now"}
                        </button>
                      ) : (
                        <span className='hover:text-customFC6200'><b>Paid</b></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='relative py-8 px-5 text-sm'>
              <span className='text-[#666666] font-thin'>Displaying 1 to 3 of 3 items.</span>
              <button className='text-customFC6200 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>1</button>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            <span>No Order found for you !</span>
            <div>
              <Link href="/courses" className='text-white bg-customFC6200 py-[11px] rounded px-[50px]'>
                Buy courses
              </Link>
            </div>
          </div>
        )}
      </div>

      {openPayment === "open" && (
        <PaymentModal 
          closePayment={() => setOpenPayment("close")} 
          orderId={orderId} 
          paymentnode={paymentnode} 
          fetchPaymentNodes={fetchPaymentNodes}
          GatewayUrl={gatewayUrl}
        />
      )}
    </div>
  );
};

export default Orders;
