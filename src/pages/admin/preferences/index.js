import Layout from "@/Components/admin/layout";
import { Container, Grid } from "@mui/material";
import React from "react";

const Preferences = () => {
  return (
    <Container>
      <h1 className="text-xl font-semibold mb-12">Preferences</h1>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <h1 className="font-semibold">Time and Meta description</h1>
          <p className="text-sm mt-3">
            The title and meta description help define how your store shows up
            on search engines
          </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <section className="bg-white rounded shadow p-4 space-y-4">
            <div>
              <input
                className="border border-black rounded px-4 py-1 focus:outline-none w-full"
                placeholder="Home page title"
                type="text"
              />
            </div>
            <div>
              <textarea
                className="border border-black rounded px-4 py-1 focus:outline-none w-full"
                placeholder="Enter a description to get a better ranking on search engines like Google"
                type="text"
                rows="8"
                cols="50"
              />
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-black text-white rounded px-3 py-2 text-sm">
                Add Preference
              </button>
            </div>
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};

Preferences.getLayout = (page) => <Layout>{page}</Layout>;

export default Preferences;
