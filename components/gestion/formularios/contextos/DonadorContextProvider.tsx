import { createContext, useContext, useState } from "react";
import agregarDocumento from "../../services/agregarDocumento";
import obtenerDocumentos from "../../services/obtenerDocumentos";
import { FormDataDonadorConTurno } from "../common/interfaces";
import { IApi, TDoc } from "./Interfaces";

interface IContexto {
  horariosDisponibles: Date[];
  registrarDonador: (data: FormDataDonadorConTurno) => void;
  listarTurnosLibresPorFecha: (fecha: string) => void;
}

export const DonadorContext = createContext<IContexto>({
  horariosDisponibles: [],
  registrarDonador: () => {},
  listarTurnosLibresPorFecha: () => [],
});

export const useDonadorContext = () => useContext(DonadorContext);

interface Props {
  children: React.ReactNode;
  api: IApi;
  horarios: Date[];
}

const DonadorContextProvider = ({ horarios, api, children }: Props) => {
  const [horariosDisponibles, setHorariosDisponibles] =
    useState<Date[]>(horarios);

  const registrarDonador = async (data: FormDataDonadorConTurno) => {
    try {
      const [donador, turno] = await agregarDocumento<TDoc[]>(
        api.urlPost,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const listarTurnosLibresPorFecha = async (fecha: string) => {
    const horarios: Date[] = await obtenerDocumentos<Date>(
      `${api.urlGet}/${fecha}`
    );
    setHorariosDisponibles(horarios);
  };

  const contexto: IContexto = {
    horariosDisponibles,
    registrarDonador,
    listarTurnosLibresPorFecha,
  };
  return (
    <DonadorContext.Provider value={contexto}>
      {children}
    </DonadorContext.Provider>
  );
};

export default DonadorContextProvider;
