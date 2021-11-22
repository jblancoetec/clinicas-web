import { ObjectId } from "mongoose";
import { createContext, useState } from "react";
import { IApi, TDoc } from "./Interfaces";
import eliminarDocumento from "../api/eliminarDocumento";

interface IContexto {
  api: IApi;
  docs: TDoc[];
  agregarDoc: (doc: TDoc) => void;
  eliminarDoc: (id: ObjectId) => void;
  editarDoc: (doc: TDoc) => void;
}

export const DocsContext = createContext<IContexto>({
  api: { urlDelete: "", urlGet: "", urlPost: "", urlPut: "" },
  docs: [],
  agregarDoc: () => {},
  eliminarDoc: () => {},
  editarDoc: () => {},
});

interface Props {
  api: IApi;
  documentos: TDoc[];
  children: React.ReactNode;
}

const DocsContextProvider = ({ api, documentos, children }: Props) => {
  const [docs, setDocs] = useState(documentos);

  const eliminarDoc = (id: ObjectId) => {
    eliminarDocumento(`${api.urlDelete}/${id}`);
    return setDocs(docs.filter((doc) => doc._id !== id));
  };

  const agregarDoc = (doc: TDoc) => {
    return setDocs([...docs, doc]);
  };

  const editarDoc = (doc: TDoc) => {
    return setDocs(
      docs.map((docActual) => (docActual._id === doc._id ? doc : docActual))
    );
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
