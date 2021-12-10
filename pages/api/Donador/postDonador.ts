import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Donador from "../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const donador = await Donador.create(req.body.data);
    res.status(200).json(donador);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
