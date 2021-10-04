import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<link rel="styles" href="globals.css" />;
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";
import link from "next/link";

const ListadoDeDonadores = (): JSX.Element => {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Tipo de Donador</th>
            <th>Editar</th>
            <th>Eliminar</th>
            <th>Contactar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fer</td>
            <td>llusco</td>
            <td>Oi@gmail.com</td>
            <td>362826364</td>
            <td>Donador de Plasma</td>
            <td>
              <Button
                style={{
                  backgroundColor: "var(--Editar)",
                  borderColor: "var(--Editar)",
                }}
              >
                <FontAwesomeIcon style={{}} icon={faEdit} />
              </Button>
            </td>
            <td>
              <Button
                style={{
                  backgroundColor: "var(--Eliminar)",
                  borderColor: "var(--Eliminar)",
                }}
              >
                <FontAwesomeIcon style={{}} icon={faTrashAlt} />
              </Button>
            </td>
            <td>
              <Button
                style={{
                  backgroundColor: "var(--Contactar)",
                  borderColor: "var(--Contactar)",
                }}
              >
                <FontAwesomeIcon style={{}} icon={faPhoneAlt} />
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
