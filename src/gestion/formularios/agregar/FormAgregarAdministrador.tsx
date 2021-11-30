import React, { createContext } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../common/Form.module.css";
import FormControl from "../common/FormControl";
import { useForm } from "react-hook-form";
import { FormDataAdministrador } from "../common/interfaces";

interface IFormulario {
  label: string;
  placeholder: string;
  id: "nombre" | "apellido" | "email" | "password";
  type: string;
}

const formulario: IFormulario[] = [
  {
    label: "Nombre",
    placeholder: "Por ejemplo: Juan",
    id: "nombre",
    type: "text",
  },
  {
    label: "Apellido",
    placeholder: "Por ejemplo: Perez",
    id: "apellido",
    type: "text",
  },
  {
    label: "Correo electrónico",
    placeholder: "Por ejemplo: jperez@email.com",
    id: "email",
    type: "text",
  },
  {
    label: "Contraseña",
    placeholder: "Una contraseña segura",
    id: "password",
    type: "password",
  },
];

const FormAgregarAdministrador = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataAdministrador>();

  const agregar = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.Contenedor}>
      <h2 className={styles.Titulo}>Agregar administrador</h2>
      <Form className={styles.Formulario} onSubmit={handleSubmit(agregar)}>
        {formulario.map(({ label, placeholder, id, type }, index) => (
          <div key={index}>
            {FormControl<FormDataAdministrador>({
              label,
              placeholder,
              id,
              type,
              register,
              errors,
            })}
          </div>
        ))}

        <div>
          <Button
            type="submit"
            style={{
              backgroundColor: "var(--violeta)",
            }}
          >
            Agregar
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default FormAgregarAdministrador;
