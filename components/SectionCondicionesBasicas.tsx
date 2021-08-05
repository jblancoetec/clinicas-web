import { Card, Container, Row } from "react-bootstrap";
import React from "react";

type Condicion = {
  icono: string;
  condicion: string;
};

const condiciones: Condicion[] = [
  {
    icono: "/img/imgdedo.png",
    condicion: "condicion",
  },
  {
    icono: "/img/imgedad.png",
    condicion: "condicion",
  },
  {
    icono: "/img/imgembarazo.png",
    condicion: "condicion",
  },
  {
    icono: "/img/imgenfermedad.png",
    condicion: "condicion",
  },
  {
    icono: "/img/imgpeso.png",
    condicion: "condicion",
  },
  {
    icono: "/img/imgtransfucion.png",
    condicion: "condicion",
  },
];
const renderCondiciones = condiciones.map(
  ({ icono, condicion }: Condicion, index: number): JSX.Element => {
    return (
      <Card key={index}>
        <Card.Img variant="top" src={icono}></Card.Img>
        <Card.Body>
          <Card.Text>{condicion}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
);

export default function SectionCondicionesBasicas(): JSX.Element {
  return (
    <section>
      <Container>
        <h2>Condiciones basicas para ser donador</h2>
        <Row sm={1} md={3}>
          {renderCondiciones}
        </Row>
      </Container>
    </section>
  );
}
