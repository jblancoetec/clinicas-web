import { Container } from "react-bootstrap";
import Image from "next/image";
import imgdedo from "../public/img/imgdedo.png";
import imgedad from "../public/img/imgedad.png";
import imgembarazo from "../public/img/imgembarazo.png";
import imgenfermedad from "../public/img/imgenfermedad.png";
import imgpeso from "../public/img/imgpeso.png";
import imgtransfusion from "../public/img/imgtransfucion.png";

const condiciones = [
  {
    icono: imgdedo,
    condicion: "condicion",
  },
  {
    icono: imgedad,
    condicion: "condicion",
  },
  {
    icono: imgembarazo,
    condicion: "condicion",
  },
  {
    icono: imgenfermedad,
    condicion: "condicion",
  },
  {
    icono: imgpeso,
    condicion: "condicion",
  },
  {
    icono: imgtransfusion,
    condicion: "condicion",
  },
];
export default function SectionCondicionesBasicas() {
  return (
    <>
      <section>
        <Container>
          <h2>Condiciones basicas para ser donador</h2>
          <div className="row">
            {condiciones.map(({ icono, condicion }, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4">
                  <div
                    style={{
                      width: "25%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Image src={icono} alt="img" layout="responsive" />
                  </div>
                  <p>{condicion}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
