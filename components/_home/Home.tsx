import styles from "./Home.module.css";
import Columna from "./components/Columna";

export enum EPage {
  SANGRE = "sangre",
  PLAQUETAS = "plaquetas",
  PLASMA = "plasma",
}

export const urlImagenes = {
  urlImagenSangre:
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Mar%C3%ADa_Eugenia_Vidal_con_la_campa%C3%B1a_de_donaci%C3%B3n_voluntaria_de_sangre_%287396688818%29.jpg",
  urlImagenPlaquetas:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Donaci%C3%B3n_sangu%C3%ADnea_por_aferesis.jpg",
  urlImagenPlasma:
    "https://live.staticflickr.com/2808/33081727711_c35b1840d7_h.jpg",
};

const _Home = () => {
  return (
    <div className={styles.Contenedor}>
      {[
        {
          mensaje: "SANGRE",
          urlImagen: urlImagenes.urlImagenSangre,
          urlInformacion: "/donar/sangre",
          urlCuestionario: "/cuestionario",
        },
        {
          mensaje: "PLASMA",
          urlImagen: urlImagenes.urlImagenPlasma,
          urlInformacion: "/donar/plasma",
          urlCuestionario: "/cuestionario",
        },
        {
          mensaje: "PLAQUETAS",
          urlImagen: urlImagenes.urlImagenPlaquetas,
          urlInformacion: "/donar/plaquetas",
          urlCuestionario: "/cuestionario",
        },
      ].map((columna, index) => (
        <Columna key={index} {...columna} />
      ))}
    </div>
  );
};

export default _Home;
