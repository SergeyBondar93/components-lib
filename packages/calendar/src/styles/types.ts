import { CALENDAR_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof CALENDAR_COMPONENTS_NAMES[keyof typeof CALENDAR_COMPONENTS_NAMES];
