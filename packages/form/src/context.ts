import { createContext, useContext } from "react";

export const formContext = createContext({ formName: "" });

export const FormProvider = formContext.Provider;

export const useFormName = () => {
  return useContext(formContext).formName;
};
