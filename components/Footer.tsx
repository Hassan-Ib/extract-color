import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="text-sm font-semibold text-center mb-20 gap-1 px-2">
      Made by{" "}
      <a
        href="https://hassan-ib.vercel.app/"
        className="underline underline-offset-2 text-blue-400 hover:bg-yellow-600 hover:text-white px-1 hover:skew-y-2 transition-all duration-300">
        Hassan Ibrahim{" "}
      </a>{" "}
      , inspired by{" "}
      <a
        href="https://mayashavin.com"
        className="underline underline-offset-2 text-blue-400 hover:bg-yellow-600 hover:text-white px-1 hover:skew-y-2 transition-all duration-300">
        Maya shavin
      </a>
      and
      <a
        href="tinywow.com"
        className="underline underline-offset-2 text-blue-400 hover:bg-yellow-600 hover:text-white px-1 hover:skew-y-2 transition-all duration-300 ">
        Tinywow
    </a>.  Api - <a href="https://docs.imagga.com/#introduction" className="underline underline-offset-2 text-blue-400 hover:bg-yellow-600 hover:text-white px-1 hover:skew-y-2 transition-all duration-300">Imagga</a> for color extraction with rate limit of <span className="text-red-500">1000 / month</span>
    </footer>
  );
};

export default Footer;
