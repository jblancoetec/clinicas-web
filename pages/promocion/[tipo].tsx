import { useRouter } from "next/router";
import HomeSangre from "../../components/promocion/sangre/Home";
import HomePlasma from "../../components/promocion/plasma/Home";
import HomePlaquetas from "../../components/promocion/plaquetas/Home";

const HomePromocion = () => {
  const router = useRouter();
  const { tipo } = router.query;

  return (
    <>
      {tipo === "sangre" && <HomeSangre />}
      {tipo === "plasma" && <HomePlasma />}
      {tipo === "plaquetas" && <HomePlaquetas />}
    </>
  );
};

export default HomePromocion;
