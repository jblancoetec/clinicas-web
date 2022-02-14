import { model, Schema, models, ObjectId } from "mongoose";
import bcrypt from "bcrypt";

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
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Ingrese una contraseña"],
  },
});

AdministradorSchema.methods.encryptPassword = async (password: string) => {
  const salt: string = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

AdministradorSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export default models.Administrador ||
  model("Administrador", AdministradorSchema);
