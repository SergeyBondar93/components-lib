import { ReactNode, useCallback, useMemo } from "react";
import { Classes } from "jss";

import { getClassName } from "@cheaaa/theme";
import { IThemedProps } from "@cheaaa/theme";

import { ButtonComponentNames } from "./styles/types";

export type ButtonTags = "button" | "span" | "a";

export type ValueType = string | number | boolean | any;

export type IBaseButtonProps<TProps> = TProps &
  IThemedProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    href?: string;
    type?: "button" | "reset" | "submit";
    children?: ReactNode;
    /**
     * Кастомный компонент, например Link from react-router
     */
    component?: React.ComponentType<TProps>;

    /**
     * Делает width: 100%
     */
    shouldFitContent?: boolean;

    /**
     * Добавляет disabled, и всегда в дополнение существует data-disabled={String(!!disabled)}
     * для стилизации disabled кастомных компонентов
     */
    disabled?: boolean;

    /**
     * value значение для управления состоянием isSelected кнопки.
     * передаётся в качестве value в ButtonGroup
     */
    value?: ValueType;
    /**
     * Добавляет data-selected={String(!!isSelected)}
     * для стилизации "включенных" кнопок
     */
    isSelected?: boolean;

    /**
     * Стоит ли передать appearances в переданный component
     * @default true
     */
    passAppearancesToComponent?: boolean;

    classes?: Classes<string>;
  };

export const getElement = (disabled?: boolean, href?: string): ButtonTags => {
  if (href) {
    return disabled ? "span" : "a";
  }

  return "button";
};

export const BaseButton = function <TProps>({
  baseAppearance = "base",
  appearance = "base",
  type = "button",
  component: Component,
  disabled,
  isSelected,
  href,
  onClick: onClickProps,
  shouldFitContent,
  classes,
  passAppearancesToComponent = true,
  ...props
}: IBaseButtonProps<TProps>): React.ReactElement<TProps> {
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
    return getClassName<ButtonComponentNames>(
      classes!,
      baseAppearance,
      appearance,
      "button"
    );
  }, [classes, baseAppearance, appearance]);

  return (
    <Element
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      data-shouldfitcontent={String(!!shouldFitContent)}
      data-disabled={String(!!disabled)}
      data-selected={String(!!isSelected)}
      href={disabled ? undefined : href}
      {...(Component && passAppearancesToComponent
        ? { appearance, baseAppearance }
        : {})}
      {...(props as any)}
    />
  );
};
