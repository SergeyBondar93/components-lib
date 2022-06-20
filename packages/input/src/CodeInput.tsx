import {
  createRef,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { BaseInput } from "./BaseInput";
import { IGNORED_META_KEYS } from "./consts";
import { useCodeInputStyles } from "./styles/styles";
import { getInputValue, isNumber } from "./utils";

export const CodeInput = ({
  isFocused,
  fieldsCount,
  value: propValue = [],
  onChange,
  onComplete,
  invalid,
  ...props
}: any) => {
  const classes = useCodeInputStyles();
  const [value, setValue] = useState(new Array(fieldsCount).fill(""));
  const inputsRefs = useRef(
    new Array(fieldsCount).fill(null).map(() => createRef<HTMLInputElement>())
  );

  const isCompleted = useMemo(
    () => value.filter((v) => isNumber(v)).length === fieldsCount,
    [value, fieldsCount]
  );

  const handlePast: React.ClipboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const text = e.clipboardData!.getData("Text");
      const newValue = getInputValue([...text], fieldsCount);
      onChange(newValue);
    },
    [value, onChange]
  );

  const changeFocus = useCallback(
    (next: number, prev?: number) => {
      const prevInput = inputsRefs.current[Number(prev)];
      const nextInput = inputsRefs.current[next];

      if (prevInput?.current) prevInput.current.blur();

      if (nextInput?.current) nextInput.current.focus();
    },
    [inputsRefs.current]
  );

  const onClick = useCallback(() => {
    if (value.filter(Boolean).length === fieldsCount && invalid) {
      setTimeout(() => {
        changeFocus(0);
      });

      onChange(new Array(fieldsCount).fill(""));
    }
  }, [value, fieldsCount, invalid, changeFocus, onChange]);

  const onKeyDown = useCallback(
    (i: number) => (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e.nativeEvent;

      if (!key.trim()) return;

      const isCorrectKey =
        !IGNORED_META_KEYS.includes(key) && !e.altKey && !e.ctrlKey;

      if (isCorrectKey) {
        e.preventDefault();
        const prevValue = e.currentTarget.value;
        const newValue = [...value];
        switch (key) {
          case "ArrowLeft":
            changeFocus(i - 1, i);
            break;
          case "ArrowRight":
            changeFocus(i + 1, i);
            break;
          case "Delete":
          case "Backspace":
            newValue[i] = "";

            if (!prevValue) {
              changeFocus(i - 1, i);
              const prevInputIdx = i - 1;

              if (prevInputIdx > -1) {
                newValue[prevInputIdx] = "";
              }
            }

            onChange(newValue, e);

            break;
          default:
            if (isNumber(key)) {
              newValue[i] = key;
              onChange(newValue, e);
              changeFocus(i + 1, i);
            }
        }
      }
    },
    [value, changeFocus, onChange, isCompleted]
  );

  useEffect(() => {
    setValue(getInputValue(propValue, fieldsCount));
  }, [propValue, fieldsCount]);

  useEffect(() => {
    if (isFocused) {
      changeFocus(0);
    }
  }, [isFocused, changeFocus]);

  useEffect(() => {
    if (isCompleted) {
      onComplete?.(value);
      inputsRefs.current.forEach((ref) => ref.current?.blur());
    }
  }, [isCompleted]);

  return (
    <>
      {value.map((val: string, i: number) => {
        const ref = inputsRefs.current[i];

        return (
          <BaseInput
            key={i}
            classes={classes}
            ref={ref}
            maxLength="1"
            autoComplete="off"
            type="tel"
            data-min-max="0:9"
            onKeyDown={onKeyDown(i)}
            onClick={onClick}
            value={val}
            invalid={invalid}
            onPaste={handlePast}
            {...props}
          />
        );
      })}
    </>
  );
};
