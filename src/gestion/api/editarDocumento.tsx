import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TDoc } from "../contextos/Interfaces";

const editarDocumentos = async <Type,>(url: string, doc: TDoc) => {
  const config: AxiosRequestConfig = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: { doc },
  };
  try {
    const res: AxiosResponse = await axios.put<Type>(url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default editarDocumentos;
