import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Administrador from "../../../models/Administrador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const { email, password } = req.body.data;
    const administradorRegistrado = await Administrador.exists({ email });

    if (administradorRegistrado) {
      res.status(404);
      res.end();
    } else {
      const administrador = new Administrador(req.body.data);
      administrador.password = await administrador.encryptPassword(password);
      await administrador.save();
      res.status(200).json(administrador);
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
