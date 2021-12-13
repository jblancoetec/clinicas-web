import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  aprobar: () => void;
  texto: string;
}

const BotonValido = ({ aprobar, texto }: Props) => {
  return <Button onClick={aprobar}>{texto}</Button>;
};

export default BotonValido;
