import { Meta, Story } from "@storybook/react";
import { useMemo, useState } from "react";
import { ThemeProvider } from "react-jss";
import { Button } from "@cheaaa/button";

import { addDays, Calendar, IExtraComponentProps } from "../src";
import { Datepicker } from "../src";
import { addYears, differenceInDays, formatDate, isAfter, today } from "../src";

import { theme } from "./theme";

export default {
  title: "Datepicker",
} as Meta;

const min = new Date();
min.setDate(20);

const max = new Date();
max.setDate(28);

const MAX_CALENDAR_YEAR = addYears(today, 2);
const MIN_CALENDAR_YEAR = addYears(today, -2);

const Instance = ({ title, ...props }: any) => {
  const [value, setValue] = useState<Date>();

  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          margin: "0px",
        }}
      >
        {title}
      </h3>
      <Calendar value={value} onChange={setValue} {...props} />
    </div>
  );
};

const octoberValue = new Date(2022, 9, 10);
const aug10 = new Date(2022, 7, 10);
const aug20 = new Date(2022, 7, 20);

interface IBaseStoryParams {
  disabled: boolean;
  closeAfterSelect: boolean;
}

export const CalendarBase: Story<IBaseStoryParams> = (args) => {
  return (
    <>
      <Instance
        title={"Base"}
        minDate={MIN_CALENDAR_YEAR}
        maxDate={MAX_CALENDAR_YEAR}
        {...args}
      />
      <Instance
        title={"With value 10.10.2022"}
        value={octoberValue}
        minDate={MIN_CALENDAR_YEAR}
        maxDate={MAX_CALENDAR_YEAR}
        {...args}
      />
      <Instance
        title={"Available only from 10.08.2022 to 20.08.2022 "}
        minDate={aug10}
        maxDate={aug20}
        openedDate={aug10}
        {...args}
      />
    </>
  );
};

CalendarBase.args = {
  disabled: false,
  closeAfterSelect: true,
};

export const DatepickerBase: Story<IBaseStoryParams> = (props) => {
  const [value, setValue] = useState<Date>();

  return (
    <Datepicker
      minDate={MIN_CALENDAR_YEAR}
      maxDate={MAX_CALENDAR_YEAR}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
};

DatepickerBase.args = CalendarBase.args;

interface ISelectYearButtonProps extends IExtraComponentProps {
  onClick: () => void;
}

const SelectYearButton = ({ onClick, setIsOpen }: ISelectYearButtonProps) => {
  const handleClick = () => {
    onClick();
    setIsOpen?.(false);
  };

  return (
    <Button onClick={handleClick} appearance={"tertiary"} shouldFitContent>
      Годовой полис
    </Button>
  );
};

export const Range = (props) => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [isOpenEnd, setIsOpenEnd] = useState(false);

  const handleChangeFrom = (newStart) => {
    setStart(newStart);
    setIsOpenEnd(true);

    if (end && isAfter(newStart, end)) {
      setEnd(newStart);
    }
  };

  const handleChangeEnd = (newEnd) => {
    setEnd(newEnd);
    setIsOpenEnd(false);
  };

  const endLabel = useMemo(() => {
    if (!start || !end) return "Обратно";

    const diff = differenceInDays(start, end);

    return `Выбрано ${diff + 1} дней`;
  }, [start, end]);

  const handleSelectYear = () => {
    const nextYearDate = addYears(start!, 1);
    const newEnd = addDays(nextYearDate, -1);
    setEnd(newEnd);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Datepicker
          minDate={new Date()}
          label={"Туда"}
          value={start}
          onChange={handleChangeFrom}
          appearance="from"
          maxDate={MAX_CALENDAR_YEAR}
          {...props}
        />
        <Datepicker
          minDate={start}
          label={endLabel}
          value={end}
          onChange={handleChangeEnd}
          isOpen={isOpenEnd}
          openedDate={end || start}
          appearance="to"
          maxDate={MAX_CALENDAR_YEAR}
          disabled={!start}
          footerComponent={<SelectYearButton onClick={handleSelectYear} />}
          {...props}
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};

export const RangeThemed = (props) => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [isOpenEnd, setIsOpenEnd] = useState(false);

  const handleChangeFrom = (newStart) => {
    setStart(newStart);
    setIsOpenEnd(true);

    if (end && isAfter(newStart, end)) {
      setEnd(newStart);
    }
  };

  const handleChangeEnd = (newEnd) => {
    setEnd(newEnd);
    setIsOpenEnd(false);
  };

  const endLabel = useMemo(() => {
    if (!start || !end) return "Обратно";

    const diff = differenceInDays(start, end);

    return `Выбрано ${diff + 1} дней`;
  }, [start, end]);

  const handleSelectYear = () => {
    const nextYearDate = addYears(start!, 1);
    const newEnd = addDays(nextYearDate, -1);
    setEnd(newEnd);
  };

  return (
    <ThemeProvider theme={theme}>
      <h3>Themed Inputs</h3>
      <div style={{ display: "flex", gap: "2px" }}>
        <Datepicker
          minDate={new Date()}
          label={"Туда"}
          value={start}
          onChange={handleChangeFrom}
          baseAppearance="header-filters"
          appearance="from"
          inputProps={{
            appearance: "header-filters",
          }}
          maxDate={MAX_CALENDAR_YEAR}
          {...props}
        />
        <Datepicker
          minDate={start}
          label={endLabel}
          value={end}
          onChange={handleChangeEnd}
          isOpen={isOpenEnd}
          openedDate={start}
          baseAppearance="header-filters"
          appearance="to"
          inputProps={{
            appearance: "header-filters",
          }}
          disabled={!start}
          maxDate={MAX_CALENDAR_YEAR}
          footerComponent={<SelectYearButton onClick={handleSelectYear} />}
          {...props}
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};
