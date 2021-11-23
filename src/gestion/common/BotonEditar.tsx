import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./BotonEditar.module.css";
<<<<<<< Updated upstream
import Donador from "../formularios/editar/Donador";
import editarDocumento from "../api/eliminarDocumento"
=======
import FormDonador from "../formularios/editar/FormDonador";
>>>>>>> Stashed changes

interface Props {
  onClick: () => void;
}

const BotonEditar = ({ onClick }: Props) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);

  const CerrarFormulario = () => setFormlarioVisible(false);
  const AbrirFormulario = () => setFormlarioVisible(true);

  return (
    <>
      <Button className={styles.Boton} onClick={AbrirFormulario}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={FormularioVisible} onHide={CerrarFormulario}>
        {onClick}
      </Modal>
    </>
  );
};

export default BotonEditar;
