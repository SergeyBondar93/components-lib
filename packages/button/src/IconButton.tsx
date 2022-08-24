import { ReactNode } from "react";

import { BaseButton, IBaseButtonProps } from "./BaseButton";
import { useIconButtonStyles } from "./styles";

type IIconButtonProps<TProps> = IBaseButtonProps<TProps> & {
  icon: ReactNode;
  children?: never;
  component?: React.ComponentType<TProps>;
};

export const IconButton = function <TProps>({
  icon,
  ...props
}: IIconButtonProps<TProps>) {
  const classes = useIconButtonStyles();

  // Прокидывание стилей в пропсах возможно только из ButtonGroups компонента, не из приложения
  return (
    <BaseButton classes={props.classes || classes} {...(props as any)}>
      {icon}
    </BaseButton>
  );
};
