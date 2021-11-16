import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.API_URL,
};

const eliminarDocumentos = async <Type,>(url: string) => {
  try {
    await axios.delete<Type[]>(url, config);
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/gestion/administradores",
        statusCode: 307,
      },
    };
  }
};

export default eliminarDocumentos;
