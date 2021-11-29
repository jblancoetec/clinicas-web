import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const agregarDocumento = async <Type,>(url: string, documento: any) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { documento },
  };

  try {
    const res: AxiosResponse<Type> = await axios.post<Type>(url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default agregarDocumento;
