import { orders } from "@/Components/data";
import Footer from "@/Components/Footer";
import { orderRequest } from "@/Redux/Services/orders";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import NextLink from "next/link";
import NavBar from "@/Components/Navbar";

const orderhistory = () => {
  // const orderData = orders
  const [orders, setOrders] = useState();

  const fetchAllOrders = async () => {
    const data = await orderRequest.getOrders();
    if (data) {
      try {
        setOrders(data);
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  console.log(orders);

  return (
    <>
      <section className="bg-gray sm:p-8 p-2">
        <header className="mx-auto">
          <h1 className="text-xl font-bold">Order History</h1>
        </header>

        <article className="w-full mx-auto my-4 overflow-x-auto overflow-auto ">
          <header className="flex items-center justify-between shadow p-4 gap-4 bg-black text-white">
            <div className="md:w-3/12 w-full">
              <h1 className="mx-auto text-center">Tracking Number</h1>
            </div>
            <div className="md:w-2/12 mx-auto w-full">
              <h1 className="mx-auto text-center">Total Price</h1>
            </div>
            <div className="md:w-2/12 mx-auto w-full">
              <h1 className="mx-auto text-center">Order Date</h1>
            </div>
            <div className="md:w-2/12 w-full">
              <h1 className="mx-auto text-center">Payment Mode</h1>
            </div>
            <div className="md:w-2/12 w-full">
              <h1 className="mx-auto text-center">Shipping Address</h1>
            </div>
            <div className="md:w-1/12 w-full">
              <h1 className="text-center">Action</h1>
            </div>
          </header>
          <section style={{ height: "70vh" }}>
            {orders?.map((order) => (
              <NextLink href={`../order-status/${order.id}`} passHref>
                <section
                  className="flex gap-8 h-16 bg-white rounded my-1 overflow-x-auto shadow px-4 py-2 cursor-pointer "
                  key={order.id}
                >
                  <div className="w-3/12 mx-auto">
                    <p className="text-sm mx-auto text-center w-full">
                      {order.orderNumber}
                    </p>
                  </div>
                  <div className="w-2/12 mx-auto">
                    <p className="mx-auto text-center w-full">
                      {order.totalPrice}
                    </p>
                  </div>
                  <div className="w-2/12 mx-auto">
                    <p className="mx-auto text-center w-full">
                      {moment(order.orderDate).format("DD-MMM-YYYY")}
                    </p>
                  </div>
                  <div className="text-white rounded-2xl pt-2 w-2/12 mx-auto">
                    {order.paymentMode ? (
                      <>
                        {order.paymentMode === "mpesa" ? (
                          <>
                            <p className="text-xs mx-auto text-center bg-green1 w-20 py-1 rounded-2xl">
                              {order.paymentMode}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-xs mx-auto text-center bg-yellow w-20 py-1 rounded-2xl">
                              {order.paymentMode}
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="text-xs mx-auto text-center bg-yellow w-20 py-1 rounded-2xl ">
                          Not available
                        </p>
                      </>
                    )}
                  </div>
                  <div className="w-2/12 mx-auto">
                    <h1 className="mx-auto text-center w-full">
                      {order.shippingAddress}
                    </h1>
                  </div>
                  <div className="w-1/12 mx-auto">
                    <AiFillEye className="text-2xl text-guest mx-auto text-center" />
                  </div>
                </section>

                <hr className="text-gray" />
              </NextLink>
            ))}
          </section>

          <hr className="text-gray" />
          {/* SECOND COLUMN */}
        </article>
      </section>
      <Footer className="mt-5" />
    </>
  );
};

export default orderhistory;
