import React from "react";
import { ImUpload } from "react-icons/im";
type Props = {};

const ImageBox = (props: Props) => {
  // image data {blob, width, height, name}
  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  const preventDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.items) {
      console.log(e.dataTransfer.files);
    }
  };

  return (
    <section
      onDrop={handleDragDrop}
      onDragOver={preventDragOver}
      className="image-box bg-[#330a33]  mt-10 max-w-xl mx-auto border-[.01rem] border-white/50 rounded-md text-center min-h-[20rem] flex flex-col items-center justify-center">
      <label
        htmlFor="image"
        className="bg-[#801294] hover:bg-[#801294]/80 px-6 py-2 rounded-md text-lg font-[500] mb-4 flex items-center   gap-2">
        <ImUpload /> Upload from pc or mobile
      </label>
      <input
        onChange={uploadImage}
        type="file"
        name="image"
        id="image"
        accept="image/*"
        className="hidden"
      />
      <p className=" opacity-60 font-[500]">or Drag image/* here</p>
    </section>
  );
};

export default ImageBox;
