import { ITurno } from "../../models/Turno";
import TablaDeTurnos from "../../components/gestion/turnos/TablaDeTurnos";
import obtenerDocumentos from "../../components/gestion/services/obtenerDocumentos";
import { IApi } from "../../components/gestion/formularios/contextos/Interfaces";
import TurnoContextProvider from "../../components/gestion/formularios/contextos/TurnoContextProvider";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import Login from "../../components/login/Login";

const turnos = ({
  documentos,
  api,
  session,
}: {
  documentos: ITurno[];
  api: IApi;
  session: Session | null;
}) =>
  session ? (
    <TurnoContextProvider api={api} documentos={documentos}>
      <TablaDeTurnos />
    </TurnoContextProvider>
  ) : (
    <Login errors={false} />
  );

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      session: await getSession(context),
      documentos: await obtenerDocumentos<ITurno>(
        `${process.env.API_URL}/Turno/getTurnos`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Turno/deleteTurno`,
      },
    },
  };
};

export default turnos;
