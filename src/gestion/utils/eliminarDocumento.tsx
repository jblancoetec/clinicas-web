import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const eliminarDocumento = async (url: string): Promise<void> => {
  try {
    await axios.delete(url, config);
  } catch (error) {
    console.log(error);
  }
};

export default eliminarDocumento;
