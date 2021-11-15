import { ICuestionario } from "./interfaces";
const Cuestionario: ICuestionario = {
  preguntasPorSi: [
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
  ],
  preguntasPorNo: [
    {
      pregunta: "¿Ha donado sangre en las últimas 8 semanas?",
      recomendacion: "",
    },
    {
      pregunta: "Sufrió algún inconveniente con posterioridad a la donación?",
      recomendacion: "",
    },
    {
      pregunta:
        "¿Lo han rechazado como donante de sangre o le dijeron que no puede donar?",
      recomendacion: "",
    },
    {
      pregunta: "Está tomando alguna medicación?",
      recomendacion: "",
    },
    {
      pregunta:
        "¿Ha padecido alguna enfermedad grave que exigió control médico periódico?",
      recomendacion: "",
    },
    {
      pregunta:
        "¿Ha padecido o padece enfermedades del corazón (infarto, angina de pecho, etc.)?",
      recomendacion: "",
    },
    {
      pregunta: "¿Ha recibido transfusiones de sangre?",
      recomendacion: "",
    },
  ],
};

export default Cuestionario;
