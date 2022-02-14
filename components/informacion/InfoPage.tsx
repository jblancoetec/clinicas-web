import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InfoPage.module.css";

const InfoPage = ({ urlImagen }: { urlImagen: string }) => {
  return (
    <div
      className={styles.Contenedor}
      style={{
        backgroundImage: `url(${urlImagen})`,
      }}
    >
      <div className={styles.Mensaje}>En construcción...</div>

      <FontAwesomeIcon
        className={styles.Icono}
        icon={faHammer}
      ></FontAwesomeIcon>
    </div>
  );
};

export default InfoPage;
