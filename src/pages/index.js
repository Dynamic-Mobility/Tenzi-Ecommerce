import Hero from "@/Components/Hero";
import Head from "next/head";
import LandingPage from "./[shopId]";
import { store } from "@/store";

export default function Home() {
  return (
    <>
        <Head>
          <title>Ecommerce</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LandingPage />
    </>
  );
}
