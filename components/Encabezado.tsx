import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface Link {
  texto: string;
  href: string;
}

const links: Link[] = [
  {
    texto: "Agregar un nuevo administrador",
    href: "/#section-usuario",
  },
  {
    texto: "Información",
    href: "/#section-ley",
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

const prepararLinkParaRenderizar = (
  { href, texto }: Link,
  index: number
): JSX.Element => {
  return (
    <Nav.Link
      href={href}
      key={index}
      style={{ color: "white", textAlign: "center", cursor: "pointer" }}
    >
      {texto}
    </Nav.Link>
  );
};

const linksARenderizar: JSX.Element[] = links.map(prepararLinkParaRenderizar);

const Header: React.FC = () => {
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
              fontFamily: "var(--fuente)",
            }}
          >
            Inicio
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
