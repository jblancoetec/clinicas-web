import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";

const ListadoDeAdministradores = (): JSX.Element => {
  return (
    <Container>
      <br />
      <h3 style={{ textAlign: "center" }}>Listado De Administradores</h3>
      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Usuario</th>
            <th style={{ textAlign: "center" }}>Editar</th>
            <th style={{ textAlign: "center" }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fer</td>
            <td>LLusco</td>
            <td>@mdo</td>
            <td>362826364</td>
            <td>@mdo</td>

            <td style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "var(--Editar)", border: "none" }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </td>

            <td style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "var(--Eliminar)", border: "none" }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Container style={{ textAlign: "center" }}>
        <Button
          style={{
            backgroundColor: "var(--verde)",
            border: "none",
            color: "var(--Negro)",
          }}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          Agregar Administrador
        </Button>
      </Container>
    </Container>
  );
};
export default ListadoDeAdministradores;
