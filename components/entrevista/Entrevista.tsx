import React from "react";
import SeccionPregunta from "./SeccionPregunta";

const Entrevista = () => {
  return (
    <>
      <div>
        <h2>Formulario de aptitud</h2>
        <b>Estimado postulante:</b>
        <p>
          Ante todo le agradecemos su solidaria concurrencia y colaboración.
          Nuestra principal preocupación es proteger al receptor de su sangre,
          como también a Ud. mismo. Por lo tanto a veces nos vemos impedidos de
          aceptar una donación. Para saber si Ud. está en condiciones de donar,
          le rogamos contestar responsablemente el siguiente cuestionario
          confidencial.
        </p>
      </div>
      <SeccionPregunta />
    </>
  );
};

export default Entrevista;
