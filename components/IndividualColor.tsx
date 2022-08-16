import Colorjs from "color";

type Props = {
  color: string;
  index: number;
};
export const IndividualColor = ({ color, index }: Props) => {
  const colorjs = Colorjs(color);
  const isDarkColor = colorjs.isDark();
  return (
    <p
      style={{
        fontSize: "0.8rem",
        backgroundColor: color,
        color: isDarkColor ? "white" : "black",
      }}
      className="flex uppercase items-center justify-between gap-8 p-4 text-sm">
      <span>{index}</span> <span>{color}</span>
    </p>
  );
};
