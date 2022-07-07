import { CHECKBOX_COMPONENTS_NAMES } from "./consts";

export type ComponentNames =
  typeof CHECKBOX_COMPONENTS_NAMES[keyof typeof CHECKBOX_COMPONENTS_NAMES];
