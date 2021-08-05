import React from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const material = [
  "https://i.ibb.co/0f6SVDQ/DONA.png",
  "https://i.ibb.co/DRGgC0v/2.png",
  "https://i.ibb.co/C6JqH9c/Eliam-Ana-1-1-Pasos-a-seguir-1.png",
  "https://i.ibb.co/W37N5jR/1.png",
  "https://i.ibb.co/1dV0nw8/2.png",
  "https://i.ibb.co/8st6wTL/Microsoft-Teams-image.png",
  "https://i.ibb.co/qYHRfRc/Microsoft-Teams-image-2.png",
];

const renderMaterial = material.map((flayer, index) => {
  return (
    <Card key={index}>
      <Card.Img variant="top" src={flayer}></Card.Img>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Compartir</h3>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${flayer}&feature=emb_logo`}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${flayer}&feature=emb_logo`}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href={`https://twitter.com/home?status=${flayer}&feature=emb_logo`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </Card>
  );
});

export default function SectionMaterialCompartir() {
  return (
    <>
      <section>
        <Container>
          <h2>Material para compartir</h2>
          <Row sm={1} md={3}>
            {renderMaterial}
          </Row>
        </Container>
      </section>
    </>
  );
}
