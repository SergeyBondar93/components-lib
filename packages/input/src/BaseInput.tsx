import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { getClassName } from "@cheaaa/theme";
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
      onClick: onClickProps,
      type,
      isActive,
      ...rest
    },
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    const iternalInputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useCombinedRefs(ref, iternalInputRef);
    const prefixRef = useRef<HTMLSpanElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const isButton = type === "button";

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

    const handleClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
      (e) => {
        if (!disabled) {
          mergedRef.current?.focus();
          onClickProps?.(e);
        }
      },
      [disabled, onClickProps]
    );

    useEffect(() => {
      if (isFocused && isButton) {
        mergedRef.current?.blur();
      }
    }, [isFocused, isButton]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (e) => {
          if (!disabled && !isButton) {
            onChange?.(e.target.value, e);
          }
        },
        [disabled, onChange, isButton]
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

    const dataComponentActiveProp = useMemo(() => {
      if ([true, false].includes(isActive as any)) {
        return {
          "data-component-active": String(!!isActive),
        };
      }

      return {};
    }, [isActive]);

    return (
      <div
        data-shouldfitcontent={String(!!shouldFitContent)}
        /**
         * Стилизация invalid состояния инпута
         */
        data-invalid={String(!!invalid)}
        /**
         * Стилизация valid состояния инпута
         */
        data-valid={String(!!valid)}
        /**
         * Стилизация disabled состояния инпута
         */
        data-disabled={String(!!disabled)}
        /**
         * Стилизация focused состояния инпута
         */
        data-focused={String(!!isFocused)}
        /**
         * Стилизация инпута имеющего value
         */
        data-hasvalue={String(!!value)}
        /**
         * Стилизация инпута с type="button"
         */
        data-type-is-button={String(!!isButton)}
        className={classNames.wrapperClassName}
        onClick={handleClick}
        /**
         * При передаче свойства isActive добавляется свойство data-component-active
         * для управления стилями при активном внешнем компоненте
         * например при открытом Datepicker / Select.
         * Обычно стилизуется как data-focused
         */
        {...dataComponentActiveProp}
        {...wrapperProps}
      >
        {prefix && (
          <span
            /**
             * Стилизация disabled состояния инпута
             */
            data-disabled={String(disabled)}
            ref={prefixRef}
            className={classNames.prefixWrapperClassName}
            onMouseDown={(e) => e.preventDefault()}
            {...dataComponentActiveProp}
            {...prefixProps}
          >
            {prefix}
          </span>
        )}

        <input
          /**
           * Стилизация disabled состояния инпута
           */
          data-disabled={String(!!disabled)}
          /**
           * Стилизация focused состояния инпута
           */
          data-focused={String(!!isFocused)}
          /**
           * Стилизация инпута имеющего value
           */
          data-hasvalue={String(!!value)}
          /**
           * Стилизация invalid состояния инпута
           */
          data-invalid={String(!!invalid)}
          /**
           * Стилизация valid состояния инпута
           */
          data-valid={String(!!valid)}
          /**
           * Стилизация инпута с type="button"
           */
          data-type-is-button={String(!!isButton)}
          {...dataComponentActiveProp}
          className={classNames.inputClassName}
          disabled={disabled}
          ref={mergedRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value ? String(value) : ""}
          onChange={handleChange}
          placeholder={placeholder}
          // при type="button" не показывается placeholder
          // по этому оставляю текстом, убираю каретку и функцию onChange
          type={isButton ? "text" : type}
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
            data-type-is-button={String(!!isButton)}
            className={classNames.labelClassName}
            onMouseDown={(e) => e.preventDefault()}
            {...dataComponentActiveProp}
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
            {...dataComponentActiveProp}
            className={classNames.clearIconClassName}
            onClick={handleClear}
          />
        )}

        {postfix && (
          <span
            data-disabled={String(!!disabled)}
            className={classNames.postfixWrapperClassName}
            onMouseDown={(e) => e.preventDefault()}
            {...dataComponentActiveProp}
            {...postfixProps}
          >
            {postfix}
          </span>
        )}
      </div>
    );
  }
);
