import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BotonSubmit.module.css";
import React from "react";
import { Button } from "react-bootstrap";

const BotonSubmit = () => {
  return (
    <Button variant="success" type="submit" className={styles.BotonSubmit}>
      <FontAwesomeIcon icon={faCheckCircle} className={styles.Icono} />
    </Button>
  );
};

export default BotonSubmit;
