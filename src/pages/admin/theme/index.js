import Layout from "@/Components/admin/layout";
import { Container } from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import PopularThemes from "./popular-themes";

const Themes = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <h1 className="text-xl font-semibold mb-4">Themes</h1>
      <section className="bg-white rounded shadow p-4 flex items-center justify-between">
        <div>
          <h1>Theme Library</h1>
        </div>
        <div>
          <div>
            <button
              className="bg-black text-white rounded px-3 py-1 flex items-center gap-2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Add Theme
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
              <MenuItem onClick={handleClose}>Visit theme store</MenuItem>
              <MenuItem onClick={handleClose}>Upload zip file</MenuItem>
            </Menu>
          </div>
        </div>
      </section>
      <section className="bg-white rounded shadow p-4 flex items-center justify-between my-4">
        <PopularThemes />
      </section>
    </Container>
  );
};

Themes.getLayout = (page) => <Layout>{page}</Layout>;

export default Themes;
