import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../lib/conexionDB";
import Turno from "../../../models/Turno";
import {ITurno} from "../../../models/Turno";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const turno: ITurno[] = await Turno.find({});
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
