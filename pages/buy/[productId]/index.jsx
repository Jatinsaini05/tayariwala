import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useStoreLogin } from "../../../store/login";
import { useStoreDialog } from "../../../store/dialog";
import Both from "../../../components/login/Both";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import { useStoreLoader } from "../../../store/loader";
import MetaTags from "../../../components/MetaTags";
// import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
export const getServerSideProps = async (context) => {
  const { productId } = context.params;
  // console.log(" productId", productId);
  try {
    const response = await fetch(
      `https://v3.edkt.net/api/s/product/${productId}`,
      {
        headers: {
          apihost: "https://vijethaiasacademyvja.com",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const productResponse = await response.json();
    const ProductId = productResponse.id;

    return {
      props: {
        productResponse,
        ProductId,
      },
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

export default function Index({ productResponse, ProductId }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Control modal state manually
  const [initialScreen, setInitialScreen] = useState("LOGIN");
  const [emiOptions, setEmiOptions] = useState(null);
  const { user, authToken } = useStoreLogin();
  const [page, setPage] = useState("reviewPage");
  const [couponField, setCouponField] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const isloading = useStoreLoader((state) => state.isloading);
  const [loading, setLoading] = useState(false);
  // const toast = useRef(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const totalAmount = useRef(null);
  let discountAmount = 0;
  // const [discountAmount , setDiscountAmount] = useState(0);
  const orderId = useRef(null);
  const [discount, setDiscount] = useState({
    discountDetail: {
      discountCode: couponCode,
      type: "COUPON",
    },
  });

  const [coupon, setCoupon] = useState({
    show: false,
    code: "",
    apply: false,
    amount: "",
    discountAmount: "",
  });

  const [placeOrderData, setPlaceOrderData] = useState({
    user: "",
    order: {
      stream: "",
      customParams: { paymentMethod: "" },
      course: "",
      session: "",
      center: "",
      batch: "",
      store: "",
      product: [],
      relProductCategory: "",
      productCategory: "",
      productType: "",
      total: "",
      tracer: { form: "Website-sales-order" },
    },
  });

  const updatePlaceOrderData = async (productResponse) => {
    if (productResponse) {
      try {
        const [stream, course, session, center, batch] = await Promise.all([
          getStream(productResponse.id),
          getCourse(productResponse.id),
          getSession(),
          getCenter(productResponse.id),
          getProductBatch(productResponse.id),
        ]);
        setPlaceOrderData((prevData) => ({
          ...prevData,
          order: {
            ...prevData.order,
            stream,
            course,
            session,
            center,
            batch,
            relProductCategory: productResponse.category,
            productCategory: productResponse.category,
            productType: productResponse.type,
            store: productResponse.store,
            product: [productResponse.id],
            total: calculateTotalCost(productResponse),
          },
        }));
      } catch (error) {
        console.error("Error updating placeOrderData:", error);
      }
    }
  };

  const calculateTotalCost = (productResponse) => {
    const cost = parseFloat(productResponse.cost);
    const cgst = parseFloat(productResponse?.tax?.cgst || 0);
    const sgst = parseFloat(productResponse?.tax?.sgst || 0);
    const totalTax =
      parseFloat(((cost * cgst) / 100).toFixed(2)) +
      parseFloat(((cost * sgst) / 100).toFixed(2));
    const totalAmount = cost + totalTax;
    return totalAmount;
  };

  useEffect(() => {
    if (productResponse) {
      updatePlaceOrderData(productResponse);
    }
  }, [productResponse]);

  // const initiateOrder = async () => {
  //   try {
  //     debugger;
  //     if (user && authToken) {
  //       setVisible(false);
  //       updatePlaceOrderData();
  //       placeOrderData.user = user;
  //       orderId.current = await getOrderId(placeOrderData);
  //       console.log(
  //         "Order ID Inside the InitiateOrder function",
  //         orderId.current
  //       );

  //       if (!orderId.current) {
  //         setPage("orderInitiated");
  //       }
  //       if (couponCode && orderId.current) {
  //         const cleanedOrderId = orderId.current.replace(/"/g, "");
  //         applyCouponCode(cleanedOrderId);
  //         console.log("Inside the initiated fnction", orderId.current);
  //       }

  //       const paymentNode = await getPaymentNodes(orderId.current);
  //       if (paymentNode) {
  //         getGatewayUrl(paymentNode, orderId.current);
  //       } else {
  //         console.error("No payment node found for this order.");
  //       }
  //     } else {
  //       setVisible(true);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const initiateOrder = async () => {
    try {
      setLoading(true);
      if (user && authToken) {
        setIsOpen(false);
        // updatePlaceOrderData();
        placeOrderData.user = user;

        orderId.current = await getOrderId(placeOrderData);

        if (!orderId.current) {
          setPage("orderInitiated");
        }

        if (couponCode && orderId.current) {
          const cleanedOrderId = orderId.current.replace(/"/g, "");
          applyCouponCode(cleanedOrderId);
        }

        const paymentNode = await getPaymentNodes(orderId.current);
        if (paymentNode) {
          getGatewayUrl(paymentNode, orderId.current);
        } else {
          console.error("No payment node found for this order.");
        }
      } else {
        setIsOpen(true);
      }
    } catch (e) {
      alert("Error in initaitong order");
      onOpenChange(false); // Close modal in case of error
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  async function getCourse(productId) {
    try {
      const response = await fetch(
        `${apiUrl}/api/public/data/courses?id=${productId}`
      );
      const data = await response.json();
      return data.length ? data[0].id : null;
    } catch (error) {
      console.error("Error fetching course:", error);
      throw error;
    }
  }
  async function getStream(productId) {
    try {
      const response = await fetch(`${apiUrl}/api/public/data/all-stream`);
      const data = await response.json();
      // const filteredData = data.filter(item => item.productId === productId);
      // return filteredData.length ? filteredData[0].value : null;
      return data.length ? data[0].id : null;
    } catch (error) {
      console.error("Error fetching stream:", error);
      throw error;
    }
  }

  async function getSession() {
    try {
      const response = await fetch(`${apiUrl}/api/public/data/sessions`);
      const data = await response.json();

      const filteredData = data.find(
        (session) => session.tag && session.tag.includes("WEB")
      );

      return filteredData ? filteredData.id : null;
    } catch (error) {
      console.error("Error fetching session:", error);
      throw error;
    }
  }
  async function getCenter(productId) {
    try {
      const response = await fetch(`${apiUrl}/api/public/data/centers`);
      const data = await response.json();
      // const filteredData = data.filter(item => item.productId === productId);
      // return filteredData.length ? filteredData[0].name : null;
      return data.length ? data[0].id : null;
    } catch (error) {
      console.error("Error fetching center:", error);
      throw error;
    }
  }
  async function getProductBatch(productId) {
    try {
      const response = await fetch(
        `${apiUrl}/api/public/data/product-batches?product=${productId}`
      );
      const data = await response.json();
      const filteredData = data.filter((item) => item.productId === productId);
      return filteredData.length ? filteredData[0] : null;
    } catch (error) {
      console.error("Error fetching product batch:", error);
      throw error;
    }
  }
  async function getOrderId(placeOrderData) {
    try {
      const response = await fetch(`${apiUrl}/api/cmn/order/place-order`, {
        method: "POST",
        body: JSON.stringify(placeOrderData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return result.id;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  }

  async function getPaymentNodes(orderId) {
    try {
      const response = await fetch(
        `${apiUrl}/api/cmn/order/payment-nodes?order=${orderId}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { id, dueAmount, orderNo, store } = data[0];
        return { id, dueAmount, orderNo, store };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      throw error;
    }
  }

  function getGatewayUrl(paymentNode, orderId) {
    const { id, dueAmount, orderNo, store } = paymentNode;
    if (parseInt(dueAmount) < 0.1) {
      router.push("/course");
    } else {
      let url = `${apiUrl}/api/sales/order/make-online-payment?storeId=${store}&orderId=${orderId}&nodeId=${id}&orderNo=${orderNo}&totalAmount=${dueAmount}&redirectUrl=${apiUrl}/api/sales/order/online-payment-response/${orderId}&cancelUrl=${apiUrl}/api/sales/order/online-payment-cancel-response/${orderId}&responsePreviewUrl=${apiUrl}/api/sales/order/online-payment-response/${orderId}`;
      window.location.href = url;
    }
  }

  const handleSubmitCoupon = (e) => {
    e.preventDefault();
    CheckDiscount(ProductId);
    // applyCouponCode(orderId)
    setIsCouponApplied(true);
  };

  const handleRemoveBtn = () => {
    setCouponCode("");
    setIsCouponApplied(false);
  };

  const handleCouponChange = (e) => {
    const newCouponCode = e.target.value;
    setCouponCode(newCouponCode);

    // Update discount state
    setDiscount((prevDiscount) => ({
      ...prevDiscount,
      discountDetail: {
        ...prevDiscount.discountDetail,
        discountCode: newCouponCode,
      },
    }));
  };

  async function applyCouponCode(orderId) {
    try {
      const response = await fetch(
        `${apiUrl}/api/cmn/order/${orderId}/add-discount`,
        {
          method: "POST",
          body: JSON.stringify(discount),
          headers: { token: authToken, "Content-Type": "application/json" },
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("Discount is Apply");
      } else {
        console.log("Discount is not Apply");
      }
      return result;
    } catch (error) {
      console.log("error", error);
      // toast.current.show({severity: 'error', summary: 'Error', detail: error.message || 'Unable to apply discount', life: 3000 });
      // throw error;
    }
  }

  async function CheckDiscount(ProductId) {
    try {
      const response = await fetch(
        `${apiUrl}/api/public/data/get-coupon-discount?code=${couponCode}&product=${ProductId}`
      );
      const result = await response.json();
      if (response.ok) {
        alert("Successfully");
        // toast.current.show({ severity: "success",summary: "Success",detail: result.message || "Discount applied successfully!",life: 3000,});
        coupon.apply = true;
        coupon.discountAmount = result.discountAmount;
        const CalculatedCoupanAmount =
          productResponse.cost * (1 - coupon.discountAmount / 100);
        setCoupon((prevCoupon) => ({
          ...prevCoupon,
          apply: true,
          discountAmount: "",
          amount: CalculatedCoupanAmount,
        }));
      } else {
        console.log("check discount is response is not okay");
        alert("check discount is response is not okay");
        // toast.current.show({severity: "error",summary: "Error",detail: result.message || "Unable to apply discount",life: 3000,});
      }
      return result;
    } catch (error) {
      console.error("Error CheckDiscount course:", error);
      throw error;
    }
  }

  function goToDashboard() {
    debugger;
    let url = null;
    if (!authToken) {
      url = "https://vijethaiasacademyvja.com//student/auth/login";
    } else {
      const tk = authToken;
      const client = user?.client;
      url = `https://vijethaiasacademyvja.com/student/auth/redirect?token=${tk}&path=student/dashboard&client=${client}`;
    }
    window.open(url, "_blank");
  }

  if (loading) {
    return (
      <div class="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid "></div>
      </div>
    );
  }
  // console.log("client",user?.client);
  return (
    <section id="courseBuy">
        <MetaTags
        title="Buy"
      ></MetaTags>
      <div className="mx-[6px] px-[1rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
              <div className="w-full flex justify-center py-8">
                {page === "reviewPage" && (
                  <div className="w-full sm:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto block shadow-[0_8px_6px_-1px_rgba(0,0,0,0.2),0_8px_8px_0_rgba(0,0,0,0.14),0_8px_8px_0_rgba(0,0,0,0.12)]  rounded-[8px]  p-0">
                    <div className="w-full bg-[#071e63] rounded-t-lg text-white  text-[18px] lg:text-[22px] text-center sm:text-left px-3 py-3">
                      Product Details
                    </div>

                    <div className="p-3">
                      {productResponse && (
                        <div className="flex  flex-col  gap-5">
                          <p className="md:text-xl text-lg m-0">
                            {productResponse.title}
                          </p>

                          <div className="flex  flex-col  gap-3">
                            <div className="flex align-items-center gap-5">
                              <i className="pi pi-chevron-circle-right text-xl text-blue-400"></i>
                              <div className="flex gap-2">
                                <strong className="text-blue-500">MRP:</strong>
                                <p className="m-0">
                                  INR&nbsp;{productResponse.mrp}
                                </p>
                              </div>
                            </div>

                            <div className="flex align-items-center gap-5">
                              <i className="pi pi-chevron-circle-right text-xl text-blue-400"></i>
                              <div className="flex gap-2">
                                <strong className="text-blue-500">Cost:</strong>
                                <p className="m-0">
                                  INR&nbsp;{productResponse.cost}
                                </p>
                              </div>
                            </div>
                            <div
                              className="text-right text-blue-500 cursor-pointer"
                              onClick={() => setCouponField(true)}
                            >
                              <span className="text-[14px] sm:text-[15px]">
                                HAVE A COUPON CODE?
                              </span>
                              {couponField && (
                                <div className="bg-gray-300 border-1 p-1 border-400 flex justify-between">
                                  <input
                                    type="text"
                                    value={couponCode}
                                    disabled={isCouponApplied}
                                    //  onChange={(e) => setCouponCode(e.target.value)}
                                    onChange={handleCouponChange}
                                  />
                                  {!isCouponApplied ? (
                                    <button
                                      className="p-0 px-4 pt-1 pb-2 bg-[#071e63] text-white text-sm rounded-[6px] cursor-pointer white-space-normal"
                                      onClick={handleSubmitCoupon}
                                    >
                                      Apply
                                    </button>
                                  ) : (
                                    <button
                                      className="p-0 px-6 py-2 bg-blue-600 text-white text-sm border-none border-round-sm cursor-pointer white-space-normal"
                                      onClick={handleRemoveBtn}
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              )}
                              {isCouponApplied && coupon.amount && (
                                <div className="flex align-items-center gap-5 py-3">
                                  <i className="pi pi-chevron-circle-right text-xl text-blue-400"></i>
                                  <div className="flex gap-2">
                                    <strong className="text-blue-500">
                                      Cost After Discount:
                                    </strong>
                                    <p className="m-0 text-black-alpha-60">
                                      INR&nbsp;{coupon.amount}
                                    </p>
                                    <p className="m-0 text-black-alpha-60 text-xs">
                                      {" "}
                                      + 18% GST
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="m-0 flex justify-content-center">
                            <button
                              type="submit"
                              className="block mx-auto transition-all duration-[0.3s] ease-[ease-in-out] hover:bg-[#071e63] p-0 px-4 py-2 rounded-[8px] bg-[#ea580c] text-white border-none border-round-sm cursor-pointer white-space-normal"
                              onClick={initiateOrder}
                              loading={isloading}
                            >
                              CONTINUE
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {page === "emiOption" && (
                  <div className="reg-card border-round-lg col-5 p-0">
                    <div className="w-full bg-blue-400 text-white text-2xl text-left px-3 py-3">
                      Select EMI Options
                    </div>
                    <div className="p-3">
                      <div className="text-right text-blue-500">
                        HAVE A COUPON CODE?
                      </div>
                      <div className="m-0 flex justify-content-center">
                        <button
                          type="submit"
                          className="p-0 px-4 py-2 bg-blue-600 text-white border-none border-round-sm cursor-pointer white-space-normal"
                        >
                          PAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {page === "emiCouponError" && <div>Coupan Error</div>}
                {page === "orderInitiated" && (
                  <div className="reg-card border-round-lg col-12 sm:col-10 md:col-8 xl:col-5 p-0">
                    <div className="w-full  rounded-[6px] bg-[#2f4285] text-white  text-[14px] sm:text-[16px]  px-3 py-3 mb-4 text-center">
                      Order with this product previously Initiated
                      <br /> Please visit Order list to place your existing
                      orders.
                    </div>
                    <div className="m-0 flex justify-content-center py-5">
                      <button
                        type="submit"
                        className="p-0 px-4 py-2 rounded-[6px] bg-[#2f4285] text-white text-[14px] sm:text-[16px] cursor-pointer"
                        onClick={() => goToDashboard()}
                      >
                        Go to Order Section
                      </button>
                    </div>
                  </div>
                )}
                {page === "couponInvalid" && (
                  <div className="reg-card border-round-lg col-5 p-0">
                    <div className="w-full bg-blue-400 text-white text-xl text-left px-3 py-3 mb-4">
                      Invalid Coupon Code
                    </div>
                    <div className="m-0 flex justify-content-center py-5">
                      <button
                        type="submit"
                        className="p-0 px-4 py-2 bg-blue-600 text-white border-none border-round-sm cursor-pointer white-space-normal"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Modal
          className="buy-dialog"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <ModalContent>
            {(onClose) => (
              <div className="card flex justify-center p-0 pb-0">
                <div className="top-10 w-full " position="top">
                  <Both initialScreen={initialScreen} />
                </div>
              </div>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
}
