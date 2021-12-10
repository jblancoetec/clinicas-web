import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Turno from "../../../../models/Turno";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await conectarDB();
  const {
    query: { id },
  } = req;

  try {
    const turno = await Turno.findByIdAndDelete(req.query._id);
    if (!turno) {
      return res.status(404);
    }
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
