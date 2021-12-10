import { ITurno } from "../../models/Turno";
import TablaDeTurnos from "../../components/gestion/turnos/TablaDeTurnos";
import obtenerDocumentos from "../../components/gestion/api/obtenerDocumentos";
import DocsContextProvider from "../../components/gestion/contextos/DocsContextProvider";
import { IApi } from "../../components/gestion/contextos/Interfaces";

interface Props {
  documentos: ITurno[];
  api: IApi;
}
const turnos = ({ documentos, api }: Props) => (
  <DocsContextProvider api={api} documentos={documentos}>
    <TablaDeTurnos />
  </DocsContextProvider>
);

export const getServerSideProps = async () => {
  return {
    props: {
      documentos: await obtenerDocumentos<ITurno>(
        `${process.env.API_URL}/Turno/getTurnos`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Turno/deleteTurno`,
        urlGet: `${process.env.API_URL}/Turno/getTurnos`,
        urlPost: `${process.env.API_URL}/Turno/postTurno`,
        urlPut: `${process.env.API_URL}/Turno/postTurno`,
      },
    },
  };
};

export default turnos;
