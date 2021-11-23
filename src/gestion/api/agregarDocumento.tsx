import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const agregarDocumento = async (url: string, documento: any) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { documento },
  };

  try {
    await axios.post(url, config);
  } catch (error) {
    console.log(error);
  }
};

export default agregarDocumento;
