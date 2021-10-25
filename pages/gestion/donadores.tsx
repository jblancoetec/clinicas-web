import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../src/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";
interface Props {
  documentos: IDonador[];
}
const donadores = ({ documentos }: Props) => (
  <TablaDeDonadores donadores={documentos} />
);

export const getServerSideProps = async () => {
  return await obtenerDocumentos<IDonador>("/donador/getDonadores");
};
export default donadores;
