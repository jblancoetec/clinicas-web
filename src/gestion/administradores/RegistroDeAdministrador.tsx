import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useContext } from "react";
import { DocsContext } from "../contextos/DocsContextProvider";
import BotonEditar from "../common/BotonEditar";
import editarDocumentos from "../api/editarDocumento";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarDoc } = useContext(DocsContext);
  const { editarDoc } = useContext(DocsContext);

  return (
    <tr>
      <td>{administrador.nombre}</td>
      <td>{administrador.apellido}</td>
      <td>{administrador.email}</td>
      <td>{administrador.telefono}</td>
      <td>{administrador.usuario}</td>
      <td style={{ textAlign: "center" }}>
        <BotonEditar onClick={() => editarDoc(administrador)}/>
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar onClick={() => eliminarDoc(administrador._id)} />
      </td>
    </tr>
  );
};

export default RegistroDeAdministrador;
