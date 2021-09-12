import React, { useState } from "react";
import stylesSeccion from "../styles/Seccion.module.css";
import styles from "../styles/PreguntaSimple.module.css";
import { ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import { Pregunta } from "./Cuestionario";

interface PropsPreguntaSimple {
  pregunta: Pregunta;
  aprobarRespuesta: () => void;
}

const PreguntaSimple: React.FC<PropsPreguntaSimple> = ({
  pregunta,
  aprobarRespuesta,
}) => {
  const [equivocada, setEquivocada] = useState<boolean>(false);

  const mostrarJustificacion = () => setEquivocada(true);
  const ocultarJustifiacion = () => setEquivocada(false);

  return (
    <>
      <h4 className={stylesSeccion.Titulo}>{pregunta.texto}</h4>
      <div className={styles.Contenedor}>
        <ButtonGroup>
          <Button className={styles.BotonSi} onClick={aprobarRespuesta}>
            Si
          </Button>
          <Button className={styles.BotonNo} onClick={mostrarJustificacion}>
            No
          </Button>
        </ButtonGroup>
      </div>

      <Modal
        show={equivocada}
        onHide={ocultarJustifiacion}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Alert variant="danger" style={{ margin: "1rem" }}>
          {pregunta.recomendacion}
        </Alert>
      </Modal>
    </>
  );
};

export default PreguntaSimple;
