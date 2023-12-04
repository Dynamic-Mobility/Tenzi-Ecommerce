import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiEdit } from "react-icons/bi";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import EditNavigationModal from "@/Components/dashboard/navigation/edit-navigation";
import { deleteMenuItem } from "@/Redux/Services/Navigation";
import { useDispatch } from "react-redux";
import { getAllMenus } from "@/Redux/Features/menus";

const MenuItem = ({ menu }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const deleteFunc = async() =>{
    deleteMenuItem(menu.id);
    await dispatch(getAllMenus());
  }


  return (
    <>
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <AiFillDelete onClick={deleteFunc} title="delete" className="cursor-pointer" />
            <EditNavigationModal menu={menu} />
          </div>
          <p className="">{menu.title}</p>
        </div>
        <div>
          {!show ? (
            <BiChevronRight
              onClick={() => setShow(true)}
              className="cursor-pointer"
            />
          ) : (
            <BiChevronDown
              onClick={() => setShow(false)}
              className="cursor-pointer"
            />
          )}
        </div>
      </section>
      {show && (
        <>
          <div className="grid space-y-2 bg-background p-2 rounded">
            {menu.menuItems.map((child, index) => (
              <Link
                className="text-sm text-link"
                key={index}
                href={`${child?.url}`}
              >
                {child?.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MenuItem;
