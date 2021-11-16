import React from "react";
import { Button, Container, Form, FormGroup, Row } from "react-bootstrap";

const FormAgregarDonador = () => {
  return (
    <section>
      <Container>
        <div
          style={{
            width: "auto",
            margin: "auto",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Editar donador</h2>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Row sm={1} md={3}>
              <FormGroup style={{ marginBottom: "1rem" }}>
                <Form.Label>*Nombre</Form.Label>
                <Form.Control type="text" placeholder="Por ejemplo: Juan" />
              </FormGroup>
              <FormGroup style={{ marginBottom: "1rem" }}>
                <Form.Label>*Apellido</Form.Label>
                <Form.Control type="text" placeholder="Por ejemplo: Perez" />
              </FormGroup>
              <FormGroup style={{ marginBottom: "1rem" }}>
                <Form.Label>*Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Por ejemplo: ejemplo@gmail.com"
                  id="email"
                  name="email"
                />
                <Form.Label>*Telefono</Form.Label>
                <Form.Control
                  type="telefono"
                  placeholder="Por ejemplo: 1122643094"
                  id="telefono"
                  name="telefono"
                />
                <Form.Label>*Tipo de donador</Form.Label>
                <Form.Control
                  type="tipo_donador"
                  id="tipo_donador"
                  name="tipo_donador"
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
export default FormAgregarDonador;
