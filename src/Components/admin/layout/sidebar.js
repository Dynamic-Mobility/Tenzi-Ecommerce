import React from "react";
import { menus } from "@/assets/menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <div className="bg-white shadow h-screen">
      <header className="h-[8vh] shadow flex items-center justify-center font-bold">
        <h1>Logo</h1>
      </header>
      <section className="p-4">
        <div>
          <h2 className="font-semibold">Sales Channels</h2>
          <div className="overflow-x-auto">
            <ul className="space-y-3 my-4 ">
              {menus.map((menu, index) => (
                <Link href={menu.href} key={index} className={`${menu.href === currentPath ? 'bg-black text-white rounded px-2 py-2 flex items-center gap-4' : 'flex items-center gap-4'} `}>
                  <span className="text-sm">{menu.icon}</span>
                  <span className="text-sm">{menu.label}</span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
