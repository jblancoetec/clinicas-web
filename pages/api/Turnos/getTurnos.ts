import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../lib/conexionDB";
import Turnos from "../../../models/Turnos";
import { ITurnos } from "../../../models/Turnos";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const turno: ITurnos[] = await Turnos.find();
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
