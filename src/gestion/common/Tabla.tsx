import React from "react";
import { Container, Table } from "react-bootstrap";
import styles from "./Tabla.module.css";

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
      <Table className={styles.Tabla}>
        <thead>
          <tr>
            {encabezados.map((encabezado, index) => (
              <th className={styles.EncabezadoDatos} key={index}>
                {encabezado}
              </th>
            ))}
            {acciones.map((accion, index) => (
              <th className={styles.EncabezadoAcciones} key={index}>
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
