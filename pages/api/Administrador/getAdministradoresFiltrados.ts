import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Administrador from "../../../models/Administrador";
import { IAdministrador } from "../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const AdministradoresFiltrados: IAdministrador[] = await Administrador.find(
      req.body
    );
    res.status(200).json(AdministradoresFiltrados);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
