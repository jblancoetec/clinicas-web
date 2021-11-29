import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const eliminarDocumento = async (url: string) => {
  try {
    const res = await axios.delete(url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default eliminarDocumento;
