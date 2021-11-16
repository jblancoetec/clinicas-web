import { faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar"

interface Props {
  administrador: IAdministrador;
}
const RegistroDeAdministrador = ({ administrador }: Props) => {
  return (
    <tr>
      <td>{administrador.nombre}</td>
      <td>{administrador.apellido}</td>
      <td>{administrador.email}</td>
      <td>{administrador.telefono}</td>
      <td>{administrador.usuario}</td>
      <td style={{ textAlign: "center" }}>
        <Button style={{ backgroundColor: "var(--Editar)", border: "none" }}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar url={`/Administrador/deleteAdministrador/${administrador._id}`}/> 
      </td>
    </tr>
  );
};

export default RegistroDeAdministrador;
