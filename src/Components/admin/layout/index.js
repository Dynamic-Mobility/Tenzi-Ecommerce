import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <section className="flex h-auto overflow-hidden bg-background">
      <div className="h-screen md:block hidden bg-white w-64">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className=" p-4">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
