export type IRGB = [number, number, number];

export type IColorData = {
  b: number;
  closest_palette_color: string;
  closest_palette_color_html_code: string;
  closest_palette_color_parent: string;
  closest_palette_distance: number;
  g: number;
  html_code: string;
  percent: number;
  r: number;
};

export type IImageColorExtract = {
  data: {
    background_colors: Array<IColorData>;
    color_percent_threshold: number;
    color_variance: number;
    foreground_colors: Array<IColorData>;
    image_colors: Array<IColorData>;
    object_percentage: number;
  };
};

export type IColorDataFormatted = {
  r: number;
  g: number;
  b: number;
  color_name: string;
  hex: string;
};
