import { Container } from "react-bootstrap";
import Image from "next/image";
import promodonar2 from "../public/img/promodonar2.png";

export default function SectionFormContacto() {
  return (
    <>
      <section>
        <Container>
          <h2> ¿Queres que te contactemos? </h2>
          <div className="row">
            <div className="col-md-6">
              Forumulario a crear cuando se plantee la api
            </div>
            <div className="col-md-6">
              <Image src={promodonar2} alt="imagen" layout="responsive" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
