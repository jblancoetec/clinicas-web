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
  preguntasPorNo: [],
};

export default Cuestionario;
