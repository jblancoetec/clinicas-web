import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../src/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";
import DocsContextProvider from "../../src/gestion/contextos/DocsContextProvider";
import { IApi } from "../../src/gestion/contextos/Interfaces";

interface Props {
  documentos: IDonador[];
  api: IApi;
}

const Administradores = ({ documentos, api }: Props) => (
  <DocsContextProvider api={api} documentos={documentos}>
    <TablaDeDonadores />
  </DocsContextProvider>
);

export const getServerSideProps = async () => {
  return {
    props: {
      documentos: await obtenerDocumentos<IDonador>(
        `${process.env.API_URL}/Administrador/getAdministradores`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Administrador/deleteAdministrador`,
        urlPost: `${process.env.API_URL}/Administrador/postAdministrador`,
        urlPut: `${process.env.API_URL}/Administrador/putAdministrador`,
        urlGet: `${process.env.API_URL}/Administrador/getAdministradores`,
      },
    },
  };
};

export default Administradores;
