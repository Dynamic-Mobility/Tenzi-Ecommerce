import React from "react";
import { GrClose } from "react-icons/gr";
import { useSelector,useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  increase,
  decrease,
  removeItem,
} from "@/Redux/Features/Cart/cartSlice";
import Link from "next/link";
import { BsCartX } from 'react-icons/bs'
import Modal from "./Modal";


const EmptyCartAlert = ({ setIsOpen }) =>{
    return (
        <section className="flex flex-col space-y-6 h-full items-center justify-center">
            <BsCartX className="text-3xl"/>
            <p>Your Cart Is empty!</p>
            <button onClick={()=> setIsOpen(false)} className="bg-green uppercase text-sm text-white rounded-3xl px-6 py-3">Return to Shop</button>
        </section>
    )
  }

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const { cart } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const getTotal = () =>{
    let totalPrice = 0;
    cart.forEach(item =>{
        totalPrice += item.productPrice * item.quantity
    })
    return { totalPrice }
  }

  
  return (
    <main
      className={
        " fixed overflow-hidden mt-16 z-50 bg-black bg-opacity-70 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "md:w-1/4 w-3/4 max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-full max-w-lg pb-10 flex flex-col space-y-2 overflow-auto h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray">
            <p>Shopping Cart</p>
            <GrClose onClick={() => setIsOpen(false)} className="cursor-pointer text-xl" />
          </div>

          {cart.length < 1 ? <>
          <EmptyCartAlert setIsOpen={setIsOpen}/>
          </> : <>
          <section className="">
            {cart.map((product) => (
              <>
                <div className="flex space-y-4 justify-around items-center py-4" key={product.productId}>
                  <div className="bg-gray">
                    <img className="w-20" src={eval(product.imagePath)[0]} alt="" />
                  </div>
                  <div className="">
                    <p className="font-bold text-sm">{product.productName}</p>
                    <p className="text-sm">ksh {product.productPrice}</p>
                    <div className="flex items-center gap-4 my-2">
                      <button className="border border-gray rounded-3xl px-3 md:py-1 py-1 md:flex grid items-center md:gap-4 gap-0">
                        <AiOutlineMinus
                          onClick={() => {
                            if (product.quantity === 1) {
                              dispatch(removeItem(product.productId));
                              return;
                            }
                            dispatch(decrease(product));
                          }}
                          className="text-sm"
                        />
                        <small>{product?.quantity}</small>
                        <AiOutlinePlus
                          onClick={() => dispatch(increase(product))}
                          className="text-sm"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="text-gray"/>
              </>
            ))}
            <div className="px-8 my-4 flex items-center justify-between">
                <p className="uppercase">Subtotal:</p>
                <p className="">Ksh {getTotal().totalPrice}</p>
            </div>
            <section className="flex flex-col space-y-4 px-6 mt-24">
                <Link type="button" href="/cart" className="bg-gray text-center text-black uppercase text-xs tracking-widest px-4 py-4 rounded-3xl">View Cart</Link>
                <Link type="button" href="/checkout" className="bg-black text-center text-xs tracking-widest uppercase text-white px-4 py-4 rounded-3xl">Checkout</Link>
            </section>
          </section>
          </>}

          
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default CartDrawer;
