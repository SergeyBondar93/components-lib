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
  argTypes: {
    locale: {
      control: "select",
      options: ["en", "ru"],
    },
  },
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
  locale: "en" | "ru";
}
interface IRangeStoryParams {
  rangeHighlight: boolean;
  shouldFitContent: boolean;
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
  // locale: { control: 'select', options: ['en', 'ru'] }
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

DatepickerBase.args = {
  disabled: false,
};

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

export const Range: Story<IRangeStoryParams> = (props) => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [isOpenEnd, setIsOpenEnd] = useState(false);

  const handleChangeStart = (newStart) => {
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
          onChange={handleChangeStart}
          appearance="from"
          maxDate={MAX_CALENDAR_YEAR}
          {...(props.rangeHighlight ? { rangeSelector: "start" } : {})}
          startDate={start}
          endDate={end}
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
          {...(props.rangeHighlight ? { rangeSelector: "end" } : {})}
          startDate={start}
          endDate={end}
          {...props}
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};

Range.args = {
  rangeHighlight: true,
  shouldFitContent: false,
};

export const RangeThemed: Story<IRangeStoryParams> = (props) => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [isOpenEnd, setIsOpenEnd] = useState(false);

  const handleChangeStart = (newStart) => {
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

  /*
    isOpen работает только на одно открытие и дальше компонент становится uncontrolled, 
    что бы всегда открывать его заного необходимо менять это значение тут каждый раз 
  */
  const handleChangeIsOpenStart = (newIsOpen: boolean) => {
    if (newIsOpen) {
      setIsOpenEnd(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <h3>Themed Inputs</h3>
      <div style={{ display: "flex", gap: "2px" }}>
        <Datepicker
          minDate={new Date()}
          label={"Туда"}
          value={start}
          onChange={handleChangeStart}
          baseAppearance="header-filters"
          appearance="from"
          onChangeIsOpen={handleChangeIsOpenStart}
          inputProps={{
            appearance: "header-filters",
          }}
          maxDate={MAX_CALENDAR_YEAR}
          {...(props.rangeHighlight ? { rangeSelector: "start" } : {})}
          startDate={start}
          endDate={end}
          {...props}
        />
        <Datepicker
          minDate={start}
          label={endLabel}
          value={end}
          onChange={handleChangeEnd}
          isOpen={isOpenEnd}
          openedDate={end || start}
          baseAppearance="header-filters"
          appearance="to"
          inputProps={{
            appearance: "header-filters",
          }}
          disabled={!start}
          maxDate={MAX_CALENDAR_YEAR}
          footerComponent={<SelectYearButton onClick={handleSelectYear} />}
          {...(props.rangeHighlight ? { rangeSelector: "end" } : {})}
          startDate={start}
          endDate={end}
          {...props}
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};

RangeThemed.args = Range.args;
