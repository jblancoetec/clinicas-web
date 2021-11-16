import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
<<<<<<< Updated upstream
import styles from "./BotonEliminar.module.css"
import eliminarDocumentos from "../utils/eliminarDocumento"
=======
import styles from "./BotonEliminar.module.css";
>>>>>>> Stashed changes

interface Props{
  url :string
}

const BotonEliminar = ({url }: Props) => {
const eliminar = () => {
  eliminarDocumentos (url)
}
  return (
    <>
<<<<<<< Updated upstream
      <Button className = {styles.Boton} onClick={eliminar}>
=======
      <Button className={styles.Boton}>
>>>>>>> Stashed changes
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </>
  );
};

export default BotonEliminar;
