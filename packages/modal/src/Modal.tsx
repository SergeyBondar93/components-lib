import { BaseModal, IBaseModalProps } from "./BaseModal";
import { useStyles } from "./styles";

export interface IModalProps extends Omit<IBaseModalProps, "classes"> {}

export const Modal = (props: IModalProps) => {
  const classes = useStyles();

  return <BaseModal {...props} classes={classes} />;
};
