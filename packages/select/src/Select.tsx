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

import { Input } from "../../input/src";

import { ComponentNames, useStyles } from "./styles";
import { defaultFilterFunction, isActive, scrollIntoView } from "./utils";
import { Option, OptionValue, SelectProps } from "./types";

/**
isOpen = false
defaultValue
isMulti = false

isCloseOnSelect
isCloseOnRemove

components = {
    SelectedItem
    UnselectedItem
}

withRemoveIcon

options = []

onChange

value

inputProps

disabled

isOptionDisabled = (option, selectedValue) => boolean


isOptionSelected? = (option, selectedValue) => boolean подумать


filterFunction = функция вызываемая для фильтра, для изменения условий поиска

noOptionsMessage = ''
selectedHeader = '',
unselectedHeader = ''

*/

export const Select = ({
  baseAppearance = "base",
  appearance = "base",
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
  inputProps = {},
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
  const [activeValue, setActiveValue] = useState<OptionValue | null>(null);
  const [searchString, setSearchString] = useState("");
  const [isOpen, setIsOpen] = useState(isOpenProps);

  useEffect(() => {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);

  const handleChangeInput = (inputValue: string) => {
    setSearchString(inputValue);
  };

  const handleSelectOption = useCallback(
    (optionValue, type: "select" | "remove") => {
      let newValue: any = null;

      if (isMulti) {
        newValue = toggleElementInArray(value as OptionValue[], optionValue);
      } else {
        newValue = optionValue === value ? "" : optionValue;
      }

      onChange(newValue);

      setSearchString("");

      const isClosed = type === "select" ? isCloseOnSelect : isCloseOnRemove;

      setIsOpen(!isClosed);
    },
    [value, isMulti, isCloseOnSelect, isCloseOnRemove]
  );

  const { selectedOptions, unselectedOptions } = useMemo(() => {
    const selected: Option[] = [];
    const unselected: Option[] = [];

    options.forEach((option) => {
      if (isMulti) {
        if ((value as OptionValue[]).includes(option.value)) {
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
    return filterFunction
      ? filterFunction(searchString, { selectedOptions, unselectedOptions })
      : unselectedOptions.filter(defaultFilterFunction(searchString));
  }, [unselectedOptions, searchString, filterFunction]);

  const handleFocusInput = useCallback(() => {
    setSearchString("");
    setIsOpen(true);
    setActiveValue(null);
  }, []);

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
      ? (value as OptionValue[]).map((v) => optionsObject[v]).join(", ")
      : optionsObject[value as OptionValue] || "";
  }, [value, isMulti, optionsObject]);

  const inputValue = useMemo(() => {
    if (isOpen) {
      return searchString;
    } else {
      return formattedValue;
    }
  }, [searchString, formattedValue, isOpen]);

  const inputPlaceholder = useMemo(() => {
    if (isOpen && value?.length) {
      return formattedValue;
    } else {
      return placeholder;
    }
  }, [isOpen, value, formattedValue, placeholder]);

  const inputLabelProps = useMemo(() => {
    return {
      "data-select-open": String(!!isOpen),
      ...(inputProps.labelProps || {}),
    };
  }, [inputProps.labelProps, isOpen]);

  const inputWrapperProps = useMemo(() => {
    return {
      "data-select-open": String(!!isOpen),
      ...(inputProps.wrapperProps || {}),
    };
  }, [inputProps.wrapperProps, isOpen]);

  const classNames = useMemo(() => {
    const wrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "wrapper"
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

  const handleMouseOver = (value: OptionValue) => {
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
          handleSelectOption(activeValue, isSelected ? "remove" : "select");
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
    // вызов происходит дважды, попробовать убрать
    handleSelectOption,
    isOpen,
    activeValue,
    selectedOptions,
    filteredOptions,
  ]);

  return (
    <div ref={wrapperRef} className={classNames.wrapperClassName}>
      <Input
        shouldFitContent
        value={inputValue}
        placeholder={inputPlaceholder}
        label={label}
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        {...inputProps}
        data-select-open={String(!!isOpen)}
        wrapperProps={inputWrapperProps}
        labelProps={inputLabelProps}
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
                {selectedOptions.map(({ value, label }, i) => {
                  const ref = optionsRefs.current[i];

                  return (
                    <div
                      className={classNames.listItemClassName}
                      onMouseDown={() => handleSelectOption(value, "remove")}
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      data-active={String(isActive(value, activeValue))}
                      ref={ref}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* TODO опцию в отдельный компонент */}
          <div className={classNames.groupWrapperClassName}>
            <div className={classNames.groupHeaderClassName}>
              {unselectedHeader}
            </div>
            <div ref={unselectedListRef} className={classNames.listClassName}>
              {filteredOptions.length ? (
                filteredOptions.map(({ value, label }, i) => {
                  const ref = optionsRefs.current[selectedOptions.length + i];

                  return (
                    <div
                      className={classNames.listItemClassName}
                      onMouseDown={() => handleSelectOption(value, "select")}
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      data-active={String(isActive(value, activeValue))}
                      ref={ref}
                    >
                      <span>{label}</span>
                    </div>
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
