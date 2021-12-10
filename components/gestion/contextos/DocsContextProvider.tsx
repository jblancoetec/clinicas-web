import { createContext, useContext, useState } from "react";
import { IApi, TDoc } from "./Interfaces";
import eliminarDocumento from "../api/eliminarDocumento";
import agregarDocumento from "../api/agregarDocumento";
import editarDocumento from "../api/editarDocumento";

interface IContexto {
  api: IApi;
  docs: TDoc[];
  agregarDoc: (data: any) => void;
  eliminarDoc: (id: string) => void;
  editarDoc: (id: string, data: any) => void;
}

export const DocsContext = createContext<IContexto>({
  api: { urlDelete: "", urlGet: "", urlPost: "", urlPut: "" },
  docs: [],
  agregarDoc: () => {},
  eliminarDoc: () => {},
  editarDoc: () => {},
});

export const useDocsContext = () => {
  return useContext(DocsContext);
};

interface Props {
  api: IApi;
  documentos: TDoc[];
  children: React.ReactNode;
}

const DocsContextProvider = ({ api, documentos, children }: Props) => {
  const [docs, setDocs] = useState(documentos);

  const eliminarDoc = async (id: string) => {
    try {
      const documento: TDoc = await eliminarDocumento<TDoc>(
        `${api.urlDelete}/${id}`
      );
      setDocs(docs.filter((doc) => doc._id !== documento._id));
    } catch (error) {
      console.log(error);
    }
  };

  const agregarDoc = async (data: any) => {
    try {
      const documento = await agregarDocumento<TDoc>(api.urlPost, data);
      setDocs([...docs, documento]);
    } catch (error) {
      console.log(error);
    }
  };

  const editarDoc = async (id: string, data: any) => {
    try {
      const documento = await editarDocumento<TDoc>(
        `${api.urlPut}/${id}`,
        data
      );
      setDocs(docs.map((doc) => (doc._id === documento._id ? documento : doc)));
    } catch (error) {
      console.log(error);
    }
  };

  const contextoInicial: IContexto = {
    api,
    docs,
    eliminarDoc,
    agregarDoc,
    editarDoc,
  };

  return (
    <DocsContext.Provider value={contextoInicial}>
      {children}
    </DocsContext.Provider>
  );
};

export default DocsContextProvider;
