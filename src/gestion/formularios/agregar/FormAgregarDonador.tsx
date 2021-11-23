import React, { useContext } from "react";
import { Button, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "../editar/FormDonador.module.css";
import Campo from "../common/Campo";
import Menu from "../common/Menu";
import { IDonador } from "../../../../models/Donador";
import { DocsContext } from "../../contextos/DocsContextProvider";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";

interface Props {
  donador: IDonador;
}

const FormDonador = ({ donador }: Props) => {
  const { agregarDoc } = useContext(DocsContext);
  const agregar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      nombre: string;
      apellido: string;
      email: string;
      telefono: string;
      tipo_donador: string;
    };

    const n = 12345;

    console.log("se intento un sumit");
    const donador: IDonador = {
      nombre: target.nombre,
      apellido: target.apellido,
      email: target.email,
      telefono: target.telefono,
      tipo: target.tipo_donador,
      _id: new mongoose.mongo.ObjectId(),
    };
    agregarDoc(donador);
  };

  return (
    <div className={styles.Contenedor}>
      <h2 className={styles.Titulo}>Agregar administrador</h2>
      <Form className={styles.Formulario} onSubmit={agregar}>
        <Campo label="*Nombre" placeholder="Por ejemplo: Juan" type="text" />
        <Campo label="*Apellido" placeholder="Por ejemplo: Perez" type="text" />
        <Campo
          label="*email"
          placeholder="Por ejemplo: jperez@mail.com"
          type="email"
        />
        <Campo
          label="*Telefono"
          placeholder="Por ejemplo: 15555555"
          type="tel"
        />
        <Menu />
        <Button
          type="submit"
          style={{
            backgroundColor: "var(--violeta)",
          }}
        >
          Agregar
        </Button>
      </Form>
    </div>
  );
};
export default FormDonador;
