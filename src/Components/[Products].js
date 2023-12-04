import React, { useEffect } from "react";
import { categories, products } from "./data";
import { AiOutlineShopping, AiOutlineEye } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addtoCart } from "@/Redux/Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

// REACT TOAST NOTIFICATION
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const dispatch = useDispatch();

  // append item id in link
  const notify = () => toast.success("Item Added to cart!");
  const { products } = useSelector(({ products }) => products);
  const { cart } = useSelector(({ cart }) => cart);
  console.log(cart)

  const addToCart = (product) => {
    dispatch(addtoCart(product));
    notify();
  };

  return (
    <section className="md:px-24 px-4 mt-40 mb-12">
      <ToastContainer position="bottom-right" />
      <div className="my-12">
        <h1 className="font-semibold text-center text-3xl">
          Our Latest Products
        </h1>
        <p className="text-center font-thin">
          We provide you with the best gooods available in our store. Look no
          further!
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
        {products.map((item) => (
          <div className="rounded my-4" key={item.productId}>
            <div className="group transition ease-in-out delay-150 relative items-center justify-center overflow-hidden cursor-pointer">
              <div className="rounded">
                <img
                  className="duration-700 h-80 w-80 object-cover transition-transform p-4 group-hover:scale-125 duration-700 transition-transform"
                  src={eval(item.imagePath)[0]}
                  alt=""
                />
              </div>
              <div className="bg-black py-3 duration-500 absolute inset-0 flex-flex-col items-center justify-center px-2 text-center translate-y-[100%] group-hover:translate-y-[85%] transition-all">
                <div className="flex items-center justify-between px-4">
                  <MdOutlineFavoriteBorder className="text-white text-xl" />
                  <Link href="/details">
                    <AiOutlineEye className="text-white text-xl" />
                  </Link>
                  <AiOutlineShopping
                    onClick={() => addToCart(item)}
                    className="text-white text-xl"
                  />
                </div>
              </div>
            </div>
            <p className="font-bold px-4">{item.productName}</p>
            <p className="text-textGray px-4">Ksh {item.productPrice}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
