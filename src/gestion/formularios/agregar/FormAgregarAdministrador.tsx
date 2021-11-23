import React from "react";
import { Button, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "../editar/FormDonador.module.css";
import Campo from "../common/Campo";
import Menu from "../common/Menu";
import { IDonador } from "../../../../models/Donador";

interface Props {
  donador: IDonador;
}

const FormDonador = ({ donador }: Props) => {
  return (
    <div className={styles.Contenedor}>
      <h2 className={styles.Titulo}>Agregar administrador</h2>
      <Form className={styles.Formulario}>
        <Campo label="*Nombre" placeholder="Por ejemplo: Juan" type="text" />
        <Campo label="*Apellido" placeholder="Por ejemplo: Perez" type="text" />
        <Campo
          label="*Correo electronico"
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
