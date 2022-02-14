import { useRouter } from "next/router";
import InfoPage from "../../components/informacion/InfoPage";
import { EPage } from "../../components/_home/Home";
import { urlImagenes } from "../../components/_home/Home";

const HomePromocion = () => {
  const router = useRouter();
  const { tipo } = router.query;

  return (
    <>
      {tipo === EPage.SANGRE && (
        <InfoPage urlImagen={urlImagenes.urlImagenSangre} />
      )}
      {tipo === EPage.PLASMA && (
        <InfoPage urlImagen={urlImagenes.urlImagenPlasma} />
      )}
      {tipo === EPage.PLAQUETAS && (
        <InfoPage urlImagen={urlImagenes.urlImagenPlaquetas} />
      )}
    </>
  );
};

export default HomePromocion;
