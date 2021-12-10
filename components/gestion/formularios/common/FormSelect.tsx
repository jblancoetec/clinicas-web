import { RefObject } from "react";
import { Form } from "react-bootstrap";

interface Props {
  label: string;
  id: string;
  opciones: string[];
  ref: RefObject<HTMLSelectElement>;
}

const FormSelect = ({ label, id, opciones, ref }: Props) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Select id={id} style={{ marginBottom: "16px" }} ref={ref}>
        {opciones.map((opcion, index) => {
          return (
            <option key={index} value={opcion}>
              {opcion}
            </option>
          );
        })}
        <option value="Donador de sangre">Donador de sangre</option>
        <option value="Donador de plaquetas">Donador de plaquetas</option>
        <option value="Donador de plasma">Donador de plasma</option>
      </Form.Select>
    </Form.Group>
  );
};

export default FormSelect;
