import { BaseAccordion, IAccordionProps } from "@cheaaa/accordion";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useClickOutsideComponent, useCombinedRefs } from "@cheaaa/utils";
import { IThemedProps } from "@cheaaa/theme";
import { IInputProps } from "@cheaaa/input";

import { Calendar } from "./Calendar";
import { useStyles } from "./styles";
import { DatepickerInput } from "./DatepickerInput";

interface IDatepickerProps extends IThemedProps {
  accordionProps?: IAccordionProps;
  inputProps?: Omit<IInputProps, "onChange" | "value"> & {
    ref?: MutableRefObject<HTMLInputElement>;
  };
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  closeAfterSelect?: boolean;
  isOpen?: boolean;

  maxDate?: Date;
  minDate?: Date;
  openedDate?: Date;
  value?: Date;
  onChange: (date: Date) => void;
}

export const Datepicker = ({
  baseAppearance = "base",
  appearance = "base",

  accordionProps,
  inputProps = {},
  placeholder = "Дата",
  label = "Выберите дату",
  disabled,
  closeAfterSelect = true,
  isOpen: isOpenProps,

  maxDate,
  minDate,
  openedDate,
  value,
  onChange,
}: IDatepickerProps) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(isOpenProps);
  const accordionRef = useRef<HTMLDivElement>(null);
  const iternalInputRef = useRef<HTMLInputElement>(null);
  const mergedInputRef = useCombinedRefs(inputProps?.ref, iternalInputRef);

  useEffect(() => {
    setIsOpen(isOpenProps);

    if (isOpenProps) {
      mergedInputRef.current?.focus();
    }
  }, [isOpenProps]);

  useEffect(() => {
    if (!isOpen) {
      mergedInputRef.current?.blur();
    }
  }, [isOpen]);

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
      isOpen,
    };
  }, [value, placeholder, label, disabled, inputProps, isOpen]);

  useClickOutsideComponent(accordionRef, handleClose);

  const handleChange = useCallback(
    (date: Date) => {
      onChange(date);

      if (closeAfterSelect) {
        setIsOpen(false);
      }
    },
    [onChange, closeAfterSelect]
  );

  return (
    <BaseAccordion
      baseAppearance={baseAppearance}
      appearance={appearance}
      isOpen={isOpen}
      classes={classes}
      titleButtonProps={titleButtonProps}
      ref={accordionRef}
      animationDuration="0.0s"
      defaultTitleButtonAppearance=""
      {...accordionProps}
    >
      <Calendar
        value={value}
        onChange={handleChange}
        maxDate={maxDate}
        minDate={minDate}
        openedDate={openedDate}
        baseAppearance={baseAppearance}
        appearance={appearance}
      />
    </BaseAccordion>
  );
};
