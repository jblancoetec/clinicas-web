import { Container, Row } from "react-bootstrap";
import React from "react";
import {
  faHandHoldingMedical,
  faStarOfLife,
  faUsers,
  faViruses,
  faVirusSlash,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Seccion.module.css";
import TarjetaCondicionBasica from "./components/TarjetaCondicionBasica";
import Seccion from "../shared/Seccion";

const condiciones = [
  {
    icono: faUsers,
    condicion: "Tener entre 18 y 65 Años",
  },
  {
    icono: faHandHoldingMedical,
    condicion: "No deben tener antecedentes transfuncionales",
  },
  {
    icono: faWeight,
    condicion: "Pesar mas de 50kg",
  },
  {
    icono: faViruses,
    condicion:
      "Haber cursado la infeccion y que hallan pasado los 28 dias de recuperacion, contando con 2 pruebas negativas de COVID-19",
  },
  {
    icono: faVirusSlash,
    condicion:
      "No poseer enfermedades prexistente como hepatitis, alguna neoplasia o enfermedades cardiovasculares",
  },
  {
    icono: faStarOfLife,
    condicion: "No haber tenido abortos, ni antecedentes gestionales",
  },
].map(({ icono, condicion }, index) => (
  <TarjetaCondicionBasica key={index} icono={icono} texto={condicion} />
));

const CondicionesBasicasParaDonador = () => (
  <Seccion titulo="Condiciones Basicas para Donar">
    <Row sm={1} md={3}>
      {condiciones}
    </Row>
  </Seccion>
);

export default CondicionesBasicasParaDonador;
