import { DATEPICKER_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof DATEPICKER_COMPONENTS_NAMES[keyof typeof DATEPICKER_COMPONENTS_NAMES];
