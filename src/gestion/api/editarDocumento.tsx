import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAdministrador } from "../../../models/Administrador";

const config: AxiosRequestConfig = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};

const editarDocumentos = async <Type,>(url: string): Promise<void> => {
  try {
    await axios.put<Type[]>(url, config);
  } catch (error) {
    console.log(error);
  }
};

export default editarDocumentos;
