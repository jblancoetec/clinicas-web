import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BotonEliminar.module.css";

interface Props {
  onClick: () => void;
}

const BotonEliminar = ({ onClick }: Props) => {
  return (
    <>
      <Button className={styles.Boton} onClick={onClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </>
  );
};

export default BotonEliminar;
