import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Table } from "react-bootstrap";
import Link from "next/link";
import conectarDB from "../lib/conexionDB";
import Donador from "../models/Donador";

const ListadoDeDonadores = ({ donadores }: any): JSX.Element => {
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
          {donadores.map((donador: any, index: number) => (
            <tr key={index}>
              <td> {donador.nombre}</td>
              <td>{donador.apellido}</td>
              <td>{donador.email}</td>
              <td>{donador.telefono}</td>
              <td>{donador.Tipo}</td>

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
          ))}
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
          Agregar Donador/a
        </Button>
      </Container>
    </Container>
  );
};

export const getServerSideProps = async () => {
  await conectarDB();

  /* find all the data in our database */
  const result = await Donador.find({});
  const donadores = result.map((doc) => {
    const donador = doc.toObject();
    console.log(donador);
    

    donador._id = donador._id.toString();
    return donador;
  });

  return { props: { donadores } };
};

export default ListadoDeDonadores;
