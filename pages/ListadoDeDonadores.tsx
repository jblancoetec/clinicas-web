import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";

const ListadoDeDonadores = (): JSX.Element => {
  return (
    <Container>
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
            <td>fer</td>
            <td>llusco</td>
            <td>Oi@gmail.com</td>
            <td>362826364</td>
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

          <tr>
            <td>MARIAAAAAA</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>MARCOS</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default ListadoDeDonadores;
