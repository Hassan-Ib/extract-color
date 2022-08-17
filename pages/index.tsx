import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import { ColorBox, UsageInfo, Footer } from "../components";

import ImageBox from "../components/ImageBox";
import { IColorDataFormatted } from "../utils/types";
const Home: NextPage = () => {
  const [hexColors, setHexColors] = React.useState<IColorDataFormatted[]>([]);
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
      <main className="text-white py-28 px-3">
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
            className="text-white text-3xl sm:text-4xl md:text-6xl capitalize text-center mb-6 max-w-5xl  mx-auto tracking-wider">
            Extract image/* colors to tailwindCSS obj
          </h1>
          <p className="text-xs sm:text-sm md:text-base">
            Extract any image color to tailwind css object
          </p>
        </header>
        <ImageBox setHexColors={setHexColors} />
        <div className="mt-20">
          <ul className="flex gap-10 justify-center">
            {hexColors.map((color, index) => (
              <li
                style={{
                  backgroundColor: color.hex,
                }}
                className=" w-48 h-24 rounded-md shadow-2xl flex flex-col justify-center items-center gap-4"
                key={color.hex}>
                {" "}
                <span className="text-xs">
                  {color.color_name.toUpperCase()}
                </span>
                <span className="font-medium text-lg tracking-widest">
                  {color.hex}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {hexColors.length >= 1 && (
          <div className="flex flex-col flex-wrap md:flex-row gap-8 mx-auto  items-center justify-center mt-20">
            {hexColors.map((hexColor, key) => (
              <ColorBox key={key} color={hexColor} />
            ))}
          </div>
        )}
        <UsageInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
