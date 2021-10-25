import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const obtenerDocumentos = async <Type,>(url: string) => {
  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: process.env.API_URL,
  };
  try {
    const res: AxiosResponse = await axios.get<Type[]>(url, config);
    const documentos = res.data;
    return {
      props: { documentos },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/",
        statusCode: 307,
      },
    };
  }
};

export default obtenerDocumentos;
