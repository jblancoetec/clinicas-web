import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const obtenerDocumentos = async <T,>(url: string): Promise<T[]> => {
  try {
    const res: AxiosResponse<T[]> = await axios.get<T[]>(url, config);
    return res?.data ? res.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default obtenerDocumentos;
