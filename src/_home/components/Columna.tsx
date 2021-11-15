import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./Columna.module.css";

interface Props {
  mensaje: string;
  urlImagen: string;
  urlInformacion: string;
  urlFormularioEvaluacion: string;
}

const Columna = ({
  mensaje,
  urlImagen,
  urlInformacion,
  urlFormularioEvaluacion,
}: Props) => {
  return (
    <div
      className={styles.Columna}
      style={{
        backgroundImage: `url(${urlImagen})`,
      }}
    >
      <div className={`${styles.Opacidad} ${styles.Contenedor}`}>
        <div className={styles.Encabezado}>Vos tambien podes</div>
        <div className={styles.Mensaje}>
          <Link href={urlInformacion}>
            <>
              DONAR <br /> {mensaje}
            </>
          </Link>
        </div>
        <div className={styles.Botones}>
          <Button variant="outline-light" className={styles.Boton}>
            <Link href={urlFormularioEvaluacion}>CUESTIONARIO DE APTITUD</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Columna;
