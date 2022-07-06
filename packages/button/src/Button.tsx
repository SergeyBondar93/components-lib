import { BaseButton, IBaseButtonProps } from "./BaseButton";
import { useButtonStyles } from "./styles";

type IButtonProps<TProps> = IBaseButtonProps<TProps>;

export const Button = function <TProps>(props: IButtonProps<TProps>) {
  const classes = useButtonStyles();

  return <BaseButton {...props} classes={classes} />;
};
