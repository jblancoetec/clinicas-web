import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonAgregar.module.css";
import { useState } from "react";
import { faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

interface Props {
  formulario: React.ReactNode;
  children: React.ReactNode;
}

const BotonAgregar = ({ formulario, children }: Props) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);

  const cerrarFormulario = () => setFormlarioVisible(false);
  const abrirFormulario = () => setFormlarioVisible(true);

  return (
    <>
      <Container className={styles.Contenedor}>
        <Button className={styles.Boton} onClick={abrirFormulario}>
          <div className={styles.Texto}>{children}</div>
          <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </Container>

      <Modal show={FormularioVisible} onHide={cerrarFormulario}>
        {formulario}
      </Modal>
    </>
  );
};

export default BotonAgregar;
