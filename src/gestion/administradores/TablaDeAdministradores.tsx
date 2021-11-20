import React from "react";
import Tabla from "../common/Tabla";
import RegistroDeAdministrador from "./RegistroDeAdministrador";
import BotonAgregar from "../common/BotonAgregar";
import Donador from "../formularios/editar/Donador";
import { IAdministrador } from "../../../models/Administrador";
import { DocsContext } from "../contextos/DocsContextProvider";
import { useContext } from "react";

const encabezados = ["Nombre", "Apellido", "Email", "Telefono", "Usuario"];

const acciones = ["Editar", "Eliminar"];

const TablaDeAdministradores = () => {
  const { docs } = useContext(DocsContext);
  return (
    <>
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
      <BotonAgregar formulario={Donador}>Agregar administrador/a</BotonAgregar>
    </>
  );
};

export default TablaDeAdministradores;
