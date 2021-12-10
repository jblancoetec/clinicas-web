import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Administrador from "../../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const administrador = await Administrador.findByIdAndDelete(req.query._id);
    if (!administrador) {
      return res.status(404);
    }
    res.status(200).json(administrador);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
