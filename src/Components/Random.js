import React from "react";
import { random } from "./data";
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Random = () => {
  return (
    <section className="md:flex grid items-center gap-4 md:px-12 px-4 my-12">
      {random.map((item) => (
        <>
          <div key={item.id} className="md:w-1/2 w-full">
            <img src={item.image} alt="" />
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
                <button className="bg-green px-4 py-2 rounded text-white">Add to Cart</button>
                <button data-tooltip-target="tooltip-default" type="button" className="border border-black py-2 rounded px-3">
                    <MdOutlineFavoriteBorder />
                </button>
            </div>
            <p className="text-textGray my-2">Availability : <span className="text-black">{item.availability}</span></p>
            <p className="text-textGray my-2">Category : <span className="text-black">{item.Category}</span></p>
          </div>
        </>
      ))}
    </section>
  );
};

export default Random;
