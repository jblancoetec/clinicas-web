import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { ITurno } from "../../../models/Turno";

interface Props {
  turno: ITurno;
}
const RegistroDeTurno = ({ turno }: Props) => {
  return (
    <tr>
      <td>{turno.paciente}</td>
      <td>{turno.email}</td>
      <td>{turno.fecha}</td>
      <td style={{ textAlign: "center" }}>
        <Button style={{ backgroundColor: "var(--Editar)", border: "none" }}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
      <td style={{ textAlign: "center" }}>
        <Button style={{ backgroundColor: "var(--Eliminar)", border: "none" }}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
      
    </tr>
  );
};

export default RegistroDeTurno;
