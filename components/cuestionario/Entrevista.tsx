import styles from "./Entrevista.module.css";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert, Modal, Container, ProgressBar } from "react-bootstrap";

interface IContexto {
  siguientePregunta: () => void;
  agregarPregunta: (pregunta: ReactNode) => void;
}

export const InterviewContext = createContext<IContexto>({
  siguientePregunta: () => {},
  agregarPregunta: () => {},
});

export const useInterviewContext = () => useContext(InterviewContext);

interface Props {
  preguntas: ReactNode[];
}

const Entrevista = ({ preguntas }: Props) => {
  const [pregunta, ...resto] = preguntas;
  const [cuestionario, setCuestionario] = useState(resto);
  const [preguntaActual, setPreguntaActual] = useState<ReactNode>(pregunta);
  const [nivelCompletado, setNivelCompletado] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const siguientePregunta = () => {
    const [pregunta, ...resto] = cuestionario;
    setPreguntaActual(cuestionario.length > 0 ? pregunta : preguntaActual);
    setCuestionario(resto);
    setFinalizado(cuestionario.length === 0);
    setNivelCompletado(finalizado ? nivelCompletado : nivelCompletado + 1);
    setMostrarModal(finalizado);
  };

  const agregarPregunta = (pregunta: ReactNode) => {
    setCuestionario([...cuestionario, pregunta]);
  };

  const contexto: IContexto = {
    siguientePregunta,
    agregarPregunta,
  };

  return (
    <>
      <InterviewContext.Provider value={contexto}>
        <Container>
          <div>
            <h2>Formulario de aptitud</h2>
            <b>Estimado postulante:</b>
            <p>
              Ante todo le agradecemos su solidaria concurrencia y colaboración.
              Nuestra principal preocupación es proteger al receptor de su
              sangre, como también a Ud. mismo. Por lo tanto a veces nos vemos
              impedidos de aceptar una donación. Para saber si Ud. está en
              condiciones de donar, le rogamos contestar responsablemente el
              siguiente cuestionario confidencial.
            </p>
          </div>
          {preguntaActual}
          <div className={styles.ContenedorBarraDeProgreso}>
            <ProgressBar min={0} max={preguntas.length} now={nivelCompletado} />
          </div>
        </Container>
        <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
          <Alert variant="success" className={styles.MensajeExito}>
            Agradecemos el tiempo dedicado en completar la entrevista. Usted
            cumple con las condiciones minimas necesarias para ser donante. Te
            esperamos de lunes a sabado, de 8:00 a 12:00 horas, en Av. Cordoba
            2351, 3er piso. Podes reservar un turno, completando el{" "}
            <Alert.Link href="/registro">siguiente formulario.</Alert.Link>
          </Alert>
        </Modal>
      </InterviewContext.Provider>
    </>
  );
};

export default Entrevista;
