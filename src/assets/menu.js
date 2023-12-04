// components/defaultNavItems.tsx
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import { TbBrandBandlab } from 'react-icons/tb'

export const menus = [
  {
    label: "Themes",
    href: "/admin/theme",
    icon: <BiSolidDashboard className="text-xl" />,
  },
  {
    label: "Discounts",
    href: "/admin/discount",
    icon: <TbBrandBandlab className="text-xl" />,
  },
  {
    label: "Promotions",
    href: "/admin/page",
    icon: <HiUsers className="text-xl" />,
  },
  {
    label: "Navigation",
    href: "/admin/navigation",
    icon: <RiMessage2Fill className="text-xl" />,
  },
  {
    label: "Preferences",
    href: "/admin/preferences",
    icon: <BsCalendarEvent className="text-xl" />,
  },
];




