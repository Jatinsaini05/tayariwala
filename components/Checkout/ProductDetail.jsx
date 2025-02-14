import React, { useEffect, useState } from 'react';
import { getPaymentNodes, placeOrder } from '../../service/apiFetch';
import { useStoreLogin } from '../../store/login';
import Swal from 'sweetalert2';
import PaymentModal from './PaymentModal';

const ProductDetail = ({ productData, batches }) => {
    const user = useStoreLogin.getState().user;
    const [orderRes, setOrderRes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [gatewayUrl, setGatewayUrl] = useState('');
    const [openPayment, setOpenPayment] = useState("close");
    const [paymentnode, setPaymentNode] = useState([]);
    const orderId = orderRes?.id || orderRes?.response?.details?.order?.id;
    const [batchId, setBatchId] = useState();

    const fetchPaymentNodes = async () => {
        setLoading(true);
        try {
            const params = { order: orderId };
            const response = await getPaymentNodes(params);
            if (response?.error) {
                setError(response?.error);
            } else {
                setPaymentNode(response);
            }
        } catch (error) {
            setError(error?.message);
            console.error('Error fetching order data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (orderId) {
            console.log('Triggering fetchPaymentNodes for Order ID:', orderId);
            fetchPaymentNodes();
        } else {
            console.log('Order ID not available yet:', orderRes);
        }
    }, [orderId]);

    useEffect(() => {
        if (Array.isArray(paymentnode) && paymentnode.length > 0) {
            const validPayment = paymentnode.find(node => node?.dueAmount > 0) || paymentnode[0];
            const generatedUrl = getGatewayUrl(validPayment);
            setGatewayUrl(generatedUrl);

            if (paymentnode.length === 1 && generatedUrl) {
                window.location.href = generatedUrl;
            } else if (paymentnode.length > 1) {
                setOpenPayment("open");
            }
        }
    }, [paymentnode]);

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


    const orderPlace = async () => {
        if (batches?.length > 0 && !batchId) {
            Swal.fire({
                icon: 'warning',
                title: 'Batch Not Selected',
                text: 'Please select a batch before proceeding.',
                scrollbarPadding: false,
            });
            return;
        }

        setLoading(true);
        try {
            const data = {
                user: user,
                order: {
                    product: [productData?.[0]?.id],
                    total: productData?.[0]?.cost,
                    isShipping: false,
                    discountDetail: {},
                    customParams: {},
                    shippingAddress: {},
                    relProductCategory: productData?.[0]?.category,
                    productCategory: productData?.[0]?.category,
                    productType: productData?.[0]?.type,
                    batch: batchId || null,
                    session: productData?.[0]?.session,
                    stream: productData?.[0]?.stream,
                    course: productData?.[0]?.course,
                    store: productData?.[0]?.store,
                    tracer: {
                        form: 'IMS-SALES-ORDER-ADD',
                    },
                },
            };
            const response = await placeOrder(data);
            setOrderRes(response);
            console.log(response);
        } catch (error) {
            setError(error);
            Swal.fire({
                icon: 'error',
                title: 'Order Failed',
                text: error.message || 'An error occurred while placing the order.',
                scrollbarPadding: false,
            });
            console.error('Error placing order:', error);
        } finally {
            setLoading(false);
            if (orderId) {
                await fetchPaymentNodes();
            }
            if (orderRes?.message) {
                const redirectUrl = getGatewayUrl(orderRes?.response?.details?.order?.id || orderRes?.id);
                Swal.fire({
                    icon: 'error',
                    title: 'Order Error',
                    text: orderRes?.message,
                    scrollbarPadding: false,
                    showCancelButton: true,
                    confirmButtonText: 'Go to Payment',
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.isConfirmed && redirectUrl) {
                        window.location.href = redirectUrl;
                    }
                });
            } else {
                setOpenPayment("open");
            }
        }
    };


    return (
        <div>
            <div className="w-full max-w-4xl mx-auto my-3 p-6 border rounded-lg shadow-sm bg-white">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="p-4 font-bold text-lg">Product/Program</th>
                            <th className="p-4 font-bold text-lg text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 text-gray-700">
                                {productData?.[0]?.title}
                            </td>
                            <td className="p-4"></td>
                        </tr>
                        {batches?.length > 0 && (
                            <tr>
                                <td className='w-[30%]'>
                                    <select
                                        className='outline-none w-full bg-[#f5f5f5] border border-white p-3 focus:bg-white focus-within:border focus-within:border-customFC6200 rounded-md'
                                        name="Select Batch"
                                        id=""
                                        onChange={(e) => setBatchId(e.target.value)}
                                    >
                                        <option value="">Select Batch</option>
                                        {batches?.map((batch, index) => (
                                            <option key={index} value={batch.id}>
                                                {batch.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td className="p-4 text-gray-700">Price</td>
                            <td className="p-4 text-right font-semibold text-gray-700">₹{productData?.[0]?.mrp} /-</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-gray-700">Less (Offer/Discount)</td>
                            <td className="p-4 text-right font-semibold text-customFC6200">-₹{(productData?.[0]?.mrp) - (productData?.[0]?.cost)} /-</td>
                        </tr>

                        <tr>
                            <td className="p-4 font-bold text-gray-900">Order Total</td>
                            <td className="p-4 text-right font-bold text-black">₹{productData?.[0]?.cost} /-</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-6 text-center">
                    {productData?.[0]?.customParam?.offerEndDate && (
                        <p className="text-red-500 text-[1.25rem] font-medium">
                            * Offer ends on {productData?.[0]?.customParam?.offerEndDate}
                        </p>
                    )}
                    <button onClick={() => orderPlace()} className="mt-4 px-6 py-3 bg-customFC6200 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 transition">
                        Next
                    </button>
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
        </div>
    );
};

export default ProductDetail;