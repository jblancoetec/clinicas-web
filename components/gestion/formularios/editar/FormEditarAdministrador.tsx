import { useForm } from "react-hook-form";
import { IAdministrador } from "../../../../models/Administrador";
import { FormDataAdministrador } from "../common/interfaces";
import styles from "../common/Form.module.css";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { useDocsContext } from "../../contextos/DocsContextProvider";

interface IDatoAEditar {
  label: string;
  placeholder: string;
  type: string;
  id: "nombre" | "apellido" | "email" | "password";
}

const FormEditarAdministrador = (administrador: IAdministrador) => {
  const datosAEditar: IDatoAEditar[] = [
    {
      label: "Nombre",
      placeholder: administrador.nombre,
      type: "text",
      id: "nombre",
    },
    {
      label: "Apellido",
      placeholder: administrador.apellido,
      type: "text",
      id: "apellido",
    },
    {
      label: "Correo electrónico",
      placeholder: administrador.email,
      type: "text",
      id: "email",
    },
    {
      label: "Contraseña",
      placeholder: "Una contraseña segura",
      type: "password",
      id: "password",
    },
  ];
  const { register, handleSubmit } = useForm<FormDataAdministrador>();
  const { editarDoc } = useDocsContext();
  const editar = (data: FormDataAdministrador) => {
    editarDoc(administrador._id, {
      nombre: data.nombre || undefined,
      apellido: data.apellido || undefined,
      email: data.email || undefined,
      password: data.password || undefined,
    });
  };

  return (
    <div className={styles.Contenedor}>
      <h4 className={styles.Titulo}>Editar administrador</h4>
      <Form className={styles.Formulario} onSubmit={handleSubmit(editar)}>
        {datosAEditar.map((dato, index) => (
          <FormGroup className={styles.FormGroup} key={index}>
            <FormLabel>{dato.label}</FormLabel>
            <Form.Control
              placeholder={dato.placeholder}
              id={dato.id}
              type={dato.type}
              {...register(dato.id)}
            />
          </FormGroup>
        ))}

        <Button type="submit" className={styles.BotonSubmit}>
          Editar
        </Button>
      </Form>
    </div>
  );
};

export default FormEditarAdministrador;
