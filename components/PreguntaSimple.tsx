import React, { useState } from "react";
import stylesSeccion from "../styles/Seccion.module.css";
import styles from "../styles/PreguntaSimple.module.css";
import { ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import { Pregunta } from "./Cuestionario";

export interface PropsPreguntaSimple {
  pregunta: Pregunta;
  pasarPregunta?: () => void;
}

const PreguntaSimple: React.FC<PropsPreguntaSimple> = ({
  pregunta,
  pasarPregunta,
}: PropsPreguntaSimple): JSX.Element => {
  const [negada, setNegada] = useState(false);

  const mostrarJustificacion = () => setNegada(true);
  const ocultarJustifiacion = () => setNegada(false);

  return (
    <>
      <h4 className={stylesSeccion.Titulo}>{pregunta.pregunta}</h4>
      <div className={styles.Contenedor}>
        <ButtonGroup>
          <Button className={styles.BotonSi} onClick={pasarPregunta}>
            Si
          </Button>
          <Button className={styles.BotonNo} onClick={mostrarJustificacion}>
            No
          </Button>
        </ButtonGroup>
      </div>

      <Modal
        show={negada}
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
