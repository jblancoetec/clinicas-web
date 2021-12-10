import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config: AxiosRequestConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const eliminarDocumento = async <T,>(url: string): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.delete<T>(url, config);
    return res?.data && res.status === 200 ? res.data : ({} as T);
  } catch (error) {
    console.log(error);
    return {} as T;
  }
};

export default eliminarDocumento;
