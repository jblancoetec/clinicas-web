import { ITurno } from "../../models/Turno";
import TablaDeTurnos from "../../src/gestion/turnos/TablaDeTurnos";
import obtenerDocumentos from "../../src/gestion/api/obtenerDocumentos";

interface Props {
  documentos: ITurno[];
}
const turnos = ({ documentos }: Props) => {
  return <TablaDeTurnos turnos={documentos} />;
};

export const getServerSideProps = async () => {
  return await obtenerDocumentos<ITurno>("/Turno/getTurnos");
};

export default turnos;
