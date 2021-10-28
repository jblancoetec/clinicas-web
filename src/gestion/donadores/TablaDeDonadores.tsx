import React from "react";
import { IDonador } from "../../../models/Donador";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeDonador";
import Boton from "../common/BotonAgregar";
import BotonAgregar from "../common/BotonAgregar";

interface Props {
  donadores: IDonador[];
}

const encabezados = [
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Tipo de donador",
];

const acciones = ["Editar", "Eliminar", "Contactar"];

const TablaDeDonadores = ({ donadores }: Props) => {
  return (
    <>
      <Tabla
        titulo="Listado de Donadores"
        encabezados={encabezados}
        acciones={acciones}
      >
        {donadores.map((donador: IDonador) => (
          <Registro key={donador.email} donador={donador} />
        ))}
      </Tabla>
      <BotonAgregar texto="Agregar Donador/a" />
    </>
  );
};

export default TablaDeDonadores;
