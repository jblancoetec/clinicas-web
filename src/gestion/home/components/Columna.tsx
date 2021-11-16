import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./Columna.module.css";

interface Props {
  titulo: string;
  url: string;
  descripcion: string;
  urlImagen: string;
}

const Columna = ({ titulo, url, descripcion, urlImagen }: Props) => {
  return (
    <div
      className={styles.Columna}
      style={{
        backgroundImage: `url(${urlImagen})`,
      }}
    >
      <div className={`${styles.Opacidad} ${styles.Contenedor}`}>
        <div className={styles.Mensaje}>
          <Link href={url}>{titulo}</Link>
        </div>
        <div className={styles.Encabezado}>{descripcion}</div>
      </div>
    </div>
  );
};

export default Columna;
