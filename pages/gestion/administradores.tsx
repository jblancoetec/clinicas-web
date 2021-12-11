import { IAdministrador } from "../../models/Administrador";
import TablaDeAdministradores from "../../components/gestion/administradores/TablaDeAdministradores";
import obtenerDocumentos from "../../components/gestion/api/obtenerDocumentos";
import DocsContextProvider from "../../components/gestion/contextos/DocsContextProvider";
import { IApi } from "../../components/gestion/contextos/Interfaces";

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
        urlPut: `${process.env.API_URL}/Administrador/updateAdministrador`,
        urlGet: `${process.env.API_URL}/Administrador/getAdministradores`,
      },
    },
  };
};

export default Administradores;
