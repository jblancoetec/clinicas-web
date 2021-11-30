import React from "react";
import Tabla from "../common/Tabla";
import RegistroDeAdministrador from "./RegistroDeAdministrador";
import BotonAgregar from "../common/BotonAgregar";
import Formulario from "../formularios/agregar/FormAgregarAdministrador";
import { IAdministrador } from "../../../models/Administrador";
import { DocsContext } from "../contextos/DocsContextProvider";
import { useContext } from "react";
import { Container } from "react-bootstrap";

const encabezados = ["Nombre", "Apellido", "Email"];

const acciones = ["Editar", "Eliminar"];

const TablaDeAdministradores = () => {
  const { docs } = useContext(DocsContext);
  return (
    <Container>
      <Tabla
        titulo="Listado de Administradores"
        encabezados={encabezados}
        acciones={acciones}
      >
        {docs.map((administrador, index) => (
          <RegistroDeAdministrador
            key={index}
            administrador={administrador as IAdministrador}
          />
        ))}
      </Tabla>
      <BotonAgregar formulario={<Formulario />}>
        Agregar administrador/a
      </BotonAgregar>
    </Container>
  );
};

export default TablaDeAdministradores;
