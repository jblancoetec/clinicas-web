import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonEditar.module.css";
import Formulario from "../Formulario/Editar/Donador";

interface Props {
  children: React.ReactNode;
}

const BotonEditar = ({ children }: Props) => {
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

export default BotonEditar;
