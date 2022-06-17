import { Story, Meta } from "@storybook/react";
import { Button } from "@cheaaa/button/src";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, JssProvider } from "react-jss";

import { Input } from "../src";

import {
  Mir,
  Maestro,
  VisaElectron,
  MasterCard,
  NoName,
  Visa,
} from "./CardIcons";
import { theme } from "./theme";

// const disabled = {
//   table: {
//     disable: true,
//   },
// };

export default {
  component: Input,
  title: "Input",
  // argTypes: {
  //   href: disabled,
  //   baseAppearance: disabled,
  //   appearance: disabled,
  //   component: disabled,
  //   onClick: disabled,
  //   target: disabled,
  //   type: disabled,
  // },
} as Meta;

interface IStoryParams {
  children: string;
  value: string;
  invalid: boolean;
  disabled: boolean;
  isClearable: boolean;
  shouldFitContent: boolean;
}
const wrapperStyles = { marginBottom: "15px" };
const InputTemplate: Story<IStoryParams> = (args) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <>
      <div style={wrapperStyles}>
        <Input
          {...args}
          value={value}
          onChange={setValue}
          placeholder="Иванов"
          label="Фамилия"
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

const CardInput = ({ withPrefix, withPostfix, ...args }) => {
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
      id="ccn"
      type="tel"
      inputmode="numeric"
      pattern="[0-9\s]{13,19}"
      autocomplete="cc-number"
      maxlength="19"
      labelProps={{ for: "ccn" }}
    />
  );
};

const Cards: Story<IStoryParams | any> = ({
  withPrefix,
  withPostfix,
  ...args
}) => {
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

const PromocodeInput = (args) => {
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

const ThemedTemplate = (args) => {
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
