import React, { useContext } from "react";
import { IDonador } from "../../../models/Donador";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeDonador";
import BotonAgregar from "../common/BotonAgregar";
import { DocsContext } from "../contextos/DocsContextProvider";
import { Container } from "react-bootstrap";
import Formulario from "../formularios/agregar/FormAgregarDonador";

const encabezados = [
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Tipo de donador",
];

const acciones = ["Editar", "Eliminar"];

const TablaDeDonadores = () => {
  const { docs } = useContext(DocsContext);
  return (
    <Container>
      <Tabla
        titulo="Listado de Donadores"
        encabezados={encabezados}
        acciones={acciones}
      >
        {docs.map((donador, index) => (
          <Registro key={index} donador={donador as IDonador} />
        ))}
      </Tabla>
      <BotonAgregar formulario={<Formulario />}>Agregar donador/a</BotonAgregar>
    </Container>
  );
};

export default TablaDeDonadores;
