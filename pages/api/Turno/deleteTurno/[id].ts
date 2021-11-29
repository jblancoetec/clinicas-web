import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Turno from "../../../../models/Turno";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await conectarDB();
  const {
    query: { id },
  } = req;

  try {
    const deletedTurno = await Turno.deleteOne({ _id: id });
    if (!deletedTurno) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ succsess: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
