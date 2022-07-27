import { BaseAccordion } from "@cheaaa/accordion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useClickOutsideComponent, useCombinedRefs } from "@cheaaa/utils";

import { Input } from "../../input";

import { Calendar } from "./Calendar";
import { formatDate } from "./utils";
import { useStyles } from "./styles";

const DatepickerInput = ({
  value: valueProps = "",
  placeholder = "Дата",
  label = "Выберите дату",
  disabled,
  onClick,
  innerRef,
  inputProps,
}) => {
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
      {...inputProps}
    />
  );
};

export const Datepicker = ({
  accordionProps,
  inputProps = {},
  placeholder,
  label,
  disabled,
  closeAfterSelect = true,
  isOpen: isOpenProps,

  maxDate,
  minDate,
  openedDate,
  value,
  onChange,
}: any) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(isOpenProps);
  const accordionRef = useRef<HTMLDivElement>(null);
  const iternalInputRef = useRef<HTMLInputElement>(null);
  const mergedInputRef = useCombinedRefs(inputProps.ref, iternalInputRef);

  useEffect(() => {
    setIsOpen(isOpenProps);

    if (isOpenProps) {
      mergedInputRef.current?.focus();
    }
  }, [isOpenProps]);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const titleButtonProps = useMemo(() => {
    return {
      component: DatepickerInput,
      value,
      placeholder,
      label,
      disabled,
      onClick: toggleOpen,
      inputProps,
      innerRef: mergedInputRef,
    };
  }, [value, placeholder, label, disabled, inputProps]);

  useClickOutsideComponent(accordionRef, handleClose);

  const handleChange = useCallback(
    (...args) => {
      if (closeAfterSelect) {
        setIsOpen(false);
        onChange(...args);
      }
    },
    [onChange, closeAfterSelect]
  );

  return (
    <BaseAccordion
      isOpen={isOpen}
      classes={classes}
      titleButtonProps={titleButtonProps}
      ref={accordionRef}
      animationDuration="0.0s"
      {...accordionProps}
    >
      <Calendar
        value={value}
        onChange={handleChange}
        maxDate={maxDate}
        minDate={minDate}
        openedDate={openedDate}
      />
    </BaseAccordion>
  );
};
