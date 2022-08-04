import { toggleElementInArray, useClickOutsideComponent } from "@cheaaa/utils";
import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getClassName } from "@cheaaa/theme";
import { Input } from "@cheaaa/input";
import { TriangleIcon } from "@cheaaa/icons";

import {
  ComponentNames,
  DEFAULT_SELECT_INPUT_APPEARANCE,
  useStyles,
} from "./styles";
import { defaultFilterFunction, scrollIntoView } from "./utils";
import {
  HandleSelectFunction,
  SelectOption,
  SelectOptionValue,
  SelectProps,
} from "./types";
import { Option } from "./Option";

export const Select = ({
  baseAppearance = "base",
  appearance = "base",
  shouldFitContent,
  disabled = false,
  isMulti = true,
  isOpen: isOpenProps = false,

  options,
  value,
  onChange,
  isCloseOnSelect = true,
  isCloseOnRemove = false,

  label,
  placeholder,
  selectedHeader,
  unselectedHeader,
  noOptionsMessage = "Ничего не найдено",
  inputProps: {
    onFocus: onFocusInput,
    onChange: onChangeInput,
    onBlur: onBlurInput,
    ...inputProps
  } = {},
  isOptionDisabledFunction,
  filterFunction,
}: SelectProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedListRef = useRef<HTMLDivElement>(null);
  const unselectedListRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsRefs = useRef(
    new Array(options.length).fill(null).map(() => createRef<HTMLDivElement>())
  );

  const classes = useStyles();
  const [activeValue, setActiveValue] = useState<SelectOptionValue | null>(
    null
  );
  const [searchString, setSearchString] = useState("");
  const [isOpen, setIsOpen] = useState(isOpenProps);

  useEffect(() => {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);

  const handleChangeInput = (inputValue: string) => {
    setSearchString(inputValue);
    onChangeInput?.(inputValue);
  };

  const handleSelectOption: HandleSelectFunction = useCallback(
    ({ optionValue, disabled, type }) => {
      if (disabled) return;

      let newValue: any = null;

      if (isMulti) {
        newValue = toggleElementInArray(
          value as SelectOptionValue[],
          optionValue
        );
      } else {
        newValue = optionValue === value ? "" : optionValue;
      }

      onChange(newValue, { type, optionValue });

      setSearchString("");

      const isClosed = type === "select" ? isCloseOnSelect : isCloseOnRemove;

      setIsOpen(!isClosed);
      setActiveValue(null);
    },
    [value, isMulti, isCloseOnSelect, isCloseOnRemove, onChange]
  );

  const { selectedOptions, unselectedOptions } = useMemo(() => {
    const selected: SelectOption[] = [];
    const unselected: SelectOption[] = [];

    options.forEach((option) => {
      if (isMulti) {
        if ((value as SelectOptionValue[]).includes(option.value)) {
          selected.push(option);
        } else {
          unselected.push(option);
        }
      } else {
        if (value === option.value) {
          selected.push(option);
        } else {
          unselected.push(option);
        }
      }
    });

    return {
      selectedOptions: selected,
      unselectedOptions: unselected,
    };
  }, [value, isMulti, options]);

  const filteredOptions = useMemo(() => {
    const filteredOpts = filterFunction
      ? filterFunction(searchString, { selectedOptions, unselectedOptions })
      : unselectedOptions.filter(defaultFilterFunction(searchString));

    const withDisabled = isOptionDisabledFunction
      ? filteredOpts.map((option) => ({
          ...option,
          disabled: isOptionDisabledFunction({
            option,
            searchString,
            selectedOptions,
            unselectedOptions,
          }),
        }))
      : filteredOpts;

    return withDisabled;
  }, [
    selectedOptions,
    unselectedOptions,
    searchString,
    filterFunction,
    isOptionDisabledFunction,
  ]);

  const handleFocusInput: React.FocusEventHandler<HTMLElement> = useCallback(
    (...args) => {
      setSearchString("");
      setIsOpen(true);
      setActiveValue(null);
      onFocusInput?.(...args);
    },
    [onFocusInput]
  );

  const handleClose = useCallback(() => {
    setSearchString("");
    setIsOpen(false);
    setActiveValue(null);
  }, []);

  useClickOutsideComponent(wrapperRef, handleClose);

  const optionsObject = useMemo(() => {
    return options.reduce(
      (acc, { value, label }) => ({ ...acc, [value]: label }),
      {}
    );
  }, [options]);

  const formattedValue = useMemo(() => {
    return isMulti
      ? (value as SelectOptionValue[])
          .map((v) => optionsObject[v])
          .filter((v) => v !== undefined)
          .join(", ")
      : optionsObject[value as SelectOptionValue] || "";
  }, [value, isMulti, optionsObject]);

  const inputValue = useMemo(() => {
    if (isOpen) {
      return searchString;
    } else {
      return formattedValue;
    }
  }, [searchString, formattedValue, isOpen]);

  const inputPlaceholder = useMemo(() => {
    if (isOpen && formattedValue?.length) {
      return formattedValue;
    } else {
      return placeholder;
    }
  }, [isOpen, formattedValue, placeholder]);

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
    );
    const iconClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "icon"
    );
    const dropdownClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "dropdown"
    );
    const groupWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "groupWrapper"
    );
    const groupHeaderClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "groupHeader"
    );
    const listClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "list"
    );
    const listItemClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "listItem"
    );
    const noOptionsMessageItemClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "noOptionsMessage"
    );

    return {
      wrapperClassName,
      iconClassName,
      dropdownClassName,
      groupWrapperClassName,
      groupHeaderClassName,
      listClassName,
      listItemClassName,
      noOptionsMessageItemClassName,
    };
  }, [classes, baseAppearance, appearance]);

  const handleMouseLeave = () => {
    setActiveValue(null);
  };

  const handleMouseOver = (value: SelectOptionValue) => {
    setActiveValue(value);
  };

  useEffect(() => {
    const visibleOptionsValues = [...selectedOptions, ...filteredOptions].map(
      (option) => option.value
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const activeValueIndex = visibleOptionsValues.findIndex(
        (optionValue) => optionValue === activeValue
      );
      const isFirst = activeValueIndex === 0;
      const isLast = activeValueIndex === visibleOptionsValues.length - 1;
      const isSelected = selectedOptions.some(
        (option) => option.value === activeValue
      );
      const lastIndex = visibleOptionsValues.length - 1;

      let nextActiveIndex: number | null = null;

      switch (e.key) {
        case "Enter":
          if (!activeValue) return;

          const disabled = filteredOptions.find(
            (option) => option.value === activeValue
          )?.disabled;

          handleSelectOption({
            optionValue: activeValue,
            type: isSelected ? "remove" : "select",
            disabled: !!disabled,
          });
          inputRef.current?.blur();
          break;
        case "Escape":
          inputRef.current?.blur();
          handleClose();
          break;

        case "ArrowUp": {
          if (activeValueIndex === -1) {
            nextActiveIndex = lastIndex;
          } else {
            nextActiveIndex = isFirst ? lastIndex : activeValueIndex - 1;
          }

          break;
        }
        case "ArrowDown": {
          if (activeValueIndex === -1) {
            nextActiveIndex = 0;
          } else {
            nextActiveIndex = isLast ? 0 : activeValueIndex + 1;
          }

          break;
        }
      }

      switch (e.key) {
        case "ArrowUp":
        case "ArrowDown":
          const newActiveValue = visibleOptionsValues[nextActiveIndex!];
          setActiveValue(newActiveValue);
          const newActiveRef = optionsRefs.current[nextActiveIndex!];

          const newIsSelected = selectedOptions.some(
            (option) => option.value === newActiveValue
          );

          const listRef = newIsSelected ? selectedListRef : unselectedListRef;

          scrollIntoView(listRef.current, newActiveRef.current);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    handleSelectOption,
    isOpen,
    activeValue,
    selectedOptions,
    filteredOptions,
  ]);

  return (
    <div
      ref={wrapperRef}
      className={classNames.wrapperClassName}
      data-shouldfitcontent={String(!!shouldFitContent)}
    >
      <Input
        shouldFitContent
        value={inputValue}
        placeholder={inputPlaceholder}
        label={label}
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        onBlur={onBlurInput}
        appearance={DEFAULT_SELECT_INPUT_APPEARANCE}
        postfix={
          <TriangleIcon
            data-is-open={String(!!isOpen)}
            className={classNames.iconClassName}
          />
        }
        isActive={!!isOpen}
        {...inputProps}
        ref={inputRef}
        disabled={disabled}
      />

      {isOpen && (
        <div className={classNames.dropdownClassName}>
          {!!selectedOptions.length && (
            <div className={classNames.groupWrapperClassName}>
              <div className={classNames.groupHeaderClassName}>
                {selectedHeader}
              </div>
              <div ref={selectedListRef} className={classNames.listClassName}>
                {selectedOptions.map(({ value, label }, index) => {
                  const ref = optionsRefs.current[index];

                  return (
                    <Option
                      isRemovable
                      key={value}
                      label={label}
                      activeValue={activeValue}
                      value={value}
                      index={index}
                      onClick={() =>
                        handleSelectOption({
                          optionValue: value,
                          disabled: false,
                          type: "remove",
                        })
                      }
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      ref={ref}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <div className={classNames.groupWrapperClassName}>
            <div className={classNames.groupHeaderClassName}>
              {unselectedHeader}
            </div>
            <div ref={unselectedListRef} className={classNames.listClassName}>
              {filteredOptions.length ? (
                filteredOptions.map(({ value, label, disabled }, index) => {
                  const ref =
                    optionsRefs.current[selectedOptions.length + index];

                  return (
                    <Option
                      disabled={disabled}
                      key={value}
                      label={label}
                      activeValue={activeValue}
                      value={value}
                      index={index}
                      onClick={() =>
                        handleSelectOption({
                          optionValue: value,
                          disabled: !!disabled,
                          type: "select",
                        })
                      }
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      ref={ref}
                    />
                  );
                })
              ) : (
                <div className={classNames.noOptionsMessageItemClassName}>
                  {noOptionsMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
