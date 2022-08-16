import Colorjs from "color";
import { IoIosCopy } from "react-icons/io";
import styles from "./styles.module.css";

type Props = {
  colorName: string;
  color: string;
  copy: () => void;
};

export const ColorHeader = ({ colorName, color, copy }: Props) => {
  const colorjs = Colorjs(color);
  const isDarkColor = colorjs.isDark() ? "dark_color" : "light_color";

  return (
    <div
      className={`${styles.color_header_container} ${isDarkColor}`}
      style={{
        backgroundColor: color,
      }}>
      <h2 className={styles.color_info}>
        <span>{colorName}</span> <span>{color}</span>
      </h2>
      <button
        className={`${styles.copy_button} ${isDarkColor}`}
        onClick={copy}
        aria-label="copy to clip board">
        <IoIosCopy className={styles.copy_icon} />
      </button>
    </div>
  );
};
