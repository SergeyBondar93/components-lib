import { getClassName } from "@cheaaa/theme";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useCombinedRefs } from "@cheaaa/utils";

import { ClearIcon } from "./ClearIcon";
import { ComponentNames } from "./styles/types";
import { IBaseInputProps } from "./types";

export const BaseInput = forwardRef<HTMLInputElement, IBaseInputProps>(
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
      isClearable = false,
      onChange,
      value,
      placeholder = "",
      label = "",
      onFocus,
      onBlur,
      labelProps = {},
      wrapperProps = {},
      prefixProps = {},
      postfixProps = {},
      classes,
      ...rest
    },
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
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
      !disabled && mergedRef.current?.focus();
    }, [disabled]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (e) => {
          !disabled && onChange?.(e.target.value, e);
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
        {...wrapperProps}
      >
        {prefix && (
          <span
            ref={prefixRef}
            className={classNames.prefixWrapperClassName}
            {...prefixProps}
          >
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={String(value)}
          onChange={handleChange}
          placeholder={placeholder}
          {...rest}
        />

        {label && (
          <label
            style={{
              left: floatingLeft,
            }}
            data-disabled={String(!!disabled)}
            data-focused={String(isFocused)}
            data-hasvalue={String(!!value)}
            className={classNames.labelClassName}
            {...labelProps}
          >
            {label}
          </label>
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
          <span
            className={classNames.postfixWrapperClassName}
            {...postfixProps}
          >
            {postfix}
          </span>
        )}
      </div>
    );
  }
);
