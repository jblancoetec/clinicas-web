import React from "react";
import { IDonador } from "../../../models/Donador";
import BotonEliminar from "../common/BotonEliminar";
import BotonEditar from "../common/BotonEditar";
import Formulario from "../formularios/editar/FormEditarDonador";
import { useDocsContext } from "../contextos/DocsContextProvider";

interface Props {
  donador: IDonador;
}
const RegistroDeDonador = ({ donador }: Props) => {
  const { eliminarDoc } = useDocsContext();
  return (
    <tr>
      <td>{donador.nombre}</td>
      <td>{donador.apellido}</td>
      <td>{donador.email}</td>
      <td>{donador.telefono}</td>
      <td>{donador.tipo}</td>
      <td style={{ textAlign: "center" }}>
        <BotonEditar formulario={<Formulario {...donador} />} />
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar onClick={() => eliminarDoc(donador._id)} />
      </td>
    </tr>
  );
};

export default RegistroDeDonador;
