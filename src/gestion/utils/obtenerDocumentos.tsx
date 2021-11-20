import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAdministrador } from "../../../models/Administrador";

const config: AxiosRequestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const obtenerDocumentos = async <Type,>(url: string): Promise<Type[]> => {
  try {
    const res: AxiosResponse<Type[]> = await axios.get<Type[]>(url, config);
    const documentos: Type[] = res.data;
    return documentos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default obtenerDocumentos;
