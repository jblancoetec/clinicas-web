import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Turno from "../../../models/Turno";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const turno = await Turno.create(req.body.data);
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
