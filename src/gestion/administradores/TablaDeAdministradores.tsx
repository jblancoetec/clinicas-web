import React from "react";
import { IAdministrador } from "../../../models/Administrador";
import Tabla from "../common/Tabla";
import RegistroDeAdministrador from "./RegistroDeAdministrador";
import BotonAgregar from "../common/BotonAgregar";
import Donador from "../formularios/editar/Donador";

interface Props {
  administradores: IAdministrador[];
}
const encabezados = ["Nombre", "Apellido", "Email", "Telefono", "Usuario"];

const acciones = ["Editar", "Eliminar"];

const TablaDeAdministradores = ({ administradores }: Props) => (
  <>
    <Tabla
      titulo="Listado de Administradores"
      encabezados={encabezados}
      acciones={acciones}
    >
      {administradores.map((administrador: IAdministrador) => (
        <RegistroDeAdministrador
          key={administrador.email}
          administrador={administrador}
        />
      ))}
    </Tabla>
    <BotonAgregar formulario={Donador}>Agregar administrador/a</BotonAgregar>
  </>
);

export default TablaDeAdministradores;
