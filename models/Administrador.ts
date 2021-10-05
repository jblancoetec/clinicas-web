import mongoose from "mongoose";

const AdministradorSchema = new mongoose.Schema({
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
    type: Number,
    required: [true, "Ingrese su numero telefonico."],
  },
  usuario: {
    type: String,
    require: [true, "Ingrese el usuario"],
  },
});

export default mongoose.models.Administrador ||
  mongoose.model("Administrador", AdministradorSchema);
