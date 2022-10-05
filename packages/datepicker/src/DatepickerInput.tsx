import { MutableRefObject, useCallback, useMemo } from "react";

import { IInputProps, Input } from "@cheaaa/input";
import { CalendarIcon } from "@cheaaa/icons/CalendarIcon";
import { CrossIcon } from "@cheaaa/icons/CrossIcon";
import { SvgIcon } from "@cheaaa/icons/types";

import { formatDate } from "./utils";

interface IDatepickerInputProps {
  value?: Date;
  onClick: () => void;
  innerRef: MutableRefObject<HTMLInputElement>;
  isOpen: boolean;
  placeholder: string;
  label: string;
  disabled?: boolean;
  inputProps?: IInputProps;
  onClear?: React.DOMAttributes<SVGSVGElement>["onClick"];
  clearIconProps?: SvgIcon;
}

export const DatepickerInput = ({
  value: valueProps,
  placeholder,
  label,
  disabled,
  onClick,
  innerRef,
  isOpen,
  inputProps,
  onClear,
  clearIconProps,
}: IDatepickerInputProps) => {
  const value = useMemo(() => {
    return valueProps ? formatDate(valueProps) : "";
  }, [valueProps]);

  const isClearIcon = onClear && value;

  const postfix = useMemo(() => {
    if (isClearIcon) {
      return <CrossIcon onClick={onClear} {...clearIconProps} />;
    }

    return <CalendarIcon />;
  }, [onClear, isClearIcon, clearIconProps]);

  const postfixProps = useMemo(() => {
    if (isClearIcon) {
      return {
        "data-disabled": false,
        ...inputProps?.postfixProps,
      };
    }

    return inputProps?.postfixProps;
  }, [inputProps?.postfixProps, isClearIcon]);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
    },
    []
  );

  return (
    <Input
      value={value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      onChange={() => {}}
      onClick={onClick}
      type={"button"}
      ref={innerRef}
      isActive={!!isOpen}
      postfix={postfix}
      onMouseDown={onMouseDown}
      shouldFitContent
      {...inputProps}
      postfixProps={postfixProps}
    />
  );
};
