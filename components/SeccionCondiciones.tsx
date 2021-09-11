import { Card, Container, Row } from "react-bootstrap";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHandHoldingMedical,
  faStarOfLife,
  faUsers,
  faViruses,
  faVirusSlash,
  faWeight,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Seccion.module.css";

interface Condicion {
  icono: IconDefinition;
  texto: string;
}

const condiciones: Condicion[] = [
  {
    icono: faUsers,
    texto: "Tener entre 18 y 65 Años",
  },
  {
    icono: faHandHoldingMedical,
    texto: "No deben tener antecedentes transfuncionales",
  },
  {
    icono: faWeight,
    texto: "Pesar mas de 50kg",
  },
  {
    icono: faViruses,
    texto:
      "Haber cursado la infeccion y que hallan pasado los 28 dias de recuperacion, contando con 2 pruebas negativas de COVID-19",
  },
  {
    icono: faVirusSlash,
    texto:
      "No poseer enfermedades prexistente como hepatitis, alguna neoplasia o enfermedades cardiovasculares",
  },
  {
    icono: faClinicMedical,
    texto: "No haber tenido abortos, ni antecedentes gestionales",
  },
];

const prepararCondicionParaRenderizar = (
  { icono, texto }: Condicion,
  index: number
): JSX.Element => {
  return (
    <Card key={index} style={{ border: "none" }}>
      <FontAwesomeIcon
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          fontSize: "4rem",
        }}
        icon={icono}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const condicionesARenderizar: JSX.Element[] = condiciones.map(
  prepararCondicionParaRenderizar
);

const SeccionCondicionesBasicas: React.FC = () => {
  return (
    <section id="section-condiciones" className={styles.Seccion}>
      <Container className={styles.Contenedor}>
        <h2 className={styles.Titulo}>Requisitos para ser donador</h2>
        <Row sm={1} md={3}>
          {condicionesARenderizar}
        </Row>
      </Container>
    </section>
  );
};

export default SeccionCondicionesBasicas;
