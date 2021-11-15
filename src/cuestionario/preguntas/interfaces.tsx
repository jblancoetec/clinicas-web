export interface IPregunta {
  pregunta: string;
  recomendacion: string;
}

export interface ICuestionario {
  preguntasPorSi: IPregunta[];
  preguntasPorNo: IPregunta[];
}
