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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Seccion.module.css";

type Condicion = {
  icono: IconDefinition;
  condicion: string;
};

const condiciones: Condicion[] = [
  {
    icono: faUsers,
    condicion: "Tener entre 18 y 65 Años",
  },
  {
    icono: faHandHoldingMedical,
    condicion: "No deben tener antecedentes transfuncionales",
  },
  {
    icono: faWeight,
    condicion: "Pesar mas de 50kg",
  },
  {
    icono: faViruses,
    condicion:
      "Haber cursado la infeccion y que hallan pasado los 28 dias de recuperacion, contando con 2 pruebas negativas de COVID-19",
  },
  {
    icono: faVirusSlash,
    condicion:
      "No poseer enfermedades prexistente como hepatitis, alguna neoplasia o enfermedades cardiovasculares",
  },
  {
    icono: faStarOfLife,
    condicion: "No haber tenido abortos, ni antecedentes gestionales",
  },
];

const condicionesARenderizar: JSX.Element[] = condiciones.map(
  ({ icono, condicion }, index) => {
    return (
      <Card key={index} style={{ border: "none" }}>
        <FontAwesomeIcon
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: "4rem",
            color: "var(--violeta)",
          }}
          icon={icono}
        />
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>{condicion}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
);

const SeccionCondicionesBasicas = (): JSX.Element => {
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
