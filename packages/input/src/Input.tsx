import { getClassName } from "@cheaaa/theme/src";
import {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { ClearIcon } from "./ClearIcon";
import { useStyles } from "./styles/styles";
import { ComponentNames } from "./styles/types";

export interface IInputProps extends PropsWithChildren {
  baseAppearance?: string;
  appearance?: string;

  prefix?: any;
  postfix?: any;

  isClearable?: boolean;

  shouldFitContent?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

// Добавить маску

export const Input = ({
  baseAppearance = "base",
  appearance = "base",
  disabled,
  shouldFitContent,
  invalid,
  valid,
  prefix,
  postfix,

  type,

  isClearable = false,

  onChange,
  value,
  placeholder = "",

  isFloatingPlaceholder = false,

  onFocus,
  onBlur,
}: IInputProps | any) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = useCallback(() => {
    !disabled && onChange?.("");
  }, [onChange, disabled]);

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      if (!disabled) {
        setIsFocused(true);

        onFocus?.(event);
      }
    },
    [onFocus, disabled]
  );
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      if (!disabled) {
        setIsFocused(false);

        onBlur?.(event);
      }
    },
    [onBlur, disabled]
  );

  const handleClick = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    // TODO скомбинировать рефы с пришедшим из форвард рефа
    !disabled && inputRef.current?.focus();
  }, [disabled]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      !disabled && onChange?.(e.target.value);
    },
    [disabled, onChange]
  );

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
    const prefixWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "prefixWrapper"
    );
    const postfixWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "postfixWrapper"
    );

    const clearIconClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "clearIcon"
    );

    const placeholderClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "placeholder"
    );

    return {
      wrapperClassName,
      inputClassName,
      prefixWrapperClassName,
      postfixWrapperClassName,
      clearIconClassName,
      placeholderClassName,
    };
  }, [classes, baseAppearance, appearance]);

  const [floatingLeft, setFloatingLeft] = useState(0);

  useLayoutEffect(() => {
    const prefixWidth = prefixRef.current?.getBoundingClientRect().width || 0;
    const prefixMarginLeft = prefixRef.current
      ? parseInt(getComputedStyle(prefixRef.current).marginLeft)
      : 0;
    const inputPaddingLeft = inputRef.current
      ? parseInt(getComputedStyle(inputRef.current).paddingLeft)
      : 0;

    const left = inputPaddingLeft + prefixWidth! + prefixMarginLeft;
    setFloatingLeft(left);
  }, [prefix]);

  const isShowPlaceholder = useMemo(() => {
    if (isFloatingPlaceholder) return true;

    return !value && !isFocused;
  }, [isFloatingPlaceholder, value, isFocused]);

  return (
    <div
      data-shouldfitcontent={String(shouldFitContent)}
      data-invalid={String(invalid)}
      data-valid={String(valid)}
      data-disabled={String(disabled)}
      data-focused={String(isFocused)}
      className={classNames.wrapperClassName}
      onClick={handleClick}
    >
      {prefix && (
        <span ref={prefixRef} className={classNames.prefixWrapperClassName}>
          {prefix}
        </span>
      )}

      <input
        data-disabled={String(disabled)}
        className={classNames.inputClassName}
        disabled={disabled}
        ref={inputRef}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name="name"
        value={value}
        onChange={handleChange}
      />

      {isShowPlaceholder && (
        <span
          style={{
            left: floatingLeft,
          }}
          data-focused={String(isFocused)}
          data-hasvalue={String(!!value)}
          className={classNames.placeholderClassName}
        >
          {placeholder}
        </span>
      )}

      {isClearable && (
        <ClearIcon
          data-invalid={String(invalid)}
          data-valid={String(valid)}
          data-disabled={String(disabled)}
          data-focused={String(isFocused)}
          className={classNames.clearIconClassName}
          onClick={handleClear}
        />
      )}

      {postfix && (
        <span className={classNames.postfixWrapperClassName}>{postfix}</span>
      )}
    </div>
  );
};
