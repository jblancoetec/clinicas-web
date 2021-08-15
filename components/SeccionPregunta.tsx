import React, { useState } from "react";
import { Container, ButtonGroup, Button, Modal, Alert } from "react-bootstrap";
import stylesSection from "../styles/Seccion.module.css";
import stylesPregunta from "../styles/SeccionPregunta.module.css";

interface PropsPreguntaSimple {
  pregunta: string;
  justificacion: string;
}

const PreguntaSimple: React.FC<PropsPreguntaSimple> = (
  { pregunta, justificacion },
  { onChange }
) => {
  const [error, setError] = useState(false);
  const mostrarJustificacion = () => setError(true);
  const ocultarJustifiacion = () => setError(false);

  return (
    <>
      <h2 className={stylesSection.Titulo}>{pregunta}</h2>
      <div className={stylesPregunta.Contenedor}>
        <ButtonGroup>
          <Button className={stylesPregunta.BotonSi} onClick={() => onChange()}>
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
  const renderCuestionario: JSX.Element[] = [];
  const [pregunta, setPregunta] = useState(
    <PreguntaSimple
      {...cuestionario.shift()}
      onChange={() => {
        setPregunta(renderCuestionario.shift());
      }}
    />
  );
  return (
    <>
      <section className={stylesSection.Seccion}>
        <Container className={stylesSection.Contenedor}>{pregunta}</Container>
      </section>
    </>
  );
};

export default SectionPregunta;
