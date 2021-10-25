import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { IDonador } from "../../../models/Donador";

interface Props {
  donador: IDonador;
}
const RegistroDeDonador = ({ donador }: Props) => {
  return (
    <tr>
      <td>{donador.nombre}</td>
      <td>{donador.apellido}</td>
      <td>{donador.email}</td>
      <td>{donador.telefono}</td>
      <td>{donador.tipo_donador}</td>
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
      <td style={{ textAlign: "center" }}>
        <Button style={{ backgroundColor: "var(--Contactar)", border: "none" }}>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </Button>
      </td>
    </tr>
  );
};

export default RegistroDeDonador;
