import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../lib/conexionDB";
import Donador from "../../../../models/Donador";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await conectarDB();
  const {
    query: { id },
  } = req;

  try {
    const deletedDonador = await Donador.deleteOne({ _id: id });
    if (!deletedDonador) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ succsess: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
export default handler;
