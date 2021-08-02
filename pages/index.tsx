import React from "react";
import { Container } from "react-bootstrap";
import SectionPromoIndex from "../components/SectionPromoIndex";
import SectionCondicionesBasicas from "../components/SectionCondicionesBasicas";
import SectionLeyPlasma from "../components/SectionLeyPlasma";
import SectionFormContacto from "../components/SectionFormContacto";
export default function Index() {
  return (
    <>
      <SectionPromoIndex />
      <SectionCondicionesBasicas />
      <SectionLeyPlasma />
      <SectionFormContacto />
      <section>
        <Container>Material para compartir</Container>
      </section>
    </>
  );
}
