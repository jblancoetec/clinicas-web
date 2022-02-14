import { NextApiRequest, NextApiResponse } from "next";
import conectarDB from "../../../../../db/conexionDB";
import Turno from "../../../../../models/Turno";
import { ITurno } from "../../../../../models/Turno";
import moment from "moment";

const _CANTIDAD_MAX_DONADORES_POR_TURNO = 3;
//formato fecha: YYYY-MM-DD

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const inicio = moment(req.query.fecha).startOf("day").add(8, "hours");
  const fin = moment(req.query.fecha).startOf("day").add(12, "hours");
  const turnosDisponibles: Date[] = [];

  try {
    await conectarDB();
    const turnos: ITurno[] = await Turno.find({
      fecha: {
        $gte: inicio.toDate(),
        $lte: fin.toDate(),
      },
    });

    for (const index = inicio; index.isBefore(fin); index.add(1, "hours")) {
      const turnosReservados = turnos.filter((turno) => {
        return moment(turno.fecha).isSame(index, "hour");
      });
      if (turnosReservados.length < _CANTIDAD_MAX_DONADORES_POR_TURNO) {
        turnosDisponibles.push(index.toDate());
      }
    }
    res.status(200).json(turnosDisponibles);
  } catch (error) {
    console.log(error);
    res.status(400);
  }

  // try {
  //   const turnos: ITurno[] = await Turno.find({
  //     fecha: {
  //       $gte: fecha.toDate(),
  //       $lte: moment(fecha).endOf("day").toDate(),
  //     },
  //   });
  //   res.status(200).json(turnos);
  // } catch (error) {
  //   console.log(error);
  //   res.status(400);
  // }
};
export default handler;
