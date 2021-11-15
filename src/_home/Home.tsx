import { Container } from "react-bootstrap";
import styles from "./Home.module.css";
import Columna from "./components/Columna";

const _Home = () => {
  return (
    <Container fluid className={styles.Contenedor}>
      <Columna
        mensaje="SANGRE"
        urlImagen="https://upload.wikimedia.org/wikipedia/commons/6/63/Mar%C3%ADa_Eugenia_Vidal_con_la_campa%C3%B1a_de_donaci%C3%B3n_voluntaria_de_sangre_%287396688818%29.jpg"
        urlInformacion="/"
        urlFormularioEvaluacion="/quieroDonar"
      />
      <Columna
        mensaje="PLASMA"
        urlImagen="https://live.staticflickr.com/2808/33081727711_c35b1840d7_h.jpg"
        urlInformacion="/"
        urlFormularioEvaluacion="/quieroDonar"
      />
      <Columna
        mensaje="PLAQUETAS"
        urlImagen="https://upload.wikimedia.org/wikipedia/commons/8/80/Donaci%C3%B3n_sangu%C3%ADnea_por_aferesis.jpg"
        urlInformacion="/"
        urlFormularioEvaluacion="/quieroDonar"
      />
    </Container>
  );
};

export default _Home;
