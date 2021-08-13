import { Container, Row, Image } from "react-bootstrap";
import styles from "../styles/Section.module.css";

export default function SectionFormContacto(): JSX.Element {
  return (
    <>
      <section id="section-contacto" className={styles.Section}>
        <Container className={styles.Container}>
          <h2 className={styles.Title}> ¿Queres que te contactemos? </h2>
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
