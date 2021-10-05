import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";

const ListadoDeDonadores = (): JSX.Element => {
  return (
    <Container>
      <br />
      <h3 style={{ textAlign: "center" }}>Listado De Donadores</h3>
      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Tipo de Donador</th>
            <th style={{ textAlign: "center" }}>Editar</th>
            <th style={{ textAlign: "center" }}>Eliminar</th>
            <th style={{ textAlign: "center" }}>Contactar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nombre1</td>
            <td>Apellido1</td>
            <td>ejemplo@gmail.com</td>
            <td>214</td>
            <td>Donador de Plasma</td>

            <td style={{ textAlign: "center" }}>
              <Button
                style={{
                  backgroundColor: "var(--Editar)",
                  border: "none",
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </td>

            <td style={{ textAlign: "center" }}>
              <Button
                style={{
                  backgroundColor: "var(--Eliminar)",
                  border: "none",
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>

            <td style={{ textAlign: "center" }}>
              <Button
                style={{
                  backgroundColor: "var(--Contactar)",
                  border: "none",
                }}
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        style={{
          backgroundColor: "var(--verde)",
          border: "none",
          color: "var(--negro)",
        }}
      >
        <FontAwesomeIcon icon={faUserPlus} />
        Agregar Donador/a
      </Button>
    </Container>
  );
};
export default ListadoDeDonadores;
