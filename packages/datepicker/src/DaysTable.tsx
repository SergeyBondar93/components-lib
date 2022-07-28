import { getClassName, IThemedProps } from "@cheaaa/theme";
import { useCallback, useMemo } from "react";

import { useStyles } from "./styles";
import { ComponentNames } from "./styles/types";
import {
  Day,
  getDatesForCalendarMonth,
  getDatesFromMonth,
  isAfter,
  isBefore,
  today,
} from "./utils";
import { Weekdays } from "./Weekdays";

interface IDaysTableProps extends Required<IThemedProps> {
  selectedMonth: number;
  selectedYear: number;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date: Date) => void;
  selectedTimestamps: number[];
  rangeDates: Day[];
  setHovered: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
  disabled?: boolean;
}

export const DaysTable = ({
  baseAppearance,
  appearance,
  selectedMonth,
  selectedYear,
  minDate,
  maxDate,
  onChange,
  selectedTimestamps,
  rangeDates,
  setHovered,
  disabled: disabledCalendar,
}: IDaysTableProps) => {
  const classes = useStyles();

  const days = useMemo(() => {
    const monthDates = getDatesFromMonth(selectedMonth, selectedYear);
    const monthDatesTimestamps = monthDates.map((date) => Number(date));

    return getDatesForCalendarMonth(monthDates).map(({ date, timestamp }) => {
      const isBeforeMinDate = minDate ? isBefore(date, minDate) : false;
      const isAfterMaxDate = maxDate ? isAfter(date, maxDate) : false;
      const isDateFromAnotherMonth = !monthDatesTimestamps.includes(timestamp);

      const disabled =
        isBeforeMinDate || isAfterMaxDate || isDateFromAnotherMonth;

      const isToday = Number(today) === timestamp;

      return {
        disabled,
        timestamp,
        date,
        isToday,
      };
    });
  }, [selectedMonth, selectedYear, minDate, maxDate]);

  const daysWithRange = useMemo(() => {
    const rangeDatesTimestamps = rangeDates.map(({ timestamp }) => timestamp);
    const startRange = rangeDatesTimestamps[0];
    const endRange = rangeDatesTimestamps[rangeDatesTimestamps.length - 1];

    return days.map(({ timestamp, ...day }) => {
      const isSelected = selectedTimestamps.includes(timestamp);

      const isRangeBoundary = [startRange, endRange].includes(timestamp);
      const inRange =
        !isRangeBoundary && rangeDatesTimestamps.includes(timestamp);

      return { ...day, timestamp, inRange, isRangeBoundary, isSelected };
    }, []);
  }, [days, rangeDates, selectedTimestamps]);

  const className = getClassName<ComponentNames>(
    classes,
    baseAppearance,
    appearance,
    "day"
  );

  const handleClick = useCallback(
    (disabledDay, date) => {
      if (!disabledDay && !disabledCalendar) {
        onChange(date);
      }
    },
    [onChange, disabledCalendar]
  );

  return (
    <>
      <Weekdays baseAppearance={baseAppearance} appearance={appearance} />
      {daysWithRange.map(
        ({
          date,
          timestamp,
          disabled: disabledDay,
          isToday,
          isSelected,
          inRange,
        }) => {
          return (
            <button
              key={timestamp}
              onMouseEnter={() => setHovered(date)}
              onMouseDown={(e) => e.preventDefault()}
              className={className}
              onClick={() => handleClick(disabledDay, date)}
              disabled={disabledDay || disabledCalendar}
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
