import React from "react";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faHospitalUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

type LinkFooter = {
  href: string;
  icon: IconDefinition;
  value: string;
};

const links: LinkFooter[] = [
  {
    href: "http://www.hospitaldeclinicas.uba.ar/",
    icon: faGlobe,
    value: "Pagina oficial del Hospital de Clinicas",
  },
  {
    href: "https://www.instagram.com/hospitaldeclinicasok/",
    icon: faInstagram,
    value: "Instagram oficial del Hospital de Clinicas",
  },
  {
    href: "https://www.google.com/maps/place/Hospital+de+Cl%C3%ADnicas+Jos%C3%A9+de+San+Mart%C3%ADn/@-34.5989536,-58.4021109,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca9474de07c3:0x6d168bee0e66f0b5!8m2!3d-34.5989536!4d-58.3999222",
    icon: faMap,
    value: "Av. Córdoba 2351 (C1120AAR) Ciudad Autónoma de Buenos Aires",
  },
  {
    href: "tel:5950-8000",
    icon: faPhone,
    value: "5950-8000 las 24 horas",
  },
  {
    href: "",
    icon: faHospitalUser,
    value: "Uso interno - Hospital de Clinicas.",
  },
];

const renderLinks: JSX.Element[] = links.map(({ href, icon, value }, index) => {
  return (
    <Nav.Item key={index}>
      <Nav.Link href={href} style={{ color: "black" }}>
        <FontAwesomeIcon
          style={{
            marginRight: "1rem",
          }}
          icon={icon}
        />
        {value}
      </Nav.Link>
    </Nav.Item>
  );
});

const Footer = (): JSX.Element => {
  return (
    <footer style={{ backgroundColor: "var(--gris)" }}>
      <Container>
        <Nav className="justify-content-center">{renderLinks}</Nav>
      </Container>
    </footer>
  );
};

export default Footer;
