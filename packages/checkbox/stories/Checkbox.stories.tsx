import { useState } from "react";
import { ThemeProvider, JssProvider } from "react-jss";
import { Meta } from "@storybook/react";

import { Checkbox } from "../src";
import { CheckboxGroup } from "../src/CheckboxGroup";

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

export const CheckboxGroupStory = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (newValue: string[], clickedBy: string) => {
    if (clickedBy === "fullWeekend") {
      const newValues = newValue.includes("fullWeekend")
        ? [...new Set([...newValue, "saturday", "sunday"])]
        : newValue.filter((day) => !["saturday", "sunday"].includes(day));

      setValue(newValues);

      return;
    }

    setValue(newValue);
  };

  const isFullWeekend = value.includes("fullWeekend");
  const options = [
    {
      value: "monday",
      label: "Понедельник",
    },
    {
      value: "tuesday",
      label: "Вторник",
    },
    {
      value: "wednesday",
      label: "Среда",
    },
    {
      value: "thursday",
      label: "Четверг",
    },
    {
      value: "friday",
      label: "Пятница",
    },
    {
      value: "fullWeekend",
      label: "Полные выходные",
    },
    {
      value: "saturday",
      label: "Суббота",
      disabled: isFullWeekend,
    },
    {
      value: "sunday",
      label: "Воскресенье",
      disabled: isFullWeekend,
    },
  ].map((option) => ({ ...option, appearance: "group" }));

  return (
    <ThemeProvider theme={theme}>
      <JssProvider generateId={({ key }) => key}>
        <CheckboxGroup
          appearance="group"
          value={value}
          onChange={handleChange}
          options={options}
        />

        <p>Value: {value.join(", ")}</p>
      </JssProvider>
    </ThemeProvider>
  );
};
