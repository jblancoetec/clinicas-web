import React from "react";
import { Form } from "react-bootstrap";
import styles from "../common/Form.module.css";
import { useForm } from "react-hook-form";
import { FormDataAdministrador } from "../common/interfaces";
import { useDocsContext } from "../contextos/DocsContextProvider";
import BotonSubmit from "../common/BotonSubmit";

interface IDatoASolicitar {
  label: string;
  placeholder: string;
  id: "nombre" | "apellido" | "email" | "password";
  type: string;
}

const datosASolicitar: IDatoASolicitar[] = [
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
  const { register, handleSubmit } = useForm<FormDataAdministrador>();

  const { agregarDoc } = useDocsContext();

  const agregar = (data: FormDataAdministrador) => {
    agregarDoc(data);
  };

  return (
    <div className={styles.Contenedor}>
      <h4 className={styles.Titulo}>Agregar administrador</h4>
      <Form className={styles.Formulario} onSubmit={handleSubmit(agregar)}>
        {datosASolicitar.map((dato, index) => (
          <Form.Group className={styles.FormGroup} key={index}>
            <Form.Label>{dato.label}</Form.Label>
            <Form.Control
              placeholder={dato.placeholder}
              id={dato.id}
              type={dato.type}
              required={true}
              {...register(dato.id)}
            />
          </Form.Group>
        ))}
        <BotonSubmit />
      </Form>
    </div>
  );
};
export default FormAgregarAdministrador;
