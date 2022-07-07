import { useState } from "react";
import { ThemeProvider, JssProvider } from "react-jss";
import { Meta } from "@storybook/react";

import { Checkbox } from "../src";

import { CompareCheckedIcon, CompareUncheckedIcon } from "./Icons";
import { theme } from "./theme";

const wrapperStyles = { marginBottom: "15px" };
const disabled = {
  table: {
    disable: true,
  },
};
export default {
  component: Checkbox,
  title: "Checkbox",
  argTypes: {
    checked: disabled,
    onChange: disabled,
    appearance: disabled,
    baseAppearance: disabled,
    label: disabled,
    checkedIcon: disabled,
    uncheckedIcon: disabled,
  },
} as Meta;

const CheckboxTemplate = ({ disabled }) => {
  const [value, setValue] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <JssProvider generateId={({ key }) => key}>
        <div style={wrapperStyles}>
          <Checkbox
            disabled={disabled}
            checked={value}
            onChange={setValue}
            label="Default"
          />
        </div>

        <div style={wrapperStyles}>
          <Checkbox
            disabled={disabled}
            checked={value}
            onChange={setValue}
            appearance="big"
            label="Themed"
          />
        </div>

        <div style={wrapperStyles}>
          <Checkbox
            disabled={disabled}
            checked={value}
            onChange={setValue}
            checkedIcon={<CompareCheckedIcon />}
            uncheckedIcon={<CompareUncheckedIcon />}
            appearance="compare"
            label="Themed With custom Icons"
          />
        </div>
      </JssProvider>
    </ThemeProvider>
  );
};

export const CheckboxStory = CheckboxTemplate.bind({});

CheckboxStory.args = {
  disabled: false,
};
