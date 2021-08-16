export interface Pregunta {
  pregunta: string;
  recomendacion: string;
}

const Cuestionario: Pregunta[] = [
  {
    pregunta: "¿Sos mayor de 18 años?",
    recomendacion:
      "Lamentablemente, la edad minima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
  },
  {
    pregunta: "¿Pesas mas de 50kg?",
    recomendacion:
      "Lamentablemente, por cuestiones de salud, el peso minimo para poder donar es de 50kg",
  },
];

export default Cuestionario;
