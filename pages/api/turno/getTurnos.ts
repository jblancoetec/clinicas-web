import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../db/conexionDB";
import Turno from "../../../models/Turno";
import { ITurno } from "../../../models/Turno";
import moment from "moment";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const hoy = moment().startOf("day");
  try {
    await conectarDB();
    const turno: ITurno[] = await Turno.find({
      fecha: {
        $gte: hoy.toDate(),
        $lte: moment(hoy).endOf("day").toDate(),
      },
    });
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
