import React from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import styles from "../common/Form.module.css";
import { useForm } from "react-hook-form";
import { useDocsContext } from "../../contextos/DocsContextProvider";
import { ErrorMessage } from "@hookform/error-message";
import { FormDataDonador } from "../common/interfaces";

interface IDatoASolicitar {
  label: string;
  placeholder: string;
  id: "nombre" | "apellido" | "email" | "telefono" | "tipo";
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
    label: "Telefono",
    placeholder: "Por ejemplo: 1112345678",
    id: "telefono",
    type: "tel",
  },
];

const FormAgregarAdministrador = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDonador>();

  const { agregarDoc } = useDocsContext();

  const agregar = (data: FormDataDonador) => {
    agregarDoc(data);
  };

  return (
    <div className={styles.Contenedor}>
      <h4 className={styles.Titulo}>Agregar donador</h4>
      <Form className={styles.Formulario} onSubmit={handleSubmit(agregar)}>
        {datosASolicitar.map((dato, index) => (
          <FormGroup className={styles.FormGroup} key={index}>
            <FormLabel>{dato.label}</FormLabel>
            <Form.Control
              placeholder={dato.placeholder}
              id={dato.id}
              type={dato.type}
              {...register(dato.id, {
                required: "Este campo es obligatorio",
              })}
            />
            <ErrorMessage
              errors={errors}
              name={dato.id}
              render={({ message }) => (
                <div className={styles.Error}>{message}</div>
              )}
            />
          </FormGroup>
        ))}
        <Form.Group className={styles.FormGroup}>
          <FormLabel>Tipo de donador</FormLabel>
          <Form.Select id="tipo" {...register("tipo", { required: true })}>
            {[
              "Donador de sangre",
              "Donador de plasma",
              "Donador de plaquetas",
            ].map((tipo, index) => (
              <option value={tipo} key={index}>
                {tipo}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" className={styles.BotonSubmit}>
          Agregar
        </Button>
      </Form>
    </div>
  );
};
export default FormAgregarAdministrador;
