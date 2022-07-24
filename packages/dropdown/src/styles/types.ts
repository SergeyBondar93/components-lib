import { DROPDOWN_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof DROPDOWN_COMPONENTS_NAMES[keyof typeof DROPDOWN_COMPONENTS_NAMES];
