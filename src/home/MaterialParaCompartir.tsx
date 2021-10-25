import { Row } from "react-bootstrap";
import Seccion from "../shared/Seccion";
import FlayerACompartir from "./components/TarjetaMaterialParaCompartir";

const flayers = [
  "https://i.ibb.co/0f6SVDQ/DONA.png",
  "https://i.ibb.co/DRGgC0v/2.png",
  "https://i.ibb.co/C6JqH9c/Eliam-Ana-1-1-Pasos-a-seguir-1.png",
  "https://i.ibb.co/W37N5jR/1.png",
  "https://i.ibb.co/1dV0nw8/2.png",
  "https://i.ibb.co/8st6wTL/Microsoft-Teams-image.png",
  "https://i.ibb.co/qYHRfRc/Microsoft-Teams-image-2.png",
].map((url) => <FlayerACompartir urlFlayer={url} key={url} />);

const MaterialParaCompartir = () => (
  <Seccion titulo="Material para compartir">
    <Row sm={1} md={3}>
      {flayers}
    </Row>
  </Seccion>
);
export default MaterialParaCompartir;
