import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Administrador from "../../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const administrador = await Administrador.findByIdAndUpdate(
      req.query._id,
      req.body.data,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!administrador) {
      return res.status(400);
    }
    res.status(200).json(administrador);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
