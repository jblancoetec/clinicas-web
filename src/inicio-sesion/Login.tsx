import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Image,
} from "react-bootstrap";

import stylesSeccion from "../shared/Seccion.module.css";

const login = () => {
  return (
    <section className={stylesSeccion.Seccion}>
      <Container className={stylesSeccion.Contenedor}>
        <div
          style={{
            width: "30rem",
            margin: "auto",
          }}
        >
          <h2 className={stylesSeccion.Titulo}>Iniciar Sesion</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="clinicLogo.png"
              thumbnail
              alt="logo del hospital de clinica"
              style={{
                width: "30rem",
                border: "none",
              }}
            />
          </div>

          <Container>
            <Row>
              <Col xs={6} md={4}></Col>
            </Row>
          </Container>

          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su usuario" />
            </FormGroup>
            <FormGroup style={{ marginBottom: "1rem" }}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </FormGroup>
            <Button
              type="submit"
              style={{
                backgroundColor: "var(--violeta)",
              }}
            >
              Iniciar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};
export default login;
