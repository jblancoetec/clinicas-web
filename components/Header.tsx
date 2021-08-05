import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type Link = {
  texto: string;
  href: string;
};

const links: Link[] = [
  {
    texto: "Conocias la ley de donacion de plasma",
    href: "#",
  },
  {
    texto: "Conocias la ley de donacion de plasma",
    href: "#",
  },
  {
    texto: "Conocias la ley de donacion de plasma",
    href: "#",
  },
];

const renderLinks = links.map(
  ({ texto, href }: Link, index: number): JSX.Element => {
    return (
      <Nav.Link
        href={href}
        key={index}
        style={{ color: "white", textAlign: "center" }}
      >
        {texto}
      </Nav.Link>
    );
  }
);
export default function Header(): JSX.Element {
  return (
    <header>
      <Navbar
        expand="lg"
        style={{
          background: "var(--violeta)",
        }}
        className="navbar-dark"
      >
        <Container style={{}}>
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
            className=" justify-content-end"
          >
            <Nav className="justify-content-end">{renderLinks}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
