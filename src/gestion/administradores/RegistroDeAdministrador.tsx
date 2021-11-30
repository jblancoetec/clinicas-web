import React, { useState } from "react";
import { IAdministrador } from "../../../models/Administrador";
import BotonEliminar from "../common/BotonEliminar";
import { useContext } from "react";
import { DocsContext } from "../contextos/DocsContextProvider";
// import BotonEditar from "../common/BotonEditar";
import { Alert, Modal } from "react-bootstrap";

interface Props {
  administrador: IAdministrador;
}

const RegistroDeAdministrador = ({ administrador }: Props) => {
  const { eliminarDoc } = useContext(DocsContext);
  const { editarDoc } = useContext(DocsContext);
  const [error, setError] = useState(false);

  const eliminar = async () => {
    const res = await eliminarDoc(administrador._id);
    setError(res !== 200);
  };

  const editar = async () => {
    const res = await editarDoc(administrador);
    setError(res !== 200);
  };

  return (
    <>
      <tr>
        <td>{administrador.nombre}</td>
        <td>{administrador.apellido}</td>
        <td>{administrador.email}</td>
        <td style={{ textAlign: "center" }}>
          {/* <BotonEditar formulario /> */}
        </td>
        <td style={{ textAlign: "center" }}>
          <BotonEliminar onClick={eliminar} />
        </td>
      </tr>
      <Modal>
        <Alert variant="danger" show={error}>
          Ups!!! Algo salio mal
        </Alert>
      </Modal>
    </>
  );
};

export default RegistroDeAdministrador;
