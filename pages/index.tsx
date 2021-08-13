import React from "react";
import SectionPromoMain from "../components/SectionPromoMain";
import SectionCondiciones from "../components/SectionCondiciones";
import SectionLeyPlasma from "../components/SectionLeyPlasma";
import SectionFormContacto from "../components/SectionContacto";
import SectionMaterialCompartir from "../components/SectionMaterialCompartir";

export default function Index() {
  return (
    <>
      <SectionPromoMain />
      <SectionCondiciones />
      <SectionLeyPlasma />
      <SectionFormContacto />
      <SectionMaterialCompartir />
    </>
  );
}
