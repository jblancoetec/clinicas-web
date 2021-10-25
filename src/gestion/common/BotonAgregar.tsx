import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import style from "./BotonAgregar.module.css";

interface Props {
  texto: string;
}

const BotonAgregar = ({ texto }: Props) => {
  return (
    <Container className={style.Contenedor}>
      <Button className={style.Boton}>
        <FontAwesomeIcon icon={faUserPlus} />
        {texto}
      </Button>
    </Container>
  );
};

export default BotonAgregar;
