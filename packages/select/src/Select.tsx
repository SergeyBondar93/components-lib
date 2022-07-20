import { toggleElementInArray, useClickOutsideComponent } from "@cheaaa/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getClassName } from "@cheaaa/theme";

import { Input } from "../../input/src";

import { ComponentNames, useStyles } from "./styles";
import { isActive, scrollIntoView } from "./utils";

/**
    DEFAULT_SELECT_INPUT_APPEARANCE

*/

/**
components = {
    wrapper
    inputWrapper
}
* 
 */

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
  isOpen: isOpenProps = false,
  inputProps = {},
  options,
  value,
  onChange,

  isMulti = true,

  isCloseOnSelect = true,
  isCloseOnRemove = false,

  disabled = false,

  label,
  placeholder,

  noOptionsMessage = "Ничего не найдено",

  selectedHeader,
  unselectedHeader,
}: any) => {
  const activeOptionRef = useRef<HTMLDivElement>(null);
  const selectedListRef = useRef<HTMLDivElement>(null);
  const unselectedListRef = useRef<HTMLDivElement>(null);

  const classes = useStyles();
  const [activeValue, setActiveValue] = useState(null);
  const wrapperRef = useRef<any>(null);
  const [searchString, setSearchString] = useState("");
  const [isOpen, setIsOpen] = useState(isOpenProps);

  useEffect(() => {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);

  const handleChangeInput = (inputValue: string) => {
    setSearchString(inputValue);
  };

  const handleSelectOption = useCallback(
    (optionValue, closeAfterChange) => {
      let newValue: any = null;

      if (isMulti) {
        newValue = toggleElementInArray(value, optionValue);
      } else {
        newValue = optionValue === value ? "" : optionValue;
      }

      onChange(newValue);

      setSearchString("");

      if (closeAfterChange) {
        setIsOpen(false);
      }
    },
    [value, isMulti]
  );

  const { selectedOptions, unselectedOptions } = useMemo(() => {
    const selected: any = [];
    const unselected: any = [];

    options.forEach((option) => {
      if (isMulti) {
        if (value.includes(option.value)) {
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
    return unselectedOptions.filter(({ label }) =>
      label.includes(searchString)
    );
  }, [unselectedOptions, searchString]);

  const handleFocusInput = useCallback(() => {
    setSearchString("");
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setSearchString("");
    setIsOpen(false);
    setActiveValue(null);
  }, []);

  useClickOutsideComponent(wrapperRef, handleClose);

  const formattedValue = useMemo(() => {
    return isMulti ? value.join(", ") : value;
  }, [value, isMulti]);

  const inputValue = useMemo(() => {
    if (isOpen) {
      return searchString;
    } else {
      return formattedValue;
    }
  }, [searchString, formattedValue, isOpen]);

  const inputPlaceholder = useMemo(() => {
    if (isOpen && value.length) {
      return formattedValue;
    } else {
      return placeholder;
    }
  }, [isOpen, formattedValue, placeholder]);

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

  const handleMouseOver = (value: any) => {
    setActiveValue(value);
  };

  const visibleOptionsValues = useMemo(() => {
    return [...selectedOptions, ...filteredOptions].map(
      (option) => option.value
    );
  }, [selectedOptions, filteredOptions]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let activeValue = null;
      setActiveValue((v) => {
        activeValue = v;

        return v;
      });

      const activeValueIndex = visibleOptionsValues.findIndex(
        (optionValue) => optionValue === activeValue
      );
      const isFirst = activeValueIndex === 0;
      const isLast = activeValueIndex === visibleOptionsValues.length - 1;

      const firstValue = visibleOptionsValues[0];
      const lastValue = visibleOptionsValues[visibleOptionsValues.length - 1];

      const isSelected = selectedOptions.some(
        (option) => option.value === activeValue
      );

      const listRef = isSelected ? selectedListRef : unselectedListRef;

      switch (e.key) {
        case "Enter":
          handleSelectOption(
            activeValue,
            isSelected ? isCloseOnRemove : isCloseOnSelect
          );
          break;
        case "Escape":
          handleClose();
          break;

        case "ArrowUp": {
          if (!activeValueIndex) {
            setActiveValue(firstValue);
          }

          const nextActiveValue = isFirst
            ? lastValue
            : visibleOptionsValues[activeValueIndex - 1];

          setActiveValue(nextActiveValue);

          setTimeout(() => {
            scrollIntoView(listRef.current, activeOptionRef.current);
          });
          break;
        }
        case "ArrowDown": {
          if (!activeValueIndex) {
            setActiveValue(firstValue);
          }

          const nextActiveValue = isLast
            ? firstValue
            : visibleOptionsValues[activeValueIndex + 1];

          setActiveValue(nextActiveValue);

          setTimeout(() => {
            scrollIntoView(listRef.current, activeOptionRef.current);
          });
          break;
        }

        default:
          return;
      }
      // setTimeout(() => {
      //   console.log(activeOptionRef.current?.innerText);
      // });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    // вызов происходит дважды, попробовать убрать
    isOpen,
    handleSelectOption,
    handleClose,
    visibleOptionsValues,
    selectedOptions,
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
                {selectedOptions.map(({ value, label }) => {
                  return (
                    <div
                      className={classNames.listItemClassName}
                      onMouseDown={() =>
                        handleSelectOption(value, isCloseOnRemove)
                      }
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      data-active={String(isActive(value, activeValue))}
                      ref={
                        isActive(value, activeValue) ? activeOptionRef : null
                      }
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
                filteredOptions.map(({ value, label }) => {
                  return (
                    <div
                      className={classNames.listItemClassName}
                      onMouseDown={() =>
                        handleSelectOption(value, isCloseOnSelect)
                      }
                      onMouseOver={() => handleMouseOver(value)}
                      onMouseLeave={handleMouseLeave}
                      data-active={String(isActive(value, activeValue))}
                      ref={
                        isActive(value, activeValue) ? activeOptionRef : null
                      }
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
