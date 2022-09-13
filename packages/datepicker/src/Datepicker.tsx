import { BaseAccordion, IAccordionProps } from "@cheaaa/accordion";
import React, {
  MutableRefObject,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useClickOutsideComponents, useCombinedRefs } from "@cheaaa/utils";
import { IThemedProps } from "@cheaaa/theme";
import { IInputProps } from "@cheaaa/input";
import { SvgIcon } from "@cheaaa/icons/types";

import { Calendar, CalendarComponent } from "./Calendar";
import { useStyles } from "./styles";
import { DatepickerInput } from "./DatepickerInput";

export interface IExtraComponentProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
}

export interface IDatepickerProps extends IThemedProps, CalendarComponent {
  /**
   * Для управления Datepicker используется преднастроенный accordion,
   * но так же можно передать свои параметры
   */
  accordionProps?: IAccordionProps;

  /**
   * Для отображения поля ввода используется инпут type="button",
   * но так же можно передать в него свои параметры.
   * label placeholder вынесены в параметры компонента
   */
  inputProps?: Omit<IInputProps, "onChange" | "value"> & {
    ref?: MutableRefObject<HTMLInputElement>;
  };
  placeholder?: string;
  label?: string;

  /**
   * Закрыть ли календарь после выбора значения
   */
  closeAfterSelect?: boolean;

  /**
   * При передаче открывает календарь и наводит фокус на инпут, дальше он опять становится uncontrolled
   */
  isOpen?: boolean;

  /**
   * срабатывает при изменении isOpen
   */
  onChangeIsOpen?: (newIsOpen: boolean) => void;

  /**
   * При наличии value меняет иконку календаря на CrossIcon(крестик)
   * Обработка очистки необходима из приложения.
   * При нажатии на кнопку очистки просто вызывается этот callback
   */
  onClear?: React.DOMAttributes<SVGSVGElement>["onClick"];

  /**
   * Props для иконки крестика при наличии onClear
   */
  clearIconProps?: SvgIcon;

  /**
   * Делает width: 100%
   */
  shouldFitContent?: boolean;

  /**
   * Кастомный компонент над Header
   * В props компонента добавляется setIsOpen, isOpen,
   * для управления состоянием открытия дейтпикера
   */
  headerComponent?: ReactElement<IExtraComponentProps>;

  /**
   * Кастомный компонент под Table
   * В props компонента добавляется setIsOpen, isOpen,
   * для управления состоянием открытия дейтпикера
   */
  footerComponent?: ReactElement<IExtraComponentProps>;
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
  shouldFitContent,

  maxDate,
  minDate,
  openedDate,
  value,
  onChange,
  onChangeIsOpen,
  onClear,
  clearIconProps,

  rangeSelector,
  startDate,
  endDate,
  locale,

  headerComponent,
  footerComponent,
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
    onChangeIsOpen?.(!!isOpen);

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
      onClear,
      clearIconProps,
    };
  }, [
    value,
    placeholder,
    label,
    disabled,
    inputProps,
    isOpen,
    onClear,
    clearIconProps,
  ]);

  useClickOutsideComponents([accordionRef], handleClose);

  const handleChange = useCallback(
    (date: Date) => {
      onChange(date);

      if (closeAfterSelect) {
        setIsOpen(false);
      }
    },
    [onChange, closeAfterSelect]
  );

  const mappedHeaderComponent = useMemo(() => {
    return (
      headerComponent &&
      React.cloneElement(headerComponent, {
        setIsOpen,
        isOpen,
      })
    );
  }, [isOpen, headerComponent]);

  const mappedFooterComponent = useMemo(() => {
    return (
      footerComponent &&
      React.cloneElement(footerComponent, {
        setIsOpen,
        isOpen,
      })
    );
  }, [isOpen, footerComponent]);

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
      shouldFitContent={shouldFitContent}
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
        headerComponent={mappedHeaderComponent}
        footerComponent={mappedFooterComponent}
        rangeSelector={rangeSelector}
        startDate={startDate}
        endDate={endDate}
        locale={locale}
      />
    </BaseAccordion>
  );
};
