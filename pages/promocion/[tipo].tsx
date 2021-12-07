import { useRouter } from "next/router";
import HomeSangre from "../../src/promocion/sangre/Home";
import HomePlasma from "../../src/promocion/plasma/Home";
import HomePlaquetas from "../../src/promocion/plaquetas/Home";

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
