import style from "./EnlacesARedesSociales.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  urlFlayer: string;
}

const urlFacebook = (url: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${url}&feature=emb_logo`;

const urlTwitter = (url: string) =>
  `https://twitter.com/intent/tweet?url=${url}`;

const urlWhatsapp = (url: string) =>
  `https://api.whatsapp.com/send?text=${url}`;

const EnlacesARedesSociales = ({ urlFlayer }: Props) => {
  return (
    <div>
      <a className={style.IconoRedSocial} href={urlFacebook(urlFlayer)}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className={style.IconoRedSocial} href={urlWhatsapp(urlFlayer)}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a className={style.IconoRedSocial} href={urlTwitter(urlFlayer)}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default EnlacesARedesSociales;
