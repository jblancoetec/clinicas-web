export interface Pregunta {
  texto: string;
  recomendacion: string;
}
const Cuestionario = {
  preguntasPorSi: [
    {
      texto: "¿Sos mayor de 18 años?",
      recomendacion:
        "Lamentablemente, la edad mínima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
    },
    {
      texto: "¿Pesas más de 50kg?",
      recomendacion:
        "Lamentablemente, por cuestiones de salud, el peso mínimo para poder donar es de 50kg",
    },
  ],
  preguntasPorNo: [
    {
      texto: "¿Ha donado sangre en las últimas 8 semanas?",
      recomendacion: "",
    },
    {
      texto: "Sufrió algún inconveniente con posterioridad a la donación?",
      recomendacion: "",
    },
    {
      texto:
        "¿Lo han rechazado como donante de sangre o le dijeron que no puede donar?",
      recomendacion: "",
    },
    {
      texto: "Está tomando alguna medicación?",
      recomendacion: "",
    },
    {
      texto:
        "¿Ha padecido alguna enfermedad grave que exigió control médico periódico?",
      recomendacion: "",
    },
    {
      texto:
        "¿Ha padecido o padece enfermedades del corazón (infarto, angina de pecho, etc.)?",
      recomendacion: "",
    },
    {
      texto: "¿Ha recibido transfusiones de sangre?",
      recomendacion: "",
    },
  ],
};

export default Cuestionario;
