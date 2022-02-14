import { model, Schema, models } from "mongoose";

export interface ITurno {
  _id_donador: string;
  nombre: string;
  fecha: Date;
  _id: string;
}

const TurnoSchema = new Schema<ITurno>({
  _id_donador: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
  },
});

export default models.Turno || model("Turno", TurnoSchema);
