import { model, Schema, models } from "mongoose";
export interface IDonador {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  tipo_donador: string;
}

const DonadorSchema = new Schema<IDonador>({
  nombre: {
    type: String,
    required: [true, "Ingrese su nombre."],
  },
  apellido: {
    type: String,
    required: [true, "Ingrese su apellido."],
  },
  email: {
    type: String,
    required: [true, "Ingrese su correo electronico."],
  },
  telefono: {
    type: String,
    required: [true, "Ingrese su numero telefonico."],
  },
  tipo_donador: {
    type: String,
    require: [true, "Ingrese el tipo de donación"],
  },
});

//const Donador : model <Donador> = model (donador, donadorescheme)

export default models.Donador || model("Donador", DonadorSchema);
