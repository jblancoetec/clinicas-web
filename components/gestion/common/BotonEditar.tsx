import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonEditar.module.css";

interface Props {
  formulario: React.ReactNode;
}

const BotonEditar = ({ formulario }: Props) => {
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
