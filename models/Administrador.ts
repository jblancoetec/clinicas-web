import { model, Schema, models, ObjectId } from "mongoose";

export interface IAdministrador {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  _id: string;
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
  password: {
    type: String,
    require: [true, "Ingrese una contraseña"],
  },
});

export default models.Administrador ||
  model("Administrador", AdministradorSchema);
