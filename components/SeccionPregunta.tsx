import React, { useState } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  Modal,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import stylesSeccion from "../styles/Seccion.module.css";
import PreguntaSimple from "./PreguntaSimple";
import Cuestionario, { Pregunta } from "./Cuestionario";

const cantidadPreguntas: number = Cuestionario.length;

const SeccionPregunta: React.FC = () => {
  const [idPregunta, setIdPregunta] = useState<number>(0);
  const [finalizado, setFinalizado] = useState<boolean>(false);

  const pasarPregunta = () => {
    const nextIdPregunta = Math.min(cantidadPreguntas - 1, idPregunta + 1);
    setIdPregunta(nextIdPregunta);
    setFinalizado(idPregunta + 1 >= cantidadPreguntas);
  };

  const construirPreguntaParaRenderizar = (pregunta: Pregunta): JSX.Element => {
    return (
      <PreguntaSimple pregunta={pregunta} aprobarRespuesta={pasarPregunta} />
    );
  };

  const pregunta = construirPreguntaParaRenderizar(Cuestionario[idPregunta]);

  return (
    <>
      <section className={stylesSeccion.Seccion}>
        <Container className={stylesSeccion.Contenedor}>
          {pregunta}
          <ProgressBar
            now={(idPregunta / cantidadPreguntas) * 100}
            label={`${(idPregunta / cantidadPreguntas) * 100}%`}
            style={{ marginTop: "3rem", backgroundColor: "var (--violeta)" }}
          />
        </Container>
      </section>

      <Modal
        show={finalizado}
        onHide={() => setFinalizado(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Alert
          variant="success"
          style={{ margin: "1rem", textAlign: "center" }}
        >
          Agradecemos el tiempo dedicado en completar la entrevista. Si te
          interesa ser donante, te esperamos de lunes a sabado, 8hs a 12hs, en
          Hemoterapia, Av. Cordoba 2351, 3er piso. Si queres que te contactemos,
          podes completar el{" "}
          <Alert.Link href="/contacto">siguiente formulario</Alert.Link>.
        </Alert>
      </Modal>
    </>
  );
};

export default SeccionPregunta;
