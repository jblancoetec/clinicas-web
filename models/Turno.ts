import { model, Schema, models, ObjectId } from "mongoose";

export interface ITurno {
  _id_paciente: string;
  fecha: Date;
  _id: string;
}

const TurnoSchema = new Schema<ITurno>({
  _id_paciente: {
    type: String,
    ref: "Donador",
  },
  fecha: {
    type: Date,
  },
});

export default models.Turno || model("Turno", TurnoSchema);
