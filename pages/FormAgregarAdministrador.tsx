import React from "react";
import { Button, Container, Form, FormGroup, Row } from "react-bootstrap";
import stylesSeccion from "../styles/Seccion.module.css";

const FormAgregarAdministrador = () => {
  return (
    <section className={stylesSeccion.Seccion}>
      <Container className={stylesSeccion.Contenedor}>
        <div
          style={{
            width: "50rem",
            margin: "auto",
          }}
        >
          <h2 className={stylesSeccion.Titulo}>Agregar un nuevo usuario</h2>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          > <Row sm={1} md={3}>
          <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>*Nombre</Form.Label>
              <Form.Control type="text" placeholder="Por ejemplo: Juan" />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>*Nombre de usuario</Form.Label>
              <Form.Control type="text" placeholder="Por ejemplo: jperez" />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>*Apellido</Form.Label>
              <Form.Control type="text" placeholder="Por ejemplo: Perez" />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>*Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduzca una contraseña"
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>*Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
                <Form.Label>*Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Por ejemplo: ejemplo@gmail.com"
                  id="email"
                  name="email"
                />
              </FormGroup>
          </Row>
            

            <Button
              type="submit"
              style={{
                backgroundColor: "var(--violeta)",
              }}
            >
              Enviar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};
export default FormAgregarAdministrador;