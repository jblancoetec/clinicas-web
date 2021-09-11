import React from "react";
import { Card, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Seccion.module.css";

const urlsFlayers: string[] = [
  "https://i.ibb.co/0f6SVDQ/DONA.png",
  "https://i.ibb.co/DRGgC0v/2.png",
  "https://i.ibb.co/C6JqH9c/Eliam-Ana-1-1-Pasos-a-seguir-1.png",
  "https://i.ibb.co/W37N5jR/1.png",
  "https://i.ibb.co/1dV0nw8/2.png",
  "https://i.ibb.co/8st6wTL/Microsoft-Teams-image.png",
  "https://i.ibb.co/qYHRfRc/Microsoft-Teams-image-2.png",
];

interface linkRedSocial {
  icono: IconDefinition;
  urlRedSocial: string;
}

const linksRedesSociales: linkRedSocial[] = [
  {
    icono: faFacebook,
    urlRedSocial: `https://www.facebook.com/sharer/sharer.php?u=`,
  },
  {
    icono: faWhatsapp,
    urlRedSocial: `https://api.whatsapp.com/send?text=`,
  },
  {
    icono: faTwitter,
    urlRedSocial: `https://twitter.com/home?status=`,
  },
];

const agregarIconosRedesSociales = (urlFlayer: string): JSX.Element[] => {
  const complementoURL: string = "&feature=emb_logo";
  const construirIconoParaCompartirFlayer = (
    { icono, urlRedSocial }: linkRedSocial,
    index: number
  ): JSX.Element => {
    return (
      <Nav.Item key={index}>
        <Nav.Link
          style={{ color: "black" }}
          href={urlRedSocial + urlFlayer + complementoURL}
        >
          <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={icono} />
        </Nav.Link>
      </Nav.Item>
    );
  };
  return linksRedesSociales.map(construirIconoParaCompartirFlayer);
};

const prepararFlayerParaRenderizar = (
  urlFlayer: string,
  index: number
): JSX.Element => {
  return (
    <Card key={index} style={{ border: "none" }}>
      <Card.Img variant="top" src={urlFlayer}></Card.Img>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Compartir</h3>
        <Nav>{agregarIconosRedesSociales(urlFlayer)}</Nav>
      </div>
    </Card>
  );
};

const flayersARenderizar: JSX.Element[] = urlsFlayers.map(
  prepararFlayerParaRenderizar
);

const SectionMaterialCompartir: React.FC = () => {
  return (
    <section id="section-material" className={styles.Seccion}>
      <Container className={styles.Contenedor}>
        <h2 className={styles.Titulo}>Material para compartir</h2>
        <Row sm={1} md={3}>
          {flayersARenderizar}
        </Row>
      </Container>
    </section>
  );
};
export default SectionMaterialCompartir;
