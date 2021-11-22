import React from "react";
import { ITurno } from "../../../models/Turno";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeTurno";
import { useContext } from "react";
import { DocsContext } from "../contextos/DocsContextProvider";

const encabezados = ["Hora de visita"];

const acciones = ["Donador", "Editar", "Eliminar"];

const TablaDeTurnos = () => {
  const { docs } = useContext(DocsContext);

  return (
    <>
      <Tabla
        titulo="Turnos del dia"
        encabezados={encabezados}
        acciones={acciones}
      >
        {docs.map((turno, index) => (
          <Registro key={index} turno={turno as ITurno} />
        ))}
      </Tabla>
    </>
  );
};

export default TablaDeTurnos;
