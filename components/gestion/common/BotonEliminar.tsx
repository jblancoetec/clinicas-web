import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useDocsContext } from "../formularios/contextos/DocsContextProvider";
import styles from "./BotonEliminar.module.css";

const BotonEliminar = ({ id }: { id: string }) => {
  const [alertaVisible, setAlertaVisible] = useState(false);
  const abrirAlerta = () => setAlertaVisible(true);
  const cerrarAlerta = () => setAlertaVisible(false);
  const { eliminarDoc } = useDocsContext();

  return (
    <>
      <Button variant="danger" onClick={abrirAlerta}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
      <Modal
        show={alertaVisible}
        onHide={cerrarAlerta}
        className={styles.Modal}
      >
        <Alert variant="danger" className={styles.Alerta}>
          <Alert.Heading>¿Está seguro?</Alert.Heading>

          <p>Esta acción no se puede deshacer.</p>
          <Button variant="danger" onClick={() => eliminarDoc(id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </Alert>
      </Modal>
    </>
  );
};

export default BotonEliminar;
