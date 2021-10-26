import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../lib/conexionDB";
import Turno from "../../../models/Turno";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const turno = await Turno.create(req.body);
    res.status(201).json({ succsess: true, data: turno });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
