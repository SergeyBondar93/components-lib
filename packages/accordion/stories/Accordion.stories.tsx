import { useState } from "react";
import { Checkbox, CheckboxGroup, Switcher } from "@cheaaa/checkbox";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "react-jss";
import Select from "react-select";

import { Accordion, IAccordionChildrenProps } from "../src";

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

const Weekdays = ({ setIsOpen }: IAccordionChildrenProps) => {
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
  ].map((option) => ({ ...option, appearance: "filters" }));

  return (
    <CheckboxGroup value={value} onChange={handleChange} options={options} />
  );

  return (
    <div>
      <button onClick={() => setIsOpen?.(false)}>Закрыть</button>
    </div>
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
          title={"Дни недели"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          animationDuration="0.6s"
          isOpen={isOpenAll}
          title={"Дни недели + animationDiraion 0.6s"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          passSetIsOpenToChildren
          isOpen={isOpenAll}
          title={"Дни недели"}
        >
          <Weekdays />
        </Accordion>
        <Accordion
          {...props}
          passSetIsOpenToChildren
          isOpen={isOpenAll}
          title={"Дни недели"}
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
  shouldFitContent: false,
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
          getHeightStyles={({ isOpen }) =>
            isOpen ? window.innerHeight - 80 : 0
          }
          title={"Дни недели"}
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
      label={`Custom component - checkbox ${
        isOpen ? " (Открыто)" : "(Закрыто)"
      }`}
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
          title={({ isOpen }) =>
            `Дни недели (${isOpen ? "Закрыть" : "Открыть"}) `
          }
        >
          <Accordion title={"Дни недели"}>
            <Accordion title={"Дни недели"}>
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
      Дни недели
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
