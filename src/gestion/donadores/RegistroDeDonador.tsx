<<<<<<< Updated upstream
import { faEdit, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { IDonador } from "../../../models/Donador";
import BotonEliminar from "../common/BotonEliminar"
=======
import { IDonador } from "../../../models/Donador";
import BotonContactar from "../common/BotonContactar";
import BotonEditar from "../common/BotonEditar";
import BotonEliminar from "../common/BotonEliminar";
import Formulario from "../Formulario/Editar/Donador";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        <BotonEliminar url={`/Donador/deleteDonador/${donador._id}`}/> 
=======
        <BotonEliminar />
>>>>>>> Stashed changes
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonContactar />
      </td>
    </tr>
  );
};

export default RegistroDeDonador;
