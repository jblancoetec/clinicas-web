import React from "react";
import { Container, Table } from "react-bootstrap";
import style from "./Tabla.module.css";

interface Props {
  titulo: string;
  encabezados: string[];
  acciones: string[];
  children: React.ReactNode;
}
const Tabla = ({ titulo, encabezados, acciones, children }: Props) => {
  return (
    <Container>
      <h3>{titulo}</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {encabezados.map((encabezado, index) => (
              <th className={style.EncabezadoDatos} key={index}>
                {encabezado}
              </th>
            ))}
            {acciones.map((accion, index) => (
              <th className={style.EncabezadoAcciones} key={index}>
                {accion}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </Container>
  );
};

export default Tabla;
