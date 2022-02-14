import { ITurno } from "../../../models/Turno";
import moment from "moment";
import BotonEliminar from "../common/BotonEliminar";

const RegistroDeTurno = ({ turno }: { turno: ITurno }) => {
  return (
    <tr>
      <td>{moment(turno.fecha).format("DD/MM")}</td>
      <td>{moment(turno.fecha).format("HH:mm")}</td>
      <td>{turno.nombre}</td>
      <td style={{ textAlign: "center" }}>
        <BotonEliminar id={turno._id} />
      </td>
    </tr>
  );
};

export default RegistroDeTurno;
