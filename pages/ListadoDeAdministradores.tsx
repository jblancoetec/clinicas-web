import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";
import conectarDB from "../lib/conexionDB";
import { IAdministrador } from "../models/Administrador";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface PropsListadoDeAdministradores {
  administradores: IAdministrador[];
}

const ListadoDeAdministradores: React.FC<PropsListadoDeAdministradores> = ({
  administradores,
}): JSX.Element => {
  const administradoresARenderizar = administradores.map(
    (administrador: IAdministrador, index) => {
      return (
        <>
          <tr key={index}>
            <td>{administrador.nombre}</td>
            <td>{administrador.apellido}</td>
            <td>{administrador.email}</td>
            <td>{administrador.telefono}</td>
            <td>{administrador.usuario}</td>

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
        </>
      );
    }
  );
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
        <tbody>{administradoresARenderizar}</tbody>
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

export const getServerSideProps = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: process.env.API_URL,
  };
  try {
    const res: AxiosResponse = await axios.get(
      "/Administrador/getAdministradores",
      config
    );
    const administradores = res.data;
    return {
      props: { administradores },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/",
        statusCode: 307,
      },
    };
  }
};

export default ListadoDeAdministradores;
