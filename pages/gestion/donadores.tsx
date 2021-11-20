import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../src/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";
interface Props {
  documentos: IDonador[];
  apiUrl: string;
}
const donadores = ({ documentos }: Props) => (
  <TablaDeDonadores donadores={documentos} />
);

export const getServerSideProps = async () => {
  return {
    props: {
      documentos: await obtenerDocumentos<IDonador>("/Donador/getDonadores"),
    },
  };
};
export default donadores;
