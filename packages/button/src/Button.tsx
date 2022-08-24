import { BaseButton, IBaseButtonProps } from "./BaseButton";
import { useButtonStyles } from "./styles";

export type IButtonProps<TProps> = IBaseButtonProps<TProps>;

export const Button = function <TProps>(props: IButtonProps<TProps>) {
  const classes = useButtonStyles();

  // Прокидывание стилей в пропсах возможно только из ButtonGroups компонента, не из приложения
  return <BaseButton {...props} classes={props.classes || classes} />;
};
