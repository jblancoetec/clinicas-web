import { model, Schema, models, ObjectId } from "mongoose";

export interface ITurno {
  paciente: ObjectId;
  fecha: Date;
  _id: ObjectId;
}

const TurnoSchema = new Schema<ITurno>({
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "Donador",
  },
  fecha: {
    type: Date,
  },
});

export default models.Turno || model("Turno", TurnoSchema);
