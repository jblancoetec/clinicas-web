import React from "react";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useContext } from "react";
import { DocsContext } from "../contextos/DocsContextProvider";
import BotonEditar from "../common/BotonEditar";

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
        <BotonEditar onClick={() => editarDoc(administrador)} />
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar onClick={() => eliminarDoc(administrador._id)} />
      </td>
    </tr>
  );
};

export default RegistroDeAdministrador;
