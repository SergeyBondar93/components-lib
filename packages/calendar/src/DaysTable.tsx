import { getClassName } from "@cheaaa/theme";
import { useCallback, useMemo } from "react";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import {
  getDatesForCalendarMonth,
  getDatesFromMonth,
  isAfter,
  isBefore,
  today,
} from "./utils";
import { Weekdays } from "./Weekdays";

export const DaysTable = ({
  selectedMonth,
  selectedYear,
  minDate,
  maxDate,
  baseAppearance,
  appearance,
  onChange,
  value,
}: any) => {
  const classes = useStyles();
  const days = useMemo(() => {
    const monthDates = getDatesFromMonth(selectedMonth, selectedYear);
    const monthDatesTimestamps = monthDates.map((date) => Number(date));
    const valueTimestamp = value ? Number(value) : undefined;

    return getDatesForCalendarMonth(monthDates).map(({ date, timestamp }) => {
      const isBeforeMinDate = minDate ? isBefore(date, minDate) : false;
      const isAfterMaxDate = maxDate ? isAfter(date, maxDate) : false;
      const isDateFromAnotherMonth = !monthDatesTimestamps.includes(timestamp);

      const disabled =
        isBeforeMinDate || isAfterMaxDate || isDateFromAnotherMonth;

      const isToday = Number(today) === timestamp;

      const isSelected = valueTimestamp === timestamp;

      return {
        disabled,
        timestamp,
        date,
        isToday,
        isSelected,
        inRange: false,
      };
    });
  }, [selectedMonth, selectedYear, minDate, maxDate, value]);

  const className = getClassName<ComponentNames>(
    classes,
    baseAppearance,
    appearance,
    "day"
  );

  const handleClick = useCallback(
    (disabled, date) => {
      if (!disabled) {
        onChange(date);
      }
    },
    [onChange]
  );

  return (
    <>
      <Weekdays baseAppearance={baseAppearance} appearance={appearance} />
      {days.map(
        ({ date, timestamp, disabled, isToday, isSelected, inRange }) => {
          return (
            <button
              key={timestamp}
              onMouseDown={(e) => e.preventDefault()}
              className={className}
              onClick={() => handleClick(disabled, date)}
              disabled={disabled}
              data-is-today={String(!!isToday)}
              data-is-selected={String(!!isSelected)}
              data-in-range={String(!!inRange)}
            >
              {date.getDate()}
            </button>
          );
        }
      )}
    </>
  );
};
