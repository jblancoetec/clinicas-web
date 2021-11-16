import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonAgregar.module.css";
import { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
}

const BotonAgregar = ({ children }: Props) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);

  const CerrarFormulario = () => setFormlarioVisible(false);
  const AbrirFormulario = () => setFormlarioVisible(true);

  return (
    <>
      <Button className={styles.Boton} onClick={AbrirFormulario}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={FormularioVisible} onHide={CerrarFormulario}>
        {children}
      </Modal>
    </>
  );
};

export default BotonAgregar;
