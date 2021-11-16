import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import style from "./BotonAgregar.module.css";
import Formulario from "../Formulario/Editar/Donador";

interface Props {
  children: React.ReactNode;
}

const BotonAgregar = ({children }: Props) => {
  const [FormularioVisible, setFormlarioVisible] = useState(false);
  
  const CerrarFormulario = () => setFormlarioVisible(false);
  const AbrirFormulario = () => setFormlarioVisible(true);


  return (
    <>
      <Button className={styles.Boton} onClick={AbrirFormulario}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={FormularioVisible} onHide={CerrarFormulario}>
        {children}
      </Modal>
    </>
  );
};

export default BotonAgregar;
