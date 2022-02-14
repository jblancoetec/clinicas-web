import FormRegistrarDonadorTurno from "../components/gestion/formularios/registrar/FormRegistrarDonadorTurno";
import DonadorContextProvider from "../components/gestion/formularios/contextos/DonadorContextProvider";
import { IApi } from "../components/gestion/formularios/contextos/Interfaces";
import moment from "moment";
import obtenerDocumentos from "../components/gestion/services/obtenerDocumentos";

interface Props {
  api: IApi;
  horarios: Date[];
}

const Registro = ({ api, horarios }: Props) => {
  return (
    <DonadorContextProvider api={api} horarios={horarios}>
      <FormRegistrarDonadorTurno />
    </DonadorContextProvider>
  );
};
export const getServerSideProps = async () => {
  const hoy: string = moment().format("YYYY-MM-DD");
  return {
    props: {
      horarios: await obtenerDocumentos<Date>(
        `${process.env.API_URL}/Turno/getTurnos/disponibles/${hoy}`
      ),
      api: {
        urlGet: `${process.env.API_URL}/Turno/getTurnos/disponibles`,
        urlPost: `${process.env.API_URL}/Donador/postDonador/conTurno`,
      },
    },
  };
};

export default Registro;
