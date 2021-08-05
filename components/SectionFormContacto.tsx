import { Container, Row, Image } from "react-bootstrap";

export default function SectionFormContacto(): JSX.Element {
  return (
    <>
      <section>
        <Container>
          <h2> ¿Queres que te contactemos? </h2>
          <Row md={2}>
            <div>Forumulario a crear cuando se plantee la api</div>
            <Image
              src="./img/promodonar2.png"
              alt="imagen"
              thumbnail
              style={{
                border: "none",
              }}
            />
          </Row>
        </Container>
      </section>
    </>
  );
}
