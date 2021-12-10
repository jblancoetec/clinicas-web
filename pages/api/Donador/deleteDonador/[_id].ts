import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Donador from "../../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const donador = await Donador.findByIdAndDelete(req.query._id);
    if (!donador) {
      return res.status(400);
    }
    res.status(200).json(donador);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
