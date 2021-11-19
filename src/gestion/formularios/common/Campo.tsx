import { Form, FormGroup, Row, Col, Container } from "react-bootstrap";
interface Props {
  label: string;
  placeholder: string;
  type: string;
}

const Campo = ({ label, placeholder, type }: Props) => {
  return (
    <FormGroup style={{ marginBottom: "16px" }}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        id={label}
        name={label.replaceAll("_", "").replaceAll("*", "").toLocaleLowerCase()}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default Campo;
