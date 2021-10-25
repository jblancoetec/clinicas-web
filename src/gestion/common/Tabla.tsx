import React from "react";
import { Container, Table } from "react-bootstrap";
import style from "./Tabla.module.css";

interface Props {
  titulo: string;
  encabezado: string[];
  acciones: string[];
  children: React.ReactNode;
}
const Tabla = ({ titulo, encabezado, acciones, children }: Props) => {
  return (
    <Container>
      <h3>{titulo}</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {encabezado.map((encabezado, index) => (
              <th className={style.EncabezadoColumna} key={index}>
                {encabezado}
              </th>
            ))}
            {acciones.map((accion, index) => (
              <th className={style.AccionColumna} key={index}>
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
