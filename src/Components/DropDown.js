import { logoutUser } from "@/Redux/Features/Auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";

const DropDown = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    await router.push("/");
  };
  const handleLogin = async () => {
    await router.push("/login");
  };
  const userToken = localStorage.getItem("token");

  return (
    <>
      <div
        onClick={() => setdropdownOpen(!dropdownOpen)}
        class="overflow-hidden rounded-full w-8 h-8 flex justify-center items-center
           hover:cursor-pointer"
      >
        <BsPerson className="text-4xl  text-green p-2 cursor-pointer" />
      </div>

      <div
        class={`${
          dropdownOpen ? `top-full  visible` : "top-[110%] invisible"
        } absolute right-1 z-40 w-1/8 rounded  border-light bg-black opacity-75 px-2 py-2 shadow-card transition-all`}
      >
        {userToken ? (
          <div className="flex item-center">
            {" "}
            <CiLogout className="text-2xl" />
            <a
              href="javascript:void(0)"
              className="block text-white px-5 text-base text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              onClick={handleLogout}
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="flex item-center">
            {" "}
            <CiLogin className="text-2xl" />
            <a
              href="javascript:void(0)"
              className="block text-white px-5 text-base text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              onClick={handleLogin}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
