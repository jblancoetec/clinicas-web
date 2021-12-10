import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Donador from "../../../models/Donador";
import { IDonador } from "../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pagina: number = Number(req.body.data.pagina) || 1;
    const limite: number = Number(req.body.data.limite) || 10;

    await conectarDB();
    const Donadores: IDonador[] = await Donador.find({})
      .skip((pagina - 1) * limite)
      .limit(limite);

    res.status(200).json(Donadores);
  } catch (error) {
    console.log(error);

    res.status(400);
  }
};

export default handler;
