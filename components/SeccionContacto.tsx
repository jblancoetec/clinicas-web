import React from "react";
import {
  Container,
  Row,
  Image,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import styles from "../styles/Seccion.module.css";

const SeccionContacto: React.FC = (): JSX.Element => {
  return (
    <>
      <section id="section-contacto" className={styles.Seccion}>
        <Container className={styles.Contenedor}>
          <h2 className={styles.Titulo}> ¿Queres que te contactemos? </h2>
          <Row md={2}>
            <Form>
              <FormGroup style={{ marginBottom: "1rem" }}>
                <Form.Label>Tipo de donador</Form.Label>
                <Form.Select>
                  <option value="Donador de sangre">Donador de sangre</option>
                  <option value="Donador de plasma">Donador de plasma</option>
                </Form.Select>
              </FormGroup>
              <Form.Group style={{ marginBottom: "1rem" }}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Por ejemplo: Juan"
                  id="nombre"
                  name="nombre"
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: "1rem" }}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Por ejemplo: Perez"
                  id="apellido"
                  name="apellido"
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: "1rem" }}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="(Código de área) Número"
                  id="telefono"
                  name="telefono"
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: "1rem" }}>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Por ejemplo: jperez@gmail.com"
                  id="email"
                  name="email"
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "var(--violeta)" }}
              >
                Enviar
              </Button>
            </Form>
            <Image
              src="https://i.ibb.co/0f6SVDQ/DONA.png"
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
};

export default SeccionContacto;
