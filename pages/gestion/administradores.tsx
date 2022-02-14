import { IAdministrador } from "../../models/Administrador";
import TablaDeAdministradores from "../../components/gestion/administradores/TablaDeAdministradores";
import obtenerDocumentos from "../../components/gestion/services/obtenerDocumentos";
import DocsContextProvider from "../../components/gestion/formularios/contextos/DocsContextProvider";
import { IApi } from "../../components/gestion/formularios/contextos/Interfaces";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import Login from "../../components/login/Login";

const Administradores = ({
  documentos,
  api,
  session,
}: {
  documentos: IAdministrador[];
  api: IApi;
  session: Session | null;
}) =>
  session ? (
    <DocsContextProvider api={api} documentos={documentos}>
      <TablaDeAdministradores />
    </DocsContextProvider>
  ) : (
    <Login errors={false} />
  );

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      session: await getSession(context),
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
