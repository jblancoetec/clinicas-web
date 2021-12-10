import React, { useState } from "react";
import styles from "./PreguntaSimple.module.css";
import { ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import { Pregunta } from "../cuestionarios/Cuestionario";

interface Props {
  pregunta: Pregunta;
  aprobarRespuesta: () => void;
}

const PreguntaSimple = ({ pregunta, aprobarRespuesta }: Props) => {
  const [equivocada, setEquivocada] = useState<boolean>(false);

  const mostrarJustificacion = () => setEquivocada(true);
  const ocultarJustifiacion = () => setEquivocada(false);

  return (
    <>
      <h4
        style={{
          textAlign: "center",
          color: "var(--violeta)",
          margin: "1rem auto 2rem auto",
        }}
      >
        {pregunta.texto}
      </h4>
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
