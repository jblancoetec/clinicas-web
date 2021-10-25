import React from "react";
import { Card } from "react-bootstrap";
import style from "./TarjetaMaterialParaCompartir.module.css";
import EnlacesARedesSociales from "./EnlacesARedesSociales";

interface Props {
  urlFlayer: string;
}
const FlayerACompartir = ({ urlFlayer }: Props) => (
  <Card className={style.Tarjeta}>
    <Card.Img variant="top" src={urlFlayer}></Card.Img>
    <div className={style.TarjetaCuerpo}>
      <h3>Compartir</h3>
      <EnlacesARedesSociales urlFlayer={urlFlayer} />
    </div>
  </Card>
);

export default FlayerACompartir;
