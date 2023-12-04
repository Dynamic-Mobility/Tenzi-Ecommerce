import React from "react";
import CartItem from "@/Components/CartItem";
import Footer from "@/Components/Footer";
import { useSelector } from "react-redux";
import Link from "next/link";
import NavBar from "@/Components/Navbar";
import { BsCartX } from 'react-icons/bs'

const cart = () => {
  const { cart } = useSelector(({cart}) => cart);

  if(cart.length  < 1){
    return (
      <section className="bg-gray flex space-y-4 flex-col items-center justify-center h-screen">
        <BsCartX  className="text-4xl"/>
        <h1 className="font-bold text-2xl">Your Cart is Currently Empty!</h1>
        <Link type="button" className="bg-black px-4 py-3 text-white my-4 rounded-3xl" href="/">Return to shop</Link>
      </section>
    )
  }
  return (
    <section>
      {/* <NavBar /> */}
      <div className="bg-black font-thin text-center text-white py-4 text-3xl">
        <h1 className="">Cart</h1>
      </div>
      <div className="md:px-24 px-4 my-12">
        <div className="flex uppercase font-semibold gap-8 items-center justify-between">
          <div className="w-5/12">
            <h2>Product</h2>
          </div>
          <div className="w-2/12">
            <h2>Price</h2>
          </div>
          <div className="w-3/12">
            <h2>Quantity</h2>
          </div>
          <div className="w-2/12">
            <h2>Total</h2>
          </div>
        </div>
        <hr className="text-grey my-2" />
        <CartItem />
      </div>
      <Footer />
    </section>
  );
};

export default cart;
