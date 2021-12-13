import React, { useRef, useState } from "react";
import { Alert, Button, Overlay } from "react-bootstrap";

interface Props {
  texto: string;
  justificacion: string;
}

const BotonInvalido = ({ texto, justificacion }: Props) => {
  const [justificando, setJustificando] = useState(false);
  const justificar = () => setJustificando(true);
  const refJustificacion = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button onClick={justificar} ref={refJustificacion}>
        {texto}
      </Button>
      <Overlay
        target={refJustificacion.current}
        show={justificando}
        placement="bottom"
      >
        <Alert variant="danger">{justificacion}</Alert>
      </Overlay>
    </>
  );
};

export default BotonInvalido;
