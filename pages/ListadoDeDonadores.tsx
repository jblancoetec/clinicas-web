import React from "react";
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
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> {' '}
          <Button variant="success">Success</Button>{' '}

        </tr>
        <tr>
          <td>MARIAAAAAA</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>MARCOS</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};
export default ListadoDeDonadores;
