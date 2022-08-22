import { Button } from "@cheaaa/button";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ThemeProvider, JssProvider } from "react-jss";
import { DeleteIcon } from "@cheaaa/icons/DeleteIcon";

import { CodeInput, Input } from "../src";

import {
  Mir,
  Maestro,
  VisaElectron,
  MasterCard,
  NoName,
  Visa,
} from "./CardIcons";
import { theme } from "./theme";

export default {
  title: "Input",
};

const wrapperStyles = { marginBottom: "15px" };

const InputTemplate = (args) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div style={wrapperStyles}>
        <Input
          {...args}
          value={value}
          onChange={setValue}
          placeholder="Иванов"
          label="Фамилия"
          ref={inputRef}
        />
      </div>
      <div style={wrapperStyles}>
        <Input
          {...args}
          value={value}
          onChange={setValue}
          placeholder="Иван"
          label="Имя"
        />
      </div>
      <div style={wrapperStyles}>
        <Input
          {...args}
          value={value}
          onChange={setValue}
          placeholder="Иванович"
          label="Отчество"
        />
      </div>

      <div style={wrapperStyles}>
        <h4>As Button</h4>
        <Input
          {...args}
          value={value}
          onChange={setValue}
          placeholder="Иванович"
          label="Отчество"
          type={"button"}
        />
      </div>
      <button onClick={handleFocus}>Focus on first input</button>
    </>
  );
};

export const Default = InputTemplate.bind({});

Default.args = {
  value: "",
  disabled: false,
  shouldFitContent: false,
  isClearable: false,
  invalid: false,
  valid: false,
};

interface ICardInputProps
  extends Omit<IThemedTemplateProps, "withPrefix" | "withPostfix"> {
  value: string;
  placeholder: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
}

const CardInput = (args: ICardInputProps) => {
  // NOT FOR PRODUCTION
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _value = useMemo(() => {
    const onlyDigitsValue = value.replace(/\D/gi, "");
    let res = "";

    for (let i = 0; i < Math.min(onlyDigitsValue.length, 19); i += 4) {
      res += `${onlyDigitsValue.substring(i, i + 4)} `;
    }

    return res.trim();
  }, [value]);

  return (
    <Input
      {...args}
      value={_value}
      onChange={setValue}
      baseAppearance="visiblePlaceholder"
      appearance="card"
      type="tel"
      inputMode="numeric"
      pattern="[0-9\s]{13,19}"
      autoComplete="cc-number"
      maxLength={19}
    />
  );
};

const Cards = ({ withPrefix, withPostfix, ...args }: IThemedTemplateProps) => {
  const placeholder = "0000 0000 0000 0000";

  return (
    <div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <Mir />}
          postfix={withPostfix && <Mir />}
        />
      </div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <Maestro />}
          postfix={withPostfix && <Maestro />}
        />
      </div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <VisaElectron />}
          postfix={withPostfix && <VisaElectron />}
        />
      </div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <MasterCard />}
          postfix={withPostfix && <MasterCard />}
        />
      </div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <NoName />}
          postfix={withPostfix && <NoName />}
        />
      </div>
      <div style={wrapperStyles}>
        <CardInput
          {...args}
          value="1234 5678 9123 4567"
          placeholder={placeholder}
          prefix={withPrefix && <Visa />}
          postfix={withPostfix && <Visa />}
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PromocodeInput = ({ withPrefix, withPostfix, ...args }) => {
  const [promocode, setPromocode] = useState("");
  const [promoInputState, setPromoInputState] = useState<
    "none" | "error" | "success" | "loading"
  >("none");

  const handleApply = () => {
    setPromoInputState("loading");
    setTimeout(() => {
      if (promocode === "1234") {
        setPromoInputState("success");
      } else {
        setPromoInputState("error");
      }
    }, 2000);
  };

  const handleChangePromocode = (newValue: string) => {
    setPromocode(newValue.substring(0, 4));
    setPromoInputState("none");
  };

  const disabledApply = promoInputState !== "none" || promocode.length !== 4;

  return (
    <ThemeProvider theme={theme}>
      <JssProvider
        generateId={({ key }, styleSheet) => {
          if (!styleSheet?.options.classNamePrefix) {
            if (process.env.NODE_ENV === "development") {
              console.error(
                "classNamePrefix not passed in some createUseStyles function"
              );
            }
          }

          styleSheet?.options.classNamePrefix;

          return styleSheet?.options.classNamePrefix + key;
        }}
      >
        <h3>Valid promocode: 1234</h3>
        <div style={wrapperStyles}>
          <Input
            {...args}
            invalid={promoInputState === "error"}
            valid={promoInputState === "success"}
            disabled={promoInputState === "loading"}
            onChange={handleChangePromocode}
            value={promocode}
            baseAppearance="visiblePlaceholder"
            appearance="promocode"
            placeholder="Введите промокод"
            postfix={
              <Button
                baseAppearance="promo"
                appearance={
                  promoInputState === "success" ? "promoSuccess" : undefined
                }
                disabled={disabledApply}
                onClick={handleApply}
              >
                {promoInputState === "success" ? "Успешно" : "Применить"}
              </Button>
            }
          />
        </div>
      </JssProvider>
    </ThemeProvider>
  );
};

