import { getClassName, IThemedProps } from "@cheaaa/theme";
import { ReactNode, useCallback, useMemo } from "react";

import { CheckedIcon } from "./CheckedIcon";
import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";

interface ICheckboxProps extends IThemedProps {
  checked: boolean;
  onChange: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
}

export const Checkbox = ({
  baseAppearance = "base",
  appearance = "base",
  checked,
  onChange,
  disabled,
  label,
  checkedIcon,
  uncheckedIcon,
}: ICheckboxProps) => {
  const classes = useStyles();
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
    return checked
      ? checkedIcon || <CheckedIcon fill={"#FFF"} />
      : uncheckedIcon || null;
  }, [checked, checkedIcon, uncheckedIcon]);

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
    const inputClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "input"
    );
    const iconWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "iconWrapper"
    );
    const labelClassName = getClassName<ComponentNames>(
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
        checked={checked}
        disabled={disabled}
        onClick={handleClick}
        onChange={handleInputChange}
      />
      <div
        className={classNames.iconWrapperClassName}
        data-checked={String(!!checked)}
      >
        {icon}
      </div>
      {label && <span className={classNames.labelClassName}>{label}</span>}
    </label>
  );
};
