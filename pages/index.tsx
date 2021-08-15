import React from "react";
import SeccionPrincipal from "../components/SeccionPrincipal";
import SeccionCondiciones from "../components/SeccionCondiciones";
import SeccionLeyPlasma from "../components/SeccionLeyPlasma";
import SeccionContacto from "../components/SeccionContacto";
import SeccionMaterialCompartir from "../components/SeccionMaterialCompartir";

const index = (): JSX.Element => {
  return (
    <>
      <SeccionPrincipal />
      <SeccionCondiciones />
      <SeccionLeyPlasma />
      <SeccionContacto />
      <SeccionMaterialCompartir />
    </>
  );
};
export default index;
