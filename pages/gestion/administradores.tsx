import { IAdministrador } from "../../models/Administrador";
import TablaDeAdministradores from "../../src/gestion/administradores/TablaDeAdministradores";
import obtenerDocumentos from "../../src/gestion/utils/obtenerDocumentos";

interface Props {
  documentos: IAdministrador[];
}
const administradores = ({ documentos }: Props) => {
  return <TablaDeAdministradores administradores={documentos} />;
};

export const getServerSideProps = async () => {
  return await obtenerDocumentos<IAdministrador>(
    "/Administrador/getAdministradores"
  );
};

export default administradores;
