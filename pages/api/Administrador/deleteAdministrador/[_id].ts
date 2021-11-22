import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Administrador from "../../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const deletedAdministrador = await Administrador.findByIdAndDelete(
      req.query
    );
    if (!deletedAdministrador) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ succsess: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
