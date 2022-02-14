import { Container, Form, Pagination } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FormDataDonadorConTurno } from "../common/interfaces";
import styles from "../common/Form.module.css";
import BotonSubmit from "../common/BotonSubmit";
import moment, { Moment } from "moment";
import { useState } from "react";
import { useDonadorContext } from "../contextos/DonadorContextProvider";

moment.updateLocale("es", {
  weekdays: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
});

interface IDatoASolicitar {
  label: string;
  placeholder: string;
  id: "nombre" | "apellido" | "email" | "telefono" | "tipo" | "fecha";
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
    type: "email",
  },
  {
    label: "Telefono",
    placeholder: "Por ejemplo: 1112345678",
    id: "telefono",
    type: "tel",
  },
];

const FormRegistrarDonadorTurno = () => {
  const { register, handleSubmit } = useForm<FormDataDonadorConTurno>();
  const { horariosDisponibles, registrarDonador, listarTurnosLibresPorFecha } =
    useDonadorContext();
  const [dia, setDia] = useState<Moment>(moment());

  const agregar = (data: FormDataDonadorConTurno) => {
    registrarDonador(data);
  };

  const diaSiguiente = () => {
    setDia(moment(dia).add(1, "days"));
    listarTurnosLibresPorFecha(dia.format("YYYY-MM-DD"));
  };

  const diaAnterior = () => {
    setDia(moment().isSame(dia, "day") ? dia : moment(dia).subtract(1, "days"));
    listarTurnosLibresPorFecha(dia.format("YYYY-MM-DD"));
  };

  return (
    <Container>
      <h4>Registro de donadores</h4>
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
        <Form.Group className={styles.FormGroup}>
          <Form.Label>Seleccione el dia y horario</Form.Label>
          <Pagination>
            <Pagination.Prev onClick={diaAnterior} />
            <Pagination.Item disabled>
              {dia.format("dddd DD/MM/YYYY")}
            </Pagination.Item>
            <Pagination.Next onClick={diaSiguiente} />
          </Pagination>
          <Form.Select
            className={styles.Horario}
            id="fecha"
            {...register("fecha")}
            required
          >
            {horariosDisponibles.map((horario, index) => (
              <option
                value={moment(horario).format("YYYY-MM-DD HH:mm")}
                key={index}
              >
                {moment(horario).format("HH:mm")}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <BotonSubmit />
      </Form>
    </Container>
  );
};

export default FormRegistrarDonadorTurno;
