import React, { useEffect, useState } from "react";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useDocsContext } from "../contextos/DocsContextProvider";
// import BotonEditar from "../common/BotonEditar";
import { Alert, Modal } from "react-bootstrap";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarDoc, editarDoc } = useDocsContext();

  const eliminar = () => {
    eliminarDoc(administrador._id);
  };

  return (
    <>
      <tr>
        <td>{administrador.nombre}</td>
        <td>{administrador.apellido}</td>
        <td>{administrador.email}</td>
        <td style={{ textAlign: "center" }}>
          {/* <BotonEditar formulario /> */}
        </td>
        <td style={{ textAlign: "center" }}>
          <BotonEliminar onClick={eliminar} />
        </td>
      </tr>
    </>
  );
};

export default RegistroDeAdministrador;
