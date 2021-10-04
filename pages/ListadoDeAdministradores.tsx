import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<link rel="styles" href="globals.css" />;
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Button, Container, Table } from "react-bootstrap";

const ListadoDeAdministradores = (): JSX.Element => {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Usuario</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fer</td>
            <td>LLusco</td>
            <td>@mdo</td>
            <td>362826364</td>
            <td>@mdo</td>
            <td>
              <Button id="edit" variant="warning">
                <FontAwesomeIcon style={{}} icon={faEdit} />
              </Button>
            </td>
            <td>
              <Button id="delete" variant="danger">
                <FontAwesomeIcon style={{}} icon={faTrashAlt} />
              </Button>
            </td>
          </tr>

          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>1122334455</td>
            <td>@xd</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>The Bird</td>
            <td>@twitter</td>
            <td>1122334455</td>
            <td>@owo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default ListadoDeAdministradores;
