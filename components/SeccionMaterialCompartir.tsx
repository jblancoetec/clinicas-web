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

const material = [
  "https://i.ibb.co/0f6SVDQ/DONA.png",
  "https://i.ibb.co/DRGgC0v/2.png",
  "https://i.ibb.co/C6JqH9c/Eliam-Ana-1-1-Pasos-a-seguir-1.png",
  "https://i.ibb.co/W37N5jR/1.png",
  "https://i.ibb.co/1dV0nw8/2.png",
  "https://i.ibb.co/8st6wTL/Microsoft-Teams-image.png",
  "https://i.ibb.co/qYHRfRc/Microsoft-Teams-image-2.png",
];

const atrr: string = "&feature=emb_logo";

type linkSocialShare = {
  icon: IconDefinition;
  href: string;
};

const linksSocialShare: linkSocialShare[] = [
  {
    icon: faFacebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=`,
  },
  {
    icon: faWhatsapp,
    href: `https://api.whatsapp.com/send?text=`,
  },
  {
    icon: faTwitter,
    href: `https://twitter.com/home?status=`,
  },
];

const renderLinkSocialShare = (flayer: string): JSX.Element[] => {
  return linksSocialShare.map(({ icon, href }, index) => {
    return (
      <Nav.Item key={index}>
        <Nav.Link style={{ color: "black" }} href={href + flayer + atrr}>
          <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={icon} />
        </Nav.Link>
      </Nav.Item>
    );
  });
};

const renderMaterial: JSX.Element[] = material.map((flayer, index) => {
  return (
    <Card key={index} style={{ border: "none" }}>
      <Card.Img variant="top" src={flayer}></Card.Img>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Compartir</h3>
        <Nav>{renderLinkSocialShare(flayer)}</Nav>
      </div>
    </Card>
  );
});

const SectionMaterialCompartir = (): JSX.Element => {
  return (
    <section id="section-material" className={styles.Seccion}>
      <Container className={styles.Contenedor}>
        <h2 className={styles.Titulo}>Material para compartir</h2>
        <Row sm={1} md={3}>
          {renderMaterial}
        </Row>
      </Container>
    </section>
  );
};
export default SectionMaterialCompartir;
