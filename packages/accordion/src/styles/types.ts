import { ACCORDION_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof ACCORDION_COMPONENTS_NAMES[keyof typeof ACCORDION_COMPONENTS_NAMES];
