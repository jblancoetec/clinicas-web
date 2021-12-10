import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BotonContactar.module.css";

const BotonContactar = () => {
  return (
    <>
      <Button className={styles.Boton}>
        <FontAwesomeIcon icon={faPhoneAlt} />
      </Button>
    </>
  );
};

export default BotonContactar;
