import { createContext, useState } from "react";
import { IApi, TDoc } from "./Interfaces";
import eliminarDocumento from "../api/eliminarDocumento";
import agregarDocumento from "../api/agregarDocumento";
import editarDocumento from "../api/editarDocumento";

interface IContexto {
  api: IApi;
  docs: TDoc[];
  agregarDoc: (doc: TDoc) => Promise<number>;
  eliminarDoc: (id: string) => Promise<number>;
  editarDoc: (doc: TDoc) => Promise<number>;
}

export const DocsContext = createContext<IContexto>({
  api: { urlDelete: "", urlGet: "", urlPost: "", urlPut: "" },
  docs: [],
  agregarDoc: () => {
    return new Promise(() => {
      return 0;
    });
  },
  eliminarDoc: () => {
    return new Promise(() => {
      return 0;
    });
  },
  editarDoc: () => {
    return new Promise(() => {
      return 0;
    });
  },
});

interface Props {
  api: IApi;
  documentos: TDoc[];
  children: React.ReactNode;
}

const DocsContextProvider = ({ api, documentos, children }: Props) => {
  const [docs, setDocs] = useState(documentos);

  const eliminarDoc = async (id: string) => {
    const res = await eliminarDocumento(`${api.urlDelete}/${id}`);
    setDocs(res?.status == 200 ? docs.filter((doc) => doc._id !== id) : docs);
    return res ? res.status : 0;
  };

  const agregarDoc = async (doc: any) => {
    const res = await agregarDocumento<TDoc>(api.urlPost, doc);
    setDocs(res?.data ? [...docs, res.data] : docs);
    return res ? res.status : 0;
  };

  const editarDoc = async (doc: TDoc) => {
    const res = await editarDocumento<TDoc>(`${api.urlPut}/${doc._id}`, doc);
    setDocs(res?.data ? docs.map((d) => (d._id == doc._id ? doc : d)) : docs);
    return res ? res.status : 0;
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
