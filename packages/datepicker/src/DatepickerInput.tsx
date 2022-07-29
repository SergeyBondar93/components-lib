import { MutableRefObject, useMemo } from "react";
import { IInputProps, Input } from "@cheaaa/input";
import { CalendarIcon } from "@cheaaa/icons";

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
}: IDatepickerInputProps) => {
  const value = useMemo(() => {
    return valueProps ? formatDate(valueProps) : "";
  }, [valueProps]);

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
      postfix={<CalendarIcon />}
      shouldFitContent
      {...inputProps}
    />
  );
};
