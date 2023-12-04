import React from "react";
import Layout from "@/Components/admin/layout";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { Grid } from "@mui/material";

const CreatePage = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-12">
        <Link href="/admin/page">
          <BsArrowLeft />
        </Link>
        <h1 className="font-semibold">Add Page</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <section className="bg-white rounded p-4 space-y-4 shadow-xl">
            <div>
              <h2 className="">Title</h2>
              <input
                className="border border-black rounded px-4 py-1 focus:outline-none w-full"
                placeholder="eg. About Us,Sizing Chart, Contact Us"
                type="text"
              />
            </div>
            <div>
              <h2 className="">Content</h2>
              <textarea
                className="border border-black rounded px-4 py-1 focus:outline-none w-full"
                placeholder="eg. About Us,Sizing Chart, Contact Us"
                type="text"
                rows="6"
                cols="50"
              />
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-black text-white rounded px-3 py-2 text-sm">
                Add Page
              </button>
            </div>
          </section>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className="bg-white rounded shadow-xl p-4">
            <h2 className="">Visibility</h2>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

CreatePage.getLayout = (page) => <Layout>{page}</Layout>;

export default CreatePage;
