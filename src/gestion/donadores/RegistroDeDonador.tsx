import React from "react";
import { IDonador } from "../../../models/Donador";
import BotonEliminar from "../common/BotonEliminar";
import BotonEditar from "../common/BotonEditar";
import Donador from "../formularios/editar/Donador";
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
          <Donador />
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
