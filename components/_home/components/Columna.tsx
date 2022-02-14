import Link from "next/link";
import styles from "./Columna.module.css";

const Columna = ({
  mensaje,
  urlImagen,
  urlInformacion,
  urlCuestionario,
}: {
  mensaje: string;
  urlImagen: string;
  urlInformacion: string;
  urlCuestionario: string;
}) => (
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
        <Link href={urlCuestionario}>
          <a className={`${styles.Boton} btn btn-outline-light`}>
            CUESTIONARIO DE APTITUD
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Columna;
