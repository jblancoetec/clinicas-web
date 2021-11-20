import { IAdministrador } from "../../models/Administrador";
import TablaDeAdministradores from "../../src/gestion/administradores/TablaDeAdministradores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";
import DocsContextProvider from "../../src/gestion/contextos/DocsContextProvider";
import { IApi } from "../../src/gestion/contextos/Interfaces";

interface Props {
  documentos: IAdministrador[];
  api: IApi;
}

const Administradores = ({ documentos, api }: Props) => (
  <DocsContextProvider api={api} documentos={documentos}>
    <TablaDeAdministradores />
  </DocsContextProvider>
);

export const getServerSideProps = async () => {
  return {
    props: {
      documentos: await obtenerDocumentos<IAdministrador>(
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
