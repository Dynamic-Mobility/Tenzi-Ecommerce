import Layout from "@/Components/admin/layout";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { BsChevronDown } from 'react-icons/bs'

const Pages = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Pages</h1>
        <Link
          href="/admin/page/create-page"
          className="bg-black text-white rounded px-3 py-2 text-sm"
        >
          Create Page
        </Link>
      </div>
      <div className="bg-white rounded p-4 my-8">
        <p className="underlined text-xl">All</p>
        <section className="flex items-center gap-4 my-4">
          <div className="w-8/12">
            <input
              className="border border-black rounded px-4 py-1 focus:outline-none w-full"
              placeholder="Filter Pages"
              type="text"
            />
          </div>
          <div>
            <button
              className="bg-black text-white rounded px-3 py-1 flex items-center gap-2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Visibility
              <BsChevronDown className="font-semibold" />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </section>
      </div>
    </section>
  );
};

Pages.getLayout = (page) => <Layout>{page}</Layout>;

export default Pages;
