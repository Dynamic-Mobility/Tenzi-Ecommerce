import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
  clearCart
} from "@/Redux/Features/Cart/cartSlice";

const CartItem = () => {
  const { cart } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();
  console.log(cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.productPrice * item.quantity;
    });
    return { totalPrice };
  };

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <>
      <div>
        {cart.map((product) => (
          <section key={product.productId}>
            <div className="flex items-center gap-8">
              <div className="md:w-5/12 flex gap-4 items-center">
                <div>
                  <img
                    style={{ maxWidth: "100px" }}
                    className=""
                    src={eval(product.imagePath)[0]}
                    alt=""
                  />
                </div>
                <div>
                  <p>{product.productName}</p>
                  <BiTrash
                    onClick={() => dispatch(removeItem(product.productId))}
                    className="cursor-pointer my-2"
                  />
                </div>
              </div>
              <div className="w-2/12">
                <p>{product.productPrice}</p>
              </div>
              <div className="w-3/12">
                <div className="flex items-center gap-4 my-2">
                  <button className="border border-gray rounded-3xl px-4 md:py-2 py-1 md:flex grid items-center md:gap-4 gap-0">
                    <AiOutlineMinus
                      onClick={() => {
                        if (product.quantity === 1) {
                          dispatch(removeItem(product.productId));
                          return;
                        }
                        dispatch(decrease(product));
                      }}
                    />
                    <p>{product?.quantity}</p>
                    <AiOutlinePlus
                      onClick={() => dispatch(increase(product))}
                    />
                  </button>
                </div>
              </div>
              <div className="w-2/12">
                <p>{product.productPrice * product.quantity}</p>
              </div>
              {/* <div className="w-2/12">
                <p>{getTotal().totalPrice}</p>
              </div> */}
            </div>
            <hr className="text-grey my-4" />
          </section>
        ))}
        <div className="flex justify-end gap-4 items-center my-4 uppercase">
          <p className="uppercase font-semibold">Subtotal :</p>
          <p>Ksh {getTotal().totalPrice}</p>
        </div>
        <div className="flex justify-between w-80">
          <div  className="bg-black px-8 py-2 text-white w-36 cursor-pointer"
          onClick={handleClearCart}>
            Clear Cart
          </div>
          <div className="">
            <Link
              href="/checkout"
              type="button"
              className="bg-black px-8 py-2 text-white w-36"
            >
              Checkout
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default CartItem;
