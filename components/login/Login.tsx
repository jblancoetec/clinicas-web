import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Image,
} from "react-bootstrap";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

interface IDatoLogin {
  label: string;
  placeholder: string;
  type: string;
  id: "email" | "password";
}

interface FormDataLogin {
  email: string;
  password: string;
}

const datosParaLogin: IDatoLogin[] = [
  {
    label: "Correo electrónico",
    placeholder: "Ingrese su correo electrónico",
    type: "email",
    id: "email",
  },
  {
    label: "Contraseña",
    placeholder: "Ingrese su contraseña",
    type: "password",
    id: "password",
  },
];

const Login = ({ errors }: { errors: boolean }) => {
  const { register, handleSubmit } = useForm<FormDataLogin>();

  const login = async (data: FormDataLogin) => {
    await signIn("local", {
      provider: "local",
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  };

  return (
    <Container className={styles.Contendor}>
      <div className={styles.Marco}>
        <h2 className={styles.Titulo}>Iniciar sesion</h2>
        <div>
          <Image src="/clinicLogo.png" alt="logo" className={styles.Logo} />
        </div>

        <Form className={styles.Formulario} onSubmit={handleSubmit(login)}>
          {datosParaLogin.map((dato, index) => (
            <FormGroup className={styles.FormGroup} key={index}>
              <Form.Label>{dato.label}</Form.Label>
              <Form.Control
                placeholder={dato.placeholder}
                type={dato.type}
                id={dato.id}
                required
                {...register(dato.id)}
              />
            </FormGroup>
          ))}
          <Button type="submit" className={styles.BotonSubmit}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.Icono} />
          </Button>

          {errors && (
            <Alert
              variant="danger"
              style={{
                marginTop: "1rem",
              }}
            >
              Su correo electrónico o contraseña son incorrectos. Por favor,
              vuelva a intentarlo o comuniquece con el administrador del
              sistema.
            </Alert>
          )}
        </Form>
      </div>
    </Container>
  );
};
export default Login;
