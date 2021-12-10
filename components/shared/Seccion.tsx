import styles from "./Seccion.module.css";
import { Container } from "react-bootstrap";
interface Props {
  children: React.ReactNode;
  titulo: string;
}
const Seccion = ({ children, titulo }: Props) => {
  return (
    <section className={styles.Seccion}>
      <Container className={styles.Contenedor}>
        <h2 className={styles.Titulo}>{titulo}</h2>
        {children}
      </Container>
    </section>
  );
};

export default Seccion;
