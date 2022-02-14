import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../db/conexionDB";
import Donador from "../../../../models/Donador";
import Turno from "../../../../models/Turno";
import moment from "moment";

//formato fecha YYYY-MM-DD HH:mm

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await conectarDB();
    const { fecha, ...data } = req.body.data;

    const donador = await Donador.create(data);
    const turno = await Turno.create({
      fecha: moment(fecha).toDate(),
      nombre: `${donador.nombre} ${donador.apellido}`,
      _id_donador: donador._id,
    });
    res.status(200).json([donador, turno]);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
export default handler;
