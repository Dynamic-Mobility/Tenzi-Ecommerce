import React from "react";
import CartDrawer from "./CartDrawer";

const Hero = ({ isOpen,setIsOpen}) => {
  return (
    <>
      <section className="bg-white md:px-24 px-2 py-12 md:flex grid items-center gap-8">
        <div className="md:w-5/12 w-full mt-12 md:mt-0">
          <h1 className="text-4xl font-black">
            Get your goods delivered in{" "}
            <span className="text-green">90 minutes.</span>
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in
            non expedita a ducimus?
          </p>
          <button className="border border-green hover:bg-green hover:text-white delay-150 px-8 py-3">
            Get Started
          </button>
        </div>
        <div className="w-7/12 mt-24 md:block hidden">
          <img className="object-contain" src="/images/orange1.jpg" alt="" />
        </div>
      </section>
      <section className="px-12 grid md:grid-cols-3 grid-cols-1 md:space-y-0 space-y-8 gap-8 md:my-24 my-12">
        <div className="bg-sub1 group cursor-pointer h-52 flex flex-col items-center justify-center">
          <img
            className="object-cover group-hover:scale-110 duration-700 transition-transform"
            src="/images/green.png"
            alt=""
          />
          <p className="text-xl">Vegetable Item</p>
        </div>
        <div className="bg-sub2 group cursor-pointer h-52 flex flex-col items-center justify-center">
          <img
            className="object-cover group-hover:scale-110 duration-700 transition-transform"
            src="/images/red.png"
            alt=""
          />
          <p className="text-xl">Organic Item</p>
        </div>
        <div className="bg-sub3 group cursor-pointer h-52 flex flex-col items-center justify-center">
          <img
            className="object-cover group-hover:scale-110 duration-700 transition-transform"
            src="/images/nuts.png"
            alt=""
          />
          <p className="text-xl">Dried Item</p>
        </div>
      </section>
      <CartDrawer  isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Hero;
