import { Container } from "react-bootstrap";
import styles from "./Home.module.css";
import Columna from "./components/Columna";

const Home = () => {
  return (
    <Container fluid className={styles.Contenedor}>
      <Columna
        titulo="Donadores"
        url="/gestion/donadores"
        descripcion="Información sobre donadores inscriptos"
        urlImagen="https://upload.wikimedia.org/wikipedia/commons/6/63/Mar%C3%ADa_Eugenia_Vidal_con_la_campa%C3%B1a_de_donaci%C3%B3n_voluntaria_de_sangre_%287396688818%29.jpg"
      />
      <Columna
        titulo="Administracion"
        url="/gestion/administradores"
        descripcion="Informacion sobre administradores inscriptos"
        urlImagen="https://www.coxblue.com/wp-content/uploads/2015/08/office_training.jpg"
      />
      <Columna
        titulo="Turnos"
        url="/gestion/turnos"
        descripcion="Turnos cargados en el sistema"
        urlImagen="https://p0.piqsels.com/preview/17/490/484/paper-business-document-office.jpg"
      />
    </Container>
  );
};

export default Home;
