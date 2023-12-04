import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from 'react-icons/gr'
import { useSelector } from "react-redux";

import DropDown from "./DropDown";


export default function NavBar({isOpen,setIsOpen}) {
  const [navbar, setNavbar] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const { cart } = useSelector(({ cart }) => cart)

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav
      className={`w-full fixed z-40`}
    >
      <div className="bg-green w-full text-white gap-12 justify-between items-center md:flex sm:px-8 px-2">
        <div>
          <div className="flex items-center justify-between md:py-6 py-2 md:block">
            <h3 className="no-underline">
              <a
                href="/"
                className="font-bold py-1 no-underline"
              >
                E-Shop
              </a>
            </h3>
            <div className="md:hidden">
              <button
                className="p-2"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <GrClose className="text-2xl text-white" /> : <BiMenuAltRight className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-8 md:flex md:space-x-16 md:space-y-0">
              <li className="">
                <a className="no-underline" href="/">
                  Home
                </a>
              </li>
              <li className="">
                <a className="no-underline" href="/about">
                  About
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a className="no-underline" href="/services">
                  Services
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 divide-x-8">
                <a className="no-underline" href="/contact">
                  Contact
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(true)}>
                <div className="flex">
                <HiOutlineShoppingBag className="text-4xl rounded-full text-white p-2 mt-1 cursor-pointer" />
                <p className="-ml-4 bg-white pb-6 h-4 w-6 text-center rounded-full text-black">{cart.length}</p>
                </div>
              </li>
              <li className="bg-white w-8 h-8 rounded-full hover:text-blue-600 cursor-pointer">
                <DropDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
