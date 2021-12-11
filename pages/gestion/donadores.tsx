import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../components/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../components/gestion/api/obtenerDocumentos";
import DocsContextProvider from "../../components/gestion/contextos/DocsContextProvider";
import { IApi } from "../../components/gestion/contextos/Interfaces";

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
        `${process.env.API_URL}/Donador/getDonadores`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Donador/deleteDonador`,
        urlPost: `${process.env.API_URL}/Donador/postDonador`,
        urlPut: `${process.env.API_URL}/Donador/updateDonador`,
        urlGet: `${process.env.API_URL}/Donador/getDonadores`,
      },
    },
  };
};

export default Administradores;
