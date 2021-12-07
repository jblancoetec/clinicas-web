import React, { useContext } from "react";
import { IDonador } from "../../../models/Donador";
import BotonEliminar from "../common/BotonEliminar";
// import BotonEditar from "../common/BotonEditar";
// import FormEditarDonador from "../formularios/editar/FormEditarDonador";
import BotonContactar from "../common/BotonContactar";
import { DocsContext } from "../contextos/DocsContextProvider";

interface Props {
  donador: IDonador;
}
const RegistroDeDonador = ({ donador }: Props) => {
  const { eliminarDoc } = useContext(DocsContext);
  return (
    <tr>
      <td>{donador.nombre}</td>
      <td>{donador.apellido}</td>
      <td>{donador.email}</td>
      <td>{donador.telefono}</td>
      <td>{donador.tipo}</td>
      <td style={{ textAlign: "center" }}>
        {/* <BotonEditar formulario={<FormEditarDonador donador={donador} />} /> */}
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar onClick={() => eliminarDoc(donador._id)} />
      </td>
      <td style={{ textAlign: "center" }}>
        <BotonContactar />
      </td>
    </tr>
  );
};

export default RegistroDeDonador;
