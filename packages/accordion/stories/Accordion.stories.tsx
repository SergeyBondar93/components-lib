import { useState } from "react";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "react-jss";
import Select from "react-select";

import { Checkbox, CheckboxGroup, Switcher } from "@cheaaa/checkbox";

import { Accordion } from "../src";

import { theme } from "./theme";

const disabled = {
  table: {
    disable: true,
  },
};
export default {
  title: "Accordion",
  argTypes: {
    appearance: disabled,
    baseAppearance: disabled,
    title: disabled,
    children: disabled,
    getHeightStyles: disabled,
  },
  parameters: {
    backgrounds: {
      default: "lightblue",
      values: [{ name: "lightblue", value: "#E5ECF7" }],
    },
  },
} as Meta;

const Weekdays = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (newValue: string[], clickedBy: string) => {
    if (clickedBy === "fullWeekend") {
      const newValues = newValue.includes("fullWeekend")
        ? [...new Set([...newValue, "saturday", "sunday"])]
        : newValue.filter((day) => !["saturday", "sunday"].includes(day));

      setValue(newValues);

      return;
    }

    if (["saturday", "sunday"].includes(clickedBy)) {
      if (newValue.includes("sunday") && newValue.includes("saturday")) {
        const newValues = [...new Set([...newValue, "fullWeekend"])];
        setValue(newValues);

        return;
      }

      if (!newValue.includes("sunday") || !newValue.includes("saturday")) {
        const newValues = newValue.filter((v) => v !== "fullWeekend");
        setValue(newValues);

        return;
      }
    }

    setValue(newValue);
  };

  const options = [
    {
      value: "monday",
      label: "Monday",
    },
    {
      value: "tuesday",
      label: "Tuesday",
    },
    {
      value: "wednesday",
      label: "Wednesday",
    },
    {
      value: "thursday",
      label: "Thursday",
    },
    {
      value: "friday",
      label: "Friday",
    },
    {
      value: "fullWeekend",
      label: "Weekend",
    },
    {
      value: "saturday",
      label: "Saturday",
    },
    {
      value: "sunday",
      label: "Sunday",
    },
  ].map((option) => ({ ...option, appearance: "filters" }));

  return (
    <CheckboxGroup value={value} onChange={handleChange} options={options} />
  );
};

const AccordionTemplate = (props) => {
  const [isOpenAll, setIsOpenAll] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Switcher value={isOpenAll} onChange={setIsOpenAll} label="Open All" />
      <div
        style={{
          width: "320px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Accordion
          {...props}
          // passSetIsOpenToChildren
          isOpen={isOpenAll}
          title={"Weekdays"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          animationDuration="0.6s"
          isOpen={isOpenAll}
          title={"Weekdays + animationDiraion 0.6s"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          passSetIsOpenToChildren
          isOpen={isOpenAll}
          title={"Weekdays"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          passSetIsOpenToChildren
          isOpen={isOpenAll}
          title={"Weekdays"}
        >
          <Weekdays />
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

export const AccordionStory = AccordionTemplate.bind({});

AccordionStory.args = {
  disabled: false,
  shouldFitContent: true,
};

const CustomHeightTemplate = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "320px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Accordion
          shouldFitContent
          getHeightStyles={({ isOpen }) =>
            isOpen ? window.innerHeight - 35 : 0
          }
          title={"Weekdays"}
        >
          <Weekdays />
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

export const CustomHeight = CustomHeightTemplate.bind({});

const Component = ({ isOpen, ...props }: any) => {
  return (
    <Checkbox
      {...props}
      label={`Custom component - checkbox ${isOpen ? " (Opened)" : "(Closed)"}`}
    />
  );
};

export const CustomTitleComponent = () => {
  const [value, setValue] = useState<{ weekdays: string[] }>({ weekdays: [] });

  const handleSetDefaultValue = (checked) => {
    setValue({ weekdays: checked ? ["one"] : [] });
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "320px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Accordion
          isOpen={!!value.weekdays.length}
          passSetIsOpenToTitle
          titleButtonProps={{
            component: Component,
            onChange: handleSetDefaultValue,
            label: "Custom component - checkbox",
            value: !!value.weekdays.length,
            appearance: "red",
          }}
        >
          <CheckboxGroup
            onChange={(newValue) => setValue({ weekdays: newValue })}
            value={value.weekdays}
            options={[
              { label: "One", value: "one", appearance: "red" },
              { label: "Two", value: "two" },
              { label: "Three", value: "three" },
            ]}
          />
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

export const WithIternalAccordionAndTitleAsAFunction = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "320px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Accordion
          title={({ isOpen }) => `Weekdays (${isOpen ? "Close" : "Open"}) `}
        >
          <Accordion title={"Weekdays"}>
            <Accordion title={"Weekdays"}>
              <Weekdays />
            </Accordion>
          </Accordion>
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

const options = new Array(30)
  .fill(0)
  .map((_, i) => ({ value: i, label: `Option № ${i}` }));

const Title = ({ selectedOptions }) => {
  return (
    <>
      Weekdays
      {selectedOptions ? ` (Selected in Select: ${selectedOptions})` : null}
    </>
  );
};

export const WithSelectComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState<
    Array<{ value: number; label: string }>
  >([]);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "320px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Accordion
          isOpen
          title={<Title selectedOptions={selectedOptions.length} />}
        >
          <Weekdays />
          <Select
            options={options}
            isMulti
            value={selectedOptions}
            onChange={(newValue) => setSelectedOptions(newValue as any)}
          />
        </Accordion>
      </div>
    </ThemeProvider>
  );
};
