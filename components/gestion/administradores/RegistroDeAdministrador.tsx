import React from "react";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useDocsContext } from "../formularios/contextos/DocsContextProvider";
import BotonEditar from "../common/BotonEditar";
import FormularioEditar from "../formularios/editar/FormEditarAdministrador";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarDoc } = useDocsContext();

  return (
    <>
      <tr>
        <td>{administrador.nombre}</td>
        <td>{administrador.apellido}</td>
        <td>{administrador.email}</td>
        <td style={{ textAlign: "center" }}>
          <BotonEditar formulario={<FormularioEditar {...administrador} />} />
        </td>
        <td style={{ textAlign: "center" }}>
          <BotonEliminar id={administrador._id} />
        </td>
      </tr>
    </>
  );
};

export default RegistroDeAdministrador;
