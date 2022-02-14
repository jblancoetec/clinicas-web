import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const BotonEditar = ({ formulario }: { formulario: ReactNode }) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);

  const cerrarFormulario = () => setFormlarioVisible(false);
  const abrirFormulario = () => setFormlarioVisible(true);

  return (
    <>
      <Button variant="light" onClick={abrirFormulario}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
      <Modal show={FormularioVisible} onHide={cerrarFormulario}>
        {formulario}
      </Modal>
    </>
  );
};

export default BotonEditar;
