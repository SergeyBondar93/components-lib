import { CheckboxBase, IBaseCheckboxProps } from "./CheckboxBase";
import { useCheckboxStyles } from "./styles";

export interface ICheckboxProps extends Omit<IBaseCheckboxProps, "classes"> {}

export const Checkbox = (props: ICheckboxProps) => {
  const classes = useCheckboxStyles();

  return <CheckboxBase {...props} classes={classes} />;
};
