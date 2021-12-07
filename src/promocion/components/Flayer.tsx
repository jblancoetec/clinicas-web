import styles from "./Flayer.module.css";
import React from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export interface IFlayer {
  imagen: string;
  columnas?: number;
  filas?: number;
  posicion?: string;
}

const Flayer = ({
  imagen,
  columnas = 1,
  filas = 1,
  posicion = "top center",
}: IFlayer) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundPosition: `${posicion}`,
        backgroundSize: "cover",
        justifySelf: "stretch",
        gridColumnEnd: `span ${columnas}`,
        gridRowEnd: `span ${filas}`,
        borderRadius: "16px",
        minWidth: "256px",
        maxWidth: "100%",
      }}
    >
      <div className={styles.Background}>
        <div className={styles.ContenedorIconosShare}>
          <WhatsappShareButton url={imagen}>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.IconoShare} />
          </WhatsappShareButton>
          <FacebookShareButton url={imagen}>
            <FontAwesomeIcon icon={faFacebook} className={styles.IconoShare} />
          </FacebookShareButton>
          <TwitterShareButton url={imagen}>
            <FontAwesomeIcon icon={faTwitter} className={styles.IconoShare} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default Flayer;
