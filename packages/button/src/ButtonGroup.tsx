import React, { ReactElement, ReactNode } from "react";
import { useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";
import { toggleElementInArray } from "@cheaaa/utils";

import { useButtonGroupStyles } from "./styles";
import { ButtonGroupComponentNames } from "./styles/types";
import { ValueType } from "./BaseButton";

type MultiOnChangeFn = (value: ValueType[]) => void;
type SingleOnChangeFn = (value: ValueType | null) => void;

interface IButtonGroupPropsMultiValue {
  onChange: MultiOnChangeFn;

  /**
   * Array<string> При isMultiValue=true, undefined | string при isMultiValue=false
   * Для стилизации используется data attribute {data-selected="true" | | "false"}
   * внутри [BUTTON_GROUP_COMPONENT_NAMESPACE][appearance][BUTTON_GROUP_COMPONENTS_NAMES.button]
   */
  value: ValueType[];
  /**
   * Возможность выбрать несколько значений
   */
  isMultiValue: true;
  children: ReactNode;
}

interface IButtonGroupPropsSingleValue {
  onChange: SingleOnChangeFn;
  appearance?: any;
  /**
   * Array<string> При isMultiValue=true, undefined | string при isMultiValue=false
   * Для стилизации используется data attribute {data-selected="true" | | "false"}
   * внутри [BUTTON_GROUP_COMPONENT_NAMESPACE][appearance][BUTTON_GROUP_COMPONENTS_NAMES.button]
   */
  value: ValueType | null;
  /**
   * Возможность выбрать несколько значений
   */
  isMultiValue?: false;
  children: any;
}

type ButtonGroupProps =
  | IButtonGroupPropsMultiValue
  | IButtonGroupPropsSingleValue;

interface IButtonInButtonGroup {
  /**
   * value значение для управления состоянием isSelected кнопки.
   * передаётся в качестве value в ButtonGroup
   */
  value: ValueType;
  onClick?: () => void;
}

export const ButtonGroup = ({
  baseAppearance = "base",
  appearance = "base",
  children,
  value,
  onChange,
  isMultiValue,
}: ButtonGroupProps & IThemedProps) => {
  const classes = useButtonGroupStyles();

  const className = useMemo(() => {
    return getClassName<ButtonGroupComponentNames>(
      classes!,
      baseAppearance,
      appearance,
      "wrapper"
    );
  }, [classes, baseAppearance, appearance]);

  const buttons = useMemo(() => {
    return React.Children.map(children as ReactElement[], (child) => {
      const { onClick: buttonOnClick, value: buttonValue } =
        child.props as IButtonInButtonGroup;

      const isSelected = isMultiValue
        ? value?.includes(buttonValue)
        : value === buttonValue;

      return React.cloneElement(child, {
        onClick: () => {
          if (isMultiValue) {
            const newValue = toggleElementInArray(
              value as string[],
              buttonValue
            );
            (onChange as MultiOnChangeFn)(newValue);
          } else {
            const newValue = value === buttonValue ? null : buttonValue;
            (onChange as SingleOnChangeFn)(newValue);
          }

          buttonOnClick?.();
        },
        isSelected,
        classes,
      });
    });
  }, [children, isMultiValue, onChange, classes]);

  return <div className={className}>{buttons}</div>;
};
