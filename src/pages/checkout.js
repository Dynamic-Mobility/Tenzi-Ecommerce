import Footer from "@/Components/Footer";
import React, { useState } from "react";
import { delivery, products } from "@/Components/data";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "@/Components/Navbar";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { PrivateRoute } from "@/Components/PrivateRoute";
import { createOrders } from "@/Redux/Features/orders";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const Checkout = () => {
  const { cart } = useSelector(({ cart }) => cart);
  const [showPayment, setShowPayment] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const notifySuccess = () => toast.success("Order placed successfully");
  const [content, setContent] = useState("");

  const handleCashClick = (choice) => {
    if (choice === 1) {
      setContent("Mpesa");
    }
    if (choice === 2) {
      setContent("Cash");
    }
  };

  const handleShow = () => {
    setShowPayment(true);
  };

  const getTotal = () => {
    let totalCartPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalCartPrice += item.productPrice * item.quantity;
      totalQuantity = item.quantity;
    });

    return { totalCartPrice, totalQuantity };
  };
  const totalPrice = getTotal().totalCartPrice;
  const qty = cart.map((item) => {
    return item.quantity;
  });

  //reducing the price to a single value
  const reducerofqty = (accumulator, currentValue) =>
    accumulator + currentValue;
  const quantity = qty.reduce(reducerofqty, 0);

  const initialValues = {
    shippingAddress: "",
  };

  const validationSchema = Yup.object().shape({
    shippingAddress: Yup.string().required("This field is required"),
  });

  let products = [];
  products.push(...cart);
  let totalDiscount = 0;
  let actualPrice = 0;

  const handleCheckout = async (formValue, helpers) => {
    const { shippingAddress, } = formValue;
    let data = {
      content,
      shippingAddress,
      products,
      actualPrice,
      totalPrice,
      quantity,
      totalDiscount,
    };
      await dispatch(createOrders(data));
      await router.push("/order-status");
      notifySuccess();
      console.log('successfully created');
      helpers.resetForm();
  };

  return (
    <>
      <NavBar />
      <section className="py-12 bg-gray ">
        <ToastContainer position="top-right" />
        <article className="sm:px-24 px-4 md:mb-72 mb-96">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCheckout}
          >
            <Form className="space-y-2">
              <div className="md:flex grid gap-4 my-20">
                <aside className="md:w-7/12 w-full">
                  <div className="bg-white p-6">
                    <div className="flex gap-8 items-center">
                      <p className="bg-black py-1 h-8 w-8 text-center rounded-full text-white">
                        1
                      </p>
                      <h2>Contact Number</h2>
                    </div>
                    {/* <Field
                  name = "phoneNumber"
                    className="my-4 border border-gray p-2 w-full outline-none"
                    placeholder="Phone..."
                    type="text"
                  />
                   <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red text-sm"
                    /> */}
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex gap-8 items-center">
                      <p className="bg-black py-1 h-8 w-8 text-center rounded-full text-white">
                        2
                      </p>
                      <h2>Shipping Address</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                      {/* <div className="w-1/2">
                    <Field
                    name = 'county'
                      className="my-4 border border-gray p-2 w-full outline-none"
                      placeholder="County..."
                      type="text"
                    />
                     <ErrorMessage
                      name="county"
                      component="div"
                      className="text-red text-sm"
                    />
                    </div> */}
                      {/* <div className="w-1/2">
                    <Field
                      className="my-4 border border-gray p-2 w-full outline-none"
                      placeholder="City..."
                      type="text"
                      name= 'city'
                    />
                     <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red text-sm"
                    />
                    </div> */}
                    </div>
                    <Field
                      className="my-4 border border-gray p-2 w-full outline-none"
                      placeholder="Address..."
                      type="text"
                      name="shippingAddress"
                    />
                    <ErrorMessage
                      name="shippingAddress"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                </aside>
                <aside className="h-64 md:px-8 px-0 md:w-5/12 mb-24 w-full">
                  <div className="bg-white rounded p-4">
                    <h1>Summary</h1>
                    {cart.map((item) => (
                      <>
                        <section
                          key={item.productId}
                          className="w-full flex items-center justify-between my-4"
                        >
                          <div>
                            <img
                              className="w-16"
                              src={eval(item.imagePath)[0]}
                              alt=""
                            />
                          </div>
                          <div>
                            <small>Quantity : {item.quantity}</small>
                          </div>
                          <div>
                            <p>{item.productName}</p>
                          </div>
                        </section>
                        <hr className="text-gray my-4" />
                      </>
                    ))}
                  </div>
                  <div className="flex items-center justify-between my-4 font-bold uppercase">
                    <p>SubTotal</p>
                    <p>ksh {totalPrice}</p>
                  </div>

                  {showPayment ? (
                    <>
                      <div className="bg-white rounded p-4 space-y-4">
                        <h1>Choose Payment Method</h1>
                        {/* <Field
                      className="my-4 border border-gray p-2 w-full outline-none"
                      placeholder="Payment mode..."
                      type="text"
                      name= 'paymentMode'
                    />
                     <ErrorMessage
                      name="paymentMode"
                      component="div"
                      className="text-red text-sm"
                    /> */}
                        <div className="flex gap-8 items-center">
                          <div onClick={() => handleCashClick(1)}>
                            <img
                              className="w-24 cursor-pointer h-20 p-2 object-cover border border-gray rounded"
                              src="/images/mpesa.png"
                              alt=""
                            />
                          </div>
                          <div onClick={() => handleCashClick(2)}>
                            <div className="border cursor-pointer flex items-center justify-center h-20 w-24 border-gray rounded">
                              <p className="text-xs font-semibold text-center">
                                Cash on Delivery
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          Please click Place order to make an order and payment.
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="bg-black rounded text-center my-2 text-grey px-4 py-3 w-full my-4"
                      >
                        Place your Order
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleShow()}
                        className="bg-black rounded text-center my-2 text-grey px-4 py-3 w-full"
                      >
                        Check Availability
                      </button>
                    </>
                  )}
                </aside>
              </div>
            </Form>
          </Formik>
        </article>
      </section>
      <Footer />
    </>
  );
};
Checkout.getLayout = (page) => <PrivateRoute>{page}</PrivateRoute>;

export default Checkout;
