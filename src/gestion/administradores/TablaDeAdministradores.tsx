import React from "react";
import { IAdministrador } from "../../../models/Administrador";
import Tabla from "../common/Tabla";
import RegistroDeAdministrador from "./RegistroDeAdministrador";
import BotonAgregar from "../common/BotonAgregar";

interface Props {
  administradores: IAdministrador[];
}
const encabezado = ["Nombre", "Apellido", "Email", "Telefono", "Usuario"];

const acciones = ["Editar", "Eliminar"];

const TablaDeAdministradores = ({ administradores }: Props) => (
  <>
    <Tabla
      titulo="Listado de Administradores"
      encabezado={encabezado}
      acciones={acciones}
    >
      {administradores.map((administrador: IAdministrador) => (
        <RegistroDeAdministrador
          key={administrador.email}
          administrador={administrador}
        />
      ))}
    </Tabla>
    <BotonAgregar texto="Agregar Donador/a" />
  </>
);

export default TablaDeAdministradores;
