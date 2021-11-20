import React from "react";
import Tabla from "../common/Tabla";
import RegistroDeAdministrador from "./RegistroDeAdministrador";
import BotonAgregar from "../common/BotonAgregar";
import Donador from "../formularios/editar/Donador";
import { AdminContext } from "../contextos/GestionAdministradores";
import { useContext } from "react";

const encabezados = ["Nombre", "Apellido", "Email", "Telefono", "Usuario"];

const acciones = ["Editar", "Eliminar"];

const TablaDeAdministradores = () => {
  const { administradores } = useContext(AdminContext);
  return (
    <>
      <Tabla
        titulo="Listado de Administradores"
        encabezados={encabezados}
        acciones={acciones}
      >
        {administradores.map((administrador, index) => (
          <RegistroDeAdministrador key={index} administrador={administrador} />
        ))}
      </Tabla>
      <BotonAgregar formulario={Donador}>Agregar administrador/a</BotonAgregar>
    </>
  );
};

export default TablaDeAdministradores;
