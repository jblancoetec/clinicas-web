export interface FormDataAdministrador {
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
}

export interface FormDataDonador {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  tipo?: string;
}

export type FormDataDonadorConTurno = FormDataDonador & {
  fecha?: string;
};

export interface FormDataTurno {
  _id_paciente: string;
  fecha?: Date;
}

export type FormDataDoc =
  | FormDataAdministrador
  | FormDataDonador
  | FormDataTurno;
