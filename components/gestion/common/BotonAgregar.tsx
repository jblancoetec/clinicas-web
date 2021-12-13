import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonAgregar.module.css";
import { useState } from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  formulario: React.ReactNode;
}

const BotonAgregar = ({ formulario }: Props) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);

  const cerrarFormulario = () => setFormlarioVisible(false);
  const abrirFormulario = () => setFormlarioVisible(true);

  return (
    <>
      <div className={styles.Contenedor}>
        <Button
          variant="light"
          className={styles.Boton}
          onClick={abrirFormulario}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </div>
      <Modal size="sm" show={FormularioVisible} onHide={cerrarFormulario}>
        {formulario}
      </Modal>
    </>
  );
};

export default BotonAgregar;
