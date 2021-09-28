import React from "react";
import SeccionPrincipal from "../components/SeccionPrincipal";
import SeccionCondiciones from "../components/SeccionCondiciones";
import SeccionLeyPlasma from "../components/SeccionLeyPlasma";
//import SeccionContacto from "../components/SeccionContacto";
import SeccionMaterialCompartir from "../components/SeccionMaterialCompartir";
import conectarDB from "../lib/conexionDB";
import { InferGetServerSidePropsType } from "next";

const index = (): JSX.Element => {
  return (
    <>
      <SeccionPrincipal />
      <SeccionCondiciones />
      <SeccionLeyPlasma />
      <SeccionMaterialCompartir />
    </>
  );
};
export default index;
/*
export const getServerSideProps = async () => {
  try {
    await conectarDB();
    console.log("se pudo conectar");
  } catch (error) {
    console.log(error);
  }
};*/
