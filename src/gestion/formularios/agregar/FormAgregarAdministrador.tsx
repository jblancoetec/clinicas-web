import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../common/Form.module.css";
import Campo from "../common/Campo";
import Menu from "../common/Menu";
import agregarDocumento from "../../api/agregarDocumento";

const FormAgregarAdministrador = () => {
  const registrarNuevoAdministrador = (
    evento: React.FormEvent<HTMLFormElement>
  ) => {
    console.log("Registrar nuevo administrador");
  };

  return (
    <div className={styles.Contenedor}>
      <h2 className={styles.Titulo}>Agregar administrador</h2>
      <Form
        className={styles.Formulario}
        onSubmit={registrarNuevoAdministrador}
      >
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
export default FormAgregarAdministrador;
