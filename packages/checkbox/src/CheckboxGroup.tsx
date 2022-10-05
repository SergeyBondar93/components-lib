import { useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";
import { toggleElementInArray } from "@cheaaa/utils";

import { Checkbox, ICheckboxProps } from "./Checkbox";
import { useCheckboxStyles } from "./styles";
import { CheckboxComponentNames } from "./styles/types";

export interface ICheckboxGroupOptions
  extends Omit<ICheckboxProps, "value" | "onChange"> {
  value: string;
  onChange?: (clickedBy: string) => void;
}

export interface ICheckboxGroupProps extends IThemedProps {
  value: string[];
  onChange: (newValue: string[], clickedBy: string) => void;
  options: ICheckboxGroupOptions[];
}

export const CheckboxGroup = ({
  baseAppearance = "base",
  appearance = "base",
  value,
  onChange,
  options,
  ...props
}: ICheckboxGroupProps) => {
  const classes = useCheckboxStyles();

  const className = useMemo(() => {
    return getClassName<CheckboxComponentNames>(
      classes!,
      baseAppearance,
      appearance,
      "groupWrapper"
    );
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={className}>
      {options.map((option) => {
        const { onChange: checkboxOnChange, value: checkboxValue } = option;

        const isSelected = value.includes(checkboxValue);

        const handleChange = () => {
          const newValue = toggleElementInArray(value, checkboxValue);
          checkboxOnChange?.(checkboxValue);
          onChange(newValue, checkboxValue);
        };

        return (
          <Checkbox
            key={checkboxValue}
            {...option}
            onChange={handleChange}
            value={isSelected}
            {...props}
          />
        );
      })}
    </div>
  );
};
