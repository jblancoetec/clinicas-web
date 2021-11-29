import { Button, Container, Form, FormGroup, Image } from "react-bootstrap";

import styles from "./Login.module.css";
import router from "next/router";
import { useRef } from "react";

const Login = () => {
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <Container className={styles.Contendor}>
      <div className={styles.Marco}>
        <h2 className={styles.Titulo}>Iniciar sesion</h2>
        <div>
          <Image src="clinicLogo.png" alt="logo" className={styles.Logo} />
        </div>

        <Form className={styles.Formulario} action="/api/Login/login">
          <FormGroup className={styles.CampoDeTexto}>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              name="user"
              placeholder="Ingrese su usuario"
            />
          </FormGroup>
          <FormGroup className={styles.CampoDeTexto}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="pass"
              placeholder="Ingrese su contraseña"
            />
          </FormGroup>

          <div className={styles.Boton}>
            <Button type="submit">Iniciar</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
