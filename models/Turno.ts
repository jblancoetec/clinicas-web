import { model, Schema, models, ObjectId } from "mongoose";

export interface ITurno {
  paciente: ObjectId;   
  email: string; 
  fecha: Date;  
    
  }                                                 
  const TurnoSchema = new Schema<ITurno>({
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
  
  export default models.Turno || model("Turnos", TurnoSchema);
  