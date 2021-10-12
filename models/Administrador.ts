import {model. Schema, Model, Document} from "mongoose";
interface IAdministrador extends Document{
nombre: string;
apellido: string;
email:string;
telefono: string;
usuario: string;
}
const AdministradorSchema:Schema = new Schema({
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
const Administrador: Model<IAdministrador> = model ('Administrador',AdministradorSchema)
export default mongoose.models.Administrador ||
  mongoose.model("Administrador", AdministradorSchema);

  