import { useMemo, useState } from "react";
import { ThemeProvider } from "react-jss";

import { Calendar } from "../src";
import { Datepicker } from "../src/Datepicker";
import { differenceInDays, formatDate, isAfter } from "../src/utils";

import { theme } from "./theme";

export default {
  title: "Calendar",
};

const min = new Date();
min.setDate(20);

const max = new Date();
max.setDate(28);

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

export const CalendarBase = () => {
  return (
    <>
      <Instance title={"Base"} />
      <Instance title={"With value 10.10.2022"} value={octoberValue} />
      <Instance
        title={"Available only from 10.08.2022 to 20.08.2022 "}
        minDate={aug10}
        maxDate={aug20}
        openedDate={aug10}
      />
    </>
  );
};

export const DatepickerBase = () => {
  const [value, setValue] = useState<Date>();

  return <Datepicker value={value} onChange={setValue} />;
};

export const RangeDates = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Datepicker
          minDate={new Date()}
          label={"Туда"}
          value={start}
          onChange={handleChangeFrom}
          appearance="from"
        />
        <Datepicker
          minDate={start}
          label={endLabel}
          value={end}
          onChange={handleChangeEnd}
          isOpen={isOpenEnd}
          openedDate={start}
          appearance="to"
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};

export const RangeThemed = () => {
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
        />
      </div>
      <p>
        {start ? formatDate(start) : "?"} - {end ? formatDate(end) : "?"}{" "}
      </p>
    </ThemeProvider>
  );
};
