import React from "react";
import { IDonador } from "../../../models/Donador";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeDonador";
import BotonAgregar from "../common/BotonAgregar";
import Donador from "../formularios/editar/Donador";

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
      <BotonAgregar formulario={<Donador />}>Agregar donador/a</BotonAgregar>
    </>
  );
};

export default TablaDeDonadores;
