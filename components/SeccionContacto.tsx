import { Container, Row, Image } from "react-bootstrap";
import styles from "../styles/Seccion.module.css";

export default function SectionFormContacto(): JSX.Element {
  return (
    <>
      <section id="section-contacto" className={styles.Seccion}>
        <Container className={styles.Contenedor}>
          <h2 className={styles.Titulo}> ¿Queres que te contactemos? </h2>
          <Row md={2}>
            <div>Forumulario a crear cuando se plantee la api</div>
            <Image
              src="./img/promodonar2.png"
              alt="imagen"
              thumbnail
              style={{
                border: "none",
              }}
            />
          </Row>
        </Container>
      </section>
    </>
  );
}
