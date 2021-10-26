import { model, Schema, models, ObjectId } from "mongoose";

export interface ITurnos {
  paciente: ObjectId;   
  email: string; 
  fecha: Date;  
    
  }                                                 
  const TurnosSchema = new Schema<ITurnos>({
    paciente: {
      type: Schema.Types.ObjectId, 
      ref: 'Donador',
    },
    email: {
      type: String,
      required: [true, "Ingrese su correo electronico."],
    },
    fecha: {
      type : Date, 
    },
    
  });
  
  //const Donador : model <Donador> = model (donador, donadorescheme)
  
  export default models.Turnos || model("Turnos", TurnosSchema);
  