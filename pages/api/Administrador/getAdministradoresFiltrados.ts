import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../lib/conexionDB";
import Administrador from "../../../models/Administrador";
import { IAdministrador } from "../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const Administradores: IAdministrador[] = await Administrador.find(req.body);
    res.status(200).json(Administradores);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
