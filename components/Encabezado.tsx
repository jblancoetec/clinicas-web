import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type LinkHeader = {
  texto: string;
  href: string;
};

const links: LinkHeader[] = [
  {
    texto: "¿Conocias la ley de donación de plasma?",
    href: "/#section-ley",
  },
  {
    texto: "¿Queres que te contactemos?",
    href: "/#section-contacto",
  },
  {
    texto: "Condiciones basicas para ser donador",
    href: "/#section-condiciones",
  },
  {
    texto: "Material para compartir",
    href: "/#section-material",
  },
];

const renderLinks: JSX.Element[] = links.map(({ texto, href }, index) => {
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

const Header = (): JSX.Element => {
  return (
    <header style={{}}>
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
            <Nav>{renderLinks}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
