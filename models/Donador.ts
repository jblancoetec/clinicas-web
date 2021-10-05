import mongoose from "mongoose";
interface Donador extends Document{
  nombre:string;
  apellido:string;
  email:string;
  telefono:string;
  Tipo_Donador:string;
}


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
    type: String,
    required: [true, "Ingrese su numero telefonico."],
  },
  Tipo_Donador: {
    type: String,
    require: [true, "Ingrese el tipo de donación"],
  },
});

//const Donador : model <Donador> = model (donador, donadorescheme)

export default mongoose.models.Donador ||
  mongoose.model("Donador", DonadorSchema);
