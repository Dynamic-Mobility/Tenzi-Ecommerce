import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai"
import Footer from "@/Components/Footer";
import { useRouter } from "next/router";
import { orderRequest } from "@/Redux/Services/orders";
import moment from "moment";

const orderStatus = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const orderId = router?.query.orderId;
  const { cart } = useSelector(({ cart }) => cart);
  const [order, setOrder] = useState(null)

  const getOrderById = async() => {
    try {
      const data = await orderRequest.getOrderbyId(orderId)
      if(data){
        setOrder(data)
      }
    } 
    catch (err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    if(orderId){
      getOrderById()
    }
    
  }, [orderId])

  console.log(order)

  return (
    <>
      <section className="bg-gray py-8">
        <div className="w-9/12 mx-auto mb-4">
          <Link
            href="/order-history"
            className="text-green1 flex items-center gap-4 text-sm"
          >
            <AiOutlineArrowLeft />
            Back
          </Link>
        </div>
        <article className="bg-white border border-gray w-9/12 mx-auto p-2">
          <div className="p-4 flex items-center justify-between">
            <h1 className="">
              Order Status :{" "}
              <span className="bg-yellow text-white rounded-3xl px-4 py-1 font-normal text-sm">
                {order?.status}
              </span>
            </h1>
            <h1 className="">
              Payment Status :{" "}
              <span className="bg-green1 text-white rounded-3xl px-4 py-1 font-normal text-sm">
                {order?.paymentMode}
              </span>
            </h1>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1">
            <div className="border border-gray p-4 m-4 rounded">
              <p className="font-semibold text-sm">Order Number</p>
              <small>{order?.orderNumber}</small>
            </div>
            <div className="border border-gray p-4 m-4 rounded">
              <p className="font-semibold text-sm">Date</p>
              <small>{moment( order?.orderDate).format('DD-MMM-YYYY')}</small>
            </div>
            <div className="border border-gray p-4 m-4 rounded">
              <p className="font-semibold text-sm">Total</p>
              <small>{order?.totalPrice}</small>
            </div>
            <div className="border border-gray p-4 m-4 rounded">
              <p className="font-bold text-sm">Payment Method</p>
              <p className="uppercase text-sm">{order?.paymentMode}</p>
            </div>
          </div>
          <hr className="text-gray my-8" />
          <div className="flex items-center md:flex grid justify-between p-4">
            <div className="space-y-4 ">
              <h1 className="font-semibold text-xl">Total Amount</h1>
              <p className="text-sm">Sub Total : {order?.totalPrice}</p>
              <p className="text-sm">Shipping Charge : Ksh 0</p>
              <p className="text-sm">Tax : Ksh 0</p>
              <p className="text-sm">Total : {order?.totalPrice}</p>
            </div>
            <div className="space-y-4">
              <h1 className="font-semibold text-xl">Order Details</h1>
              <p className="text-sm">Total Item : {order?.quantity}</p>
              <p className="text-sm">Delivery Time : 14:50pm</p>
              <p className="text-sm">Shipping Address : {order?.shippingAddress}</p>
            </div>
          </div>
          <section className="flex items-center p-4 bg-gray">
            <div className="w-4/12 mx-auto">
              <h1>Item</h1>
            </div>
            <div className="w-4/12">
              <h1>Quantity</h1>
            </div>
            <div className="w-4/12">
              <h1>Price</h1>
            </div>
          </section>
          {/* Order status items */}
          <section className="h-28 overflow-auto">
            {order?.products.map((item) => (
              <>
                <article
                  className="flex items-center justify-between p-4 cursor-pointer"
                  key={item?.id}
                >
                  <div className="w-4/12">
                    <img className="w-16" src={eval(item?.imagePath)} alt="" />
                  </div>
                  <div className="w-4/12">
                    <p>{item?.quantity}</p>
                  </div>
                  <div className="w-4/12">
                    <p>Ksh {item?.price}</p>
                  </div>
                </article>
                <hr className="text-gray" />
              </>
            ))}
          </section>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default orderStatus;
