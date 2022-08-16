import React from "react";
import Image from "next/image";
import paintSvg from "../public/undraw_add_color_re_buro.svg";

type Props = {};

const UsageInfo = (props: Props) => {
  return (
    <section className=" mt-28 flex flex-col lg:flex-row justify-center items-center gap-32">
      <div className="px-8 sm:px-16">
        <p className="uppercase font-semibold">step by step</p>
        <h2 className="my-4 mb-10 text-3xl md:text-5xl  font-bold max-w-xl tracking-wider ">
          How to extract tailwind color objects from image
        </h2>
        <p className="my-6 font-medium text-lg tracking-wide">
          follow the following steps
        </p>
        <ul className="">
          <li className="before-style px-6 pb-4">
            <h3 className="font-bold text-lg capitalize tracking-wider">
              step 1
            </h3>
            <p className="text-lg">select an image that needs extracting</p>
          </li>
          <li className="before-style px-6 pb-4">
            <h3 className="font-bold text-lg capitalize tracking-wider">
              step 2
            </h3>
            <p className="text-lg">upload the image form any device</p>
          </li>
          <li className="before-style px-6">
            <h3 className="font-bold text-lg capitalize tracking-wider">
              step 3
            </h3>
            <p className="text-lg">copy the extracted colors</p>
          </li>
        </ul>
      </div>
      <div>
        <Image src={paintSvg} alt="svg" />
      </div>
    </section>
  );
};

export default UsageInfo;
