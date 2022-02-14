import React from "react";
import styles from "./Pregunta.module.css";
import { Alert, Button, ButtonGroup, Modal } from "react-bootstrap";
import { useInterviewContext } from "../Entrevista";
import { Pregunta } from "../cuestionarios/interfaces";

const PreguntaPorSi = ({ pregunta, recomendacion }: Pregunta) => {
  const [recomendar, setRecomendar] = React.useState(false);
  const { siguientePregunta } = useInterviewContext();
  const respuestaNegativa = () => siguientePregunta();
  const respuestaAfirmativa = () => setRecomendar(true);
  return (
    <>
      <div className={styles.ContenedorPregunta}>
        <h4 className={styles.Pregunta}>{pregunta}</h4>
        <div className={styles.ContenedorBotones}>
          <ButtonGroup>
            <Button variant="light" onClick={respuestaAfirmativa}>
              Si
            </Button>
            <Button variant="light" onClick={respuestaNegativa}>
              No
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Modal show={recomendar} onHide={() => setRecomendar(false)}>
        <Alert variant="danger" className={styles.Alerta}>
          {recomendacion}
        </Alert>
      </Modal>
    </>
  );
};

export default PreguntaPorSi;
