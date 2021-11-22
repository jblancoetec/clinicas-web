import { IDonador } from "../../models/Donador";
import TablaDeDonadores from "../../src/gestion/donadores/TablaDeDonadores";
import obtenerDocumentos from "../../src/gestion/api/obtenerDocumentos";
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
        `${process.env.API_URL}/Donador/getDonadores`
      ),
      api: {
        urlDelete: `${process.env.API_URL}/Donador/deleteDonador`,
        urlPost: `${process.env.API_URL}/Donador/postDonador`,
        urlPut: `${process.env.API_URL}/Donador/putDonador`,
        urlGet: `${process.env.API_URL}/Donador/getDonadores`,
      },
    },
  };
};

export default Administradores;
