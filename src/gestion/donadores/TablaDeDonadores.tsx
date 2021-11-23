import React, { useContext } from "react";
import { IDonador } from "../../../models/Donador";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeDonador";
import BotonAgregar from "../common/BotonAgregar";
import FormEditarDonador from "../formularios/editar/FormDonador";
import { DocsContext } from "../contextos/DocsContextProvider";

const encabezados = [
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Tipo de donador",
];

const acciones = ["Editar", "Eliminar", "Contactar"];

const TablaDeDonadores = () => {
  const { docs } = useContext(DocsContext);
  return (
    <>
      <Tabla
        titulo="Listado de Donadores"
        encabezados={encabezados}
        acciones={acciones}
      >
        {docs.map((donador, index) => (
          <Registro key={index} donador={donador as IDonador} />
        ))}
      </Tabla>
      <BotonAgregar formulario={<FormEditarDonador />}>
        Agregar donador/a
      </BotonAgregar>
    </>
  );
};

export default TablaDeDonadores;
