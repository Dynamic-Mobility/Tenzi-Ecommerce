import Layout from "@/Components/admin/layout";
import AddNavigationModal from "@/Components/dashboard/navigation/add-navigation-modal";
import { Container, Grid } from "@mui/material";
import React from "react";
import { getAllMenus } from "@/Redux/Features/menus";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import MenuItem from "./menu-item";

const Navigation = () => {
  const [show,setShow] = useState(false);
  const dispatch = useDispatch();
  const { menus } = useSelector((store) => store.menu);
  console.log("MENUS ", menus);

  useEffect(() => {
    dispatch(getAllMenus());
  }, []);
  return (
    <Container>
      <h1 className="font-semibold text-xl mb-12">Navigation</h1>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <h1 className="font-semibold">Menus</h1>
          <p>
            Menus or link lists help your customers navigate around your online
            store
          </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <section className="bg-white shadow rounded p-4">
            <div className="flex justify-between">
              <section className="space-y-4 w-8/12">
                <div>
                  <h1 className="mb-4 font-semibold">Menus</h1>
                  <div className="grid space-y-2">
                    {menus.map((menu, index) => (
                      <MenuItem key={index} menu={menu} />
                    ))}
                  </div>
                </div>
                
              </section>
              <div>
                <AddNavigationModal />
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};

Navigation.getLayout = (page) => <Layout>{page}</Layout>;

export default Navigation;
