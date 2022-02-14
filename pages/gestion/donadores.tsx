import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../components/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../components/gestion/services/obtenerDocumentos";
import DocsContextProvider from "../../components/gestion/formularios/contextos/DocsContextProvider";
import { IApi } from "../../components/gestion/formularios/contextos/Interfaces";
import { getSession } from "next-auth/react";
import Login from "../../components/login/Login";
import { Session } from "next-auth";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const Administradores = ({
  documentos,
  api,
  session,
}: {
  documentos: IDonador[];
  api: IApi;
  session: Session | null;
}) =>
  session ? (
    <DocsContextProvider api={api} documentos={documentos}>
      <TablaDeDonadores />
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
      documentos: await obtenerDocumentos<IDonador>(
        `${process.env.API_URL}/Donador/getDonadores`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Donador/deleteDonador`,
        urlPost: `${process.env.API_URL}/Donador/postDonador/sinTurno`,
        urlPut: `${process.env.API_URL}/Donador/updateDonador`,
        urlGet: `${process.env.API_URL}/Donador/getDonadores`,
      },
    },
  };
};

export default Administradores;
