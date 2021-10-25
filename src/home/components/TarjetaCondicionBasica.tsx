import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card } from "react-bootstrap";
import style from "./TarjetaCondicionBasica.module.css";

interface Props {
  icono: IconDefinition;
  texto: string;
}
const TarjetaCondicionBasica = ({ icono, texto }: Props) => {
  return (
    <Card className={style.Tarjeta}>
      <FontAwesomeIcon className={style.Icono} icon={icono} />
      <Card.Body>
        <Card.Text className={style.Texto}>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TarjetaCondicionBasica;
