import React from "react";
import { ImUpload } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import { uploadImage as extractColor } from "../Api";
import { getImageColorExtract } from "../utils/mock-data";
import Image from "next/image";

import "react-toastify/dist/ReactToastify.css";
import { IColorDataFormatted } from "../utils/types";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

type Props = {
  setHexColors: (colors: IColorDataFormatted[]) => void;
};
const ImageBox = (props: Props) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const uploadImage = async (files: FileList | null) => {
    try {
      // image is empty
      if (!files) {
        throw new Error("Image is empty");
      }

      // image is more than one
      if (files.length > 1) {
        throw new Error("Image is more than one");
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = async () => {
        const image = fileReader.result as string;

        const serveDataFormat = {
          data: image,
        };
        const { data } = await extractColor(serveDataFormat);
        // const { data } = getImageColorExtract();
        // console.log(data);
        const formattedData = data.image_colors.map((color) => {
          const {
            r,
            g,
            b,
            closest_palette_color: color_name,
            html_code: hex,
          } = color;
          return {
            r,
            g,
            b,
            color_name,
            hex,
          };
        });
        setImageUrl(URL.createObjectURL(files[0]));
        props.setHexColors(formattedData);
        toast.success("color successfully extracted");
      };
    } catch (error) {
      // console.log("error", error);
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
      toast.error("something went wrong Please try again :)");
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    uploadImage(e.target.files);
  };
  const preventDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    uploadImage(files);
  };

  return (
    <section
      onDrop={handleDragDrop}
      onDragOver={preventDragOver}
      className="relative z-10 image-box bg-[#330a33]   mt-10 max-w-xl mx-auto border-[.01rem] border-white/50 rounded-md text-center min-h-[20rem] flex flex-col items-center justify-center px-2 text-sm md:text-lg ">
      {imageUrl ? (
        <div className="absolute block w-full h-full -z-20 overflow-hidden ">
          <Image
            src={imageUrl}
            alt="uploaded image"
            objectFit="cover"
            objectPosition={"center"}
            layout="fill"
            className="rounded-md"
          />
        </div>
      ) : null}
      <div className="absolute -z-10 bg-black/50 w-full h-full"></div>
      <label
        htmlFor="image"
        className="bg-[#801294] hover:bg-[#801294]/80 px-6 py-2 rounded-md font-[500] mb-4 flex items-center   gap-2">
        <ImUpload className=" " /> Upload from pc or mobile
      </label>
      <input
        onChange={handleUpload}
        type="file"
        name="image"
        id="image"
        accept="image/*"
        className="hidden"
      />
      <p className=" opacity-60 font-[500]">or Drag image/* here</p>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={1000}
      />
    </section>
  );
};

export default ImageBox;
