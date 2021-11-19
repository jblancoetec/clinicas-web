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
}: Props) => (
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
          <a>
            DONAR <br /> {mensaje}
          </a>
        </Link>
      </div>
      <div className={styles.Botones}>
        <Link href={urlFormularioEvaluacion}>
          <a className={`${styles.Boton} btn btn-outline-light`}>
            CUESTIONARIO DE APTITUD
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Columna;
