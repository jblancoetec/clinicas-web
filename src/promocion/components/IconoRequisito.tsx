import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IconoRequisito.module.css";

export interface IIconoRequisito {
  icono: IconDefinition;
  condicion: string;
}

const IconoRequisito = ({ icono, condicion }: IIconoRequisito) => (
  <div className={styles.Card}>
    <FontAwesomeIcon icon={icono} className={styles.Icono} />
    <p className={styles.Texto}>{condicion}</p>
  </div>
);

export default IconoRequisito;
