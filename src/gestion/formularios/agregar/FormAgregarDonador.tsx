import React, { useContext } from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import styles from "../common/Form.module.css";
import Campo from "../common/Campo";
import Menu from "../common/Menu";

const FormAgregarDonador = () => {
  const agregar = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
export default FormAgregarDonador;
