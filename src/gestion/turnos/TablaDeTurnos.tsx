import React from "react";
import { ITurno } from "../../../models/Turno";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeTurno";
import Boton from "../common/BotonAgregar";
import BotonAgregar from "../common/BotonAgregar";

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
      <BotonAgregar texto="Agregar Turno" />
    </>
  );
};

export default TablaDeTurnos; 