import React from "react";
import { ITurno } from "../../../models/Turno";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeTurno";

interface Props {
  turnos: ITurno[];
}

const encabezados = [
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Tipo de donador",
  "Hora de visita",
];

const acciones = ["Editar", "Eliminar"];

const TablaDeTurnos = ({ turnos }: Props) => {
  return (
    <>
      <Tabla
        titulo="Listado de Turnos"
        encabezados={encabezados}
        acciones={acciones}
      >
        {turnos.map((turno: ITurno) => (
          <Registro key={turno.email} turno={turno} />
        ))}
      </Tabla>
    </>
  );
};

export default TablaDeTurnos;
