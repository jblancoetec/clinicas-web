import { ObjectId } from "mongoose";
import { createContext, useState } from "react";
import { IDonador } from "../../../models/Donador";
import eliminarDocumento from "../utils/eliminarDocumento";

interface IContexto {
  api: string;
  donadores: IDonador[];
  agregarDonador: (donador: IDonador) => void;
  eliminarDonador: (id: ObjectId) => void;
  editarDonador: (donador: IDonador) => void;
}

export const DonadorContext = createContext<IContexto>({
  api: "",
  donadores: [],
  agregarDonador: () => {},
  eliminarDonador: () => {},
  editarDonador: () => {},
});

interface Props {
  api: string;
  documentos: IDonador[];
  children: React.ReactNode;
}

const DonadorContextProvider = ({ api, documentos, children }: Props) => {
  const [donadores, setDonadores] = useState(documentos);

  const eliminarDonador = (id: ObjectId) => {
    eliminarDocumento(`${api}/Donador/deleteDonador/${id}`);
    return setDonadores(donadores.filter((donador) => donador._id !== id));
  };

  const agregarDonador = (donador: IDonador) => {
    return setDonadores([...donadores, donador]);
  };

  const editarDonador = (donador: IDonador) => {
    return setDonadores(
      donadores.map((donadorActual) =>
        donadorActual._id === donador._id ? donador : donadorActual
      )
    );
  };

  const contextoInicial: IContexto = {
    api,
    donadores,
    eliminarDonador,
    agregarDonador,
    editarDonador,
  };

  return (
    <DonadorContext.Provider value={contextoInicial}>
      {children}
    </DonadorContext.Provider>
  );
};
export default DonadorContextProvider;
