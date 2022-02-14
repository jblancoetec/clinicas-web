import React from "react";
import Tabla from "../common/Tabla";
import Registro from "./RegistroDeTurno";
import { Container } from "react-bootstrap";
import { useTurnoContext } from "../formularios/contextos/TurnoContextProvider";

const encabezados = ["Fecha", "Hora", "Nombre"];

const acciones = ["Eliminar"];

const TablaDeTurnos = () => {
  const { turnos } = useTurnoContext();

  return (
    <Container>
      <Tabla
        titulo="Turnos del dia"
        encabezados={encabezados}
        acciones={acciones}
      >
        {turnos.map((turno, index) => (
          <Registro key={index} turno={turno} />
        ))}
      </Tabla>
    </Container>
  );
};

export default TablaDeTurnos;
