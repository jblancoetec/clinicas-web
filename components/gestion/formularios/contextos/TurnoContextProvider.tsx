import { createContext, useContext, useState } from "react";
import { IDonador } from "../../../../models/Donador";
import { ITurno } from "../../../../models/Turno";
import eliminarDocumento from "../../services/eliminarDocumento";
import obtenerDocumento from "../../services/obtenerDocumento";
import { IApi } from "./Interfaces";

interface IContexto {
  turnos: ITurno[];
  eliminarTurno: (id: string) => void;
}

const TurnoContext = createContext<IContexto>({
  turnos: [],
  eliminarTurno: () => {},
});

export const useTurnoContext = () => useContext(TurnoContext);

interface Props {
  api: IApi;
  documentos: ITurno[];
  children: React.ReactNode;
}

const TurnoContextProvider = ({ api, documentos, children }: Props) => {
  const [turnos, setTurnos] = useState(documentos);

  const eliminarTurno = async (id: string) => {
    try {
      const turno: ITurno = await eliminarDocumento<ITurno>(
        `${api.urlDelete}/${id}`
      );
      setTurnos(turnos.filter((t) => t._id !== turno._id));
    } catch (error) {
      console.log(error);
    }
  };

  const contexto = {
    turnos,
    eliminarTurno,
  };

  return (
    <TurnoContext.Provider value={contexto}>{children}</TurnoContext.Provider>
  );
};

export default TurnoContextProvider;
