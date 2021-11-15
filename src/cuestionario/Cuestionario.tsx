import { Row, Col, Container, Button, ProgressBar } from "react-bootstrap";
import { ICuestionario } from "./preguntas/interfaces";
import styles from "./Cuestionario.module.css";
interface Props {
  cuestionario: ICuestionario;
}
const Cuestionario = ({ cuestionario }: Props) => {
  return (
    <Container className={styles.Contenedor}>
      <Row className={`justify-content-md-center ${styles.Fila}`}>
        <Col sm={12} md={9} className={styles.Col}>
          <div>
            Por favor, leé detenidamente las siguientes preguntas y respondé con
            total sinceridad. Este formulario no excluye la entrevista personal
            y confidencial al momento de presentarse a donar. Luego de completar
            el formulario podrás elegir un centro de donación y agendar tu
            turno.
          </div>
          <div className={styles.ContenedorPregunta}>
            <h4 className={styles.Pregunta}>Pregunta</h4>
            <div className={styles.Botones}>
              <Button variant="primary">Si</Button>
              <Button variant="secondary">No</Button>
            </div>
          </div>
        </Col>
        <Col sm={12} md={9}>
          <ProgressBar now={50} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cuestionario;
