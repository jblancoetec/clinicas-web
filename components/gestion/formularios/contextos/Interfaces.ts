import { IAdministrador } from "../../../../models/Administrador";
import { IDonador } from "../../../../models/Donador";
import { ITurno } from "../../../../models/Turno";

export interface IApi {
  urlDelete: string;
  urlGet: string;
  urlPost: string;
  urlPut: string;
}

export type TDoc = IAdministrador | IDonador | ITurno;
