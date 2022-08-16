import { COLORAPI_BASE_URL } from "./base_urls";
import axios from "axios";
import { IImageColorExtract } from "../utils/types";
const BASE_URL = "/api/v1";
interface file {
  data: string;
}

const uploadImage = async (file: file): Promise<IImageColorExtract> => {
  const url = BASE_URL + "/extract-color";
  return axios
    .post(url, file)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getMonochromeColors = async (
  color = "ADD8E6",
  { colorFormat = "hex", mode = "monochrome" } = {}
) => {
  const QUERY = `scheme?${colorFormat}=${color}&mode=${mode}&count=9`;
  const url = COLORAPI_BASE_URL + QUERY;
  // console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

// export { default as uploadImageToCloud } from "./uploadImageToCloud";
export { uploadImage, getMonochromeColors };
