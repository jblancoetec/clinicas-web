import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BotonEliminar.module.css"

const BotonEliminar = () => {
  return (
    <>
      <Button className = {styles.Boton}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
    </>
  );
};

export default BotonEliminar;
