import { ACCORDION_COMPONENTS_NAMES } from "@cheaaa/accordion";

export const DATEPICKER_COMPONENT_NAMESPACE = "@che/calendar";

export const DATEPICKER_COMPONENTS_NAMES = {
  ...ACCORDION_COMPONENTS_NAMES,

  /**
   * Обёртка над компонентом календаря
   */
  calendarWrapper: "calendarWrapper",

  /**
   * Компонент содержащий кнопки вперёд/назад, месяц и год
   */
  headerWrapper: "headerWrapper",

  /**
   * Кнопки вперёд/назад
   */
  changeMonthButtonWrapper: "changeMonthButtonWrapper",

  /**
   * Обёртка над месяцем / годом
   */
  titleWrapper: "titleWrapper",

  /**
   * Обёртка над месяцем
   */
  monthWrapper: "monthWrapper",

  /**
   * Обёртка над годом
   */
  yearWrapper: "yearWrapper",

  /**
   * Обёртка над таблицей дней/месяцев/лет
   */
  table: "table",

  weekday: "weekday",
  day: "day",
} as const;

// export const DEFAULT_CALENDAR_CHANGE_MONTH_BUTTON_APPEARANCE
