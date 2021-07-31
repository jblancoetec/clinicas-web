import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import promoPrincipal from "../public/img/main_promo.png";
import imgdedo from "../public/img/imgdedo.png";
import imgedad from "../public/img/imgedad.png";
import imgembarazo from "../public/img/imgembarazo.png";
import imgenfermedad from "../public/img/imgenfermedad.png";
import imgpeso from "../public/img/imgpeso.png";
import imgtransfusion from "../public/img/imgtransfucion.png";

const imgs = [
  imgdedo,
  imgedad,
  imgembarazo,
  imgenfermedad,
  imgpeso,
  imgtransfusion,
];

export default function Index() {
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
                src={promoPrincipal}
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
      <section>
        <Container>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Condiciones basicas para ser donador
          </h2>
          <div className="row">
            {imgs.map((img, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4">
                  <div
                    style={{
                      width: "25%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Image src={img} alt="img" layout="responsive" />
                  </div>
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
