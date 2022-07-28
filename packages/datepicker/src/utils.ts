export type Day = {
  date: Date;
  timestamp: number;
};

const SECOND = 1000;
const MIN = 60 * SECOND;
const HOUR = MIN * 60;
export const DAY = HOUR * 24;

export const FIRST_MONTH_INDEX = 0;
export const LAST_MONTH_INDEX = 11;

export const getDatesFromMonth = (month: number, year: number): Date[] => {
  const days = new Date(year, month + 1, 0).getDate();
  const dates: Date[] = [];

  for (let day = 1; day <= days; day++) {
    const date = new Date(year, month, day);
    const startOfDay = getStartOfAday(date);
    dates.push(startOfDay);
  }

  return dates;
};

export function getStartOfAday(date: Date): Date {
  date.setHours(0, 0, 0, 0);

  return date;
}

export function addMonth(date: Date, numberOfMonth = 1): Date {
  const clonedDate = cloneDate(date);
  const dayOfMonth = clonedDate.getDate();

  const endOfDesiredMonth = new Date(clonedDate.getTime());
  endOfDesiredMonth.setMonth(clonedDate.getMonth() + numberOfMonth + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  }

  clonedDate.setFullYear(
    endOfDesiredMonth.getFullYear(),
    endOfDesiredMonth.getMonth(),
    dayOfMonth
  );

  return clonedDate;
}

export function parseDate(date: string | Date): Date {
  if (!date) {
    return new Date();
  }

  if (date instanceof Date) {
    return date;
  }

  const ISO = /\d{4}-\d{1,2}-\d{1,2}/;
  const DMY = /\d{1,2}\.\d{1,2}\.\d{4}/;
  const MDY = /\d{1,2}\/\d{1,2}\/\d{4}/;
  let dateParts;
  let yyyy;
  let mm;
  let dd;

  if (ISO.test(date)) {
    dateParts = date.split("-");
    yyyy = dateParts[0];
    mm = dateParts[1];
    dd = dateParts[2];
  } else if (DMY.test(date)) {
    dateParts = date.split(".");
    yyyy = dateParts[2];
    mm = dateParts[1];
    dd = dateParts[0];
  } else if (MDY.test(date)) {
    dateParts = date.split("/");
    yyyy = dateParts[2];
    mm = dateParts[0];
    dd = dateParts[1];
  } else {
    console.error("Неверный формат даты", date);
    throw "Неверный формат даты";
  }

  return new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd)));
}

export function formatDate(date?: string | Date, toISO = false) {
  if (!date) {
    return "";
  }

  const parsedDate: any = parseDate(date);

  let dd = parsedDate.getDate();
  let mm = parsedDate.getMonth() + 1; // january is 0!

  const yyyy = parsedDate.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return toISO ? yyyy + "-" + mm + "-" + dd : dd + "." + mm + "." + yyyy;
}

export function cloneDate(date: Date) {
  return new Date(date.valueOf());
}

export function adjustDate(
  date: string | Date,
  seconds?: number,
  isDate?: false
): string;
export function adjustDate(
  date: string | Date,
  seconds?: number,
  isDate?: true
): Date;

export function adjustDate(date: string | Date, seconds = 0, isDate = false) {
  const parsedDate = date instanceof Date ? cloneDate(date) : parseDate(date);

  parsedDate.setSeconds(parsedDate.getSeconds() + Number(seconds));

  return isDate ? parsedDate : formatDate(parsedDate);
}

export function getLastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function addDays(date: string | Date, days = 1) {
  return adjustDate(date, 86400 * Number(days), true);
}
export function getStartDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export const getDatesForCalendarMonth = (dates: Date[]): Day[] => {
  const mondayWeekdayIndex = 1;
  const firstDayOfTheMonth = dates[0].getDay();
  const isMonthBeginsWithMonday = firstDayOfTheMonth === mondayWeekdayIndex;

  const datesForCalendar = [...dates];

  if (!isMonthBeginsWithMonday) {
    const daysToAddFromPreviousMonth =
      firstDayOfTheMonth > 0 ? firstDayOfTheMonth - 1 : 6;

    for (let days = 0; days < daysToAddFromPreviousMonth; days++) {
      datesForCalendar.unshift(
        addDays(getLastDayOfMonth(addMonth(dates[0], -1)), -days)
      );
    }
  }

  const sundayWeekdayIndex = 0;
  const lastDayOfTheMonth = dates[dates.length - 1].getDay();
  const isMonthEndsWithSunday = lastDayOfTheMonth === sundayWeekdayIndex;

  if (!isMonthEndsWithSunday) {
    const daysToAddFromNextMonth =
      lastDayOfTheMonth !== 0 ? 7 - lastDayOfTheMonth : 0;

    for (
      let dateOfMonth = 0;
      dateOfMonth < daysToAddFromNextMonth;
      dateOfMonth++
    ) {
      const date = addDays(
        getStartDayOfMonth(addMonth(dates[0], 1)),
        dateOfMonth
      );

      datesForCalendar.push(date);
    }
  }

  return datesForCalendar.map((date) => {
    const startOfDay = getStartOfAday(date);

    return {
      timestamp: Number(startOfDay),
      date: startOfDay,
    };
  });
};

export function isBefore(date: Date, minDate: Date): boolean {
  return Number(date) < Number(minDate);
}

export function isAfter(date: Date, maxDate: Date): boolean {
  return Number(date) > Number(maxDate);
}

export function addYears(date: string | Date, numberOfYears = 1) {
  const parsedDate: any =
    date instanceof Date ? cloneDate(date) : parseDate(date);
  parsedDate.setFullYear(parsedDate.getFullYear() + Number(numberOfYears));

  return adjustDate(parsedDate, 0, true);
}

export function getToday() {
  return new Date();
}
export const today = getStartOfAday(getToday());

export const differenceInDays = (date1: Date, date2: Date) => {
  const timestamp1 = Number(date1);
  const timestamp2 = Number(date2);

  const diffInSeconds = Math.abs(timestamp1 - timestamp2);
  const diffInDays = diffInSeconds / DAY;

  return Math.ceil(diffInDays);
};

export const getDatesBetweenTwoDates = (start: Date, end: Date): Day[] => {
  const dates: Date[] = [];

  const _start = getStartOfAday(start);
  const _end = getStartOfAday(end);

  let current = addDays(_start, 1);
  // let current = _start;

  while (current < _end) {
    dates.push(current);
    current = addDays(current, 1);
  }

  return dates.map((date) => ({ timestamp: Number(date), date }));
};

/**
 *
 * @param selectedStart
 * @param selectedEnd
 * @returns возвращает массив Day включая переданые start и end даты
 */
export const getRange = (
  selectedStart: Date | undefined,
  selectedEnd: Date | undefined
): Day[] => {
  const startDate = selectedStart ? getStartOfAday(selectedStart) : undefined;
  const endDate = selectedEnd ? getStartOfAday(selectedEnd) : undefined;

  let range: Day[] = [];

  if (startDate) {
    range.push({ date: startDate, timestamp: Number(startDate) });
  }

  if (startDate && endDate && isBefore(startDate, endDate)) {
    range.push(...getDatesBetweenTwoDates(startDate, endDate));
  }

  if (endDate) {
    range.push({ date: endDate, timestamp: Number(endDate) });
  }

  return range;
};

export const weekdaysRU = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"] as const;

export const monthsRU = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
] as const;
