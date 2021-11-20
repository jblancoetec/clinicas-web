import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { AdminContext } from "../contextos/GestionAdministradores";
import { useContext } from "react";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarAdministrador } = useContext(AdminContext);

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
        <BotonEliminar
          onClick={() => eliminarAdministrador(administrador._id)}
        />
      </td>
    </tr>
  );
};

export default RegistroDeAdministrador;
