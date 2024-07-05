// helper/axios.js
import axios from "axios";
import { BaseUrls } from "../../env";

const BASE_URL = process.env.NEXT_SHOPOADMIN_BASE_URL || BaseUrls?.BASE_URL;

export const _axios = async (method, url, body, contentType) => {
  try {
    const response = await axios({
      method: method,
      url: BASE_URL + url,
      headers: {
        "Content-Type": contentType || "application/json",
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
