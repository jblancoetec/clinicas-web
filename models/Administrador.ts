import { model, Schema, models, ObjectId } from "mongoose";

export interface IAdministrador {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  usuario: string;
  _id: ObjectId;
}

const AdministradorSchema: Schema = new Schema<IAdministrador>({
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
  usuario: {
    type: String,
    require: [true, "Ingrese el usuario"],
  },
});

export default models.Administrador ||
  model("Administrador", AdministradorSchema);
