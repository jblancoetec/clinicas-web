import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FormDataDoc } from "../formularios/common/interfaces";

const agregarDocumento = async <T,>(
  url: string,
  data: FormDataDoc
): Promise<T> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  try {
    const res: AxiosResponse<T> = await axios.post<T>(url, config);
    return res?.data && res.status == 200 ? res.data : ({} as T);
  } catch (error) {
    console.log(error);
    return {} as T;
  }
};

export default agregarDocumento;
