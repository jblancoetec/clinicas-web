import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Seccion.module.css";
import SeccionPregunta from "../components/SeccionPregunta";

const entrevista = (): JSX.Element => {
  return (
    <>
      <section className={styles.Seccion}>
        <Container className={styles.Contenedor}>
          <h2 className={styles.Titulo}>Formulario de aptitud</h2>
          <h5>Estimado donante:</h5>
          <p>
            Ante todo le agradecemos su solidaria concurrencia y colaboración.
            Nuestra principal preocupación es proteger al receptor de su sangre,
            como también a Ud. mismo. Por lo tanto a veces nos vemos impedidos
            de aceptar una donación. Para saber si Ud. está en condiciones de
            donar, le rogamos contestar responsablemente el siguiente
            cuestionario confidencial. Por favor, tenga en cuenta que el
            objetivo de este cuestionario al que Ud. se somete voluntariamente,
            no es discriminatorio. Tratamos de hacerle comprender que si Ud.
            estuvo expuesto a situaciones de riesgo que internacionalmente son
            consideradas como posibles causas de contraer enfermedades
            transmisibles por sangre, no debería donar.
          </p>
          <p>
            Resolución 1507-08-09/2015 Normas Técnicas y Administrativas de
            Hemoterapia. Modificación de la Resolución 797/2013.
          </p>
        </Container>
      </section>
      <SeccionPregunta />
    </>
  );
};

export default entrevista;
