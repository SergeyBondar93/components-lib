import { getClassName } from "@cheaaa/theme";
import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useCombinedRefs } from "@cheaaa/utils";

import { ClearIcon } from "./ClearIcon";
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

export const BaseInput = forwardRef(
  (
    {
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
      label = "",
      onFocus,
      onBlur,
      labelProps = {},
      classes,
      ...rest
    }: IInputProps | any,
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    // const classes = useStyles();
    const iternalInputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useCombinedRefs(ref, iternalInputRef);
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
      !disabled && mergedRef.current?.focus();
    }, [disabled]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
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

      const labelClassName = getClassName<ComponentNames>(
        classes,
        baseAppearance,
        appearance,
        "label"
      );

      return {
        wrapperClassName,
        inputClassName,
        prefixWrapperClassName,
        postfixWrapperClassName,
        clearIconClassName,
        labelClassName,
      };
    }, [classes, baseAppearance, appearance]);

    const [floatingLeft, setFloatingLeft] = useState(0);

    useEffect(() => {
      const prefixWidth = prefixRef.current?.getBoundingClientRect().width || 0;
      const prefixMarginLeft = prefixRef.current
        ? parseInt(getComputedStyle(prefixRef.current).marginLeft)
        : 0;
      const inputPaddingLeft = mergedRef.current
        ? parseInt(getComputedStyle(mergedRef.current as any).paddingLeft)
        : 0;

      const left = inputPaddingLeft + prefixWidth! + prefixMarginLeft;
      setFloatingLeft(left);
    }, [prefix]);

    return (
      <div
        data-shouldfitcontent={String(!!shouldFitContent)}
        data-invalid={String(!!invalid)}
        data-valid={String(!!valid)}
        data-disabled={String(!!disabled)}
        data-focused={String(!!isFocused)}
        data-hasvalue={String(!!value)}
        className={classNames.wrapperClassName}
        onClick={handleClick}
      >
        {prefix && (
          <span ref={prefixRef} className={classNames.prefixWrapperClassName}>
            {prefix}
          </span>
        )}

        <input
          data-disabled={String(!!disabled)}
          data-focused={String(!!isFocused)}
          data-hasvalue={String(!!value)}
          data-invalid={String(!!invalid)}
          data-valid={String(!!valid)}
          className={classNames.inputClassName}
          disabled={disabled}
          ref={mergedRef}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="name"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...rest}
        />

        {label && (
          <span
            style={{
              left: floatingLeft,
            }}
            data-focused={String(isFocused)}
            data-hasvalue={String(!!value)}
            className={classNames.labelClassName}
            {...labelProps}
          >
            {label}
          </span>
        )}

        {isClearable && (
          <ClearIcon
            data-invalid={String(invalid)}
            data-valid={String(valid)}
            data-disabled={String(disabled)}
            data-focused={String(isFocused)}
            data-hasvalue={String(!!value)}
            className={classNames.clearIconClassName}
            onClick={handleClear}
          />
        )}

        {postfix && (
          <span className={classNames.postfixWrapperClassName}>{postfix}</span>
        )}
      </div>
    );
  }
);
