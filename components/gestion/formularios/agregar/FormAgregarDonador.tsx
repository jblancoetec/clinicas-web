import React from "react";
import { Form } from "react-bootstrap";
import styles from "../common/Form.module.css";
import { useForm } from "react-hook-form";
import { useDocsContext } from "../contextos/DocsContextProvider";
import { FormDataDonador } from "../common/interfaces";
import BotonSubmit from "../common/BotonSubmit";

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
  const { register, handleSubmit } = useForm<FormDataDonador>();

  const { agregarDoc } = useDocsContext();

  const agregar = (data: FormDataDonador) => {
    agregarDoc(data);
  };

  return (
    <div className={styles.Contenedor}>
      <h4 className={styles.Titulo}>Agregar donador</h4>
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
        <Form.Group className={styles.FormGroup}>
          <Form.Label>Tipo de donador</Form.Label>
          <Form.Select required id="tipo" {...register("tipo")}>
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

        <BotonSubmit />
      </Form>
    </div>
  );
};
export default FormAgregarAdministrador;
