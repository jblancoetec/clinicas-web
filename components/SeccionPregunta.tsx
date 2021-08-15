import React, { useState } from "react";
import { Container, ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import Link from "next/link";
import stylesSection from "../styles/Seccion.module.css";
import stylesPregunta from "../styles/SeccionPregunta.module.css";

interface PropsPreguntaSimple {
  pregunta: string;
  justificacion: string;
  clickSi?: () => void;
}

const PreguntaSimple: React.FC<PropsPreguntaSimple> = ({
  pregunta,
  justificacion,
  clickSi,
}) => {
  const [error, setError] = useState(false);
  const mostrarJustificacion = () => setError(true);
  const ocultarJustifiacion = () => setError(false);

  return (
    <>
      <h2 className={stylesSection.Titulo}>{pregunta}</h2>
      <div className={stylesPregunta.Contenedor}>
        <ButtonGroup>
          <Button className={stylesPregunta.BotonSi} onClick={clickSi}>
            Si
          </Button>
          <Button
            className={stylesPregunta.BotonNo}
            onClick={mostrarJustificacion}
          >
            No
          </Button>
        </ButtonGroup>
      </div>

      <Modal
        show={error}
        onHide={ocultarJustifiacion}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Alert variant="danger" style={{ margin: "1rem" }}>
          {justificacion}
        </Alert>
      </Modal>
    </>
  );
};

const cuestionario: PropsPreguntaSimple[] = [
  {
    pregunta: "¿Sos mayor de 18 años?",
    justificacion:
      "Lamentablemente, la edad minima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
  },
  {
    pregunta: "¿Pesas mas de 50kg?",
    justificacion:
      "Lamentablemente, por cuestiones de salud, el peso minimo para poder donar es de 50kg",
  },
];

const SectionPregunta = () => {
  const [idPregunta, setIdPregunta] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const siguiente = () => {
    const nextIdPregunta = Math.min(cuestionario.length - 1, idPregunta + 1);
    setIdPregunta(nextIdPregunta);
    setFinalizado(idPregunta + 1 >= cuestionario.length);
  };
  const renderCuestionario: JSX.Element[] = cuestionario.map(
    (pregunta, index) => {
      pregunta.clickSi = siguiente;
      return <PreguntaSimple {...pregunta} key={index} />;
    }
  );

  return (
    <>
      <section className={stylesSection.Seccion}>
        <Container className={stylesSection.Contenedor}>
          {renderCuestionario[idPregunta]}
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

export default SectionPregunta;
