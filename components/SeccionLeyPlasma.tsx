import { Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import React from "react";
import styles from "../styles/Seccion.module.css";

const SeccionLeyPlasma: React.FC = (): JSX.Element => {
  return (
    <>
      <section id="section-ley" className={styles.Seccion}>
        <Container className={styles.Contenedor}>
          <h2 className={styles.Titulo}>
            Informacion 
          </h2>
          <Row md={2}>
            <div>
              <Image
                style={{ border: "none" }}
                src="https://i.ibb.co/DRGgC0v/2.png"
                alt="imagen"
                thumbnail
              />
            </div>
            <div>
              <p>
                La ley de donación de plasma dice que los trabajadores tendrán
                derecho a dos días de descanso por cada donación de plasma que
                realicen.
              </p>
              <p>
                El texto establece expresamente que la licencia para los
                trabajadores “no podrá implicar afectación salarial alguna,
                descuentos, ni la pérdida del presentismo o cualquier otro
                beneficio laboral o adicional salarial que perciba”.
              </p>
              <p>
                La nueva norma también reconoce a los donantes como &quote;
                ciudadanos solidarios destacados de la República Argentina
                &quote; y ordena garantizar el traslado de aquellos pacientes
                recuperados de covid-19, aptos para ser donantes de plasma y que
                no tengan los medios para realizarlo.
              </p>
              <p>
                Con la medida, se creó además un Registro Nacional de Pacientes
                Recuperados de covid-19 Donantes de Plasma, cuya información
                deberá resguardarse en cumplimiento de la ley 25.326 de
                protección de datos personales. El establece que se fomentará la
                capacitación de los equipos de salud sobre el procedimiento para
                la donación de plasma; se propenderá al desarrollo de
                actividades de investigación en la temática y se asegurará el
                acceso a la información sobre donación de plasma de pacientes
                recuperados de covid-19.
              </p>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SeccionLeyPlasma;
