import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BotonEliminar.module.css";
import eliminarDocumentos from "../utils/eliminarDocumento";

interface Props {
  url: string;
}

const BotonEliminar = ({ url }: Props) => {
  const eliminar = () => {
    eliminarDocumentos(url);
  };
  return (
    <>
      <Button className={styles.Boton} onClick={eliminar}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </>
  );
};

export default BotonEliminar;
