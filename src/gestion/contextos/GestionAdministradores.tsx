import { ObjectId } from "mongoose";
import { createContext, useState } from "react";
import { IAdministrador } from "../../../models/Administrador";
import eliminarDocumento from "../utils/eliminarDocumento";

interface IContexto {
  api: string;
  administradores: IAdministrador[];
  agregarAdministrador: (administrador: IAdministrador) => void;
  eliminarAdministrador: (id: ObjectId) => void;
  editarAdministrador: (administrador: IAdministrador) => void;
}

export const AdminContext = createContext<IContexto>({
  api: "",
  administradores: [],
  agregarAdministrador: () => {},
  eliminarAdministrador: () => {},
  editarAdministrador: () => {},
});

interface Props {
  api: string;
  documentos: IAdministrador[];
  children: React.ReactNode;
}

const GestionAdministradores = ({ api, documentos, children }: Props) => {
  const [administradores, setAdministradores] = useState(documentos);

  const eliminarAdministrador = (id: ObjectId) => {
    eliminarDocumento(`${api}/Administrador/deleteAdministrador/${id}`);
    return setAdministradores(
      administradores.filter((administrador) => administrador._id !== id)
    );
  };

  const agregarAdministrador = (administrador: IAdministrador) => {
    return setAdministradores([...administradores, administrador]);
  };

  const editarAdministrador = (administrador: IAdministrador) => {
    return setAdministradores(
      administradores.map((administradorActual) =>
        administradorActual._id === administrador._id
          ? administrador
          : administradorActual
      )
    );
  };

  const contextoInicial: IContexto = {
    api,
    administradores,
    eliminarAdministrador,
    agregarAdministrador,
    editarAdministrador,
  };

  return (
    <AdminContext.Provider value={contextoInicial}>
      {children}
    </AdminContext.Provider>
  );
};
export default GestionAdministradores;