const defaultEmails = ["lol@mail.com", "kek@mail.com", "cheburek@mail.com"];

const Emails = () => {
  const [emails, setEmails] = useState(defaultEmails);

  const handleDelete = (idx) => () => {
    const newEmails = [...emails];
    newEmails.splice(idx, 1);
    setEmails(newEmails);
  };

  const handleChange = (idx) => (newEmail) => {
    const newEmails = [...emails];
    newEmails[idx] = newEmail;
    setEmails(newEmails);
  };

  return (
    <>
      <h3>Emails: </h3>
      {emails.map((email, idx) => (
        <div style={wrapperStyles} key={idx}>
          <Input
            appearance="with-delete-icon"
            onChange={handleChange(idx)}
            value={email}
            placeholder="ivanov@mail.com"
            label="Email"
            postfix={<DeleteIcon onClick={handleDelete(idx)} />}
          />
        </div>
      ))}
    </>
  );
};

interface IThemedTemplateProps {
  withPrefix: boolean;
  withPostfix: boolean;
  disabled: boolean;
  shouldFitContent: boolean;
  isClearable: boolean;
  invalid: boolean;
  valid: boolean;
}

const ThemedTemplate = (args: IThemedTemplateProps) => {
  return (
    <ThemeProvider theme={theme}>
      <JssProvider
        generateId={({ key }, styleSheet) => {
          if (!styleSheet?.options.classNamePrefix) {
            if (process.env.NODE_ENV === "development") {
              console.error(
                "classNamePrefix not passed in some createUseStyles function"
              );
            }
          }

          styleSheet?.options.classNamePrefix;

          return styleSheet?.options.classNamePrefix + key;
        }}
      >
        <Cards {...args} />
        <PromocodeInput {...args} />

        <Emails />
      </JssProvider>
    </ThemeProvider>
  );
};

export const Themed = ThemedTemplate.bind({});

Themed.args = {
  withPrefix: false,
  withPostfix: true,
  disabled: false,
  shouldFitContent: false,
  isClearable: false,
  invalid: false,
  valid: false,
};

const CodeInputTemplate = ({ fieldsCount, ...args }) => {
  const [value, setValue] = useState([]);
  const [state, setState] = useState<"none" | "error" | "success" | "loading">(
    "none"
  );

  const handleChange = (newValue) => {
    setValue(newValue);
    setState("none");
  };

  const handleComplete = (v) => {
    setState("loading");
    setTimeout(() => {
      const isValid = v.join("") === new Array(fieldsCount).fill("1").join("");
      setState(isValid ? "success" : "error");
    }, 1000);
  };

  const handleClear = () => {
    setState("none");
    setValue([]);
  };

  return (
    <>
      <button onClick={handleClear}>Clear state</button>
      <h3>Valid code: 11111 etc</h3>
      <CodeInput
        value={value}
        onChange={handleChange}
        fieldsCount={fieldsCount}
        invalid={state === "error"}
        valid={state === "success"}
        disabled={["loading", "success"].includes(state)}
        onComplete={handleComplete}
        label=" "
        isFocused
        {...args}
      />
    </>
  );
};

export const CodeInputDefault = CodeInputTemplate.bind({});

CodeInputDefault.args = {
  fieldsCount: 5,
};

const CodeInputThemedTemplate = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <JssProvider
        generateId={({ key }, styleSheet) => {
          if (!styleSheet?.options.classNamePrefix) {
            if (process.env.NODE_ENV === "development") {
              console.error(
                "classNamePrefix not passed in some createUseStyles function"
              );
            }
          }

          styleSheet?.options.classNamePrefix;

          return styleSheet?.options.classNamePrefix + key;
        }}
      >
        <CodeInputTemplate {...args} />
      </JssProvider>
    </ThemeProvider>
  );
};

export const CodeInputThemed = CodeInputThemedTemplate.bind({});

CodeInputThemed.args = CodeInputDefault.args;
