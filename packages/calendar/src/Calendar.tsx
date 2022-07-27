import React, { useEffect, useMemo, useState } from "react";
import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import {
  getStartOfAday,
  MAX_CALENDAR_YEAR,
  MIN_CALENDAR_YEAR,
  today,
} from "./utils";
import { ComponentNames } from "./styles/types";
import { Header } from "./Header";
import { DaysTable } from "./DaysTable";

export interface CalendarComponent extends IThemedProps {
  maxDate?: Date;
  minDate?: Date;
  value?: Date;
  onChange: (date: Date) => void;
  setIsOpen?: any;
  openedDate?: Date;
}

export const Calendar: React.FC<CalendarComponent> = ({
  baseAppearance = "base",
  appearance = "base",
  maxDate: maxDateProps,
  minDate: minDateProps,
  value: valueProps,
  onChange,
  openedDate,
}) => {
  const classes = useStyles();

  const value = useMemo(
    () => (valueProps ? getStartOfAday(valueProps) : undefined),
    [valueProps]
  );
  const maxDate = useMemo(
    () => (maxDateProps ? getStartOfAday(maxDateProps) : undefined),
    [maxDateProps]
  );
  const minDate = useMemo(
    () => (minDateProps ? getStartOfAday(minDateProps) : undefined),
    [minDateProps]
  );

  const [selectedYear, setYear] = useState<number>(
    (openedDate || value || today).getFullYear()
  );
  const [selectedMonth, setMonth] = useState<number>(
    (openedDate || value || today).getMonth()
  );

  useEffect(() => {
    if (openedDate) {
      const year = openedDate.getFullYear();
      const month = openedDate.getMonth();
      setYear(year);
      setMonth(month);
    }
  }, [openedDate]);

  const handlePreviousYearButtonClick = (): void => {
    if (selectedYear <= MIN_CALENDAR_YEAR) {
      return;
    }

    setYear(selectedYear - 1);
  };

  const handleNextYearButtonClick = (): void => {
    if (selectedYear >= MAX_CALENDAR_YEAR) {
      return;
    }

    setYear(selectedYear + 1);
  };

  const firstMonthIndex = 0;
  const lastMonthIndex = 11;

  const handlePreviousMonthButtonClick = (): void => {
    if (selectedMonth === firstMonthIndex) {
      setMonth(lastMonthIndex);
      handlePreviousYearButtonClick();

      return;
    }

    setMonth(selectedMonth - 1);
  };

  const handleNextMonthButtonClick = (): void => {
    if (selectedMonth === lastMonthIndex) {
      setMonth(firstMonthIndex);
      handleNextYearButtonClick();

      return;
    }

    setMonth(selectedMonth + 1);
  };

  const classNames = useMemo(() => {
    const calendarWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "calendarWrapper"
    );
    const tableClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "table"
    );

    return {
      calendarWrapperClassName,
      tableClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={classNames.calendarWrapperClassName}>
      <Header
        baseAppearance={baseAppearance}
        appearance={appearance}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onNext={handleNextMonthButtonClick}
        onPrev={handlePreviousMonthButtonClick}
      />

      <div className={classNames.tableClassName}>
        <DaysTable
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          minDate={minDate}
          maxDate={maxDate}
          baseAppearance={baseAppearance}
          appearance={appearance}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
