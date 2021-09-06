import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type LinkHeader = {
  texto: string;
  href: string;
};

const links: LinkHeader[] = [
  {
    texto: "Información",
    href: "/#section-ley",
  },
  {
    texto: "Formulario",
    href: "/#section-contacto",
  },
  {
    texto: "Requisitos para ser donador",
    href: "/#section-condiciones",
  },
  {
    texto: "Compartir",
    href: "/#section-material",
  },
];

const linksARenderizar: JSX.Element[] = links.map(({ texto, href }, index) => {
  return (
    <Nav.Link
      href={href}
      key={index}
      style={{ color: "white", textAlign: "center", cursor: "pointer" }}
    >
      {texto}
    </Nav.Link>
  );
});

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Navbar
        expand="lg"
        style={{
          background: "var(--violeta)",
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              color: "white",
              fontFamily: "var(--fuente-texto)",
            }}
          >
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "#a38bca",
              fontSize: "16px",
              border: "none",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end"
          >
            <Nav>{linksARenderizar}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
