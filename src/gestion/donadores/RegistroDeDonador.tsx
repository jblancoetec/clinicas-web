//import { faEdit, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Button } from "react-bootstrap";
import React from "react";
import { IDonador } from "../../../models/Donador";
import BotonEliminar from "../common/BotonEliminar";
import BotonEditar from "../common/BotonEditar";
import Formulario from "../Formulario/Editar/Donador";
import BotonContactar from "../common/BotonContactar";

interface Props {
  donador: IDonador;
}
const RegistroDeDonador = ({ donador }: Props) => {
  return (
    <tr>
      <td>{donador.nombre}</td>
      <td>{donador.apellido}</td>
      <td>{donador.email}</td>
      <td>{donador.telefono}</td>
      <td>{donador.tipo_donador}</td>
      <td style={{ textAlign: "center" }}>
        <BotonEditar>
          <Formulario />
        </BotonEditar>
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar url={`/Donador/deleteDonador/${donador._id}`} />
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonContactar />
      </td>
    </tr>
  );
};

export default RegistroDeDonador;
