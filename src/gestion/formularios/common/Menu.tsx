import { Form } from "react-bootstrap";
const Menu = () => {
  return (
    <Form.Group>
      <Form.Label>Tipo de donador</Form.Label>
      <Form.Select id="tipo_donador)" style={{ marginBottom: "16px" }}>
        <option value="Donador de sangre">Donador de sangre</option>
        <option value="Donador de plaquetas">Donador de plaquetas</option>
        <option value="Donador de plasma">Donador de plasma</option>
      </Form.Select>
    </Form.Group>
  );
};

export default Menu;
