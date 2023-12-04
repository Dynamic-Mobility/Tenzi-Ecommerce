import React from "react";
import { categories } from "./data";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:px-12 px-4 grid md:grid-cols-4 grid-cols-1 gap-4">
      <div className="space-y-4">
        <h1 className="text-white font-bold text-2xl mb-4">E-Shop</h1>
        <div className="text-textGray flex items-center gap-4">
          <GoLocation className="" />
          <p className="text-sm">Location : Church Road 14th Street</p>
        </div>
        <div className="text-textGray flex items-center gap-4">
          <AiOutlinePhone className="" />
          <p className="text-sm">Phone : 02323234234</p>
        </div>
        <div className="text-textGray flex items-center gap-4">
          <AiOutlineMail className="" />
          <p className="text-sm">Email : info@gmail.com</p>
        </div>
      </div>
      <div>
        <h1 className="text-white mb-4">Categories</h1>
        <div className="space-y-4">
          {categories.map((category) => (
            <p key={category.id} className="text-textGray text-sm">
              {category.name}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white mb-4">Useful Links</h1>
        <div className="space-y-4 text-textGray">
          <p className="text-sm">About Us</p>
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Shipping and delivery</p>
          <p className="text-sm">Privacy Policy</p>
        </div>
      </div>
      <div>
        <h1 className="text-white mb-4">News Letter SignUp</h1>
        <p className="text-textGray text-sm">
          Subscribe to our newsletter and get 10% off your first purchase.
        </p>
        <div className="flex items-center my-2">
          <input
            placeholder="Email..."
            className="h-12 outline-none px-3"
            type="text"
          />
          <button className="bg-green h-12 px-2 text-white">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
