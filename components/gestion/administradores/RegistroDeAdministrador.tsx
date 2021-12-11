import React from "react";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useDocsContext } from "../contextos/DocsContextProvider";
import BotonEditar from "../common/BotonEditar";
import Formulario from "../formularios/editar/FormEditarAdministrador";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarDoc, editarDoc } = useDocsContext();

  return (
    <>
      <tr>
        <td>{administrador.nombre}</td>
        <td>{administrador.apellido}</td>
        <td>{administrador.email}</td>
        <td style={{ textAlign: "center" }}>
          <BotonEditar formulario={<Formulario {...administrador} />} />
        </td>
        <td style={{ textAlign: "center" }}>
          <BotonEliminar onClick={() => eliminarDoc(administrador._id)} />
        </td>
      </tr>
    </>
  );
};

export default RegistroDeAdministrador;
