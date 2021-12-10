/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Icono from "../components/IconoRequisito";
import { IIconoRequisito } from "../components/IconoRequisito";
import Flayer from "../components/Flayer";
import { IFlayer } from "../components/Flayer";
import {
  faHeartbeat,
  faTintSlash,
  faUserClock,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

const condiciones: IIconoRequisito[] = [
  {
    icono: faUserClock,
    condicion: "Tener entre 18 y 65 años",
  },
  {
    icono: faTintSlash,
    condicion: "Haber transcurrido ocho semanas desde su última donación",
  },
  {
    icono: faWeight,
    condicion: "Pesar al menos 50kg",
  },
  {
    icono: faHeartbeat,
    condicion: "No padecer o haber padecido enfermedades cardiacas",
  },
];

const flayers: IFlayer[] = [
  {
    imagen: "https://i.ibb.co/TvSrgV2/fsangre5sl.jpg",
    filas: 2,
  },
  {
    imagen: "https://i.ibb.co/NtrnwZ9/fsangre4ss.png",
    posicion: "top left",
  },
  {
    imagen: "https://i.ibb.co/74xwTFQ/fsangre1ss.jpg",
    posicion: "top left",
  },
  {
    imagen: "https://i.ibb.co/T1x3qg1/fsangre2ss.png",
  },
  {
    imagen: "https://i.ibb.co/sC7VSP4/fsangre3ls.jpg",
    columnas: 2,
    posicion: "top left",
  },
];
const Home = () => {
  return (
    <div>
      <div className={styles.encabezado}>
        <div className={styles.textoheader}>
          <Link href="/cuestionario">
            <a
              className={`btn ${styles.boton}`}
              style={{
                backgroundColor: "var(--amarillo-plasma)",
              }}
            >
              ¡Quiero donar!
            </a>
          </Link>
        </div>
      </div>

      <Container className={styles.contenedor}>
        <h2 className={styles.titulo}>Requisitos para ser donante</h2>
        <Row
          className={`justify-content-xs-center ${styles.Iconos} `}
          style={{
            color: "var(--amarillo-plasma)",
          }}
        >
          {condiciones.map((condicion, index) => (
            <Col key={index}>
              <Icono {...condicion} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className={styles.contenedor}>
        <h2 className={styles.titulo}>Ayudanos a difundir</h2>
        <div className={styles.Flayers}>
          {flayers.map((flayer, index) => (
            <Flayer key={index} {...flayer} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
