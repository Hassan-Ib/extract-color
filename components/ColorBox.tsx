import {
  getColorPalette,
  copyToClipBoard,
  formatToTailwindColorObject,
} from "../utils";
import { IndividualColor } from "./IndividualColor";
import { ColorHeader } from "./ColorHeader";
import { IColorDataFormatted, IRGB } from "../utils/types";
import { toast } from "react-toastify";

type Props = {
  color: IColorDataFormatted;
};
const ColorBox = ({ color }: Props) => {
  const colorName = color.color_name;

  const colorPalette = getColorPalette([color.r, color.g, color.b]);
  const tailwindColorObj = formatToTailwindColorObject(colorName, colorPalette);

  const colorPaletteString = `'${colorName.replace(" ", "-")}':${JSON.stringify(
    tailwindColorObj[colorName],
    null,
    3
  )}`;

  const copyTextToClipBoard = () => {
    copyToClipBoard(colorPaletteString);
    toast.success(`color ${colorName.toUpperCase()} copied`);
  };

  const colorPaletteList = [];
  for (let [key, value] of Object.entries(tailwindColorObj[colorName])) {
    colorPaletteList.push(
      <IndividualColor key={key} color={value} index={Number(key)} />
    );
  }

  return (
    <div
      style={{
        boxShadow: "0px 0px .5rem  rgba(0,0,0,.3)",
      }}
      className=" w-[80%] sm:w-56 flex flex-col capitalize overflow-hidden rounded-md tracking-[1px] ">
      <ColorHeader
        colorName={colorName}
        color={color.hex}
        copy={copyTextToClipBoard}
      />
      {colorPaletteList}
    </div>
  );
};

export default ColorBox;
