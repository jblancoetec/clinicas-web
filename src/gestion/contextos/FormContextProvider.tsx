import { createContext } from "react";
import { useForm } from "react-hook-form";

interface IContext {
  register: any;
  handleSubmit: any;
  errors: any;
}
export const FormContext = createContext({});

interface Props {
  children: React.ReactNode;
}
const FormContextProvider = <T,>({ children }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const contextoInicial: IContext = {
    register,
    handleSubmit,
    errors,
  };
  return (
    <FormContext.Provider value={contextoInicial}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
