import { Pregunta } from "./interfaces";
import PreguntaPorSi from "../components/PreguntaPorSi";
import PreguntaPorNo from "../components/PreguntaPorNo";
import { ReactNode } from "react";
const preguntasPorSi: Pregunta[] = [
  {
    pregunta: "¿Sos mayor de 18 años?",
    recomendacion:
      "Lamentablemente, la edad mínima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
  },
  {
    pregunta: "¿Pesas más de 50kg?",
    recomendacion:
      "Lamentablemente, por cuestiones de salud, el peso mínimo para poder donar es de 50kg",
  },
];
const preguntasPorNo: Pregunta[] = [
  {
    pregunta: "¿Ha donado sangre en las últimas 8 semanas?",
    recomendacion:
      "Es importante tomarse un tiempo. Si donaste sangre en las últimas 8 semanas, no necesitas donar",
  },
  {
    pregunta: "Sufrió algún inconveniente con posterioridad a la donación?",
    recomendacion:
      "Es importante que te cuides. Consulta con tu médico para conocer más detalles acerca de lo que te paso y saber si es posible donar",
  },
  {
    pregunta:
      "¿Lo han rechazado como donante de sangre o le dijeron que no puede donar?",
    recomendacion:
      "Todo tiene un porque. Podemos entender que no puedas donar debido a algo que no esta dentro de tu control",
  },
  {
    pregunta: "Está tomando alguna medicación?",
    recomendacion:
      "En algunos casos, puedo ser contraproducente donar sangre mientras esta en tratamiento o bajo alguna medicación",
  },
  {
    pregunta:
      "¿Ha padecido alguna enfermedad grave que exigió control médico periódico?",
    recomendacion:
      "En algunos casos, puedo ser contraproducente donar sangre mientras esta en tratamiento o bajo alguna medicación",
  },
  {
    pregunta:
      "¿Ha padecido o padece enfermedades del corazón (infarto, angina de pecho, etc.)?",
    recomendacion:
      "Es importante que te cuides. Donar sangre bajo tu condición, puede ocacionarte mas de un problema",
  },
  {
    pregunta: "¿Ha recibido transfusiones de sangre?",
    recomendacion:
      "Si has recibido transfusiones de sangre, no necesitas donar",
  },
];

const ComponentesDePreguntasPorNo: ReactNode[] = preguntasPorNo.map(
  (pregunta, index) => <PreguntaPorNo key={index} {...pregunta} />
);

const ComponentesDePreguntasPorSi: ReactNode[] = preguntasPorSi.map(
  (pregunta, index) => <PreguntaPorSi key={index} {...pregunta} />
);

const Cuestionario: ReactNode[] = [
  ...ComponentesDePreguntasPorSi,
  ...ComponentesDePreguntasPorNo,
];

export default Cuestionario;
