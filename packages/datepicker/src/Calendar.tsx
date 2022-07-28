import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getClassName, IThemedProps } from "@cheaaa/theme";

import { useStyles } from "./styles";
import {
  Day,
  FIRST_MONTH_INDEX,
  getRange,
  getStartOfAday,
  LAST_MONTH_INDEX,
  today,
} from "./utils";
import { ComponentNames } from "./styles/types";
import { Header } from "./Header";
import { DaysTable } from "./DaysTable";

export interface CalendarComponent extends IThemedProps {
  value?: Date;
  onChange: (date: Date) => void;

  /**
   * Максимально доступная дата
   */
  maxDate?: Date;

  /**
   * Минимально доступная дата
   */
  minDate?: Date;

  /**
   * Месяц включащий дату на которую открыт календарь
   */
  openedDate?: Date;

  /**
   * Кастомный компонент над Header
   */
  headerComponent?: ReactNode;

  /**
   * Кастомный компонент под Table
   */
  footerComponent?: ReactNode;

  /**
   * Включает подсветку диапазона, используется совместно с startDate + endDate
   */
  rangeSelector?: "start" | "end";

  /**
   * Дата начала диапазона
   */
  startDate?: Date;

  /**
   * Дата конца диапазона
   */
  endDate?: Date;

  /**
   * отключает выбор дней в календаре и открытие его
   */
  disabled?: boolean;
}

export const Calendar: React.FC<CalendarComponent> = ({
  baseAppearance = "base",
  appearance = "base",
  maxDate: maxDateProps,
  minDate: minDateProps,
  value: valueProps,
  onChange,
  openedDate,
  headerComponent,
  footerComponent,
  rangeSelector,
  startDate,
  endDate,
  disabled,
}) => {
  const classes = useStyles();

  const [hovered, setHovered] = useState<Date | null>();
  const [rangeDates, setRangeDates] = useState<Day[]>([]);

  useEffect(() => {
    if (!rangeSelector) return;

    let range: Day[] = getRange(startDate, endDate);

    setRangeDates(range);
  }, [rangeSelector, startDate, endDate]);

  useEffect(() => {
    switch (rangeSelector) {
      case "start": {
        if (hovered && endDate) {
          let range: Day[] = getRange(hovered, endDate);
          setRangeDates(range);
        }

        break;
      }
      case "end": {
        if (hovered && startDate) {
          let range: Day[] = getRange(startDate, hovered);
          setRangeDates(range);
        }

        break;
      }
    }
  }, [rangeSelector, hovered, startDate, endDate]);

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

  const handlePreviousMonthButtonClick = (): void => {
    if (selectedMonth === FIRST_MONTH_INDEX) {
      setMonth(LAST_MONTH_INDEX);
      setYear(selectedYear - 1);

      return;
    }

    setMonth(selectedMonth - 1);
  };

  const handleNextMonthButtonClick = (): void => {
    if (selectedMonth === LAST_MONTH_INDEX) {
      setMonth(FIRST_MONTH_INDEX);
      setYear(selectedYear + 1);

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

  const selectedTimestamps = useMemo(() => {
    const timestamps: number[] = [startDate, endDate, value]
      .filter(Boolean)
      .map((date) => Number(date));

    return timestamps;
  }, [startDate, endDate, value]);

  const handleMouseLeave = useCallback(() => {
    if (!rangeSelector) return;

    let range: Day[] = getRange(startDate, endDate);
    setHovered(null);
    setRangeDates(range);
  }, [startDate, endDate, rangeSelector]);

  return (
    <div className={classNames.calendarWrapperClassName}>
      {headerComponent}
      <Header
        baseAppearance={baseAppearance}
        appearance={appearance}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onNext={handleNextMonthButtonClick}
        onPrev={handlePreviousMonthButtonClick}
      />

      <div
        className={classNames.tableClassName}
        onMouseLeave={handleMouseLeave}
      >
        <DaysTable
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          minDate={minDate}
          maxDate={maxDate}
          baseAppearance={baseAppearance}
          appearance={appearance}
          onChange={onChange}
          selectedTimestamps={selectedTimestamps}
          rangeDates={rangeDates}
          setHovered={setHovered}
          disabled={disabled}
        />
      </div>
      {footerComponent}
    </div>
  );
};
