import { createContext, useContext, useState } from "react";
import { IApi, TDoc } from "./Interfaces";
import eliminarDocumento from "../../services/eliminarDocumento";
import agregarDocumento from "../../services/agregarDocumento";
import editarDocumento from "../../services/editarDocumento";
import { FormDataDoc } from "../common/interfaces";

interface IContexto {
  docs: TDoc[];
  agregarDoc: (data: FormDataDoc) => void;
  eliminarDoc: (id: string) => void;
  editarDoc: (id: string, data: FormDataDoc) => void;
}

const DocsContext = createContext<IContexto>({
  docs: [],
  agregarDoc: () => {},
  eliminarDoc: () => {},
  editarDoc: () => {},
});

export const useDocsContext = () => useContext(DocsContext);

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

  const agregarDoc = async (data: FormDataDoc) => {
    try {
      const documento: TDoc = await agregarDocumento<TDoc>(api.urlPost, data);
      setDocs(documento._id ? [...docs, documento] : docs);
    } catch (error) {
      console.log(error);
    }
  };

  const editarDoc = async (id: string, data: FormDataDoc) => {
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
