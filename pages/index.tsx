import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";

import ImageBox from "../components/ImageBox";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Color generator</title>
        <meta
          name="description"
          content="extract color from image and generate tailwind color object"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white py-20">
        <header
          className="text-center  mx-auto"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
            }}
            className="text-white text-4xl capitalize text-center mb-6 tracking-wider">
            Extract image/* colors to tailwindCSS obj
          </h1>
          <p className=" ">Extract any image color to tailwind css object</p>
        </header>
        <ImageBox />
      </main>
    </div>
  );
};

export default Home;
