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

const InputTemplate: Story<IStoryParams> = (args) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return <Input {...args} value={value} onChange={setValue} />;
};

export const Default = InputTemplate.bind({});

Default.args = {
  isFloatingPlaceholder: false,
  disabled: false,
  shouldFitContent: false,
  isClearable: false,
  invalid: false,
  value: "This is value",
  placeholder: "This is placeholder",
};

const WrapperStyles = { marginBottom: "15px" };

const CardInput = ({ withPrefix, withPostfix, ...args }) => {
  // NOT FOR PRODUCTION
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _value = useMemo(() => {
    const onlyDigitsValue = value.replace(/\D/gi, "");
    let res = "";

    for (let i = 0; i < Math.min(onlyDigitsValue.length, 16); i += 4) {
      res += `${onlyDigitsValue.substring(i, i + 4)} `;
    }

    return res.trim();
  }, [value]);

  return <Input {...args} value={_value} onChange={setValue} />;
};

const CardTemplate: Story<IStoryParams | any> = ({
  withPrefix,
  withPostfix,
  ...args
}) => {
  return (
    <div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <Mir />}
          postfix={withPostfix && <Mir />}
        />
      </div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <Maestro />}
          postfix={withPostfix && <Maestro />}
        />
      </div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <VisaElectron />}
          postfix={withPostfix && <VisaElectron />}
        />
      </div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <MasterCard />}
          postfix={withPostfix && <MasterCard />}
        />
      </div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <NoName />}
          postfix={withPostfix && <NoName />}
        />
      </div>
      <div style={WrapperStyles}>
        <CardInput
          {...args}
          prefix={withPrefix && <Visa />}
          postfix={withPostfix && <Visa />}
        />
      </div>
    </div>
  );
};

export const Card = CardTemplate.bind({});

Card.args = {
  ...Default.args,
  withPrefix: false,
  withPostfix: true,
  value: "1234 5678 9123 4567",
  placeholder: "0000 0000 0000 0000",
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
        <div style={WrapperStyles}>
          <Input
            {...args}
            invalid={promoInputState === "error"}
            valid={promoInputState === "success"}
            disabled={promoInputState === "loading"}
            onChange={handleChangePromocode}
            value={promocode}
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

        <div style={WrapperStyles}>
          <Input {...args} appearance="main" />
        </div>
      </JssProvider>
    </ThemeProvider>
  );
};

const LastNameInputs = () => {
  return <></>;
};

const ThemedTemplate = (args) => {
  return (
    <>
      <PromocodeInput {...args} />
      <LastNameInputs />
    </>
  );
};

export const Themed = ThemedTemplate.bind({});
