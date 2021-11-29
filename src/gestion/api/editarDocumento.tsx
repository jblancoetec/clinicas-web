import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const editarDocumentos = async <Type,>(url: string, doc: any) => {
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
