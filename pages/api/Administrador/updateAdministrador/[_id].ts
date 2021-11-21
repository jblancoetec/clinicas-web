import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../lib/conexionDB";
import Administrador from "../../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const administrador = await Administrador.findByIdAndUpdate(
      req.query._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!administrador) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ succsess: true, data: administrador });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
