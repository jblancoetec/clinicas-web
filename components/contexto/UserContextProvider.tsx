import { createContext, useContext, useState } from "react";

interface IContexto {
  usuarioAprobado: boolean;
  aprobarUsuario: (aprobado: boolean) => void;
}

export const UserContext = createContext<IContexto>({
  usuarioAprobado: false,
  aprobarUsuario: () => {},
});

export const useUserContext = () => useContext(UserContext);

interface Props {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [aprobado, setAprobado] = useState(false);
  const aprobarUsuario = () => setAprobado(true);

  const contexto: IContexto = {
    usuarioAprobado: aprobado,
    aprobarUsuario,
  };

  return (
    <UserContext.Provider value={contexto}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
