import { getClassName } from "@cheaaa/theme";
import { ReactNode, useCallback, useMemo } from "react";
import { IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles/styles";
import { ComponentNames } from "./styles/types";

export type ButtonTags = "button" | "span" | "a";

export type IButtonProps<TProps> = TProps &
  IThemedProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    href?: string;
    type?: "button" | "reset" | "submit";
    children: ReactNode;
    /**
     * Кастомный компонент, например Link from react-router
     */
    component?: React.ComponentType<TProps>;

    /**
     * Делает width: 100%
     */
    shouldFitContent?: boolean;
    disabled?: boolean;
  };

export const getElement = (disabled?: boolean, href?: string): ButtonTags => {
  if (href) {
    return disabled ? "span" : "a";
  }

  return "button";
};

export const Button = function <TProps>({
  baseAppearance = "base",
  appearance = "base",
  type = "button",
  component: Component,
  disabled,
  href,
  onClick: onClickProps,
  shouldFitContent,
  ...props
}: IButtonProps<TProps>): React.ReactElement<TProps> {
  const classes = useStyles();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      !disabled && onClickProps?.(e),
    [disabled, onClickProps]
  );

  const Element = useMemo(
    () => Component ?? getElement(disabled, href),
    [Component, disabled, href]
  );

  const className = useMemo(() => {
    return getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
  }, [classes, baseAppearance, appearance]);

  return (
    <Element
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      href={disabled ? undefined : href}
      shouldfitcontent={String(!!shouldFitContent)}
      {...(props as any)}
    />
  );
};
