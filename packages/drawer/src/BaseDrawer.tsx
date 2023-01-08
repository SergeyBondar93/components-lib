import { FC } from "react";

import { BaseModal, IModalProps } from "@cheaaa/modal";

import { useStyles } from "./styles";

export interface IBaseDrawerProps extends IModalProps {}

export const BaseDrawer: FC<IBaseDrawerProps> = (props) => {
  const classes = useStyles();

  return <BaseModal classes={classes} {...props} />;
};
