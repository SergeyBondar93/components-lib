import { Classes } from "jss";
import { ReactNode, useCallback, useMemo } from "react";

import { getClassName, IThemedProps } from "@cheaaa/theme";

import { CheckedIcon } from "./CheckedIcon";
import { CheckboxComponentNames } from "./styles/types";

export interface IBaseCheckboxProps extends IThemedProps {
  value: boolean;
  onChange: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: ReactNode;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  classes: Classes<string>;
}

export const CheckboxBase = ({
  baseAppearance = "base",
  appearance = "base",
  value,
  onChange,
  disabled,
  label,
  checkedIcon,
  uncheckedIcon,
  classes,
}: IBaseCheckboxProps) => {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked, e);
    },
    [onChange]
  );

  const handleClick = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation();
  }, []);

  const icon = useMemo(() => {
    return value
      ? checkedIcon || <CheckedIcon fill={"#FFF"} />
      : uncheckedIcon || null;
  }, [value, checkedIcon, uncheckedIcon]);

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<CheckboxComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
    const inputClassName = getClassName<CheckboxComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "input"
    );
    const iconWrapperClassName = getClassName<CheckboxComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "iconWrapper"
    );
    const labelClassName = getClassName<CheckboxComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "label"
    );

    return {
      wrapperClassName,
      inputClassName,
      iconWrapperClassName,
      labelClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <label
      className={classNames.wrapperClassName}
      onClick={handleClick}
      data-disabled={String(!!disabled)}
    >
      <input
        className={classNames.inputClassName}
        style={{
          display: "none",
        }}
        type={"checkbox"}
        checked={value}
        disabled={disabled}
        onClick={handleClick}
        onChange={handleInputChange}
      />
      <div
        className={classNames.iconWrapperClassName}
        data-checked={String(!!value)}
      >
        {icon}
      </div>
      {label && <span className={classNames.labelClassName}>{label}</span>}
    </label>
  );
};
