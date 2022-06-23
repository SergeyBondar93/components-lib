import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

import { FormProvider } from "./context";

interface IFormProps
  extends PropsWithChildren,
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  formName: string;
}

export const Form = ({ formName, children, ...props }: IFormProps) => {
  return (
    <form {...props} name={formName}>
      <FormProvider value={{ formName }}>{children}</FormProvider>
    </form>
  );
};
