import mongoose from "mongoose";

const DonadorSchema = new mongoose.Schema({
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
  Tipo_Donador: {
    type: String,
    require: [true, "Ingrese el tipo de donación"],
  },
});

export default mongoose.models.Donador ||
  mongoose.model("Donador", DonadorSchema);
