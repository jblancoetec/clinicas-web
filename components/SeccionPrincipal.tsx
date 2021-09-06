import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import imgPromoPrincipal from "../public/img/promoprincipal.png";

const SeccionPrincipal: React.FC = (): JSX.Element => {
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--violeta)",
        }}
      >
        <Container>
          <Row
            style={{
              paddingBottom: "1rem",
            }}
          >
            <Col
              md={8}
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Image
                src={imgPromoPrincipal}
                alt="Promo principal"
                layout="responsive"
              />
            </Col>
            <Col
              sm={12}
              md={4}
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <h1 style={{ color: "white" }}>
                Yo <span style={{ color: "var(--amarillo)" }}>DONO</span>
              </h1>
              <h1 style={{ color: "white" }}>
                Vos <span style={{ color: "var(--amarillo)" }}>DONAS</span>
              </h1>
              <h1 style={{ color: "white" }}>
                El/Ella <span style={{ color: "var(--amarillo)" }}>VIVE</span>
              </h1>
              <Link href="/entrevista">
                <a className="btn active btn-outline-danger text-white ">
                  ¡Animate a donar!
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SeccionPrincipal;
