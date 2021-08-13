import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import imgPromoPrincipal from "../public/img/promoprincipal.png";

export default function SectionPromoMain() {
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--violeta)",
        }}
      >
        <Container>
          <div
            className="row"
            style={{
              paddingBottom: "1rem",
            }}
          >
            <div
              className="d-none d-md-inline col-md-8"
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
            </div>
            <div
              className="col-sm-12 col-md-4"
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
              <a
                className="btn btn-outline-danger text-red btn-donar"
                href="/entrevista"
              >
                Animate a donar!!
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
