import { IAdministrador } from "../../models/Administrador";
import TablaDeAdministradores from "../../src/gestion/administradores/TablaDeAdministradores";
import GestionAdministradores from "../../src/gestion/contextos/GestionAdministradores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";

interface Props {
  documentos: IAdministrador[];
  api: string;
}

const Administradores = ({ documentos, api }: Props) => (
  <GestionAdministradores api={api} documentos={documentos}>
    <TablaDeAdministradores />
  </GestionAdministradores>
);

export const getServerSideProps = async () => {
  return {
    props: {
      documentos: await obtenerDocumentos<IAdministrador>(
        `${process.env.API_URL}/Administrador/getAdministradores`
      ),
      api: process.env.API_URL,
    },
  };
};

export default Administradores;
