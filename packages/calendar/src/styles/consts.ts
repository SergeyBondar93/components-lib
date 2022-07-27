import { ACCORDION_COMPONENTS_NAMES } from "@cheaaa/accordion";

export const CALENDAR_COMPONENT_NAMESPACE = "@che/calendar";

export const CALENDAR_COMPONENTS_NAMES = {
  ...ACCORDION_COMPONENTS_NAMES,

  calendarWrapper: "calendarWrapper",

  headerWrapper: "headerWrapper",
  changeMonthButtonWrapper: "changeMonthButtonWrapper",
  titleWrapper: "titleWrapper",
  monthWrapper: "monthWrapper",
  yearWrapper: "yearWrapper",

  table: "table",

  weekday: "weekday",
  day: "day",
} as const;

// export const DEFAULT_CALENDAR_CHANGE_MONTH_BUTTON_APPEARANCE
