import React from "react";
import { random } from "@/Components/data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import NavBar from "@/Components/Navbar";

const Detail = () => {
  return (
    <>
    <NavBar />
      <section className="md:px-12 px-4 md:flex grid gap-8 items-center">
        {random.map((item) => (
          <>
            <div
              key={item.id}
              className="md:w-1/2 w-full bg-gray flex items-center justify-center rounded md:my-24 mt-24"
            >
              <img src="./images/ova.png" alt="" />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="font-bold text-3xl">{item.name}</h1>
              <p className="my-2">{item.price}</p>
              <p>{item.desc}</p>
              <div className="flex items-center gap-4 my-2">
                <button className="border border-black px-4 py-2 rounded flex items-center gap-4">
                  <AiOutlineMinus />
                  1
                  <AiOutlinePlus />
                </button>
                <button className="bg-green px-4 py-2 rounded text-white">
                  Add to Cart
                </button>
                <button
                  data-tooltip-target="tooltip-default"
                  type="button"
                  className="border border-black py-2 rounded px-3"
                >
                  <MdOutlineFavoriteBorder />
                </button>
              </div>
              <p className="text-textGray my-2">
                Availability :{" "}
                <span className="text-black">{item.availability}</span>
              </p>
              <p className="text-textGray my-2">
                Category : <span className="text-black">{item.Category}</span>
              </p>
              <Link
                href="/"
                type="button"
                className="bg-green px-4 py-2 text-center text-white w-full rounded my-4 flex items-center gap-4 justify-center"
              >
                <BsArrowLeft className="text-2xl" />
                Back to Shop
              </Link>
            </div>
          </>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Detail;
